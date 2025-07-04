import { QueryClient } from '@tanstack/react-query';
import React from 'react';
declare const createQueryClient: () => QueryClient;
export interface QueryProviderProps {
    children: React.ReactNode;
    client?: QueryClient;
}
export declare const QueryProvider: React.FC<QueryProviderProps>;
export { createQueryClient };
//# sourceMappingURL=QueryProvider.d.ts.map