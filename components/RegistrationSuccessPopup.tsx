import { useState } from "react";
import { Button } from "@/components/ui/button";

interface RegistrationSuccessPopupProps {
  isOpen: boolean;
  schoolId: string;
  onClose: () => void;
}

export default function RegistrationSuccessPopup({
  isOpen,
  schoolId,
  onClose,
}: RegistrationSuccessPopupProps) {
  const [copied, setCopied] = useState(false);

  const registrationUrl = `${window.location.origin}/st/reg?schoolId=${schoolId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(registrationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-2xl max-w-lg w-full p-8 border border-green-200 relative">
        <div className="text-center mt-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-200 mb-5 shadow-lg">
            <svg
              className="h-8 w-8 text-green-700"
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
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            Registration Successful!
          </h3>
          <p className="text-base text-gray-700 mb-2">
            Thank you for showing your interest in{" "}
            <span className="font-semibold text-blue-700">NAC 2025-26</span>!
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Our team will reach out to you soon to explain the process.
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-blue-600 text-lg">📞</span>
            <span className="text-sm text-gray-700">
              For urgent assistance, call{" "}
              <span className="font-semibold text-blue-700">
                +91 85069 55554
              </span>
            </span>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4 flex flex-col items-center">
            <span className="text-xs text-gray-500 mb-1">
              Your school registration link:
            </span>
            <div className="flex items-center w-full">
              <input
                type="text"
                value={registrationUrl}
                readOnly
                className="flex-1 bg-transparent font-mono text-blue-700 text-sm px-2 py-1 rounded focus:outline-none border-none"
                style={{ minWidth: 0 }}
              />
              <Button
                onClick={copyToClipboard}
                variant="ghost"
                size="sm"
                className="ml-2 px-2 py-1"
                aria-label="Copy registration URL"
              >
                {copied ? (
                  <span className="text-green-600 font-semibold">Copied!</span>
                ) : (
                  <span>Copy</span>
                )}
              </Button>
            </div>
          </div>
          <Button onClick={onClose} className="w-full mt-2 bg-black transition">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
