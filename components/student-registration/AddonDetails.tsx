import React from "react";

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  priceInr: number;
  originalPrice: number;
  originalPriceInr: number;
  duration: string;
  benefits: string[];
}

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
    plans?: MembershipPlan[];
  };
}

interface AddonDetailsProps {
  selectedAddon: AddonOption | undefined;
  isOverseas: boolean;
  calculateDiscount: (originalPrice: number, discountedPrice: number) => number;
}

const AddonDetails: React.FC<AddonDetailsProps> = ({
  selectedAddon,
  isOverseas,
  calculateDiscount,
}) => {
  if (!selectedAddon) return null;

  const getThemeColors = () => {
    switch (selectedAddon.id) {
      case "credit":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-900",
          accent: "text-blue-600",
          badge: "bg-blue-100 text-blue-800",
        };
      case "basic":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-900",
          accent: "text-green-600",
          badge: "bg-green-100 text-green-800",
        };
      case "premium":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-900",
          accent: "text-purple-600",
          badge: "bg-purple-100 text-purple-800",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-900",
          accent: "text-gray-600",
          badge: "bg-gray-100 text-gray-800",
        };
    }
  };

  const colors = getThemeColors();

  const renderCreditDetails = () => (
    <div className={`${colors.bg} p-2 rounded border ${colors.border}`}>
      <h4 className={`font-semibold ${colors.text} mb-2 text-base`}>
        Credit Package
      </h4>
      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="bg-white p-2 rounded border text-center text-xs">
          <div className={`font-medium ${colors.text} text-xs`}>Base</div>
          <div className={`text-sm font-bold ${colors.accent}`}>
            {selectedAddon.details.creditAmount}
          </div>
        </div>
        <div className="bg-white p-2 rounded border text-center text-xs">
          <div className="font-medium text-green-900 text-xs">Bonus</div>
          <div className="text-sm font-bold text-green-600">
            +{selectedAddon.details.bonusCredits}
          </div>
        </div>
        <div className="bg-white p-2 rounded border text-center text-xs">
          <div className={`font-medium ${colors.text} text-xs`}>Total</div>
          <div className={`text-sm font-bold ${colors.accent}`}>
            {(selectedAddon.details.creditAmount || 0) +
              (selectedAddon.details.bonusCredits || 0)}
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded border text-center text-xs">
        <span className={`font-bold ${colors.accent}`}>
          {isOverseas
            ? "$" + selectedAddon.price
            : "₹" + selectedAddon.priceInr}
        </span>
        <span className="text-gray-500 line-through ml-2">
          {isOverseas
            ? "$" + selectedAddon.originalPrice
            : "₹" + selectedAddon.originalPriceInr}
        </span>
        <span
          className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${colors.badge} ml-2`}
        >
          {calculateDiscount(
            isOverseas
              ? selectedAddon.originalPrice
              : selectedAddon.originalPriceInr,
            isOverseas ? selectedAddon.price : selectedAddon.priceInr
          )}
          % OFF
        </span>
      </div>
    </div>
  );

  const renderMembershipDetails = (type: "basic" | "premium") => {
    const plan = selectedAddon.details.plans?.[0];
    if (!plan) return null;

    return (
      <div className={`${colors.bg} p-2 rounded border ${colors.border}`}>
        <h4 className={`font-semibold ${colors.text} mb-2 text-base`}>
          {type === "basic" ? "Protostar" : "Supernova"} Membership
        </h4>
        <div className="bg-white p-2 rounded border text-xs">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-lg font-bold ${colors.accent}`}>
              {isOverseas ? "$" + plan.price : "₹" + plan.priceInr}
            </span>
            <span className="text-gray-500 line-through">
              {isOverseas
                ? "$" + plan.originalPrice
                : "₹" + plan.originalPriceInr}
            </span>
            <span
              className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${colors.badge}`}
            >
              {calculateDiscount(
                isOverseas ? plan.price : plan.priceInr,
                isOverseas ? plan.originalPrice : plan.originalPriceInr
              )}
              % OFF
            </span>
          </div>
          <div className="text-xs text-gray-600 mb-2">
            Duration: {plan.duration}
          </div>
          <div>
            <h6 className={`font-medium ${colors.text} text-xs mb-1`}>
              Includes:
            </h6>
            <ul className="space-y-1">
              {plan.benefits.map((benefit: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start space-x-1 text-xs text-gray-700"
                >
                  <svg
                    className={`h-3 w-3 ${colors.accent} flex-shrink-0 mt-0.5`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-3 p-2 bg-white border border-gray-200 rounded shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <h3 className={`text-base font-semibold ${colors.text}`}>
          {selectedAddon.title} Details
        </h3>
        <span
          className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${colors.badge}`}
        >
          {selectedAddon.id === "premium" ? "Recommended" : "Selected"}
        </span>
      </div>
      {selectedAddon.id === "credit" && renderCreditDetails()}
      {selectedAddon.id === "basic" && renderMembershipDetails("basic")}
      {selectedAddon.id === "premium" && renderMembershipDetails("premium")}
    </div>
  );
};

export default AddonDetails;
