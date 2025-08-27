import React from "react";

interface AddonOption {
  id: string;
  title: string;
  description: string;
  price: number;
  priceInr: number;
  originalPrice: number;
  originalPriceInr: number;
  currency: string;
  checked: boolean;
  details: {
    creditAmount?: number;
    bonusCredits?: number;
    selectedPlan?: string;
    plans?: any[];
  };
}

interface TotalCalculationProps {
  isOverseas: boolean;
  registrationFee: { price: number; priceInr: number };
  selectedAddon: AddonOption | undefined;
  calculateTotal: () => number;
  calculateGST: () => number;
  calculateTotalBeforeGST: () => number;
}

const TotalCalculation: React.FC<TotalCalculationProps> = ({
  isOverseas,
  registrationFee,
  selectedAddon,
  calculateTotal,
  calculateGST,
  calculateTotalBeforeGST,
}) => {
  return (
    <div className="mt-3 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded border border-blue-200 shadow-sm">
      <h3 className="text-base font-semibold text-blue-900 mb-2">
        Payment Summary
      </h3>

      <div className="space-y-1.5">
        {/* Registration Fee */}
        <div className="flex justify-between items-center py-1 border-b border-blue-200">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">
              Registration Fee
            </span>
          </div>
          <span className="text-xs font-semibold text-gray-900">
            {isOverseas ? "$" : "₹"}
            {isOverseas ? registrationFee.price : registrationFee.priceInr}
          </span>
        </div>

        {/* Addon Cost (if selected) */}
        {selectedAddon && (
          <div className="flex justify-between items-center py-1 border-b border-blue-200">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">
                {selectedAddon.title}
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-900">
              {isOverseas ? "$" : "₹"}
              {isOverseas ? selectedAddon.price : selectedAddon.priceInr}
            </span>
          </div>
        )}

        {/* Subtotal (before GST) - only show for non-overseas */}
        {!isOverseas && (
          <div className="flex justify-between items-center py-1 border-b border-blue-200">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">
                Subtotal (Before GST)
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-900">
              ₹{calculateTotalBeforeGST()}
            </span>
          </div>
        )}

        {/* GST - only show for non-overseas */}
        {!isOverseas && (
          <div className="flex justify-between items-center py-1 border-b border-blue-200">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">
                GST (18%)
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-900">
              ₹{calculateGST()}
            </span>
          </div>
        )}

        {/* Total */}
        <div className="pt-2">
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-blue-900">
              Total Amount
            </span>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">
                {isOverseas ? "$" : "₹"}
                {calculateTotal()}
              </div>
              {selectedAddon && (
                <div className="text-xs text-blue-600 mt-0.5">
                  You save {isOverseas ? "$" : "₹"}
                  {isOverseas
                    ? selectedAddon.originalPrice - selectedAddon.price
                    : selectedAddon.originalPriceInr - selectedAddon.priceInr}
                </div>
              )}
              {!isOverseas && (
                <div className="text-xs text-gray-500 mt-0.5">
                  Inclusive of 18% GST
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-2 p-2 bg-white rounded border border-blue-200">
        <div className="flex items-center gap-1.5 text-xs text-blue-700">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            {selectedAddon
              ? `Includes registration fee and ${selectedAddon.title.toLowerCase()}`
              : "Registration fee only"}
            {!isOverseas && " (18% GST applicable for Indian residents)"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalCalculation;
