import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
// Generic API fetch function
export const fetchApi = async (url, options) => {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
        ...options,
    });
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
};
// Generic GET hook
export const useApiQuery = (queryKey, url, options) => {
    return useQuery({
        queryKey,
        queryFn: () => fetchApi(url),
        enabled: options?.enabled,
        staleTime: options?.staleTime,
        gcTime: options?.gcTime,
        retry: options?.retry,
    });
};
// Generic POST/PUT/DELETE mutation hook
export const useApiMutation = (mutationFn, options) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn,
        onSuccess: (data, variables) => {
            options?.onSuccess?.(data, variables);
            // Invalidate and refetch queries
            options?.invalidateQueries?.forEach((queryKey) => {
                queryClient.invalidateQueries({ queryKey });
            });
        },
        onError: options?.onError,
    });
};
// Loading state hook for better UX
export const useLoadingState = (initialState = false) => {
    const [isLoading, setIsLoading] = useState(initialState);
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);
    return {
        isLoading,
        startLoading,
        stopLoading,
        setIsLoading,
    };
};
// Error handling hook
export const useErrorHandler = () => {
    const [error, setError] = useState(null);
    const handleError = (error) => {
        setError(error);
        console.error("API Error:", error);
    };
    const clearError = () => setError(null);
    return {
        error,
        handleError,
        clearError,
        hasError: !!error,
    };
};
