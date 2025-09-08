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
  Building2,
  RefreshCw,
} from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useSchools, School } from "@/lib/hooks/useSchools";
import SchoolDetailsPopup from "@/components/admin/SchoolDetailsPopup";

export default function SchoolsPage() {
  const { logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Use SWR hook for data fetching
  const { schools, pagination, isLoading, error, mutate } = useSchools({
    page: currentPage,
    search: debouncedSearchTerm,
    pageSize: 10,
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

  const handleViewSchool = (school: School) => {
    setSelectedSchool(school);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedSchool(null);
  };

  const getOverseasStatusBadge = (isOverseas: boolean) => {
    return isOverseas ? (
      <Badge className="bg-blue-100 text-blue-800">Overseas</Badge>
    ) : (
      <Badge className="bg-green-100 text-green-800">Domestic</Badge>
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
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    School Management
                  </h1>
                  <p className="text-muted-foreground">
                    View and manage school registrations
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
              <CardTitle>School List</CardTitle>
              <CardDescription>
                Total schools: {pagination.total} | Page {pagination.page} of{" "}
                {pagination.pageCount}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Search and Refresh */}
              <div className="mb-6 flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, email, address, branch, or principal..."
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
                    Loading schools...
                  </div>
                </div>
              ) : error ? (
                <div className="flex justify-center py-8">
                  <div className="text-red-600">
                    Error: {error.message || "Failed to fetch schools"}
                  </div>
                </div>
              ) : schools.length === 0 ? (
                <div className="flex justify-center py-8">
                  <div className="text-muted-foreground">No schools found</div>
                </div>
              ) : (
                <>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Address</TableHead>
                          <TableHead>Branch</TableHead>
                          <TableHead>Principal</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schools.map((school) => (
                          <TableRow key={school.id}>
                            <TableCell className="font-medium">
                              {school.name}
                            </TableCell>
                            <TableCell>{school.email}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {school.address}
                            </TableCell>
                            <TableCell>{school.branch}</TableCell>
                            <TableCell>{school.principle}</TableCell>
                            <TableCell>
                              {getOverseasStatusBadge(school.is_overseas)}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleViewSchool(school)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
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

        {/* School Details Popup */}
        {showPopup && selectedSchool && (
          <SchoolDetailsPopup
            school={selectedSchool}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
