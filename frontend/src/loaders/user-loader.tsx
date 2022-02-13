import React from 'react';
import { ApiClient } from '../api/api-client';
import { UserType } from '../components/users/user/user';
import { useCallback, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { Spinner } from '../components/spinner/spinner';

export type LoaderType = {
    loading: boolean;
    getData: () => any;
    // error: AxiosError | null;
    data: any;
};

export const useUsersLoader = (apiClient: ApiClient<any>): LoaderType => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<UserType[]>([]);

    const getUsersCallback = useCallback(async () => {
        // try {
        setLoading(true);
        const res: UserType[] = await apiClient.getData('users');
        setData(res);
        setLoading(false);
        // } catch (e: any) {
        //     setError(e);
        // }
    }, [apiClient]);

    return { loading, data, getData: getUsersCallback };
};

export const DataLoader: React.FC<any> = ({ apiClient, children }) => {
    const { loading } = useUsersLoader(apiClient);
    return <>{loading ? <Spinner /> : children}</>;
};
