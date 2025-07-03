export declare const fetchApi: <T = any>(url: string, options?: RequestInit) => Promise<T>;
export declare const useApiQuery: <T = any>(queryKey: string[], url: string, options?: {
    enabled?: boolean;
    staleTime?: number;
    gcTime?: number;
    retry?: number;
}) => import("@tanstack/react-query").UseQueryResult<import("@tanstack/react-query").NoInfer<T>, Error>;
export declare const useApiMutation: <TData = any, TVariables = any>(mutationFn: (variables: TVariables) => Promise<TData>, options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: Error, variables: TVariables) => void;
    invalidateQueries?: string[][];
}) => import("@tanstack/react-query").UseMutationResult<TData, Error, TVariables, unknown>;
export declare const useLoadingState: (initialState?: boolean) => {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export declare const useErrorHandler: () => {
    error: Error | null;
    handleError: (error: Error) => void;
    clearError: () => void;
    hasError: boolean;
};
//# sourceMappingURL=useApi.d.ts.map