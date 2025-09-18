"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendWhatsAppMessage } from "@/lib/services";

export default function WhatsAppTest() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testWhatsApp = async () => {
    if (!phoneNumber) {
      setError("Please enter a phone number");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const testPayload = {
        mobileNumber: phoneNumber,
        templateId: "nac_spacetopia_no_cre", // Using the default template
        parameters: [
          { type: "text", text: "Test Student" },
          { type: "text", text: "Grade 10" },
          { type: "text", text: "Test School" },
          { type: "text", text: "N/A" }
        ]
      };

      console.log("Testing WhatsApp with payload:", testPayload);
      const response = await sendWhatsAppMessage(testPayload);
      setResult(response);
      console.log("WhatsApp test successful:", response);
    } catch (err: any) {
      console.error("WhatsApp test failed:", err);
      setError(err.message || "Failed to send WhatsApp message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg max-w-md">
      <h3 className="text-lg font-semibold mb-4">WhatsApp Test</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <Input
            type="tel"
            placeholder="+919876543210"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={testWhatsApp} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Sending..." : "Test WhatsApp"}
        </Button>
        
        {error && (
          <div className="text-red-600 text-sm p-2 bg-red-50 rounded">
            Error: {error}
          </div>
        )}
        
        {result && (
          <div className="text-green-600 text-sm p-2 bg-green-50 rounded">
            Success: {JSON.stringify(result, null, 2)}
          </div>
        )}
      </div>
    </div>
  );
}
