"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Student } from "@/lib/hooks/useStudents";

interface StudentDetailsPopupProps {
  student: Student;
  onClose: () => void;
}

export default function StudentDetailsPopup({
  student,
  onClose,
}: StudentDetailsPopupProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
            <XCircle className="h-3 w-3" />
            Failed
          </Badge>
        );
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const getMailStatusBadge = (mailSent: boolean) => {
    return mailSent ? (
      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
        <CheckCircle className="h-3 w-3" />
        Sent
      </Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800 flex items-center gap-1">
        <XCircle className="h-3 w-3" />
        Not Sent
      </Badge>
    );
  };

  const formatCurrency = (amount: number, currency: string = "INR") => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
    }).format(amount / 100); // Assuming amount is in paise
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Student Details</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            Complete information for {student.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Full Name
                  </label>
                  <p className="text-sm">{student.name}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Date of Birth
                  </label>
                  <p className="text-sm">{formatDate(student.dob)}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p className="text-sm">{student.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Phone
                  </label>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p className="text-sm">{student.phone}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    City
                  </label>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <p className="text-sm">{student.city}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Overseas Student
                  </label>
                  <p className="text-sm">
                    {student.is_overseas ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* School Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">School Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    School Name
                  </label>
                  <p className="text-sm">{student.school_name}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Grade
                  </label>
                  <p className="text-sm">{student.grade}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Section
                  </label>
                  <p className="text-sm">{student.section}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Payment Status
                  </label>
                  <div>{getPaymentStatusBadge(student.payment_status)}</div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Mail Sent
                  </label>
                  <div>{getMailStatusBadge(student.mail_sent)}</div>
                </div>
                {student.order_amount && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Order Amount
                    </label>
                    <p className="text-sm font-medium">
                      {formatCurrency(
                        student.order_amount,
                        student.order_currency
                      )}
                    </p>
                  </div>
                )}
                {student.payment_id && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Payment ID
                    </label>
                    <p className="text-sm font-mono">{student.payment_id}</p>
                  </div>
                )}
                {student.razorpay_order_id && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Razorpay Order ID
                    </label>
                    <p className="text-sm font-mono">
                      {student.razorpay_order_id}
                    </p>
                  </div>
                )}
                {student.payment_method && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Payment Method
                    </label>
                    <p className="text-sm">{student.payment_method}</p>
                  </div>
                )}
                {student.payment_verified_at && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Payment Verified At
                    </label>
                    <p className="text-sm">
                      {formatDateTime(student.payment_verified_at)}
                    </p>
                  </div>
                )}
                {student.payment_captured_at && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Payment Captured At
                    </label>
                    <p className="text-sm">
                      {formatDateTime(student.payment_captured_at)}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Registration Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Registration Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Registration Date
                  </label>
                  <p className="text-sm">{formatDateTime(student.createdAt)}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Last Updated
                  </label>
                  <p className="text-sm">{formatDateTime(student.updatedAt)}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Published At
                  </label>
                  <p className="text-sm">
                    {formatDateTime(student.publishedAt)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Addon Information */}
          {student.selected_addon && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Selected Addons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    {JSON.stringify(student.selected_addon, null, 2)}
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
