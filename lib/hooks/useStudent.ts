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

function parseStudentResponse(data: any): StudentResponse | null {
  if (!data) return null;
  // Strapi v4 returns { data: { id, attributes } }
  if ('id' in data && 'attributes' in data) {
    return data as StudentResponse;
  }
  // Strapi v4 single returns { data: { id, attributes } }
  if ('data' in data && data.data && 'id' in data.data && 'attributes' in data.data) {
    return data.data as StudentResponse;
  }
  return null;
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

      return parseStudentResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to create student';
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
        return response.data as StudentResponse[];
      }
      return [];
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to fetch students';
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
      return parseStudentResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to fetch student';
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

      return parseStudentResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to update student';
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
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to delete student';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
  };
};
