import useSWR from 'swr';
import { client } from '@/api';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  dob: string;
  school_name: string;
  grade: string;
  section: string;
  city: string;
  mail_sent: boolean;
  wa_sent: boolean;
  payment_status: "pending" | "completed" | "failed";
  payment_id?: string;
  order_amount?: number;
  order_currency?: string;
  payment_verified_at?: string;
  payment_method?: string;
  payment_captured_at?: string;
  razorpay_order_id?: string;
  is_overseas: boolean;
  selected_addon?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface StudentsResponse {
  data: Student[];
  meta: {
    pagination: PaginationMeta;
  };
}

interface UseStudentsParams {
  page?: number;
  search?: string;
  pageSize?: number;
}

// Fetcher function for SWR
const fetcher = async (url: string): Promise<StudentsResponse> => {
  const response = await client.collection('students').find({
    params: url.split('?')[1] || '',
  });

  return response as StudentsResponse;
};

// Generate cache key for SWR
const getCacheKey = (params: UseStudentsParams) => {
  const searchParams = new URLSearchParams({
    'pagination[page]': (params.page || 1).toString(),
    'pagination[pageSize]': (params.pageSize || 10).toString(),
    'sort': 'createdAt:desc',
  });

  if (params.search) {
    searchParams.append('filters[$or][0][name][$containsi]', params.search);
    searchParams.append('filters[$or][1][email][$containsi]', params.search);
    searchParams.append('filters[$or][2][school_name][$containsi]', params.search);
    searchParams.append('filters[$or][3][grade][$containsi]', params.search);
  }

  return `students?${searchParams.toString()}`;
};

export const useStudents = (params: UseStudentsParams = {}) => {
  const { page = 1, search = '', pageSize = 10 } = params;

  const { data, error, isLoading, mutate } = useSWR(
    getCacheKey({ page, search, pageSize }),
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 10000, // 10 seconds
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    }
  );

  return {
    students: data?.data || [],
    pagination: data?.meta?.pagination || {
      page: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0,
    },
    isLoading,
    error,
    mutate,
  };
};

export type { Student, PaginationMeta, StudentsResponse };
