import React, { useEffect } from 'react';
import { useState } from 'react';

type LoaderType<T> = {
    loading: boolean;
    data: T[];
};

interface DataLoaderProps<T> {
    dataSource: T[];
}

// TODO update when hardcoded data is removed
export const useDataLoader = <T extends unknown>({
    dataSource
}: DataLoaderProps<T>): LoaderType<T> => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        //TODO add exceptions when data is really loaded
        const loadData = () => {
            setData(dataSource);
            setLoading(false);
        };
        // Simulate an API request
        setInterval(loadData, 3000);
    }, [dataSource]);

    return { loading, data };
};
