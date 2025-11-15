"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  Upload,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowLeft,
  Shield,
  LogOut,
  Users,
} from "lucide-react";
import * as XLSX from "xlsx";

interface UserData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string;
}

interface UploadResult {
  success: boolean;
  totalRows: number;
  successful: number;
  failed: number;
  errors: string[];
  users: UserData[];
}

export default function SheetUploadPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [previewData, setPreviewData] = useState<UserData[]>([]);
  const [error, setError] = useState<string>("");

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
      setUploadResult(null);
      setPreviewData([]);

      // Preview the file
      parseFile(selectedFile, true);
    }
  };

  const parseFile = async (file: File, previewOnly: boolean = false) => {
    try {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      let data: UserData[] = [];

      if (fileExtension === "csv") {
        const text = await file.text();
        const lines = text.split("\n").filter((line) => line.trim());
        if (lines.length === 0) {
          throw new Error("CSV file is empty");
        }

        // Parse CSV header
        const headers = lines[0].split(",").map((h) => h.trim());
        const nameIndex = headers.findIndex((h) =>
          h.toLowerCase().includes("name")
        );
        const emailIndex = headers.findIndex((h) =>
          h.toLowerCase().includes("email")
        );
        const phoneIndex = headers.findIndex(
          (h) =>
            h.toLowerCase().includes("phone") ||
            h.toLowerCase().includes("mobile")
        );

        if (nameIndex === -1 || emailIndex === -1) {
          throw new Error(
            "CSV must contain 'name' and 'email' columns (case-insensitive)"
          );
        }

        // Parse CSV rows
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",").map((v) => v.trim());
          if (values.length >= Math.max(nameIndex, emailIndex) + 1) {
            data.push({
              name: values[nameIndex] || "",
              email: values[emailIndex] || "",
              phone: phoneIndex !== -1 ? values[phoneIndex] || "" : "",
            });
          }
        }
      } else if (
        fileExtension === "xlsx" ||
        fileExtension === "xls" ||
        fileExtension === "xlsm"
      ) {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

        if (jsonData.length === 0) {
          throw new Error("Excel file is empty");
        }

        // Find column indices
        const firstRow = jsonData[0];
        const headers = Object.keys(firstRow);
        const nameKey = headers.find((h) => h.toLowerCase().includes("name"));
        const emailKey = headers.find((h) => h.toLowerCase().includes("email"));
        const phoneKey = headers.find(
          (h) =>
            h.toLowerCase().includes("phone") ||
            h.toLowerCase().includes("mobile")
        );

        if (!nameKey || !emailKey) {
          throw new Error(
            "Excel must contain 'name' and 'email' columns (case-insensitive)"
          );
        }

        // Parse Excel rows
        data = jsonData.map((row) => ({
          name: String(row[nameKey] || ""),
          email: String(row[emailKey] || ""),
          phone: phoneKey ? String(row[phoneKey] || "") : "",
        }));
      } else {
        throw new Error(
          "Unsupported file format. Please upload a CSV or Excel file (.xlsx, .xls, .xlsm)"
        );
      }

      if (previewOnly) {
        setPreviewData(data.slice(0, 5)); // Show first 5 rows as preview
      } else {
        return data;
      }
    } catch (err: any) {
      setError(err.message || "Failed to parse file");
      throw err;
    }
  };

  const validateUserData = (user: UserData): string | null => {
    if (!user.name || user.name.trim() === "") {
      return "Name is required";
    }
    if (!user.email || user.email.trim() === "") {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      return "Invalid email format";
    }
    return null;
  };

  const simulateAddUsers = async (users: UserData[]): Promise<UploadResult> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result: UploadResult = {
      success: true,
      totalRows: users.length,
      successful: 0,
      failed: 0,
      errors: [],
      users: [],
    };

    // Fake backend logic - simulate adding users
    users.forEach((user, index) => {
      const validationError = validateUserData(user);
      if (validationError) {
        result.failed++;
        result.errors.push(
          `Row ${index + 2}: ${validationError} - ${user.name || "Unknown"}`
        );
      } else {
        // Simulate random success/failure (90% success rate for demo)
        const randomSuccess = Math.random() > 0.1;
        if (randomSuccess) {
          result.successful++;
          result.users.push(user);
        } else {
          result.failed++;
          result.errors.push(
            `Row ${index + 2}: Failed to add user - ${
              user.name
            } (simulated error)`
          );
        }
      }
    });

    return result;
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setIsUploading(true);
    setError("");
    setUploadResult(null);

    try {
      const users = await parseFile(file, false);
      const result = await simulateAddUsers(users);
      setUploadResult(result);
    } catch (err: any) {
      setError(err.message || "Failed to process file");
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreviewData([]);
    setUploadResult(null);
    setError("");
    // Reset file input
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
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
                    Sheet Upload
                  </h1>
                  <p className="text-muted-foreground">
                    Upload a CSV or Excel file to add users
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => router.push("/admin/dashboard")}
                  variant="outline"
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Button>
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
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Upload Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5" />
                  Upload User Sheet
                </CardTitle>
                <CardDescription>
                  Upload a CSV or Excel file (.xlsx, .xls, .xlsm) with user
                  data. The file should contain columns for name, email, and
                  optionally phone.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <input
                    id="file-input"
                    type="file"
                    accept=".csv,.xlsx,.xls,.xlsm"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-input"
                    className="cursor-pointer flex flex-col items-center gap-4"
                  >
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium">
                        {file ? file.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        CSV, XLSX, XLS, XLSM (Max 10MB)
                      </p>
                    </div>
                  </label>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {previewData.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">
                      Preview (First 5 rows):
                    </h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-muted">
                            <tr>
                              <th className="px-4 py-2 text-left">Name</th>
                              <th className="px-4 py-2 text-left">Email</th>
                              <th className="px-4 py-2 text-left">Phone</th>
                            </tr>
                          </thead>
                          <tbody>
                            {previewData.map((user, index) => (
                              <tr
                                key={index}
                                className="border-t hover:bg-muted/50"
                              >
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">
                                  {user.phone || "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    onClick={handleUpload}
                    disabled={!file || isUploading}
                    className="gap-2"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        Upload & Process
                      </>
                    )}
                  </Button>
                  {file && (
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      disabled={isUploading}
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Results Card */}
            {uploadResult && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {uploadResult.successful > 0 ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    Upload Results
                  </CardTitle>
                  <CardDescription>
                    Summary of the upload process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {uploadResult.totalRows}
                      </div>
                      <div className="text-sm text-blue-600 mt-1">
                        Total Rows
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {uploadResult.successful}
                      </div>
                      <div className="text-sm text-green-600 mt-1 flex items-center justify-center gap-1">
                        <Users className="h-4 w-4" />
                        Successfully Added
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-red-600">
                        {uploadResult.failed}
                      </div>
                      <div className="text-sm text-red-600 mt-1">Failed</div>
                    </div>
                  </div>

                  {uploadResult.errors.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium mb-2 text-red-600">
                        Errors ({uploadResult.errors.length}):
                      </h3>
                      <div className="border rounded-lg p-4 bg-red-50 max-h-60 overflow-y-auto">
                        <ul className="space-y-1 text-sm">
                          {uploadResult.errors.map((error, index) => (
                            <li key={index} className="text-red-700">
                              • {error}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {uploadResult.successful > 0 && (
                    <Alert>
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertDescription>
                        Successfully processed {uploadResult.successful}{" "}
                        user(s). The users have been added to the system
                        (simulated).
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
