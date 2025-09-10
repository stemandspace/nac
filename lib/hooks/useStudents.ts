import useSWR from 'swr';
import { client } from '@/api';

interface Student {
  id: number;
  documentId: string;
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

const fetcher = async (url: string): Promise<StudentsResponse> => {
  // Parse the query string into an object for filters, pagination, etc.
  const queryString = url.split('?')[1] || '';
  const params = Object.fromEntries(new URLSearchParams(queryString));

  // Prepare the options for the find method
  // Extract filters and pagination from params
  const options: Record<string, any> = {};

  // Handle pagination - Strapi v5 requires pagination to be nested
  options.pagination = {};
  if (params['pagination[page]']) {
    options.pagination.page = Number(params['pagination[page]']);
  }
  if (params['pagination[pageSize]']) {
    options.pagination.pageSize = Number(params['pagination[pageSize]']);
  }

  // Handle sort - Strapi v5 expects sort as an array
  if (params['sort']) {
    // Parse sort string like "createdAt:desc" into array format
    const sortString = params['sort'];
    if (sortString.includes(':')) {
      const [field, direction] = sortString.split(':');
      options.sort = [{ [field]: direction }];
    } else {
      options.sort = [sortString];
    }
  }

  // Handle filters
  // Collect all filter params (those starting with 'filters')
  const filterKeys = Object.keys(params).filter((k) => k.startsWith('filters'));
  if (filterKeys.length > 0) {
    // Reconstruct the nested filter object from the flat query params
    const filters: Record<string, any> = {};
    for (const key of filterKeys) {
      // Remove 'filters[' and trailing ']'
      const path = key.replace(/^filters\[/, '').replace(/\]$/g, '').replace(/\]\[/g, '.');
      // Set value at path in filters object
      const segments = path.split('.');
      let curr = filters;
      for (let i = 0; i < segments.length - 1; i++) {
        if (!(segments[i] in curr)) curr[segments[i]] = {};
        curr = curr[segments[i]];
      }
      curr[segments[segments.length - 1]] = params[key];
    }
    options.filters = filters;
  }

  const response = await client.collection('students').find(options);

  return response as unknown as StudentsResponse;
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
