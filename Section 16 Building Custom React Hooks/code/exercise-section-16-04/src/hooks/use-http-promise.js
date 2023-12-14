import { useState, useCallback } from 'react';

const useHttpPromise = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    let myPromise = new Promise(function(myResolve, myReject) {
        try {
            fetch(requestConfig.url, {
                method: requestConfig.method,
                headers: requestConfig.headers,
                body: JSON.stringify(requestConfig.body)})
                .then((response) => {
                    myResolve(response.json());
                });
        } catch (error) {
            myReject(error);
        }
    });
    return myPromise;

};

export default useHttpPromise;
