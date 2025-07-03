import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

// Generic API fetch function
export const fetchApi = async <T = any>(
    url: string,
    options?: RequestInit
): Promise<T> => {
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
export const useApiQuery = <T = any>(
    queryKey: string[],
    url: string,
    options?: {
        enabled?: boolean;
        staleTime?: number;
        gcTime?: number;
        retry?: number;
    }
) => {
    return useQuery({
        queryKey,
        queryFn: () => fetchApi<T>(url),
        enabled: options?.enabled,
        staleTime: options?.staleTime,
        gcTime: options?.gcTime,
        retry: options?.retry,
    });
};

// Generic POST/PUT/DELETE mutation hook
export const useApiMutation = <TData = any, TVariables = any>(
    mutationFn: (variables: TVariables) => Promise<TData>,
    options?: {
        onSuccess?: (data: TData, variables: TVariables) => void;
        onError?: (error: Error, variables: TVariables) => void;
        invalidateQueries?: string[][];
    }
) => {
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
    const [error, setError] = useState<Error | null>(null);

    const handleError = (error: Error) => {
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
