import React, { useEffect } from 'react';
import { ApiClient } from '../api/api-client';
import { useState } from 'react';
import { AxiosError } from 'axios';

export type LoaderType<T> = {
    loading: boolean;
    error: AxiosError | null;
    data: T[];
};

export const useDataLoader = <T extends {}>(path: string): LoaderType<T> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<T[]>([]);

    const apiUrl = process.env.REACT_APP_API || 'http://localhost:4000';
    const apiClient = new ApiClient<T>(apiUrl);

    useEffect(() => {
        async function getdata() {
            try {
                setLoading(true);
                const res: T[] = await apiClient.getData(path);
                setData(res);
                setLoading(false);
            } catch (e: any) {
                setLoading(false);
                setError(e);
            }
        }

        getdata();
    }, [path]);

    return { loading, data, error };
};
