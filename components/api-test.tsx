'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { client } from '@/api';

export default function ApiTest() {
  const [status, setStatus] = useState<string>('idle');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const testConnection = async () => {
    setStatus('testing');
    setError('');
    setData(null);

    try {
      // Test basic connection
      const response = await client.find('schools');
      setData(response);
      setStatus('success');
    } catch (err: any) {
      console.error('API Test Error:', err);
      setError(err.message || 'Unknown error occurred');
      setStatus('error');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">API Connection Test</h3>
      
      <div className="space-y-4">
        <Button 
          onClick={testConnection} 
          disabled={status === 'testing'}
          className="w-full"
        >
          {status === 'testing' ? 'Testing...' : 'Test API Connection'}
        </Button>

        {status === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">✅ Connection successful!</p>
            <p className="text-green-700 text-sm mt-1">
              Found {data?.data?.length || 0} schools in database
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">❌ Connection failed!</p>
            <p className="text-red-700 text-sm mt-1">{error}</p>
          </div>
        )}

        {data && (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-800 font-medium mb-2">Response Data:</p>
            <pre className="text-xs text-gray-600 overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
