import React from "react";
export interface TableColumn<T = any> {
    key: string;
    header: string;
    width?: number;
    sortable?: boolean;
    render?: (value: any, row: T, index: number) => React.ReactNode;
}
export interface InfiniteTableProps<T = any> {
    columns: TableColumn<T>[];
    data: T[];
    loading?: boolean;
    onLoadMore?: () => void;
    hasNextPage?: boolean;
    itemHeight?: number;
    height?: number;
    className?: string;
}
export declare function InfiniteTable<T = any>({ columns, data, loading, onLoadMore, hasNextPage, itemHeight, height, className, }: InfiniteTableProps<T>): import("react/jsx-runtime").JSX.Element;
export default InfiniteTable;
//# sourceMappingURL=InfiniteTable.d.ts.map