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
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "About NAC - Overview",
        },
        {
          url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
          title: "Frequently Asked Questions",
        },
      ],
    },
    {
      name: "Registration Via Schools",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
          title: "How to Register Through Your School",
        },
        {
          url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
          title: "School Registration Process Explained",
        },
      ],
    },
    {
      name: "Direct Registration",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=ktvTqknDobU",
          title: "Direct Registration Guide",
        },
        {
          url: "https://www.youtube.com/watch?v=RgKAFK5djSk",
          title: "Step-by-Step Direct Registration",
        },
      ],
    },
    {
      name: "Study Material",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
          title: "Accessing NAC Study Material",
        },
        {
          url: "https://www.youtube.com/watch?v=09R8_2nJtjg",
          title: "How to Use Study Resources",
        },
      ],
    },
    {
      name: "Mock Assessment",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=60ItHLz5WEA",
          title: "Mock Test Walkthrough",
        },
        {
          url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
          title: "Assessment Tips & Tricks",
        },
      ],
    },
    {
      name: "Engagement",
      videos: [
        {
          url: "https://www.youtube.com/watch?v=UceaB4D0jpo",
          title: "Student Engagement Activities",
        },
        {
          url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
          title: "How to Participate in NAC Events",
        },
      ],
    },
  ];

  // Handlers moved into FaqContactForm component

  return (
    <div className="min-h-screen bg-white">
      <Hero
        bgimage="https://s3.us-east-1.amazonaws.com/myckc/myckc/JKM_06437_d309c2b01f.JPG?updatedAt=2025-08-22T07%3A45%3A50.669Z"
        title="Frequently Asked Questions"
      />

      {/* Contact Form Section */}
      <FaqContactForm />

      {/* Video Gallery Section using Testimonials-style carousel with categories */}
      <VideoGallery
        categories={videoCategories}
        title="Awards, Testimonials and Highlights"
      />
    </div>
  );
}
