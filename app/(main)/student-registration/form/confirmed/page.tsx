export default function ConfirmedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg
            className="h-8 w-8 text-green-600"
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
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Registration Confirmed
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for registering for the National Astronomy Challenge (NAC).
          A confirmation email will be sent to your registered email address
          shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://spacetopia.in"
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Visit SPACETOPIA
          </a>
          <a
            href="https://nationalastronomy.org"
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Visit NAC Website
          </a>
        </div>
      </div>
    </div>
  );
}
