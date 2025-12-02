"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  LogOut,
  Shield,
  Search,
  Loader2,
  CheckCircle,
  XCircle,
  CreditCard,
  Calendar,
  DollarSign,
  User,
  Mail,
  Phone,
  FileText,
  Copy,
  Check,
  Code,
  Send,
} from "lucide-react";

interface RazorpayPaymentData {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  status: string;
  order_id: string;
  invoice_id: string | null;
  international: boolean;
  method: string;
  amount_refunded: number;
  refund_status: string | null;
  captured: boolean;
  description: string;
  card_id: string | null;
  bank: string | null;
  wallet: string | null;
  vpa: string | null;
  email: string;
  contact: string;
  notes: Record<string, any>;
  fee: number;
  tax: number;
  error_code: string | null;
  error_description: string | null;
  error_source: string | null;
  error_step: string | null;
  error_reason: string | null;
  acquirer_data: Record<string, any>;
  created_at: number;
  upi?: {
    payer_account_type?: string;
    vpa?: string;
  };
  card?: {
    id: string;
    entity: string;
    name: string;
    last4: string;
    network: string;
    type: string;
    issuer: string | null;
    international: boolean;
    emi: boolean;
    sub_type: string;
    token_iin: string | null;
  };
}

export default function FixEntryPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const [paymentId, setPaymentId] = useState("");
  const [paymentData, setPaymentData] = useState<RazorpayPaymentData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [webhookPayload, setWebhookPayload] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [apiCallResult, setApiCallResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  const handleFetchPayment = async () => {
    if (!paymentId.trim()) {
      setError("Please enter a payment ID");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPaymentData(null);
    setWebhookPayload(null);
    setApiCallResult(null);

    try {
      const response = await fetch(`/api/fetch-payment/${paymentId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message ||
            errorData.message ||
            "Failed to fetch payment data"
        );
      }

      const result = await response.json();
      if (result.success && result.payment) {
        // Store the raw payment data as-is from Razorpay to preserve all fields
        setPaymentData(result.payment as RazorpayPaymentData);
      } else {
        throw new Error(result.error?.message || "Payment not found");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching payment data");
      setPaymentData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const generateWebhookPayload = () => {
    if (!paymentData) return;

    // Determine the event type based on payment status
    let eventType = "payment.authorized";
    if (paymentData.captured) {
      eventType = "payment.captured";
    } else if (paymentData.status === "failed") {
      eventType = "payment.failed";
    }

    // Use the payment data directly and convert to plain object to preserve all fields
    // This ensures we include all fields that Razorpay returns, including any we might not have in our interface
    const paymentEntity = { ...paymentData };

    // Construct webhook payload exactly as Razorpay sends it in webhook routes
    // Structure: { entity, account_id, event, contains, payload: { payment: { entity: {...} } }, created_at }
    const webhookPayload = {
      entity: "event",
      account_id: "acc_BFQ7uQEaa7j2z7",
      event: eventType,
      contains: ["payment"],
      payload: {
        payment: {
          entity: paymentEntity,
        },
      },
      created_at: Math.floor(Date.now() / 1000),
    };

    setWebhookPayload(JSON.stringify(webhookPayload, null, 2));
    setApiCallResult(null); // Clear previous API call result when generating new payload
  };

  const handleCopyPayload = async () => {
    if (!webhookPayload) return;

    try {
      await navigator.clipboard.writeText(webhookPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleMakeApiCall = async () => {
    if (!webhookPayload) return;

    setIsApiCalling(true);
    setApiCallResult(null);

    try {
      const payload = JSON.parse(webhookPayload);

      const response = await fetch(
        "https://api-nac.spacetopia.in/api/v1/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error?.message ||
            result.message ||
            `API call failed with status ${response.status}`
        );
      }

      setApiCallResult({
        success: true,
        message: result.message || "Webhook processed successfully",
      });
    } catch (err: any) {
      setApiCallResult({
        success: false,
        message: err.message || "Failed to make API call",
      });
    } finally {
      setIsApiCalling(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { variant: any; icon: any }> = {
      authorized: { variant: "default", icon: CheckCircle },
      captured: { variant: "default", icon: CheckCircle },
      refunded: { variant: "secondary", icon: XCircle },
      failed: { variant: "destructive", icon: XCircle },
      pending: { variant: "outline", icon: Loader2 },
    };

    const statusConfig = statusMap[status.toLowerCase()] || {
      variant: "outline",
      icon: FileText,
    };
    const Icon = statusConfig.icon;

    return (
      <Badge variant={statusConfig.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {status.toUpperCase()}
      </Badge>
    );
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Fix Entry - Payment Lookup
                  </h1>
                  <p className="text-muted-foreground">
                    Fetch payment data from Razorpay by Payment ID
                  </p>
                </div>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {/* Search Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Payment
                </CardTitle>
                <CardDescription>
                  Enter a Razorpay Payment ID to fetch payment details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter Payment ID (e.g., pay_xxxxxxxxxxxxx)"
                      value={paymentId}
                      onChange={(e) => setPaymentId(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFetchPayment();
                        }
                      }}
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    onClick={handleFetchPayment}
                    disabled={isLoading || !paymentId.trim()}
                    className="gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Fetching...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4" />
                        Fetch Payment
                      </>
                    )}
                  </Button>
                </div>
                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Payment Data Display */}
            {paymentData && (
              <div className="grid gap-6">
                {/* Payment Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Details
                    </CardTitle>
                    <CardDescription>
                      Complete payment information from Razorpay
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Payment ID
                          </label>
                          <p className="text-sm font-mono bg-muted p-2 rounded">
                            {paymentData.id}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Order ID
                          </label>
                          <p className="text-sm font-mono bg-muted p-2 rounded">
                            {paymentData.order_id}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Status
                          </label>
                          <div>{getStatusBadge(paymentData.status)}</div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Amount
                          </label>
                          <p className="text-2xl font-bold">
                            {formatAmount(
                              paymentData.amount,
                              paymentData.currency
                            )}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Payment Method
                          </label>
                          <p className="text-sm font-medium">
                            {paymentData.method.toUpperCase()}
                          </p>
                        </div>

                        {paymentData.description && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              Description
                            </label>
                            <p className="text-sm">{paymentData.description}</p>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Created At
                          </label>
                          <p className="text-sm">
                            {formatDate(paymentData.created_at)}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Contact
                          </label>
                          <p className="text-sm flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {paymentData.contact}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email
                          </label>
                          <p className="text-sm">{paymentData.email}</p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Captured
                          </label>
                          <div>
                            {paymentData.captured ? (
                              <Badge variant="default" className="gap-1">
                                <CheckCircle className="h-3 w-3" />
                                Yes
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="gap-1">
                                <XCircle className="h-3 w-3" />
                                No
                              </Badge>
                            )}
                          </div>
                        </div>

                        {paymentData.amount_refunded > 0 && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              Amount Refunded
                            </label>
                            <p className="text-sm font-medium text-orange-600">
                              {formatAmount(
                                paymentData.amount_refunded,
                                paymentData.currency
                              )}
                            </p>
                          </div>
                        )}

                        {paymentData.fee > 0 && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              Fee
                            </label>
                            <p className="text-sm">
                              {formatAmount(
                                paymentData.fee,
                                paymentData.currency
                              )}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method Details */}
                {(paymentData.card || paymentData.bank || paymentData.vpa) && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {paymentData.card && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              Card Details
                            </label>
                            <div className="bg-muted p-4 rounded space-y-2">
                              <p className="text-sm">
                                <span className="font-medium">Network:</span>{" "}
                                {paymentData.card.network}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Type:</span>{" "}
                                {paymentData.card.type}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Last 4:</span>{" "}
                                {paymentData.card.last4}
                              </p>
                              {paymentData.card.issuer && (
                                <p className="text-sm">
                                  <span className="font-medium">Issuer:</span>{" "}
                                  {paymentData.card.issuer}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {paymentData.bank && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              Bank
                            </label>
                            <p className="text-sm bg-muted p-2 rounded">
                              {paymentData.bank}
                            </p>
                          </div>
                        )}

                        {paymentData.vpa && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              UPI VPA
                            </label>
                            <p className="text-sm bg-muted p-2 rounded font-mono">
                              {paymentData.vpa}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Error Details (if any) */}
                {paymentData.error_code && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-destructive">
                        Error Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Error Code:</span>{" "}
                          {paymentData.error_code}
                        </p>
                        {paymentData.error_description && (
                          <p className="text-sm">
                            <span className="font-medium">Description:</span>{" "}
                            {paymentData.error_description}
                          </p>
                        )}
                        {paymentData.error_reason && (
                          <p className="text-sm">
                            <span className="font-medium">Reason:</span>{" "}
                            {paymentData.error_reason}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Notes */}
                {paymentData.notes &&
                  Object.keys(paymentData.notes).length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Notes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {Object.entries(paymentData.notes).map(
                            ([key, value]) => (
                              <div key={key} className="flex gap-2">
                                <span className="font-medium text-sm">
                                  {key}:
                                </span>
                                <span className="text-sm">{String(value)}</span>
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                {/* Webhook Payload Generator */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          Webhook Payload
                        </CardTitle>
                        <CardDescription>
                          Generate Razorpay webhook payload format from payment
                          data
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={generateWebhookPayload}
                          variant="outline"
                          className="gap-2"
                          disabled={!paymentData}
                        >
                          <Code className="h-4 w-4" />
                          Generate Payload
                        </Button>
                        {webhookPayload && (
                          <>
                            <Button
                              onClick={handleCopyPayload}
                              variant="outline"
                              className="gap-2"
                            >
                              {copied ? (
                                <>
                                  <Check className="h-4 w-4" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4" />
                                  Copy
                                </>
                              )}
                            </Button>
                            <Button
                              onClick={handleMakeApiCall}
                              disabled={isApiCalling}
                              className="gap-2"
                            >
                              {isApiCalling ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Calling...
                                </>
                              ) : (
                                <>
                                  <Send className="h-4 w-4" />
                                  Make API Call
                                </>
                              )}
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {webhookPayload && (
                    <CardContent>
                      <div className="space-y-4">
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                            <code>{webhookPayload}</code>
                          </pre>
                        </div>
                        {apiCallResult && (
                          <Alert
                            variant={
                              apiCallResult.success ? "default" : "destructive"
                            }
                          >
                            {apiCallResult.success ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <XCircle className="h-4 w-4" />
                            )}
                            <AlertDescription>
                              {apiCallResult.message}
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
