"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/api";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Hero from "@/components/hero";
import RegistrationSuccessPopup from "@/components/RegistrationSuccessPopup";
import { sendTemplateMail } from "@/lib/mail";

const getRandomEmail = () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  return `test${randomNumber}@example.com`;
};

// Form validation schema
const schoolFormSchema = z.object({
  name: z.string().min(2, "School name must be at least 2 characters"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  is_overseas: z.boolean(),
  branch: z.string().min(2, "Branch name must be at least 2 characters"),
  principle: z.string().min(2, "Principal name must be at least 2 characters"),
});

type SchoolFormData = z.infer<typeof schoolFormSchema>;

export default function SchoolRegistrationPage() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [schoolId, setSchoolId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SchoolFormData>({
    resolver: zodResolver(schoolFormSchema),
    defaultValues: {
      is_overseas: false,
    },
  });

  const onSubmit = async (data: SchoolFormData) => {
    setIsLoading(true);
    setError(null);
    setSubmitStatus("idle");
    try {
      const response = await client.collection("schools").create(data);

      const recipients = [
        {
          address: data.email,
          name: data.name,
        },
      ];

      await sendTemplateMail({
        recipients,
        globalMergeInfo: {
          link: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/st/reg?schoolId=${response.data.documentId}`,
        },
      });

      if (response) {
        // Extract school ID from the parsed response
        setSchoolId(String(response.data.documentId));
        setShowPopup(true);
        setSubmitStatus("success");
        reset();
      }
    } catch (error: any) {
      setError(error.message);
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSchoolId("");
  };

  return (
    <>
      <Hero
        bgimage="/home/header2.jpg"
        title="School Registration"
        desc="Register your school to join our educational network"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                School Registration
              </h1>
              <p className="text-gray-600">
                Register your school to join our educational network
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      School registered successfully! We'll be in touch soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* School Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  School Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter school name"
                  {...register("name")}
                  className={
                    errors.name
                      ? "border-red-300 focus-visible:ring-red-500"
                      : ""
                  }
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address *
                </label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter complete address"
                  {...register("address")}
                  className={
                    errors.address
                      ? "border-red-300 focus-visible:ring-red-500"
                      : ""
                  }
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    {...register("phone")}
                    className={
                      errors.phone
                        ? "border-red-300 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    {...register("email")}
                    className={
                      errors.email
                        ? "border-red-300 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Branch and Principal Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="branch"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Branch *
                  </label>
                  <Input
                    id="branch"
                    type="text"
                    placeholder="Enter branch name"
                    {...register("branch")}
                    className={
                      errors.branch
                        ? "border-red-300 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  {errors.branch && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.branch.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="principle"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Principal Name *
                  </label>
                  <Input
                    id="principle"
                    type="text"
                    placeholder="Enter principal name"
                    {...register("principle")}
                    className={
                      errors.principle
                        ? "border-red-300 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  {errors.principle && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.principle.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Overseas Checkbox */}
              <div className="flex items-center">
                <input
                  id="is_overseas"
                  type="checkbox"
                  {...register("is_overseas")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="is_overseas"
                  className="ml-2 block text-sm text-gray-700"
                >
                  This is an overseas school
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 text-base font-medium"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "Register School"
                  )}
                </Button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                By registering, you agree to our terms of service and privacy
                policy.
                <br />
                We'll review your application and contact you within 2-3
                business days.
              </p>
            </div>
          </div>
        </div>

        {/* Registration URL Popup */}
        <RegistrationSuccessPopup
          isOpen={showPopup}
          onClose={closePopup}
          schoolId={schoolId}
        />
      </div>
    </>
  );
}
