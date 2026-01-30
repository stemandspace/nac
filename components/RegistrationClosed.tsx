import { registrationConfig } from "@/config/registration";

interface RegistrationClosedProps {
  title?: string;
  customMessage?: string;
}

export default function RegistrationClosed({
  title = "Registration Closed",
  customMessage,
}: RegistrationClosedProps) {
  const message = customMessage || registrationConfig.closedMessage;
  const { email, phone } = registrationConfig.contactInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 mt-[5rem] flex items-center justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-6">
            <svg
              className="h-12 w-12 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>

          {/* Message */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {message}
          </p>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-sm font-medium text-gray-700 mb-4">
              For more information or assistance, please contact us:
            </p>
            <div className="space-y-2">
              {email && (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {phone}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Thank you for your interest in the National Astronomy Challenge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
