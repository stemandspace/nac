const config = [
    {
        id: "credit",
        title: "Credit Purchase",
        description: "(Up to 50 credits can be purchased. If you need more, we recommend Protostar or Supernova plans.)",
        price: 4, // Discounted price
        priceInr: 350, // Discounted price
        originalPrice: 4,
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
        price: 20, // Discounted price
        priceInr: 2499, // Discounted price
        originalPrice: 15,
        originalPriceInr: 1249,
        currency: "USD",
        checked: false,
        details: {
            selectedPlan: "basic",
            plans: [
                {
                    id: "basic",
                    name: "Basic Membership",
                    price: 20, // Discounted price
                    priceInr: 1660, // Discounted price
                    originalPrice: 25,
                    originalPriceInr: 2075,
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
        price: 50, // Discounted price
        priceInr: 2999, // Discounted price
        originalPrice: 40,
        originalPriceInr: 1499,
        currency: "USD",
        checked: false,
        details: {
            selectedPlan: "premium",
            plans: [
                {
                    id: "premium",
                    name: "Premium Membership",
                    price: 40, // Discounted price
                    priceInr: 3320, // Discounted price
                    originalPrice: 50,
                    originalPriceInr: 4150,
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