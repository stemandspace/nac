"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import ContactSupportBanner from "@/components/ContactSupportBanner";
import SpacetopiaSubscriptionSection from "@/components/SpacetopiaSubscriptionSection";
import VideoGallery from "@/components/VideoGallery";
import FaqContactForm from "@/components/FaqContactForm";

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState("General");
  // Contact form moved into FaqContactForm component

  const tabs = [
    "General",
    "Registration Via Schools",
    "Direct Registration",
    "NAC Study Material",
    "Mock & Assessment",
    "Engagement",
  ];

  const videoCategories = [
    {
      name: "General",
      videos: [
        {
          url: "https://youtu.be/hZGhKEFSmsE",
        },
        {
          url: "https://youtu.be/4FFagjLml4o",
        },
        {
          url: "https://youtu.be/dQBeGMaeOY4",
        },
      ],
    },
    {
      name: "Registration Via Schools",
      videos: [
        {
          url: "https://youtu.be/yBPiPzWYOIg",
        },
      ],
    },
    {
      name: "Direct Registration",
      videos: [
        {
          url: "https://youtu.be/dQBeGMaeOY4",
        },
      ],
    },
    {
      name: "Study Material",
      videos: [
        {
          url: "https://youtu.be/DMz1ZycaKSg",
        },
      ],
    },
    {
      name: "Mock Assessment",
      videos: [],
    },
    {
      name: "Engagement",
      videos: [
        {
          url: "https://youtu.be/3HOYiklKN2M",
        },
      ],
    },
  ];

  // Handlers moved into FaqContactForm component

  return (
    <div className="min-h-screen bg-white">
      <Hero
        desc="Find answers to common questions about NAC registration, study material, assessments, and participation. If you need more help, contact our support team below."
        bgimage="https://s3.us-east-1.amazonaws.com/myckc/myckc/JKM_06437_d309c2b01f.JPG?updatedAt=2025-08-22T07%3A45%3A50.669Z"
        title="Frequently Asked Questions"
      />
      {/* Video Gallery Section using Testimonials-style carousel with categories */}
      <VideoGallery
        categories={videoCategories}
        title="Awards, Testimonials and Highlights"
      />

      {/* Contact Form Section */}
      <FaqContactForm />
    </div>
  );
}
