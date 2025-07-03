import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
export const QueryProvider = ({ children, client = createQueryClient(), }) => {
    return (_jsx(QueryClientProvider, { client: client, children: children }));
};
export { createQueryClient };
