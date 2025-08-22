"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendContactUsMail } from "@/lib/mail";

export default function FaqContactForm() {
  const formId = useId();
  const [formData, setFormData] = useState({
    userType: "",
    fullName: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    await sendContactUsMail({
      recipients: [
        {
          address: "hello@nationalastronomy.org",
          name: formData.fullName,
          merge_info: {
            phone: formData.phone,
            query: formData.query,
            fullname: formData.fullName,
            type: formData.userType,
            email: formData.email,
          },
        },
      ],
    });

    alert(
      "Thank you for your message, expect a revert with in 24 hours. Delay may happen due to weekend and government holidays"
    );
    setFormData({
      userType: "",
      fullName: "",
      email: "",
      phone: "",
      query: "",
    });
  };

  return (
    <section className="py-10 bg-blue-50 mt-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-3">
            Have Questions? We're Here to Help
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out about NAC registration, study materials, or anything else.
            We typically reply within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md ring-1 ring-gray-200/70 p-6 sm:p-8">
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <fieldset className="grid grid-cols-1 gap-6">
              <legend className="text-sm font-semibold text-gray-900">
                Basic details
              </legend>

              <div>
                <label
                  htmlFor={`${formId}-userType`}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Are you a parent or a school?
                </label>
                <Select
                  id={`${formId}-userType`}
                  value={formData.userType}
                  onValueChange={(value) =>
                    handleInputChange("userType", value)
                  }
                  required
                  aria-describedby={`${formId}-userType-hint`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="parent">Parent</option>
                  <option value="school">School</option>
                </Select>
                <p
                  id={`${formId}-userType-hint`}
                  className="mt-1 text-xs text-gray-500"
                >
                  This helps us route your message to the right team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-fullName`}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full name
                  </label>
                  <Input
                    id={`${formId}-fullName`}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <Input
                    id={`${formId}-email`}
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-phone`}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone number
                  </label>
                  <Input
                    id={`${formId}-phone`}
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9\\s+-]{7,15}"
                    placeholder="e.g., +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    aria-describedby={`${formId}-phone-hint`}
                  />
                  <p
                    id={`${formId}-phone-hint`}
                    className="mt-1 text-xs text-gray-500"
                  >
                    Optional. Include country code if outside India.
                  </p>
                </div>
                <div className="md:col-span-1">
                  <label
                    htmlFor={`${formId}-query`}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your message
                  </label>
                  <Textarea
                    id={`${formId}-query`}
                    placeholder="Briefly describe your question or concern..."
                    rows={4}
                    value={formData.query}
                    onChange={(e) => handleInputChange("query", e.target.value)}
                    required
                  />
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted regarding your enquiry.
              </p>
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium w-full sm:w-auto"
              >
                Submit query
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
