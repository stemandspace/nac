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
  Download,
} from "lucide-react";
import * as XLSX from "xlsx";

interface UserData {
  name: string;
  email: string;
  phone: string;
  school: string;
  grade: string;
  section: string;
  payment_id: string;
  is_overseas: string;
  dob?: string;
  city?: string;
  [key: string]: string | undefined;
}

interface UploadResult {
  success: boolean;
  message?: string;
  results: {
    total: number;
    successful: number;
    failed: number;
    errors: Array<{
      row: number;
      email: string;
      error: string;
    }>;
  };
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

  const downloadSampleFile = () => {
    // Create sample CSV content
    const sampleData = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+919876543210",
        school: "ABC School",
        grade: "10",
        section: "A",
        payment_id: "pay_1234567890",
        is_overseas: "false",
        dob: "2010-01-15",
        city: "Mumbai",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+919876543211",
        school: "XYZ School",
        grade: "9",
        section: "B",
        payment_id: "pay_1234567891",
        is_overseas: "true",
        dob: "2011-03-20",
        city: "New York",
      },
    ];

    // Convert to CSV
    const headers = [
      "name",
      "email",
      "phone",
      "school",
      "grade",
      "section",
      "payment_id",
      "is_overseas",
      "dob",
      "city",
    ];
    const csvContent = [
      headers.join(","),
      ...sampleData.map((row) =>
        headers
          .map((header) => {
            const value = row[header] || "";
            // Escape commas and quotes in CSV
            if (value.includes(",") || value.includes('"')) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          })
          .join(",")
      ),
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "sample_student_upload.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        // Parse CSV header - handle quoted values
        const parseCSVLine = (line: string): string[] => {
          const result: string[] = [];
          let current = "";
          let inQuotes = false;
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
              } else {
                inQuotes = !inQuotes;
              }
            } else if (char === "," && !inQuotes) {
              result.push(current.trim());
              current = "";
            } else {
              current += char;
            }
          }
          result.push(current.trim());
          return result;
        };

        const headers = parseCSVLine(lines[0]).map((h) =>
          h.toLowerCase().trim()
        );

        // Required columns
        const requiredColumns = [
          "name",
          "email",
          "phone",
          "school",
          "grade",
          "section",
          "payment_id",
          "is_overseas",
        ];
        const missingColumns = requiredColumns.filter(
          (col) => !headers.includes(col.toLowerCase())
        );

        if (missingColumns.length > 0) {
          throw new Error(
            `CSV must contain required columns: ${requiredColumns.join(
              ", "
            )}. Missing: ${missingColumns.join(", ")}`
          );
        }

        // Get column indices
        const getIndex = (col: string) => headers.indexOf(col.toLowerCase());

        // Parse CSV rows
        for (let i = 1; i < lines.length; i++) {
          const values = parseCSVLine(lines[i]);
          if (values.length >= headers.length) {
            data.push({
              name: values[getIndex("name")] || "",
              email: values[getIndex("email")] || "",
              phone: values[getIndex("phone")] || "",
              school: values[getIndex("school")] || "",
              grade: values[getIndex("grade")] || "",
              section: values[getIndex("section")] || "",
              payment_id: values[getIndex("payment_id")] || "",
              is_overseas: values[getIndex("is_overseas")] || "false",
              dob: headers.includes("dob")
                ? values[getIndex("dob")]
                : undefined,
              city: headers.includes("city")
                ? values[getIndex("city")]
                : undefined,
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

        // Find column keys (case-insensitive)
        const firstRow = jsonData[0];
        const headers = Object.keys(firstRow);
        const getKey = (col: string) =>
          headers.find((h) => h.toLowerCase() === col.toLowerCase());

        // Required columns
        const requiredColumns = [
          "name",
          "email",
          "phone",
          "school",
          "grade",
          "section",
          "payment_id",
          "is_overseas",
        ];
        const missingColumns = requiredColumns.filter((col) => !getKey(col));

        if (missingColumns.length > 0) {
          throw new Error(
            `Excel must contain required columns: ${requiredColumns.join(
              ", "
            )}. Missing: ${missingColumns.join(", ")}`
          );
        }

        // Parse Excel rows
        data = jsonData.map((row) => ({
          name: String(row[getKey("name")] || ""),
          email: String(row[getKey("email")] || ""),
          phone: String(row[getKey("phone")] || ""),
          school: String(row[getKey("school")] || ""),
          grade: String(row[getKey("grade")] || ""),
          section: String(row[getKey("section")] || ""),
          payment_id: String(row[getKey("payment_id")] || ""),
          is_overseas: String(row[getKey("is_overseas")] || "false"),
          dob: getKey("dob") ? String(row[getKey("dob")] || "") : undefined,
          city: getKey("city") ? String(row[getKey("city")] || "") : undefined,
        }));
      } else {
        throw new Error(
          "Unsupported file format. Please upload a CSV file (.csv)"
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

  const uploadBulkFile = async (data: UserData[]): Promise<UploadResult> => {
    const baseURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:1337/api"
        : "https://api-nac.spacetopia.in/api";

    if (!data || data.length === 0) {
      throw new Error("No valid data to upload");
    }

    // Send JSON data to backend
    const response = await fetch(`${baseURL}/v1/bulk-upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Upload failed with status ${response.status}`
      );
    }

    const result = await response.json();
    return result;
  };

  const validateCSVFile = (file: File): string | null => {
    // Validate file type by extension
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (fileExtension !== "csv") {
      return "Invalid file type. Please upload a CSV file (.csv extension required).";
    }

    // Validate file type by MIME type (if available)
    if (
      file.type &&
      file.type !== "text/csv" &&
      file.type !== "application/vnd.ms-excel" &&
      file.type !== "text/plain" &&
      !file.type.includes("csv")
    ) {
      return `Invalid file MIME type: ${file.type}. Please upload a CSV file.`;
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return `File size exceeds 10MB limit. Current size: ${(
        file.size /
        1024 /
        1024
      ).toFixed(2)}MB`;
    }

    if (file.size === 0) {
      return "File is empty. Please upload a valid CSV file.";
    }

    return null;
  };

  const validateCSVData = (data: UserData[]): string | null => {
    if (!data || data.length === 0) {
      return "No data found in CSV file. Please ensure the file contains at least one data row.";
    }

    // Required fields for validation
    const requiredFields = [
      "name",
      "email",
      "phone",
      "school",
      "grade",
      "section",
      "payment_id",
      "is_overseas",
    ];

    // Validate each row
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const rowNumber = i + 2; // +2 because CSV has header row and arrays are 0-indexed

      // Check for missing required fields
      const missingFields = requiredFields.filter((field) => {
        const value = row[field as keyof UserData];
        return !value || (typeof value === "string" && value.trim() === "");
      });

      if (missingFields.length > 0) {
        return `Row ${rowNumber}: Missing required fields: ${missingFields.join(
          ", "
        )}`;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (row.email && !emailRegex.test(row.email.trim())) {
        return `Row ${rowNumber}: Invalid email format: ${row.email}`;
      }

      // Validate is_overseas is a valid boolean string
      const isOverseasValue = row.is_overseas?.toLowerCase().trim();
      if (
        isOverseasValue &&
        !["true", "false", "1", "0", "yes", "no"].includes(isOverseasValue)
      ) {
        return `Row ${rowNumber}: Invalid is_overseas value: ${row.is_overseas}. Must be true/false, 1/0, or yes/no`;
      }
    }

    return null;
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
      // Step 1: Validate CSV file type
      const fileValidationError = validateCSVFile(file);
      if (fileValidationError) {
        setError(fileValidationError);
        setIsUploading(false);
        return;
      }

      // Step 2: Parse and validate CSV structure (columns)
      let parsedData: UserData[];
      try {
        parsedData = await parseFile(file, false);
      } catch (parseError: any) {
        setError(
          parseError.message ||
            "Failed to parse CSV file. Please check the file format."
        );
        setIsUploading(false);
        return;
      }

      // Step 3: Validate CSV data (required fields, formats)
      const dataValidationError = validateCSVData(parsedData);
      if (dataValidationError) {
        setError(dataValidationError);
        setIsUploading(false);
        return;
      }

      // Step 4: Upload to API
      const result = await uploadBulkFile(parsedData);
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
                  Upload a CSV file with student registration data. Required
                  columns: name, email, phone, school, grade, section,
                  payment_id, is_overseas. Optional: dob, city.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-end">
                  <Button
                    onClick={downloadSampleFile}
                    variant="outline"
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Sample CSV
                  </Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <input
                    id="file-input"
                    type="file"
                    accept=".csv"
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
                        CSV only (Max 10MB)
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
                              <th className="px-4 py-2 text-left">School</th>
                              <th className="px-4 py-2 text-left">Grade</th>
                              <th className="px-4 py-2 text-left">Section</th>
                              <th className="px-4 py-2 text-left">
                                Payment ID
                              </th>
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
                                <td className="px-4 py-2">
                                  {user.school || "-"}
                                </td>
                                <td className="px-4 py-2">
                                  {user.grade || "-"}
                                </td>
                                <td className="px-4 py-2">
                                  {user.section || "-"}
                                </td>
                                <td className="px-4 py-2">
                                  {user.payment_id || "-"}
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
                    {uploadResult.results.successful > 0 ? (
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
                  {/* Success/Error Message */}
                  {uploadResult.message && (
                    <Alert
                      variant={
                        uploadResult.success &&
                        uploadResult.results.failed === 0
                          ? "default"
                          : uploadResult.results.successful > 0
                          ? "default"
                          : "destructive"
                      }
                    >
                      {uploadResult.success &&
                      uploadResult.results.failed === 0 ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )}
                      <AlertDescription>
                        {uploadResult.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {uploadResult.results.total}
                      </div>
                      <div className="text-sm text-blue-600 mt-1">
                        Total Rows
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {uploadResult.results.successful}
                      </div>
                      <div className="text-sm text-green-600 mt-1 flex items-center justify-center gap-1">
                        <Users className="h-4 w-4" />
                        Successfully Added
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-red-600">
                        {uploadResult.results.failed}
                      </div>
                      <div className="text-sm text-red-600 mt-1">Failed</div>
                    </div>
                  </div>

                  {/* Success Rate */}
                  {uploadResult.results.total > 0 && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Success Rate
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          {Math.round(
                            (uploadResult.results.successful /
                              uploadResult.results.total) *
                              100
                          )}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all"
                          style={{
                            width: `${
                              (uploadResult.results.successful /
                                uploadResult.results.total) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Errors List */}
                  {uploadResult.results.errors.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium mb-2 text-red-600">
                        Errors ({uploadResult.results.errors.length}):
                      </h3>
                      <div className="border rounded-lg p-4 bg-red-50 max-h-60 overflow-y-auto">
                        <ul className="space-y-1 text-sm">
                          {uploadResult.results.errors.map((error, index) => (
                            <li key={index} className="text-red-700">
                              • Row {error.row} ({error.email}): {error.error}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Success Message */}
                  {uploadResult.results.successful > 0 && (
                    <Alert>
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertDescription>
                        Successfully processed {uploadResult.results.successful}{" "}
                        student(s). Students have been registered and
                        notifications will be sent.
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* API Response Details (Collapsible) */}
                  <details className="border rounded-lg p-4 bg-gray-50">
                    <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                      View Full API Response
                    </summary>
                    <div className="mt-4 p-4 bg-white rounded border overflow-auto max-h-96">
                      <pre className="text-xs text-gray-800 whitespace-pre-wrap">
                        {JSON.stringify(uploadResult, null, 2)}
                      </pre>
                    </div>
                  </details>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
