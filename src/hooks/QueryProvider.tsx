import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// Default query client configuration
const createQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000, // 5 minutes
                gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
                retry: 3,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: 1,
            },
        },
    });
};

export interface QueryProviderProps {
    children: React.ReactNode;
    client?: QueryClient;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({
    children,
    client = createQueryClient(),
}) => {
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

export { createQueryClient };
