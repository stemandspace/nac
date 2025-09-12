"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function AccessStudyMaterialButton() {
  return (
    <a
      href="https://students.spacetopia.in/library/e-books"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        marginTop: 24,
        borderRadius: '9999px',
        textDecoration: 'none',
      }}
    >
      <Button
        className="bg-[#EE7E1A] hover:bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold focus:outline-none transition duration-150 shadow-lg text-base"
        style={{ borderRadius: '9999px' }}
      >
        Access Study Material
      </Button>
    </a>
  );
}
