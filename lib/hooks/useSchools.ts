import useSWR from 'swr';
import { client } from '@/api';

interface School {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  is_overseas: boolean;
  branch: string;
  principle: string;
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

interface SchoolsResponse {
  data: School[];
  meta: {
    pagination: PaginationMeta;
  };
}

interface UseSchoolsParams {
  page?: number;
  search?: string;
  pageSize?: number;
}

// Fetcher function for SWR
const fetcher = async (url: string): Promise<SchoolsResponse> => {
  const response = await client.collection('schools').find({
    params: url.split('?')[1] || '',
  });
  
  return response as SchoolsResponse;
};

// Generate cache key for SWR
const getCacheKey = (params: UseSchoolsParams) => {
  const searchParams = new URLSearchParams({
    'pagination[page]': (params.page || 1).toString(),
    'pagination[pageSize]': (params.pageSize || 10).toString(),
    'sort': 'createdAt:desc',
  });

  if (params.search) {
    searchParams.append('filters[$or][0][name][$containsi]', params.search);
    searchParams.append('filters[$or][1][email][$containsi]', params.search);
    searchParams.append('filters[$or][2][address][$containsi]', params.search);
    searchParams.append('filters[$or][3][branch][$containsi]', params.search);
    searchParams.append('filters[$or][4][principle][$containsi]', params.search);
  }

  return `schools?${searchParams.toString()}`;
};

export const useSchools = (params: UseSchoolsParams = {}) => {
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
    schools: data?.data || [],
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

export type { School, PaginationMeta, SchoolsResponse };
