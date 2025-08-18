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
  const copyToClipboard = async () => {
    const url = `${window.location.origin}/st/reg?schoolId=${schoolId}`;
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Registration Successful!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Your school has been registered. Here's your registration URL:
          </p>

          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-sm font-mono text-blue-600 break-all">
              {`${window.location.origin}/st/reg?schoolId=${schoolId}`}
            </p>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="flex-1"
            >
              Copy URL
            </Button>
            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
