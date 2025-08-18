"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Play } from "lucide-react"
import Support from '@/components/school-registration/support';
import Subscribe from '@/components/school-registration/subscribe'
import Contact from '@/components/school-registration/contact';

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState("General")

  const tabs = [
    "General",
    "Registration Via Schools",
    "Direct Registration",
    "NAC Study Material",
    "Mock & Assessment",
    "Engagement",
  ]

  const videos = [
    {
      id: 1,
      thumbnail: "/faq2.jpg",
      title: "NAC Award Ceremony",
    },
    {
      id: 2,
      thumbnail: "/faq2.jpg",
      title: "Student Recognition Event",
    },
    {
      id: 3,
      thumbnail: "/faq2.jpg",
      title: "Achievement Celebration",
    },
    {
      id: 4,
      thumbnail: "/faq2.jpg",
      title: "Excellence Awards",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-black text-white min-h-screen flex items-end">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url('/legacy/bghero.jpg')` }}
  >
    {/* Overlay gradients */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/70 to-transparent"></div>
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  </div>

  {/* Foreground content */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
    <div className="flex items-center justify-between gap-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur. Vitae ac convallis ornare semper at. Tincidunt nec urna euismod amet ipsum dui enim faucibus.</p>
      </div>
      <div className="w-40 h-40 relative">
        <img
          src="/home/arrow-right.png"
          alt="Arrow"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>


      

      {/* Video Gallery Section */}
  <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Tab Navigation */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab
              ? "bg-orange-500 text-white shadow-md"
              : "bg-[#EE7E1A1A] text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Video Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
  {videos.map((video) => (
    <div
      key={video.id}
      className="relative group cursor-pointer flex justify-center"
    >
      <div className="relative overflow-hidden rounded-xl shadow-md w-48 h-80 sm:w-52 sm:h-84">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <Play className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</section>

{/* Contact Form Section */}
<section className="py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Card container (bg only on card, not full screen) */}
    <div className="bg-blue-50 rounded-2xl shadow-md p-8 sm:p-10">
      {/* Title + Description INSIDE the card */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Dolor tincidunt cum quis purus commodo.
          Cursus praesent rhoncus vestibulum lorem velit nunc laoreet.
        </p>
      </div>

      {/* Form inside the same card */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Are you parent or school?
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select something here..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="school">School</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Your full name
            </label>
            <Input placeholder="Enter your full name..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Email address
            </label>
            <Input placeholder="Enter your email..." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Phone number
            </label>
            <Input placeholder="Enter your phone number..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Query book
            </label>
            <Textarea placeholder="Write your query here..." rows={4} />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-2 rounded-3xl">
            Submit
          </Button>
        </div>
      </form>
    </div>
  </div>
</section>
<Support />
<Subscribe />
<Contact />
    </div>
  )
}
