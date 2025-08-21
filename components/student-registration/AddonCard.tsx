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

interface AddonCardProps {
  addon: AddonOption;
  isOverseas: boolean;
  onToggle: (id: string) => void;
  calculateDiscount: (originalPrice: number, discountedPrice: number) => number;
}

const AddonCard: React.FC<AddonCardProps> = ({
  addon,
  isOverseas,
  onToggle,
  calculateDiscount,
}) => {
  const getCardStyles = () => {
    switch (addon.id) {
      case "credit":
        return {
          borderColor: "hover:border-blue-300",
          bgColor: addon.checked ? "bg-blue-50" : "bg-white",
          checkboxColor: "text-blue-600 focus:ring-blue-500",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          priceColor: "text-blue-600",
          badgeBg: "bg-blue-100",
          badgeColor: "text-blue-800",
        };
      case "basic":
        return {
          borderColor: "hover:border-green-300",
          bgColor: addon.checked ? "bg-green-50" : "bg-white",
          checkboxColor: "text-green-600 focus:ring-green-500",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          priceColor: "text-green-600",
          badgeBg: "bg-green-100",
          badgeColor: "text-green-800",
        };
      case "premium":
        return {
          borderColor: "hover:border-purple-300",
          bgColor: addon.checked ? "bg-purple-50" : "bg-white",
          checkboxColor: "text-purple-600 focus:ring-purple-500",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          priceColor: "text-purple-600",
          badgeBg: "bg-purple-100",
          badgeColor: "text-purple-800",
        };
      default:
        return {
          borderColor: "hover:border-gray-300",
          bgColor: addon.checked ? "bg-gray-50" : "bg-white",
          checkboxColor: "text-gray-600 focus:ring-gray-500",
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          priceColor: "text-gray-600",
          badgeBg: "bg-gray-100",
          badgeColor: "text-gray-800",
        };
    }
  };

  const getIcon = () => {
    switch (addon.id) {
      case "credit":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        );
      case "basic":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "premium":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const styles = getCardStyles();

  return (
    <div
      className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-all ${styles.borderColor} ${styles.bgColor} hover:shadow-md`}
      onClick={() => onToggle(addon.id)}
    >
      <div className="flex items-start space-x-3 relative">
        {/* Checkbox */}
        <div className="absolute top-0 right-0">
          <input
            type="checkbox"
            checked={addon.checked}
            onChange={() => {}}
            className={`h-4 w-4 ${styles.checkboxColor} border-gray-300 rounded`}
            readOnly
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">
              {addon.title}
            </h3>
            {addon.id === "premium" && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 whitespace-nowrap">
                Suggested
              </span>
            )}
          </div>

          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            {addon.description}
          </p>

          <div className="space-y-2">
            {/* Price Display */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className={`text-lg font-bold ${styles.priceColor}`}>
                {isOverseas
                  ? "$" + addon.originalPrice
                  : "₹" + addon.originalPriceInr}
              </div>
              <div className="text-sm text-gray-500 line-through">
                {isOverseas ? "$" + addon.price : "₹" + addon.priceInr}
              </div>
              <span
                className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${styles.badgeBg} ${styles.badgeColor} whitespace-nowrap`}
              >
                {calculateDiscount(
                  isOverseas ? addon.price : addon.priceInr,
                  isOverseas ? addon.originalPrice : addon.originalPriceInr
                )}
                % OFF
              </span>
            </div>

            {/* Additional Info */}
            {addon.id === "credit" && (
              <div className="text-xs text-gray-600">
                <span className="font-medium">Base:</span>{" "}
                {addon.details.creditAmount} credits +
                <span className="font-medium text-green-600"> Bonus:</span>{" "}
                {addon.details.bonusCredits} credits
              </div>
            )}

            {addon.id === "basic" && (
              <div className="text-xs text-gray-600">
                <span className="font-medium">Duration:</span> 1 Year
              </div>
            )}

            {addon.id === "premium" && (
              <div className="text-xs text-gray-600">
                <span className="font-medium">Duration:</span> 1 Year
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonCard;
