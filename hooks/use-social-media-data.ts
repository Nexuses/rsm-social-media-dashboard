import { useState, useEffect, useCallback } from 'react';

export interface SocialMediaDataPoint {
  _id?: string;
  platform: string;
  period: string;
  periodType: 'weekly' | 'monthly' | 'annually';
  year: number;
  month?: string;
  week?: number;
  followers: number;
  growth: number;
  engagement?: number;
  posts?: number;
  reach?: number;
  impressions?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UseSocialMediaDataReturn {
  data: SocialMediaDataPoint[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  addData: (data: Omit<SocialMediaDataPoint, '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateData: (id: string, data: Partial<SocialMediaDataPoint>) => Promise<void>;
  deleteData: (id: string) => Promise<void>;
}

export function useSocialMediaData(
  periodType: 'weekly' | 'monthly' | 'annually' = 'monthly',
  platform?: string,
  year?: number
): UseSocialMediaDataReturn {
  const [data, setData] = useState<SocialMediaDataPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getMockData = useCallback(() => {
    const mockData: SocialMediaDataPoint[] = [
      {
        platform: 'Overall',
        period: 'Jan',
        periodType: 'monthly',
        year: 2024,
        followers: 32800,
        growth: 8.2,
        engagement: 12.5,
        posts: 45,
        reach: 25000,
        impressions: 89000
      },
      {
        platform: 'Overall',
        period: 'Feb',
        periodType: 'monthly',
        year: 2024,
        followers: 35200,
        growth: 7.3,
        engagement: 11.8,
        posts: 42,
        reach: 28000,
        impressions: 95000
      },
      {
        platform: 'Overall',
        period: 'Mar',
        periodType: 'monthly',
        year: 2024,
        followers: 37800,
        growth: 7.4,
        engagement: 13.2,
        posts: 48,
        reach: 32000,
        impressions: 102000
      },
      {
        platform: 'Overall',
        period: 'Apr',
        periodType: 'monthly',
        year: 2024,
        followers: 40500,
        growth: 7.1,
        engagement: 12.8,
        posts: 44,
        reach: 35000,
        impressions: 108000
      },
      {
        platform: 'Overall',
        period: 'May',
        periodType: 'monthly',
        year: 2024,
        followers: 43200,
        growth: 6.7,
        engagement: 11.9,
        posts: 46,
        reach: 38000,
        impressions: 115000
      },
      {
        platform: 'Overall',
        period: 'Jun',
        periodType: 'monthly',
        year: 2024,
        followers: 45800,
        growth: 6.0,
        engagement: 12.1,
        posts: 43,
        reach: 40000,
        impressions: 120000
      }
    ];

    // Filter by platform if specified
    if (platform && platform !== 'Overall') {
      return mockData.map(item => ({
        ...item,
        platform,
        followers: Math.floor(item.followers * (platform === 'LinkedIn' ? 0.72 : platform === 'Facebook' ? 0.91 : platform === 'Instagram' ? 0.13 : 0.10))
      }));
    }

    return mockData;
  }, [platform]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockData = getMockData();
      setData(mockData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [getMockData]);

  const addData = useCallback(async (newData: Omit<SocialMediaDataPoint, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Add to local state
      const newDataPoint: SocialMediaDataPoint = {
        ...newData,
        _id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      setData(prev => [...prev, newDataPoint]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add data');
      throw err;
    }
  }, []);

  const updateData = useCallback(async (id: string, updateData: Partial<SocialMediaDataPoint>) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update local state
      setData(prev => prev.map(item => 
        item._id === id 
          ? { ...item, ...updateData, updatedAt: new Date() }
          : item
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update data');
      throw err;
    }
  }, []);

  const deleteData = useCallback(async (id: string) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Remove from local state
      setData(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete data');
      throw err;
    }
  }, []);

  const refreshData = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  // Fetch data on mount and when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refreshData,
    addData,
    updateData,
    deleteData,
  };
}
