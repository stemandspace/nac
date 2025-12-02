import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: "rzp_live_Xq9xzkZT8W5Jr3",
    key_secret: "ks2EMhvzRfAjZcG8pEgNsDzG",
});

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ paymentId: string }> }
) {
    try {
        const { paymentId } = await params;

        if (!paymentId) {
            return NextResponse.json(
                { success: false, error: { message: "Payment ID is required" } },
                { status: 400 }
            );
        }

        // Fetch payment from Razorpay
        const payment = await razorpay.payments.fetch(paymentId);

        return NextResponse.json({
            success: true,
            payment: payment,
        });
    } catch (error: any) {
        console.error("Error fetching payment:", error);

        return NextResponse.json(
            {
                success: false,
                error: {
                    message: error.description || error.message || "Failed to fetch payment",
                    code: error.error?.code || error.statusCode,
                },
            },
            { status: error.statusCode || 500 }
        );
    }
}

