"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Play } from "lucide-react";
import Hero from "@/components/hero";
import ContactSupportBanner from "@/components/ContactSupportBanner";
import SpacetopiaSubscriptionSection from "@/components/SpacetopiaSubscriptionSection";

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState("General");
  const [formData, setFormData] = useState({
    userType: "",
    fullName: "",
    email: "",
    phone: "",
    query: "",
  });

  const tabs = [
    "General",
    "Registration Via Schools",
    "Direct Registration",
    "NAC Study Material",
    "Mock & Assessment",
    "Engagement",
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/300/200?random=1",
      title: "NAC Award Ceremony",
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/300/200?random=2",
      title: "Student Recognition Event",
    },
    {
      id: 3,
      thumbnail: "https://picsum.photos/300/200?random=3",
      title: "Achievement Celebration",
    },
    {
      id: 4,
      thumbnail: "https://picsum.photos/300/200?random=4",
      title: "Excellence Awards",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    alert("Thank you for your query! We'll get back to you soon.");
    // Reset form
    setFormData({
      userType: "",
      fullName: "",
      email: "",
      phone: "",
      query: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero
        bgimage="/home/header2.jpg"
        title="Frequently Asked Questions"
        desc="Get in touch with us for any queries about NAC registration, study materials, or general information. Our team is ready to assist you."
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-gray-900 mb-4">
              Have Questions? We're Here to Help!
            </h1>
            <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for any queries about NAC registration, study
              materials, or general information. Our team is ready to assist
              you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you a parent or school?
                </label>
                <Select
                  value={formData.userType}
                  onValueChange={(value) =>
                    handleInputChange("userType", value)
                  }
                >
                  <option value="">Select an option...</option>
                  <option value="parent">Parent</option>
                  <option value="school">School</option>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your full name
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your query
                  </label>
                  <Textarea
                    placeholder="Please describe your question or concern..."
                    rows={4}
                    value={formData.query}
                    onChange={(e) => handleInputChange("query", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg font-medium"
                >
                  Submit Query
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SpacetopiaSubscriptionSection />
      <ContactSupportBanner />
    </div>
  );
}
