import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { cn } from "../utils/cn";
function TableRow({ index, style, data }) {
    const { items, columns } = data;
    const item = items[index];
    if (!item) {
        return (_jsx("div", { style: style, className: cn("flex items-center justify-center", "schilling-table-row"), children: _jsx("div", { className: cn("animate-pulse", "schilling-spinner"), children: "Loading..." }) }));
    }
    return (_jsx("div", { style: style, className: cn("flex border-b", "schilling-table-row"), children: columns.map((column) => {
            const value = item[column.key];
            const content = column.render
                ? column.render(value, item, index)
                : String(value);
            return (_jsx("div", { className: cn("flex-1 p-3 text-sm", "schilling-table-cell"), style: { width: column.width }, children: content }, `${column.key}-${index}`));
        }) }));
}
// Create a wrapper component that handles the generic types properly
const TableRowWrapper = React.memo(({ index, style, data }) => {
    return TableRow({ index, style, data });
});
export function InfiniteTable({ columns, data, loading = false, onLoadMore, hasNextPage = false, itemHeight = 50, height = 400, className, }) {
    const [sortConfig, setSortConfig] = useState(null);
    const sortedData = useMemo(() => {
        if (!sortConfig)
            return data;
        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [data, sortConfig]);
    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (prev?.key === key) {
                return {
                    key,
                    direction: prev.direction === "asc" ? "desc" : "asc",
                };
            }
            return { key, direction: "asc" };
        });
    };
    const itemData = useMemo(() => ({
        items: sortedData,
        columns,
    }), [sortedData, columns]);
    useEffect(() => {
        if (onLoadMore && hasNextPage && !loading) {
            // Auto-load more when near the end
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                if (scrollTop + windowHeight >= documentHeight - 100) {
                    onLoadMore();
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [onLoadMore, hasNextPage, loading]);
    return (_jsxs("div", { className: cn("border rounded-lg overflow-hidden", "schilling-table-container", className), children: [_jsx("div", { className: cn("flex bg-muted/50 border-b", "schilling-table-header"), children: columns.map((column) => {
                    if (column.sortable) {
                        return (_jsx("button", { className: cn("flex-1 p-3 font-medium text-sm text-muted-foreground text-left", "schilling-table-header-cell", "cursor-pointer hover:bg-muted/80 border-none bg-transparent"), style: { width: column.width }, onClick: () => handleSort(column.key), type: "button", title: `Sort by ${column.header}`, children: _jsxs("div", { className: "flex items-center gap-2", children: [column.header, sortConfig?.key === column.key && (_jsx("span", { className: "text-xs", "aria-hidden": "true", children: sortConfig.direction === "asc"
                                            ? "↑"
                                            : "↓" }))] }) }, column.key));
                    }
                    return (_jsx("div", { className: cn("flex-1 p-3 font-medium text-sm text-muted-foreground", "schilling-table-header-cell"), style: { width: column.width }, children: _jsx("div", { className: "flex items-center gap-2", children: column.header }) }, column.key));
                }) }), _jsx("div", { style: { height }, children: _jsx(List, { height: height, width: "100%", itemCount: sortedData.length + (hasNextPage ? 1 : 0), itemSize: itemHeight, itemData: itemData, children: TableRowWrapper }) }), loading && (_jsx("div", { className: cn("flex justify-center p-4", "schilling-flex schilling-justify-center schilling-p-4"), children: _jsx("div", { className: cn("animate-spin rounded-full h-4 w-4 border-b-2 border-primary", "schilling-spinner"), children: _jsx("span", { className: "sr-only", children: "Loading..." }) }) }))] }));
}
export default InfiniteTable;
