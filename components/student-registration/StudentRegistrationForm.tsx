"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useStudent, StudentData, AddressData } from "@/lib/hooks/useStudent";
import { client } from "@/api";
import { useRazorpay } from "react-razorpay";
import config from "./config";
import AddonCard from "./AddonCard";
import AddonDetails from "./AddonDetails";
import TotalCalculation from "./TotalCalculation";

const calculateDiscount = (originalPrice: number, discountedPrice: number) => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

interface SchoolData {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  is_overseas: boolean;
  branch: string;
  principle: string;
}

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  priceInr: number;
  originalPrice: number;
  originalPriceInr: number;
  duration: string;
  benefits: string[];
}

interface AddonOption {
  id: string;
  title: string;
  description: string;
  price: number;
  priceInr: number;
  originalPrice: number;
  originalPriceInr: number;
  currency: string;
  checked: boolean;
  details: {
    creditAmount?: number;
    bonusCredits?: number;
    selectedPlan?: string;
    plans?: MembershipPlan[];
  };
}

interface StudentRegistrationFormProps {
  school: SchoolData | null;
  registrationFee: {
    price: number;
    priceInr: number;
  };
}

export default function StudentRegistrationForm({
  school,
  registrationFee,
}: StudentRegistrationFormProps) {
  // Move useRazorpay hook to the top level
  const { Razorpay } = useRazorpay();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const [formData, setFormData] = useState<StudentData>({
    name: "",
    email: "",
    phone: "",
    dob: "",
    school_name: school?.name || "",
    grade: "",
    section: "",
    city: "",
    is_overseas: school?.is_overseas || false,
  });

  // Addon options state - three separate cards
  const [addonOptions, setAddonOptions] = useState<AddonOption[]>(config);

  // New: State for the two required checkboxes
  const [hasLaptop, setHasLaptop] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (
    field: keyof StudentData,
    value: string | boolean
  ) => {
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddonToggle = (addonId: string) => {
    setAddonOptions((prev) =>
      prev.map((addon) => ({
        ...addon,
        checked: addon.id === addonId ? !addon.checked : false, // Only one can be selected
      }))
    );
  };

  const handlePayment = async (
    studentData: StudentData,
    selectedAddon: AddonOption | undefined
  ) => {
    try {
      setIsProcessingPayment(true);

      const registrationFeeComputed = formData.is_overseas
        ? registrationFee.price
        : registrationFee.priceInr;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/save-draft-and-create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: studentData,
            registrationFee: registrationFeeComputed,
            selectedAddon: selectedAddon ?? null,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Failed to create order");
      }

      const result = await response.json();

      if (!result.success || !result.order) {
        throw new Error("Failed to create payment order");
      }

      // Initialize Razorpay payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY",
        amount: result.order.amount,
        currency: result.order.currency,
        name: "NAC Education",
        description: `NAC25 - ${
          selectedAddon?.title ?? "No Addon"
        } - Student Registration`,
        order_id: result.order.id,
        prefill: {
          name: studentData.name,
          email: studentData.email,
          contact: studentData.phone,
        },
        handler: async (response: any) => {
          try {
            // Verify payment on backend
            const verificationResponse = await fetch(
              "http://localhost:1337/api/v1/verify-payment-and-publish",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  student_id: result.student.id,
                  selectedAddon,
                }),
              }
            );

            if (!verificationResponse.ok) {
              const errorData = await verificationResponse
                .json()
                .catch(() => ({}));
              throw new Error(
                errorData.error?.message || "Payment verification failed"
              );
            }

            const verificationResult = await verificationResponse.json();

            if (verificationResult.success) {
              setSuccess(true);
              // Reset form
              setFormData({
                name: "",
                email: "",
                phone: "",
                dob: "",
                school_name: school?.name || "",
                grade: "",
                section: "",
                city: "",
                is_overseas: school?.is_overseas || false,
              });
              setAddonOptions((prev) =>
                prev.map((opt) => ({ ...opt, checked: false }))
              );
              setHasLaptop(false);
              setAgreedToTerms(false);
            } else {
              throw new Error(
                verificationResult.error || "Payment verification failed"
              );
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            const errorMessage =
              error instanceof Error
                ? error.message
                : "Payment verification failed. Please contact support.";
            setError(errorMessage);
          } finally {
            setIsProcessingPayment(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessingPayment(false);
          },
        },
      };

      // Use the Razorpay instance from the hook
      if (Razorpay) {
        const razorpay = new Razorpay(options);
        razorpay.open();
      } else {
        throw new Error("Razorpay not initialized");
      }
    } catch (error) {
      console.error("Payment error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to initiate payment. Please try again.";
      setError(errorMessage);
      setIsProcessingPayment(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic form validation
    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return;
    }
    if (!formData.dob) {
      setError("Date of birth is required");
      return;
    }
    if (!formData.grade.trim()) {
      setError("Grade is required");
      return;
    }
    if (!formData.section.trim()) {
      setError("Section is required");
      return;
    }
    if (!formData.city.trim()) {
      setError("City is required");
      return;
    }
    // New: Validate the two checkboxes
    if (!hasLaptop) {
      setError(
        "You must acknowledge that you have a laptop with a working microphone and camera, or will arrange one."
      );
      return;
    }
    if (!agreedToTerms) {
      setError(
        "You must agree to the Terms of Participation in NAC before submitting."
      );
      return;
    }

    try {
      // Prepare student data
      const studentData: StudentData = {
        ...formData,
        school: school?.id || null,
      };

      // Check if an addon is selected
      const selectedAddon = addonOptions.find((opt) => opt.checked);

      await handlePayment(studentData, selectedAddon);
    } catch (err: any) {
      const errorMessage =
        err?.message || "Registration failed. Please try again.";
      setError(errorMessage);
    }
  };

  const calculateTotal = () => {
    const selectedAddon = addonOptions.find((opt) => opt.checked);
    const baseFee = formData.is_overseas
      ? registrationFee.price
      : registrationFee.priceInr;

    if (!selectedAddon) {
      if (formData.is_overseas) {
        return baseFee;
      } else {
        // Add 18% GST for non-overseas users
        const gst = Math.round(baseFee * 0.18);
        return baseFee + gst;
      }
    }

    const addonPrice = formData.is_overseas
      ? selectedAddon.originalPrice
      : selectedAddon.originalPriceInr;

    if (formData.is_overseas) {
      return baseFee + addonPrice;
    } else {
      // Add 18% GST for non-overseas users
      const totalBeforeGst = baseFee + addonPrice;
      const gst = Math.round(totalBeforeGst * 0.18);
      return totalBeforeGst + gst;
    }
  };

  const calculateGST = () => {
    if (formData.is_overseas) return 0;

    const selectedAddon = addonOptions.find((opt) => opt.checked);
    const baseFee = registrationFee.priceInr;
    const addonPrice = selectedAddon ? selectedAddon.originalPriceInr : 0;
    const totalBeforeGst = baseFee + addonPrice;
    return Math.round(totalBeforeGst * 0.18);
  };

  const calculateTotalBeforeGST = () => {
    const selectedAddon = addonOptions.find((opt) => opt.checked);
    const baseFee = formData.is_overseas
      ? registrationFee.price
      : registrationFee.priceInr;

    if (!selectedAddon) return baseFee;

    const addonPrice = formData.is_overseas
      ? selectedAddon.originalPrice
      : selectedAddon.originalPriceInr;

    return baseFee + addonPrice;
  };

  const getSelectedAddonDetails = () => {
    return addonOptions.find((opt) => opt.checked);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
          {/* Logos */}
          {/* <div className="flex items-center justify-center space-x-6 mb-6">
            <img src="/logo.png" alt="NAC Logo" className="h-16 w-auto" />
            <img
              src="/home/spacetopia.png"
              alt="Spacetopia Logo"
              className="w-auto"
            />
          </div> */}

          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Registering!
          </h3>

          {/* Content */}
          <div className="text-left text-gray-700 mb-6 space-y-3">
            <p className="text-base">
              Your registration for the National Astronomy Challenge (NAC) has
              been successfully completed. 🎉
            </p>
            <p className="text-base">
              A confirmation email has been sent to your registered email
              address.
            </p>
            <p className="text-base font-medium">This email includes:</p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✅</span>
                Your NAC registration confirmation
              </li>
              {/* <li className="flex items-center">
                <span className="text-green-600 mr-2">✅</span>
                Your Spacetopia username and password (if applicable)
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✅</span>
                Your credits/membership details (if purchased)
              </li> */}
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              📌 If you are unable to locate the email, please check your
              Spam/Promotions folder.
            </p>
            <p className="text-base">
              For any assistance, feel free to reach us at:
            </p>
            <p className="text-base font-medium text-blue-600">
              📧 help@nationalastronomy.org
            </p>
            <p className="text-base font-medium">
              We look forward to your participation in NAC!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => window.open("https://spacetopia.in", "_blank")}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Visit SPACETOPIA
            </Button>
            <Button
              onClick={() =>
                window.open("https://nationalastronomy.org", "_blank")
              }
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Visit NAC Website
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-3 sm:px-4 mt-[5rem] ">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {school ? "School Based Registration" : "Direct Registration"}
            </h1>
            <p className="text-sm text-center max-w-2xl mx-auto">
              {school
                ? ` This registration form is for students whose school is
              participating in the National Astronomy Challenge (NAC).`
                : `This registration form is for students whose schools are not
              participating in the National Astronomy Challenge (NAC). We
              recommend that you first confirm with your child’s school if they
              are participating. If the school is not enrolled, you may proceed
              to register directly using this form.`}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Registration fee:{" "}
              {formData.is_overseas
                ? registrationFee.price
                : registrationFee.priceInr}
              {!formData.is_overseas && " (Exclusive of GST)"}
              {!formData.is_overseas && (
                <span className="block mt-1">
                  Total with 18% GST: ₹
                  {Math.round(registrationFee.priceInr * 1.18)}
                </span>
              )}
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-red-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isProcessingPayment && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <p className="text-sm text-blue-800">
                  {isProcessingPayment
                    ? "Processing payment..."
                    : "Submitting registration..."}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Basic Student Information */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Basic Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>

                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter full name"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter exactly as you want on the certificate
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Use only personal email (Gmail/Yahoo/Hotmail). No school or
                    office IDs.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Provide a valid number for updates.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <Input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.school_name}
                    onChange={(e) =>
                      handleInputChange("school_name", e.target.value)
                    }
                    placeholder="Enter school name"
                    disabled={!!school}
                    className={`w-full ${school ? "bg-gray-100" : ""}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade *
                  </label>
                  <Select
                    value={formData.grade}
                    onValueChange={(value) => handleInputChange("grade", value)}
                    required
                    className="w-full"
                  >
                    <option value="">Select Grade</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section
                  </label>
                  <Input
                    type="text"
                    value={formData.section}
                    onChange={(e) =>
                      handleInputChange("section", e.target.value)
                    }
                    placeholder="Enter section (e.g., A, B, C)"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter city"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-4 sm:mt-6">
                <input
                  disabled={!!school}
                  type="checkbox"
                  id="is_overseas"
                  checked={formData.is_overseas}
                  onChange={(e) =>
                    handleInputChange("is_overseas", e.target.checked)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="is_overseas"
                  className="text-sm font-medium text-gray-700"
                >
                  I'm registering from outside India (Overseas).
                </label>
              </div>
            </div>

            {/* New: Required checkboxes before submission */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
              <div className="flex items-start space-x-3 mb-2">
                <input
                  type="checkbox"
                  id="hasLaptop"
                  checked={hasLaptop}
                  onChange={(e) => setHasLaptop(e.target.checked)}
                  className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="hasLaptop"
                  className="text-sm font-medium text-gray-700"
                >
                  I acknowledge that I have a laptop with a working microphone
                  and camera. If not available, I will arrange one myself.
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreedToTerms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="agreedToTerms"
                  className="text-sm font-medium text-gray-700"
                >
                  I agree to the Terms of Participation in NAC and confirm that
                  I have read and understood the terms published on the website.
                </label>
              </div>
            </div>

            {/* Addon Options - Structured Cards */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Choose Your Addons
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Select from the available add-ons to enhance your
                  registration. You can choose membership plans or purchase
                  credits for additional benefits.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {addonOptions.map((addon) => (
                  <AddonCard
                    key={addon.id}
                    addon={addon}
                    isOverseas={formData.is_overseas}
                    onToggle={handleAddonToggle}
                    calculateDiscount={calculateDiscount}
                  />
                ))}
              </div>

              {/* Selected Option Details Section */}
              <AddonDetails
                selectedAddon={getSelectedAddonDetails()}
                isOverseas={formData.is_overseas}
                calculateDiscount={calculateDiscount}
              />

              {/* Total Calculation */}
              <TotalCalculation
                isOverseas={formData.is_overseas}
                registrationFee={registrationFee}
                selectedAddon={getSelectedAddonDetails()}
                calculateTotal={calculateTotal}
                calculateGST={calculateGST}
                calculateTotalBeforeGST={calculateTotalBeforeGST}
              />
            </div>

            <div className="pt-4 sm:pt-6">
              <Button
                type="submit"
                disabled={isProcessingPayment}
                className="w-full h-12 text-base sm:text-lg font-semibold"
              >
                {isProcessingPayment
                  ? "Processing..."
                  : `Complete Registration (${
                      formData.is_overseas ? "$" : "₹"
                    }${calculateTotal()})`}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
