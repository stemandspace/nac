"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  Users,
  RefreshCw,
  Download,
  CheckCircle,
  XCircle,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useStudents, Student } from "@/lib/hooks/useStudents";
import StudentDetailsPopup from "@/components/admin/StudentDetailsPopup";
import AdvancedDetailsPopup from "@/components/admin/AdvancedDetailsPopup";

export default function StudentsPage() {
  const { logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAdvancedPopup, setShowAdvancedPopup] = useState(false);

  // Debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Use SWR hook for data fetching
  const { students, pagination, isLoading, error, mutate } = useStudents({
    page: currentPage,
    search: debouncedSearchTerm,
    pageSize: 50,
  });

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset to first page when search changes
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Refresh data
  const handleRefresh = () => {
    mutate();
  };

  // Download student entries
  const handleDownloadStudents = () => {
    window.open("https://api-nac.spacetopia.in/api/export/students", "_blank");
  };

  const handleViewStudent = (student: Student) => {
    setSelectedStudent(student);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedStudent(null);
  };

  const handleAdvancedDetail = (student: Student) => {
    setSelectedStudent(student);
    setShowAdvancedPopup(true);
  };

  const handleCloseAdvancedPopup = () => {
    setShowAdvancedPopup(false);
    setSelectedStudent(null);
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const getMailStatusIcon = (mailSent: boolean) => {
    return mailSent ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-gray-400" />
    );
  };

  const getWhatsAppStatusIcon = (waSent: boolean) => {
    return waSent ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-gray-400" />
    );
  };

  // Function to check if email should be highlighted
  const shouldHighlightEmail = (email: string) => {
    const emailLower = email.toLowerCase();
    return (
      emailLower === "deepakvish7354@gmail.com" ||
      emailLower === "hackhoster4@gmail.com" ||
      emailLower.includes("@spacetopia.in")
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
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Student Management
                  </h1>
                  <p className="text-muted-foreground">
                    View and manage student registrations
                  </p>
                </div>
              </div>
              <Button onClick={() => window.history.back()} variant="outline">
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Student List</CardTitle>
                  <CardDescription>
                    Total students: {pagination.total} | Page {pagination.page}{" "}
                    of {pagination.pageCount}
                  </CardDescription>
                </div>
                <Button
                  onClick={handleDownloadStudents}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Students
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search and Refresh */}
              <div className="mb-6 flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, email, school, or grade..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button
                  onClick={handleRefresh}
                  variant="outline"
                  size="sm"
                  disabled={isLoading}
                >
                  <RefreshCw
                    className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                  />
                </Button>
              </div>

              {/* Table */}
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Loading students...
                  </div>
                </div>
              ) : error ? (
                <div className="flex justify-center py-8">
                  <div className="text-red-600">
                    Error: {error.message || "Failed to fetch students"}
                  </div>
                </div>
              ) : students.length === 0 ? (
                <div className="flex justify-center py-8">
                  <div className="text-muted-foreground">No students found</div>
                </div>
              ) : (
                <>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">Name</TableHead>
                          <TableHead className="text-xs">Grade</TableHead>
                          <TableHead className="text-xs">School</TableHead>
                          <TableHead className="text-xs">Email</TableHead>
                          <TableHead className="text-xs">Mobile</TableHead>
                          <TableHead className="text-xs">Addon</TableHead>
                          <TableHead className="text-xs text-center">
                            Mail
                          </TableHead>
                          <TableHead className="text-xs text-center">
                            WhatsApp
                          </TableHead>
                          <TableHead className="text-xs">Payment</TableHead>
                          <TableHead className="text-xs">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow
                            key={student.id}
                            className={
                              shouldHighlightEmail(student.email)
                                ? "bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400"
                                : ""
                            }
                          >
                            <TableCell className="font-medium text-xs">
                              {student.name}
                            </TableCell>
                            <TableCell className="text-xs">
                              {student.grade}
                            </TableCell>
                            <TableCell className="text-xs">
                              {student.school_name}
                            </TableCell>
                            <TableCell className="text-xs">
                              {student.email}
                            </TableCell>
                            <TableCell className="text-xs">
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3 text-gray-400" />
                                {student.phone}
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">
                              {student.selected_addon?.id ? (
                                <Badge className="bg-blue-100 text-blue-800 uppercase hover:bg-blue-500 hover:text-white">
                                  {student.selected_addon.id}
                                </Badge>
                              ) : (
                                <span className="text-gray-400">None</span>
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {getMailStatusIcon(student.mail_sent)}
                            </TableCell>
                            <TableCell className="text-center">
                              {getWhatsAppStatusIcon(student.wa_sent)}
                            </TableCell>
                            <TableCell className="text-xs">
                              {getPaymentStatusBadge(student.payment_status)}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleViewStudent(student)}
                                  className="text-xs h-7"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleAdvancedDetail(student)}
                                  className="text-xs h-7"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  Advanced
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Pagination */}
                  {pagination.pageCount > 1 && (
                    <div className="flex items-center justify-between mt-6">
                      <div className="text-sm text-muted-foreground">
                        Showing{" "}
                        {(pagination.page - 1) * pagination.pageSize + 1} to{" "}
                        {Math.min(
                          pagination.page * pagination.pageSize,
                          pagination.total
                        )}{" "}
                        of {pagination.total} results
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        <span className="text-sm">
                          Page {currentPage} of {pagination.pageCount}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === pagination.pageCount}
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Student Details Popup */}
        {showPopup && selectedStudent && (
          <StudentDetailsPopup
            student={selectedStudent}
            onClose={handleClosePopup}
          />
        )}

        {/* Advanced Detail Popup */}
        {showAdvancedPopup && selectedStudent && (
          <AdvancedDetailsPopup
            student={selectedStudent}
            onClose={handleCloseAdvancedPopup}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
