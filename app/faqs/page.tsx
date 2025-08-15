"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Play } from "lucide-react"
import Footer from "@/components/footer"

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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Form Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Dolor tincidunt cum quis purus commodo. Cursus praesent rhoncus
              vestibulum lorem velit nunc laoreet.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Are you parent or school?</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your full name</label>
                  <Input placeholder="Select something here..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <Input placeholder="Select something here..." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <Input placeholder="Select something here..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Query book</label>
                  <Textarea placeholder="Select something here..." rows={4} />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg">Submit</Button>
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
                  activeTab === tab ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
