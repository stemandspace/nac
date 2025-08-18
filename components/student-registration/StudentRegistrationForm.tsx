"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useStudent, StudentData, AddressData } from "@/lib/hooks/useStudent";

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
  duration: string;
  benefits: string[];
}

interface AddonOption {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  checked: boolean;
  details: {
    creditAmount?: number;
    bonusCredits?: number;
    comicTitle?: string;
    deliveryAddress?: AddressData | null;
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

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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

  // Addon options state
  const [addonOptions, setAddonOptions] = useState<AddonOption[]>([
    {
      id: "credit",
      title: "Credit Purchase",
      description: "Add credits to your account for future purchases",
      price: 100,
      currency: "USD",
      checked: false,
      details: {
        creditAmount: 100,
        bonusCredits: 10,
      },
    },
    {
      id: "comic",
      title: "Comic Purchase",
      description: "Purchase physical comics with home delivery",
      price: 25,
      currency: "USD",
      checked: false,
      details: {
        comicTitle: "Space Adventure Comic",
        deliveryAddress: null as AddressData | null,
      },
    },
    {
      id: "membership",
      title: "Membership Purchase",
      description: "Choose between Basic and Premium membership plans",
      price: 0,
      currency: "USD",
      checked: false,
      details: {
        selectedPlan: "basic",
        plans: [
          {
            id: "basic",
            name: "Basic Membership",
            price: 25,
            duration: "1 Year",
            benefits: [
              "Access to study materials",
              "Email support",
              "Basic progress tracking",
              "Community access",
            ],
          },
          {
            id: "premium",
            name: "Premium Membership",
            price: 50,
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

  // Address form state for comic delivery
  const [deliveryAddress, setDeliveryAddress] = useState<AddressData>({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
  });

  const handleInputChange = (
    field: keyof StudentData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddonToggle = (addonId: string) => {
    setAddonOptions((prev) =>
      prev.map((addon) =>
        addon.id === addonId ? { ...addon, checked: !addon.checked } : addon
      )
    );
  };

  const handleAddressChange = (field: keyof AddressData, value: string) => {
    setDeliveryAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Prepare student data
      const studentData = {
        ...formData,
        school: school?.id || null,
      };

      // Add address if comic purchase is selected
      const selectedComic = addonOptions.find(
        (opt) => opt.id === "comic" && opt.checked
      );
      if (selectedComic) {
        studentData.address = deliveryAddress;
      }

      // Create student
      const student = await createStudent(studentData);

      // Here you would typically handle the addon purchases
      // For now, we'll just show success
      const selectedAddons = addonOptions.filter((opt) => opt.checked);
      console.log("Selected addons:", selectedAddons);

      setSuccess(true);
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

      // Reset addons and address
      setAddonOptions((prev) =>
        prev.map((opt) =>
          opt.id === "membership"
            ? {
                ...opt,
                checked: false,
                details: { ...opt.details, selectedPlan: "basic" },
              }
            : { ...opt, checked: false }
        )
      );
      setDeliveryAddress({
        name: "",
        mobile: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
        landmark: "",
      });
    } catch (err: any) {
      // Error is already handled by the hook
    }
  };

  const calculateTotal = () => {
    return addonOptions
      .filter((opt) => opt.checked)
      .reduce((total, opt) => {
        if (opt.id === "membership" && opt.details.selectedPlan) {
          const selectedPlan = opt.details.plans?.find(
            (plan) => plan.id === opt.details.selectedPlan
          );
          return total + (selectedPlan?.price || 0);
        }
        return total + opt.price;
      }, 0);
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
            Your student registration has been completed successfully.
          </p>
          <Button onClick={() => setSuccess(false)} className="w-full">
            Register Another Student
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Student Registration
            </h1>
            {school ? (
              <p className="text-gray-600">
                Registering for{" "}
                <span className="font-semibold text-blue-600">
                  {school.name}
                </span>
              </p>
            ) : (
              <p className="text-gray-600">
                Complete your student registration form
              </p>
            )}
          </div>

          {(error || studentError) && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error || studentError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Student Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className={school ? "bg-gray-100" : ""}
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
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-6">
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

            {/* Addon Options */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Additional Options
              </h2>
              <p className="text-gray-600 mb-6">
                Select any additional services you'd like to include with your
                registration
              </p>

              <div className="space-y-4">
                {addonOptions.map((addon) => (
                  <div
                    key={addon.id}
                    className="border border-gray-200 rounded-lg"
                  >
                    <div className="p-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id={addon.id}
                          checked={addon.checked}
                          onChange={() => handleAddonToggle(addon.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <label
                                htmlFor={addon.id}
                                className="text-lg font-medium text-gray-900 cursor-pointer"
                              >
                                {addon.title}
                              </label>
                              <p className="text-gray-600 mt-1">
                                {addon.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">
                                ${addon.price}
                              </div>
                              <div className="text-sm text-gray-500">
                                {addon.currency}
                              </div>
                            </div>
                          </div>

                          {/* Accordion Content */}
                          {addon.checked && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              {addon.id === "credit" && (
                                <div className="bg-blue-50 p-4 rounded-lg">
                                  <h4 className="font-medium text-blue-900 mb-2">
                                    Credit Package Details
                                  </h4>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <span className="font-medium">
                                        Base Credits:
                                      </span>{" "}
                                      {addon.details.creditAmount || 0}
                                    </div>
                                    <div>
                                      <span className="font-medium">
                                        Bonus Credits:
                                      </span>{" "}
                                      +{addon.details.bonusCredits || 0}
                                    </div>
                                    <div className="col-span-2">
                                      <span className="font-medium">
                                        Total Credits:
                                      </span>{" "}
                                      {(addon.details.creditAmount || 0) +
                                        (addon.details.bonusCredits || 0)}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {addon.id === "comic" && (
                                <div className="bg-green-50 p-4 rounded-lg">
                                  <h4 className="font-medium text-green-900 mb-4">
                                    Comic Details & Delivery Address
                                  </h4>
                                  <div className="mb-4 p-3 bg-white rounded border">
                                    <p className="font-medium text-gray-900 mb-2">
                                      {addon.details.comicTitle}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      Physical comic book with premium quality
                                      printing
                                    </p>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Recipient Name *
                                      </label>
                                      <Input
                                        type="text"
                                        required
                                        value={deliveryAddress.name}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "name",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter recipient name"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mobile Number *
                                      </label>
                                      <Input
                                        type="tel"
                                        required
                                        value={deliveryAddress.mobile}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "mobile",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter mobile number"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pincode *
                                      </label>
                                      <Input
                                        type="text"
                                        required
                                        value={deliveryAddress.pincode}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "pincode",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter pincode"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Locality
                                      </label>
                                      <Input
                                        type="text"
                                        value={deliveryAddress.locality}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "locality",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter locality"
                                      />
                                    </div>
                                    <div className="md:col-span-2">
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Address *
                                      </label>
                                      <Input
                                        type="text"
                                        required
                                        value={deliveryAddress.address}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "address",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter full address"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        City *
                                      </label>
                                      <Input
                                        type="text"
                                        required
                                        value={deliveryAddress.city}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "city",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter city"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        State *
                                      </label>
                                      <Input
                                        type="text"
                                        required
                                        value={deliveryAddress.state}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "state",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter state"
                                      />
                                    </div>
                                    <div className="md:col-span-2">
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Landmark
                                      </label>
                                      <Input
                                        type="text"
                                        value={deliveryAddress.landmark}
                                        onChange={(e) =>
                                          handleAddressChange(
                                            "landmark",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Enter nearby landmark (optional)"
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}

                              {addon.id === "membership" && (
                                <div className="bg-purple-50 p-4 rounded-lg">
                                  <h4 className="font-medium text-purple-900 mb-4">
                                    Choose Your Membership Plan
                                  </h4>

                                  <div className="space-y-4">
                                    {addon.details.plans?.map((plan) => (
                                      <div
                                        key={plan.id}
                                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                          addon.details.selectedPlan === plan.id
                                            ? "border-purple-500 bg-purple-100"
                                            : "border-gray-200 bg-white hover:border-purple-300"
                                        }`}
                                        onClick={() => {
                                          setAddonOptions((prev) =>
                                            prev.map((opt) =>
                                              opt.id === "membership"
                                                ? {
                                                    ...opt,
                                                    details: {
                                                      ...opt.details,
                                                      selectedPlan: plan.id,
                                                    },
                                                  }
                                                : opt
                                            )
                                          );
                                        }}
                                      >
                                        <div className="flex items-center justify-between mb-3">
                                          <div className="flex items-center space-x-3">
                                            <input
                                              type="radio"
                                              name="membership-plan"
                                              checked={
                                                addon.details.selectedPlan ===
                                                plan.id
                                              }
                                              onChange={() => {}}
                                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                                            />
                                            <div>
                                              <h5 className="font-medium text-gray-900">
                                                {plan.name}
                                              </h5>
                                              <p className="text-sm text-gray-600">
                                                {plan.duration}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="text-right">
                                            <div className="text-xl font-bold text-purple-600">
                                              ${plan.price}
                                            </div>
                                          </div>
                                        </div>

                                        <ul className="space-y-2">
                                          {plan.benefits.map(
                                            (
                                              benefit: string,
                                              index: number
                                            ) => (
                                              <li
                                                key={index}
                                                className="flex items-center space-x-2"
                                              >
                                                <svg
                                                  className="h-4 w-4 text-green-500"
                                                  fill="currentColor"
                                                  viewBox="0 0 20 20"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                                <span className="text-sm text-gray-700">
                                                  {benefit}
                                                </span>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Calculation */}
              {addonOptions.some((opt) => opt.checked) && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">
                      Total Additional Cost:
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${calculateTotal()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This amount will be added to your registration fee
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg font-semibold"
              >
                {isSubmitting ? "Registering..." : "Complete Registration"}
              </Button>
            </div>
          </form>

          {school && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                School Information
              </h3>
              <div className="text-sm text-blue-700 space-y-1">
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
