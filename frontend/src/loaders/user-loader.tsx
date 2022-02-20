import React, { useEffect } from 'react';
import { ApiClient } from '../api/api-client';
import { UserType } from '../components/users/user/user';
import { useState } from 'react';
import { AxiosError } from 'axios';

export type LoaderType = {
    loading: boolean;
    error: AxiosError | null;
    data: any;
};

export const useUsersLoader = (path: string): LoaderType => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<UserType[]>([]);

    const apiUrl = process.env.REACT_APP_API || 'http://localhost:4000';
    const apiClient = new ApiClient<UserType>(apiUrl);

    useEffect(() => {
        async function getUsers() {
            try {
                setLoading(true);
                const res: UserType[] = await apiClient.getData(path);
                setData(res);
                setLoading(false);
            } catch (e: any) {
                setLoading(false);
                setError(e);
            }
        }

        getUsers();
    }, [path]);

    return { loading, data, error };
};
