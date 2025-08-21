"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useStudent, StudentData, AddressData } from "@/lib/hooks/useStudent";
import { client } from "@/api";
import { useRazorpay } from "react-razorpay";

const registrationFee = {
  price: 12,
  priceInr: 550,
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
}

export default function StudentRegistrationForm({
  school,
}: StudentRegistrationFormProps) {
  const {
    createStudent,
    isLoading: isSubmitting,
    error: studentError,
  } = useStudent();

  // Move useRazorpay hook to the top level
  const { Razorpay } = useRazorpay();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const [formData, setFormData] = useState<StudentData>({
    name: "Robin Hood",
    email: "deepakvish7354@gmail.com",
    phone: "9876543210",
    dob: "2000-01-01",
    school_name: school?.name || "NAC Education",
    grade: "10",
    section: "A",
    city: "New York",
    is_overseas: school?.is_overseas || false,
  });

  // Addon options state - three separate cards
  const [addonOptions, setAddonOptions] = useState<AddonOption[]>([
    {
      id: "credit",
      title: "Credit Purchase",
      description: "Add credits to your account for future purchases",
      price: 80, // Discounted price
      priceInr: 6640, // Discounted price
      originalPrice: 100,
      originalPriceInr: 8300,
      currency: "USD",
      checked: false,
      details: {
        creditAmount: 100,
        bonusCredits: 10,
      },
    },
    {
      id: "basic",
      title: "Basic Membership",
      description: "Essential features for students",
      price: 20, // Discounted price
      priceInr: 1660, // Discounted price
      originalPrice: 25,
      originalPriceInr: 2075,
      currency: "USD",
      checked: false,
      details: {
        selectedPlan: "basic",
        plans: [
          {
            id: "basic",
            name: "Basic Membership",
            price: 20, // Discounted price
            priceInr: 1660, // Discounted price
            originalPrice: 25,
            originalPriceInr: 2075,
            duration: "1 Year",
            benefits: [
              "Access to study materials",
              "Email support",
              "Basic progress tracking",
              "Community access",
            ],
          },
        ],
      },
    },
    {
      id: "premium",
      title: "Premium Membership",
      description: "Advanced features and exclusive content",
      price: 40, // Discounted price
      priceInr: 3320, // Discounted price
      originalPrice: 50,
      originalPriceInr: 4150,
      currency: "USD",
      checked: false,
      details: {
        selectedPlan: "premium",
        plans: [
          {
            id: "premium",
            name: "Premium Membership",
            price: 40, // Discounted price
            priceInr: 3320, // Discounted price
            originalPrice: 50,
            originalPriceInr: 4150,
            duration: "1 Year",
            benefits: [
              "Exclusive study materials",
              "Priority support",
              "Advanced analytics",
              "Special discounts",
              "Live tutoring sessions",
              "Personalized learning path",
            ],
          },
        ],
      },
    },
  ]);

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

    if (!selectedAddon) return baseFee;

    return (
      baseFee +
      (formData.is_overseas ? selectedAddon.price : selectedAddon.priceInr)
    );
  };

  const getSelectedAddonDetails = () => {
    return addonOptions.find((opt) => opt.checked);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Registration Successful!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {getSelectedAddonDetails()
              ? "Your student registration and payment have been completed successfully."
              : "Your student registration has been completed successfully. Registration fee has been charged."}
          </p>
          <Button onClick={() => setSuccess(false)} className="w-full">
            Register Another Student
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-3 sm:px-4 md:mt-[5rem]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Student Registration
            </h1>
            {school ? (
              <p className="text-sm sm:text-base text-gray-600">
                Registering for{" "}
                <span className="font-semibold text-blue-600">
                  {school.name}
                </span>
              </p>
            ) : (
              <p className="text-sm sm:text-base text-gray-600">
                Complete your student registration form
              </p>
            )}
            <p className="text-xs text-gray-500 mt-2">
              Registration fee: {formData.is_overseas ? "$12" : "₹500"}{" "}
              (mandatory for all registrations)
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
          {(isSubmitting || isProcessingPayment) && (
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full"
                  />
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
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
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
                  Overseas Student
                </label>
              </div>
            </div>

            {/* Addon Options - Three Compact Cards */}
            <div className="bg-gray-50 p-4 sm:p-5 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-4">
                Additional Options
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Select one of the following options to include with your
                registration.{" "}
                <strong>
                  Note: A registration fee of{" "}
                  {formData.is_overseas ? "$12" : "₹500"} applies to all
                  registrations.
                </strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* Credit Card */}
                <div
                  className={`border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-blue-300 ${
                    addonOptions.find((opt) => opt.id === "credit")?.checked
                      ? "bg-blue-50"
                      : "bg-white"
                  }`}
                  onClick={() => handleAddonToggle("credit")}
                >
                  <div className="flex items-center space-x-3 relative">
                    {/* Checkbox */}
                    <div className="absolute top-0 right-0">
                      <input
                        type="checkbox"
                        checked={
                          addonOptions.find((opt) => opt.id === "credit")
                            ?.checked || false
                        }
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        readOnly
                      />
                    </div>

                    {/* Icon */}
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        Credit <br className="sm:hidden" /> Purchase
                      </h3>
                      <p className="text-xs text-gray-600 mb-1">
                        Add credits to your account
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-sm font-bold text-blue-600">
                          {formData.is_overseas ? "$80" : "₹6,640"}
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          {formData.is_overseas ? "$100" : "₹8,300"}
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
                          20% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Basic Membership Card */}
                <div
                  className={`border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-green-300 ${
                    addonOptions.find((opt) => opt.id === "basic")?.checked
                      ? "bg-green-50"
                      : "bg-white"
                  }`}
                  onClick={() => handleAddonToggle("basic")}
                >
                  <div className="flex items-center space-x-3 relative">
                    {/* Checkbox */}
                    <div className="absolute top-0 right-0">
                      <input
                        type="checkbox"
                        checked={
                          addonOptions.find((opt) => opt.id === "basic")
                            ?.checked || false
                        }
                        onChange={() => {}}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        readOnly
                      />
                    </div>

                    {/* Icon */}
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        Basic <br className="sm:hidden" /> Membership
                      </h3>
                      <p className="text-xs text-gray-600 mb-1">
                        Essential features for students
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-sm font-bold text-green-600">
                          {formData.is_overseas ? "$20" : "₹1,660"}
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          {formData.is_overseas ? "$25" : "₹2,075"}
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          20% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Membership Card */}
                <div
                  className={`border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-purple-300 ${
                    addonOptions.find((opt) => opt.id === "premium")?.checked
                      ? "bg-purple-50"
                      : "bg-white"
                  }`}
                  onClick={() => handleAddonToggle("premium")}
                >
                  <div className="flex items-center space-x-3 relative">
                    {/* Checkbox */}
                    <div className="absolute top-0 right-0">
                      <input
                        type="checkbox"
                        checked={
                          addonOptions.find((opt) => opt.id === "premium")
                            ?.checked || false
                        }
                        onChange={() => {}}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        readOnly
                      />
                    </div>

                    {/* Icon */}
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          Premium
                          <br className="sm:hidden" /> Membership
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 whitespace-nowrap">
                          Suggested
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">
                        Advanced features & exclusive content
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-sm font-bold text-purple-600">
                          {formData.is_overseas ? "$40" : "₹3,320"}
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          {formData.is_overseas ? "$50" : "₹4,150"}
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
                          20% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selected Option Details Section */}
              {getSelectedAddonDetails() && (
                <div className="mt-4 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    {getSelectedAddonDetails()?.title} Details
                  </h3>

                  {getSelectedAddonDetails()?.id === "credit" && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">
                        Credit Package Details
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-center mb-3">
                        <div className="bg-white p-2 rounded border">
                          <div className="font-medium text-blue-900 text-xs">
                            Base Credits
                          </div>
                          <div className="text-sm sm:text-base font-bold text-blue-600">
                            100
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border">
                          <div className="font-medium text-blue-900 text-xs">
                            Bonus Credits
                          </div>
                          <div className="text-sm sm:text-base font-bold text-green-600">
                            +10
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border">
                          <div className="font-medium text-blue-900 text-xs">
                            Total Credits
                          </div>
                          <div className="text-sm sm:text-base font-bold text-blue-600">
                            110
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border text-center">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          <div className="text-sm sm:text-base font-bold text-blue-600">
                            {formData.is_overseas ? "$80" : "₹6,640"}
                          </div>
                          <div className="text-xs text-gray-500 line-through">
                            {formData.is_overseas ? "$100" : "₹8,300"}
                          </div>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            20% OFF
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {getSelectedAddonDetails()?.id === "basic" && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">
                        Basic Membership Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-white p-3 rounded border">
                          <h5 className="font-medium text-green-900 mb-2">
                            Plan Details
                          </h5>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <div className="text-lg sm:text-xl font-bold text-green-600">
                              {formData.is_overseas ? "$20" : "₹1,660"}
                            </div>
                            <div className="text-sm text-gray-500 line-through">
                              {formData.is_overseas ? "$25" : "₹2,075"}
                            </div>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              20% OFF
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            1 Year
                          </div>
                          <ul className="space-y-1 text-xs text-gray-700">
                            {getSelectedAddonDetails()?.details.plans?.[0]?.benefits.map(
                              (benefit: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
                                  <svg
                                    className="h-3 w-3 text-green-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span>{benefit}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {getSelectedAddonDetails()?.id === "premium" && (
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">
                        Premium Membership Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-white p-3 rounded border">
                          <h5 className="font-medium text-purple-900 mb-2">
                            Plan Details
                          </h5>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <div className="text-lg sm:text-xl font-bold text-purple-600">
                              {formData.is_overseas ? "$40" : "₹3,320"}
                            </div>
                            <div className="text-sm text-gray-500 line-through">
                              {formData.is_overseas ? "$40" : "₹4,150"}
                            </div>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              20% OFF
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            1 Year
                          </div>
                          <ul className="space-y-1 text-xs text-gray-700">
                            {getSelectedAddonDetails()?.details.plans?.[0]?.benefits.map(
                              (benefit: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
                                  <svg
                                    className="h-3 w-3 text-purple-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span>{benefit}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Total Calculation */}
              <div className="mt-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
                <div className="space-y-2">
                  {/* Registration Fee */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      Registration Fee:
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {formData.is_overseas ? "$" : "₹"}
                      {formData.is_overseas
                        ? registrationFee.price
                        : registrationFee.priceInr}
                    </span>
                  </div>

                  {/* Addon Cost (if selected) */}
                  {getSelectedAddonDetails() && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {getSelectedAddonDetails()?.title}:
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {formData.is_overseas ? "$" : "₹"}
                        {formData.is_overseas
                          ? getSelectedAddonDetails()?.price
                          : getSelectedAddonDetails()?.priceInr}
                      </span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-medium text-gray-900">
                        Total Amount:
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">
                        {formData.is_overseas ? "$" : "₹"}
                        {calculateTotal()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <Button
                type="submit"
                disabled={isSubmitting || isProcessingPayment}
                className="w-full h-12 text-base sm:text-lg font-semibold"
              >
                {isSubmitting || isProcessingPayment
                  ? "Processing..."
                  : `Complete Registration (${
                      formData.is_overseas ? "$" : "₹"
                    }${
                      formData.is_overseas
                        ? registrationFee.price
                        : registrationFee.priceInr
                    })`}
              </Button>
            </div>
          </form>

          {school && (
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                School Information
              </h3>
              <div className="text-xs sm:text-sm text-blue-700 space-y-1">
                <p>
                  <strong>Name:</strong> {school.name}
                </p>
                <p>
                  <strong>Address:</strong> {school.address}
                </p>
                <p>
                  <strong>Phone:</strong> {school.phone}
                </p>
                <p>
                  <strong>Email:</strong> {school.email}
                </p>
                <p>
                  <strong>Branch:</strong> {school.branch}
                </p>
                <p>
                  <strong>Principal:</strong> {school.principle}
                </p>
                <p>
                  <strong>Overseas:</strong> {school.is_overseas ? "Yes" : "No"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
