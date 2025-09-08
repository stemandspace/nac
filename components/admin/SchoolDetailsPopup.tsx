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
  Building2,
  CheckCircle,
  XCircle,
  User,
  Globe,
} from "lucide-react";
import { School } from "@/lib/hooks/useSchools";

interface SchoolDetailsPopupProps {
  school: School;
  onClose: () => void;
}

export default function SchoolDetailsPopup({
  school,
  onClose,
}: SchoolDetailsPopupProps) {
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

  const getOverseasStatusBadge = (isOverseas: boolean) => {
    return isOverseas ? (
      <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
        <Globe className="h-3 w-3" />
        Overseas
      </Badge>
    ) : (
      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
        <CheckCircle className="h-3 w-3" />
        Domestic
      </Badge>
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>School Details</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            Complete information for {school.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                School Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    School Name
                  </label>
                  <p className="text-sm font-medium">{school.name}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    School Type
                  </label>
                  <div>{getOverseasStatusBadge(school.is_overseas)}</div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p className="text-sm">{school.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Phone
                  </label>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p className="text-sm">{school.phone}</p>
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-500">
                    Address
                  </label>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                    <p className="text-sm">{school.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* School Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                School Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Branch
                  </label>
                  <p className="text-sm">{school.branch}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Principal
                  </label>
                  <p className="text-sm">{school.principle}</p>
                </div>
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
                  <p className="text-sm">
                    {formatDateTime(school.createdAt)}
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Last Updated
                  </label>
                  <p className="text-sm">
                    {formatDateTime(school.updatedAt)}
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">
                    Published At
                  </label>
                  <p className="text-sm">
                    {formatDateTime(school.publishedAt)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* School Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">School Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {school.is_overseas ? "International" : "Domestic"}
                  </div>
                  <div className="text-sm text-blue-600">School Type</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    Active
                  </div>
                  <div className="text-sm text-green-600">Status</div>
                </div>
              </div>
            </CardContent>
          </Card>
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
