import { useState } from 'react';
import { client } from '@/api';

export interface AddressData {
  name: string;
  mobile: string;
  pincode: string;
  locality: string;
  address: string;
  city: string;
  state: string;
  landmark: string;
}

export interface StudentData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  school_name: string;
  grade: string;
  section: string;
  city: string;
  is_overseas: boolean;
  school?: number | null;
  address?: AddressData | null;
}

export interface StudentResponse {
  id: number;
  attributes: StudentData & {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Enhanced error handling for Strapi responses
function parseStudentResponse(data: any): StudentResponse | null {
  if (!data) return null;

  try {
    // Strapi v4 returns { data: { id, attributes } }
    if ('id' in data && 'attributes' in data) {
      return data as StudentResponse;
    }
    // Strapi v4 single returns { data: { id, attributes } }
    if ('data' in data && data.data && 'id' in data.data && 'attributes' in data.data) {
      return data.data as StudentResponse;
    }
    // Handle direct response with id and attributes
    if (data.id && data.attributes) {
      return data as StudentResponse;
    }
    return null;
  } catch (error) {
    console.error('Error parsing student response:', error);
    return null;
  }
}

// Enhanced error message extraction
function extractErrorMessage(error: any): string {
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  }
  if (error?.response?.data?.error) {
    return error.response.data.error;
  }
  if (error?.message) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}

export const useStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createStudent = async (studentData: StudentData): Promise<StudentResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await client.collection('students').create({
        data: {
          ...studentData,
          publishedAt: new Date().toISOString(),
        },
      });

      const parsedResponse = parseStudentResponse(response);
      if (!parsedResponse) {
        throw new Error('Invalid response structure from server');
      }

      return parsedResponse;
    } catch (err: any) {
      const errorMessage = extractErrorMessage(err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudents = async (): Promise<StudentResponse[]> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await client.collection('students').find();

      if ('data' in response && Array.isArray(response.data)) {
        return response.data.map(item => parseStudentResponse(item)).filter(Boolean) as StudentResponse[];
      }

      // Handle single item response
      if (response && typeof response === 'object') {
        const parsed = parseStudentResponse(response);
        return parsed ? [parsed] : [];
      }

      return [];
    } catch (err: any) {
      const errorMessage = extractErrorMessage(err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudentById = async (id: number): Promise<StudentResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await client.collection('students').findOne(String(id));
      const parsedResponse = parseStudentResponse(response);

      if (!parsedResponse) {
        throw new Error('Student not found');
      }

      return parsedResponse;
    } catch (err: any) {
      const errorMessage = extractErrorMessage(err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStudent = async (id: number, studentData: Partial<StudentData>): Promise<StudentResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await client.collection('students').update(String(id), {
        data: studentData,
      });

      const parsedResponse = parseStudentResponse(response);
      if (!parsedResponse) {
        throw new Error('Invalid response structure from server');
      }

      return parsedResponse;
    } catch (err: any) {
      const errorMessage = extractErrorMessage(err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteStudent = async (id: number): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await client.collection('students').delete(String(id));
      return true;
    } catch (err: any) {
      const errorMessage = extractErrorMessage(err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear error state
  const clearError = () => {
    setError(null);
  };

  return {
    isLoading,
    error,
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    clearError,
  };
};
