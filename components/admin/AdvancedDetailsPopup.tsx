"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  XCircle,
  User,
  Mail,
  Calendar,
  Shield,
  Coins,
  Crown,
  Clock,
  Loader2,
} from "lucide-react";
import { getCosmicKidsAccountDetails } from "@/lib/services";

interface Student {
  id: number;
  documentId: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  school_name: string;
  grade: string;
  section: string;
  city: string;
  mail_sent: boolean;
  wa_sent: boolean;
  payment_status: "pending" | "completed" | "failed";
  payment_id?: string;
  order_amount?: number;
  order_currency?: string;
  payment_verified_at?: string;
  payment_method?: string;
  payment_captured_at?: string;
  razorpay_order_id?: string;
  is_overseas: boolean;
  selected_addon?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface CosmicKidsAccountDetails {
  registered: boolean;
  userId?: number;
  username?: string;
  email?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
  provider?: string;
  role?: string;
  credits?: number;
  membership?: any;
  lastLogin?: string;
  membership_date?: number;
}

interface AdvancedDetailsPopupProps {
  student: Student;
  onClose: () => void;
}

export default function AdvancedDetailsPopup({
  student,
  onClose,
}: AdvancedDetailsPopupProps) {
  const [cosmicKidsDetails, setCosmicKidsDetails] =
    useState<CosmicKidsAccountDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCosmicKidsDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const details = await getCosmicKidsAccountDetails(student.email);
        setCosmicKidsDetails(details);
      } catch (err) {
        console.error("Error fetching Cosmic Kids details:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch account details"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCosmicKidsDetails();
  }, [student.email]);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (
    confirmed: boolean | undefined,
    blocked: boolean | undefined
  ) => {
    if (blocked)
      return <Badge className="bg-red-100 text-red-800">Blocked</Badge>;
    if (confirmed)
      return <Badge className="bg-green-100 text-green-800">Active</Badge>;
    return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Advanced Details - {student.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 space-y-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin mr-2" />
              <span>Loading Cosmic Kids account details...</span>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-500 mb-2">
                Error loading account details
              </div>
              <div className="text-sm text-gray-500">{error}</div>
            </div>
          ) : cosmicKidsDetails?.registered ? (
            <>
              {/* Account Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Account Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Status
                      </label>
                      <div className="mt-1">
                        {getStatusBadge(
                          cosmicKidsDetails.confirmed,
                          cosmicKidsDetails.blocked
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Role
                      </label>
                      <p className="text-sm mt-1">
                        {cosmicKidsDetails.role || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Provider
                      </label>
                      <p className="text-sm mt-1">
                        {cosmicKidsDetails.provider || "N/A"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Username
                      </label>
                      <p className="text-sm mt-1">
                        {cosmicKidsDetails.username || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Email
                      </label>
                      <p className="text-sm mt-1">
                        {cosmicKidsDetails.email || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        User ID
                      </label>
                      <p className="text-sm mt-1">
                        {cosmicKidsDetails.userId || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Last Login
                      </label>
                      <p className="text-sm mt-1">
                        {formatDate(cosmicKidsDetails.lastLogin)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Credits and Membership */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5" />
                    Credits & Membership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Credits
                      </label>
                      <p className="text-sm mt-1 flex items-center gap-1">
                        <Coins className="h-4 w-4" />
                        {cosmicKidsDetails.credits || 0}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Membership
                      </label>
                      <p className="text-sm mt-1 uppercase">
                        {cosmicKidsDetails.membership || "N/A"}
                      </p>
                    </div>
                    {cosmicKidsDetails?.membership_date && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">
                          Membership Date
                        </label>
                        <p className="text-sm mt-1">
                          {new Date(
                            cosmicKidsDetails?.membership_date * 1000
                          ).toDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Account Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Account Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Created At
                      </label>
                      <p className="text-sm mt-1 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(cosmicKidsDetails.createdAt)}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Last Updated
                      </label>
                      <p className="text-sm mt-1 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(cosmicKidsDetails.updatedAt)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <div className="text-gray-500 mb-2">
                  No Cosmic Kids Account Found
                </div>
                <div className="text-sm text-gray-400">
                  This student's email ({student.email}) is not registered in
                  Cosmic Kids Club.
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
