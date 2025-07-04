import React from 'react';
export interface TableColumn<T = Record<string, unknown>> {
    key: string;
    header: string;
    width?: number;
    sortable?: boolean;
    render?: (value: unknown, row: T, index: number) => React.ReactNode;
}
export interface InfiniteTableProps<T = Record<string, unknown>> {
    columns: TableColumn<T>[];
    data: T[];
    loading?: boolean;
    onLoadMore?: () => void;
    hasNextPage?: boolean;
    itemHeight?: number;
    height?: number;
    className?: string;
}
export declare function InfiniteTable<T = Record<string, unknown>>({ columns, data, loading, onLoadMore, hasNextPage, itemHeight, height, className, }: InfiniteTableProps<T>): import("react/jsx-runtime").JSX.Element;
export default InfiniteTable;
//# sourceMappingURL=InfiniteTable.d.ts.map