import { useState } from 'react';
import { client } from '@/api';

const school = client.collection('schools');

export interface SchoolData {
  name: string;
  address: string;
  phone: string;
  email: string;
  is_overseas: boolean;
  branch: string;
  principle: string;
}

export interface SchoolResponse {
  id: number;
  attributes: SchoolData & {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

function parseSchoolResponse(data: any): SchoolResponse | null {
  if (!data) return null;
  // Strapi v4 returns { data: { id, attributes } }
  if ('id' in data && 'attributes' in data) {
    return data as SchoolResponse;
  }
  // Strapi v4 list returns { data: [{ id, attributes }, ...] }
  if ('data' in data && Array.isArray(data.data)) {
    // Not used here, but for getSchools
    return null;
  }
  // Strapi v4 single returns { data: { id, attributes } }
  if ('data' in data && data.data && 'id' in data.data && 'attributes' in data.data) {
    return data.data as SchoolResponse;
  }
  return null;
}

function parseSchoolListResponse(data: any): SchoolResponse[] {
  if (!data) return [];
  // Strapi v4 returns { data: [{ id, attributes }, ...] }
  if ('data' in data && Array.isArray(data.data)) {
    return data.data as SchoolResponse[];
  }
  return [];
}

export const useSchool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSchool = async (schoolData: SchoolData): Promise<SchoolResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await school.create({
        data: {
          ...schoolData,
          publishedAt: new Date().toISOString(),
        },
      });

      // Strapi v4: response = { data: { id, attributes } }
      return parseSchoolResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to create school';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getSchools = async (): Promise<SchoolResponse[]> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await school.find();
      // Strapi v4: response = { data: [{ id, attributes }, ...] }
      return parseSchoolListResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to fetch schools';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getSchoolById = async (id: number): Promise<SchoolResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Strapi expects string id
      const response = await school.findOne(String(id));
      // Strapi v4: response = { data: { id, attributes } }
      return parseSchoolResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to fetch school';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSchool = async (id: number, schoolData: Partial<SchoolData>): Promise<SchoolResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Strapi expects string id
      const response = await school.update(String(id), {
        data: schoolData,
      });

      // Strapi v4: response = { data: { id, attributes } }
      return parseSchoolResponse(response);
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to update school';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSchool = async (id: number): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Strapi expects string id
      await school.delete(String(id));
      return true;
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || err?.message || 'Failed to delete school';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    createSchool,
    getSchools,
    getSchoolById,
    updateSchool,
    deleteSchool,
  };
};
