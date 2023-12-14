import { useState, useCallback } from 'react';

const useHttpAsyncCallback1 = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    let data = null;
    const sendRequest = useCallback( async () => {
        console.log("fetchTasks");
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            data = await response.json();
            console.log(data);
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [requestConfig,applyData]);

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttpAsyncCallback1;
