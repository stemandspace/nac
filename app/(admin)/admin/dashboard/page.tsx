"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  LogOut,
  User,
  Shield,
  Settings,
  Users,
  Building2,
  Upload,
} from "lucide-react";
import { useStudents } from "@/lib/hooks/useStudents";
import { useSchools } from "@/lib/hooks/useSchools";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const router = useRouter();

  // Fetch total counts for students and schools
  const { pagination: studentsPagination, isLoading: studentsLoading } =
    useStudents({ pageSize: 1 });
  const { pagination: schoolsPagination, isLoading: schoolsLoading } =
    useSchools({ pageSize: 1 });

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  const handleStudentManagement = () => {
    router.push("/admin/students");
  };

  const handleSchoolManagement = () => {
    router.push("/admin/schools");
  };

  const handleSheetUpload = () => {
    router.push("/admin/upload");
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
                    Admin Dashboard
                  </h1>
                  <p className="text-muted-foreground">
                    Welcome back, Administrator
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
            {/* Welcome Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Admin Information
                </CardTitle>
                <CardDescription>
                  Your current admin session details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Logged in as:</p>
                    <p className="text-2xl font-bold text-primary">
                      admin@gmail.com
                    </p>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <Shield className="h-3 w-3" />
                    Admin
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Manage system configuration and preferences
                  </p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={handleStudentManagement}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Student Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View and manage student registrations and details
                  </p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={handleSchoolManagement}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    School Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View and manage school registrations and details
                  </p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={handleSheetUpload}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Sheet Upload
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Upload CSV or Excel files to add users in bulk
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Registration Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Registration Statistics</CardTitle>
                <CardDescription>
                  Total number of students and schools registered
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">
                      {studentsLoading ? (
                        <div className="animate-pulse">...</div>
                      ) : (
                        studentsPagination.total.toLocaleString()
                      )}
                    </div>
                    <div className="text-sm text-blue-600 flex items-center justify-center gap-1">
                      <Users className="h-4 w-4" />
                      Students Registered
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">
                      {schoolsLoading ? (
                        <div className="animate-pulse">...</div>
                      ) : (
                        schoolsPagination.total.toLocaleString()
                      )}
                    </div>
                    <div className="text-sm text-green-600 flex items-center justify-center gap-1">
                      <Building2 className="h-4 w-4" />
                      Schools Registered
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>
                  Current system health and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      Online
                    </div>
                    <div className="text-sm text-green-600">System Status</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      99.9%
                    </div>
                    <div className="text-sm text-blue-600">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      Active
                    </div>
                    <div className="text-sm text-purple-600">Session</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
