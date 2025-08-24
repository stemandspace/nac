const config = [
    {
        id: "credit",
        title: "Credit Purchase",
        description: "(Up to 50 credits can be purchased. If you need more, we recommend Protostar or Supernova plans.)",
        price: 7, // Discounted price
        priceInr: 350, // Discounted price
        originalPrice: 7,
        originalPriceInr: 350,
        currency: "USD",
        checked: false,
        details: {
            creditAmount: 35,
            bonusCredits: 15,
        },
    },
    {
        id: "basic",
        title: "Protostar Membership",
        description: "Essential features for students",
        price: 49, // Discounted price
        priceInr: 2499, // Discounted price
        originalPrice: 25,
        originalPriceInr: 1249,
        currency: "USD",
        checked: false,
        details: {
            selectedPlan: "basic",
            plans: [
                {
                    id: "basic",
                    name: "Basic Membership",
                    price: 49, // Discounted price
                    priceInr: 2499, // Discounted price
                    originalPrice: 25,
                    originalPriceInr: 1249,
                    duration: "1 Year",
                    benefits: [
                        "225 Welcome Credits",
                        "365 Days Duration",
                        "20% Discount On Credits Purchase",
                    ],
                },
            ],
        },
    },
    {
        id: "premium",
        title: "Supernova Membership",
        description: "Advanced features and exclusive content",
        price: 59, // Discounted price
        priceInr: 2999, // Discounted price
        originalPrice: 30,
        originalPriceInr: 1499,
        currency: "USD",
        checked: false,
        details: {
            selectedPlan: "premium",
            plans: [
                {
                    id: "premium",
                    name: "Premium Membership",
                    price: 59, // Discounted price
                    priceInr: 2999, // Discounted price
                    originalPrice: 30,
                    originalPriceInr: 1499,
                    duration: "1 Year",
                    benefits: [
                        "300 Welcome Credits",
                        "365 Days Duration",
                        "50% Discount On Credits Purchase",
                        "Access to Premium Content"
                    ],
                },
            ],
        },
    },
]

export default config;