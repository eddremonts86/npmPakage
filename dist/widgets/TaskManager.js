import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertTriangle, ChevronDown, ChevronUp, Clock, MoreHorizontal, RefreshCw, Search, } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../components/DropdownMenu";
import { Input } from "../components/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../components/Select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../components/Tooltip";
import { cn } from "../utils/cn";
// Status color configurations
const STATUS_STYLES = {
    Overdue: {
        bg: "bg-red-500",
        text: "text-white",
        cssClass: "schilling-status-overdue",
    },
    Blocked: {
        bg: "bg-orange-500",
        text: "text-white",
        cssClass: "schilling-status-blocked",
    },
    "In progress": {
        bg: "bg-green-500",
        text: "text-white",
        cssClass: "schilling-status-progress",
    },
    "On hold": {
        bg: "bg-yellow-500",
        text: "text-black",
        cssClass: "schilling-status-hold",
    },
    "Not started": {
        bg: "bg-gray-500",
        text: "text-white",
        cssClass: "schilling-status-not-started",
    },
};
// Priority styles
const PRIORITY_STYLES = {
    high: { icon: AlertTriangle, color: "text-red-500" },
    medium: { icon: Clock, color: "text-yellow-500" },
    low: { icon: Clock, color: "text-green-500" },
};
// Default columns matching the design
const DEFAULT_COLUMNS = [
    {
        key: "name",
        header: "Tasks",
        width: 250,
        sortable: true,
        filterable: true,
        sticky: true,
        render: (value, task) => (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [task.priority && (_jsx("div", { className: cn("flex items-center", PRIORITY_STYLES[task.priority].color), children: React.createElement(PRIORITY_STYLES[task.priority].icon, {
                                className: "h-3 w-3",
                            }) })), _jsx("span", { className: "font-medium text-sm truncate", title: value, children: value })] }), task.description && (_jsx("span", { className: "text-xs text-muted-foreground truncate", title: task.description, children: task.description }))] })),
    },
    {
        key: "status",
        header: "Status",
        width: 120,
        sortable: true,
        filterable: true,
        render: (value) => {
            const style = STATUS_STYLES[value];
            return (_jsx(Badge, { className: cn(style.bg, style.text, style.cssClass), variant: "secondary", children: value }));
        },
    },
    {
        key: "reference",
        header: "Reference",
        width: 120,
        sortable: true,
        render: (value) => (_jsx("span", { className: "text-xs text-blue-600 hover:underline cursor-pointer font-mono", children: value })),
    },
    {
        key: "phase",
        header: "Phase",
        width: 140,
        sortable: true,
        filterable: true,
        render: (value) => (_jsx("span", { className: "text-xs text-muted-foreground", children: value })),
    },
    {
        key: "expectedStart",
        header: "Expected start",
        width: 120,
        sortable: true,
        render: (value) => {
            const date = new Date(value);
            const today = new Date();
            const isOverdue = date < today;
            return (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { children: _jsx("span", { className: cn("text-xs cursor-help", isOverdue
                                ? "text-red-600 font-medium"
                                : "text-muted-foreground"), children: date.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            }) }) }), _jsx(TooltipContent, { children: _jsx("p", { children: date.toLocaleDateString("en-GB", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }) }) })] }));
        },
    },
    {
        key: "expectedDue",
        header: "Expected due",
        width: 120,
        sortable: true,
        render: (value) => {
            const date = new Date(value);
            const today = new Date();
            const isOverdue = date < today;
            return (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { children: _jsx("span", { className: cn("text-xs cursor-help", isOverdue
                                ? "text-red-600 font-medium"
                                : "text-muted-foreground"), children: date.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            }) }) }), _jsx(TooltipContent, { children: _jsx("p", { children: date.toLocaleDateString("en-GB", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }) }) })] }));
        },
    },
    {
        key: "assignee",
        header: "Assignee",
        width: 100,
        sortable: true,
        filterable: true,
        render: (value) => (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { children: _jsxs("div", { className: "flex items-center gap-2 cursor-help", children: [_jsx("div", { className: "w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium", children: value?.charAt(0)?.toUpperCase() ?? "?" }), _jsx("span", { className: "text-xs font-medium", children: value })] }) }), _jsx(TooltipContent, { children: _jsxs("p", { children: ["Assigned to: ", value] }) })] })),
    },
];
// Header component (outside of main component)
const TaskHeader = ({ onRefresh, onOpenTaskManager }) => (_jsxs("div", { className: cn("flex items-center justify-between p-4 border-b", "schilling-task-header"), children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Tasks (next 7 days)" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", className: "text-sm", children: "Assigned to me" }), _jsx(Button, { variant: "outline", size: "sm", className: "text-sm", children: "Assigned to my role" })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [onRefresh && (_jsxs(Button, { variant: "outline", size: "sm", onClick: onRefresh, children: [_jsx(RefreshCw, { className: "h-4 w-4 mr-2" }), "Refresh"] })), onOpenTaskManager && (_jsx(Button, { variant: "outline", size: "sm", onClick: onOpenTaskManager, children: "\uD83D\uDCCB Open task manager" }))] })] }));
// Filters component (outside of main component)
const TaskFilters = ({ searchTerm, onSearch, onFilter, filteredCount, totalCount }) => (_jsxs("div", { className: cn("flex items-center gap-4 p-4 bg-muted/30", "schilling-task-filters"), children: [_jsxs("div", { className: "flex items-center gap-2 flex-1", children: [_jsx(Search, { className: "h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Search tasks or assignees...", value: searchTerm, onChange: (e) => onSearch(e.target.value), className: "max-w-sm" })] }), _jsxs(Select, { onValueChange: (value) => onFilter("status", value === "all" ? undefined : [value]), children: [_jsx(SelectTrigger, { className: "w-32", children: _jsx(SelectValue, { placeholder: "Status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Status" }), _jsx(SelectItem, { value: "Overdue", children: "Overdue" }), _jsx(SelectItem, { value: "Blocked", children: "Blocked" }), _jsx(SelectItem, { value: "In progress", children: "In progress" }), _jsx(SelectItem, { value: "On hold", children: "On hold" }), _jsx(SelectItem, { value: "Not started", children: "Not started" })] })] }), _jsxs("div", { className: "text-sm text-muted-foreground", children: [filteredCount, " of ", totalCount, " tasks"] })] }));
// Table header component (outside of main component)
const TableHeader = ({ columns, sortConfig, onSort }) => (_jsxs("div", { className: cn("flex bg-muted/50 border-b sticky top-0 z-10", "schilling-table-header"), children: [columns.map((column) => (_jsxs("button", { className: cn("flex items-center gap-2 p-3 font-medium text-sm text-muted-foreground border-r last:border-r-0", column.sortable && "cursor-pointer hover:bg-muted/80", "schilling-table-header-cell"), style: { width: column.width, minWidth: column.width }, onClick: () => column.sortable && onSort(column.key), disabled: !column.sortable, type: "button", children: [_jsx("span", { children: column.header }), column.sortable &&
                    sortConfig?.key === column.key &&
                    (sortConfig.direction === "asc" ? (_jsx(ChevronUp, { className: "h-4 w-4" })) : (_jsx(ChevronDown, { className: "h-4 w-4" })))] }, column.key))), _jsx("div", { className: "w-12 p-3 text-center font-medium text-sm text-muted-foreground", children: "Actions" })] }));
// Table row component (outside of main component)
const TableRow = ({ task, columns, index, style, onTaskUpdate, onTaskDelete, enableInlineEdit, editingCell, setEditingCell, }) => {
    const handleCellEdit = useCallback((taskId, field, value) => {
        if (onTaskUpdate) {
            onTaskUpdate(taskId, { [field]: value });
        }
        setEditingCell(null);
    }, [onTaskUpdate, setEditingCell]);
    const renderCell = useCallback((column, task, index) => {
        const value = task[column.key];
        const isEditing = editingCell?.taskId === task.id &&
            editingCell?.field === column.key;
        if (column.render) {
            return column.render(value, task, index);
        }
        if (column.key === "name" && isEditing && enableInlineEdit) {
            return (_jsx(Input, { defaultValue: value, onBlur: (e) => handleCellEdit(task.id, column.key, e.target.value), onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        handleCellEdit(task.id, column.key, e.target.value);
                    }
                    else if (e.key === "Escape") {
                        setEditingCell(null);
                    }
                }, autoFocus: true, className: "h-8" }));
        }
        if (column.key === "name" && enableInlineEdit) {
            return (_jsx("button", { className: cn("cursor-pointer hover:bg-muted/50 p-1 rounded text-left", "schilling-editable-cell"), onClick: () => setEditingCell({
                    taskId: task.id,
                    field: column.key,
                }), type: "button", children: value }));
        }
        return _jsx("span", { children: value });
    }, [editingCell, enableInlineEdit, handleCellEdit, setEditingCell]);
    const renderActionMenu = useCallback((task) => {
        return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: [_jsx(MoreHorizontal, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Open menu" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuItem, { onClick: () => setEditingCell({
                                taskId: task.id,
                                field: "name",
                            }), children: "Edit task" }), _jsx(DropdownMenuItem, { onClick: () => setEditingCell({
                                taskId: task.id,
                                field: "assignee",
                            }), children: "Reassign" }), _jsx(DropdownMenuItem, { onClick: () => onTaskDelete?.(task.id), className: "text-red-600", children: "Delete task" })] })] }));
    }, [onTaskDelete, setEditingCell]);
    return (_jsxs("div", { style: style, className: cn("flex border-b hover:bg-muted/30 transition-colors", "schilling-table-row"), children: [columns.map((column) => (_jsx("div", { className: cn("p-3 text-sm border-r last:border-r-0 flex items-center", "schilling-table-cell"), style: { width: column.width, minWidth: column.width }, children: renderCell(column, task, index) }, `${task.id}-${column.key}`))), _jsx("div", { className: "w-12 p-3 flex items-center justify-center", children: renderActionMenu(task) })] }));
};
// Memoized table row for performance
const MemoizedTableRow = React.memo(({ index, style, data }) => {
    const task = data.tasks[index];
    if (!task)
        return null;
    return (_jsx(TableRow, { task: task, columns: data.columns, index: index, style: style, onTaskUpdate: data.onTaskUpdate, onTaskDelete: data.onTaskDelete, enableInlineEdit: data.enableInlineEdit, editingCell: data.editingCell, setEditingCell: data.setEditingCell }));
});
// Pagination component (outside of main component)
const Pagination = ({ currentPage, totalItems, pageSize, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    return (_jsxs("div", { className: cn("flex items-center justify-between p-4 border-t", "schilling-pagination"), children: [_jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", (currentPage - 1) * pageSize + 1, " to", " ", Math.min(currentPage * pageSize, totalItems), " of ", totalItems, " ", "tasks"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => onPageChange(Math.max(1, currentPage - 1)), disabled: currentPage === 1, children: "Previous" }), _jsxs("span", { className: "text-sm", children: ["Page ", currentPage, " of ", totalPages] }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => onPageChange(Math.min(totalPages, currentPage + 1)), disabled: currentPage === totalPages, children: "Next" })] })] }));
};
// Main TaskManager component
export function TaskManager({ tasks, columns = DEFAULT_COLUMNS, loading = false, onTaskUpdate, onTaskDelete, onOpenTaskManager, onRefresh, className, enableInlineEdit = true, enableRealTimeUpdates = false, pageSize = 50, height = 600, }) {
    // State management
    const [sortConfig, setSortConfig] = useState(null);
    const [filterConfig, setFilterConfig] = useState({});
    const [editingCell, setEditingCell] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    // Custom hooks for data management
    const { filteredTasks, paginatedTasks } = useTasks({
        tasks,
        sortConfig,
        filterConfig,
        searchTerm,
        currentPage,
        pageSize,
    });
    // Real-time updates
    useEffect(() => {
        if (enableRealTimeUpdates && onRefresh) {
            const interval = setInterval(onRefresh, 30000); // Refresh every 30 seconds
            return () => clearInterval(interval);
        }
    }, [enableRealTimeUpdates, onRefresh]);
    // Event handlers
    const handleSort = useCallback((key) => {
        setSortConfig((prev) => {
            if (prev?.key === key) {
                return {
                    key,
                    direction: prev.direction === "asc" ? "desc" : "asc",
                };
            }
            return { key, direction: "asc" };
        });
    }, []);
    const handleFilter = useCallback((field, value) => {
        setFilterConfig((prev) => ({
            ...prev,
            [field]: value,
        }));
        setCurrentPage(1); // Reset to first page when filtering
    }, []);
    const handleSearch = useCallback((term) => {
        setSearchTerm(term);
        setCurrentPage(1);
    }, []);
    if (loading) {
        return (_jsx("div", { className: cn("flex items-center justify-center h-64", "schilling-loading"), children: _jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) }));
    }
    return (_jsx(TooltipProvider, { children: _jsxs("div", { className: cn("border rounded-lg bg-background", "schilling-task-manager", className), children: [_jsx(TaskHeader, { onRefresh: onRefresh, onOpenTaskManager: onOpenTaskManager }), _jsx(TaskFilters, { searchTerm: searchTerm, onSearch: handleSearch, onFilter: handleFilter, filteredCount: filteredTasks.length, totalCount: tasks.length }), _jsxs("div", { className: "relative", children: [_jsx(TableHeader, { columns: columns, sortConfig: sortConfig, onSort: handleSort }), _jsx("div", { style: { height: height - 200 }, children: _jsx(List, { height: height - 200, width: "100%", itemCount: paginatedTasks.length, itemSize: 60, itemData: {
                                    tasks: paginatedTasks,
                                    columns,
                                    onTaskUpdate,
                                    onTaskDelete,
                                    enableInlineEdit,
                                    editingCell,
                                    setEditingCell,
                                }, children: MemoizedTableRow }) })] }), _jsx(Pagination, { currentPage: currentPage, totalItems: filteredTasks.length, pageSize: pageSize, onPageChange: setCurrentPage })] }) }));
}
// Custom hook for task management
export function useTasks({ tasks, sortConfig, filterConfig, searchTerm, currentPage, pageSize, }) {
    const filteredTasks = useMemo(() => {
        let filtered = tasks;
        // Search filter
        if (searchTerm) {
            filtered = filtered.filter((task) => task.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
                task.assignee
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                task.reference
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()));
        }
        // Status filter
        if (filterConfig.status && filterConfig.status.length > 0) {
            filtered = filtered.filter((task) => filterConfig.status.includes(task.status));
        }
        // Assignee filter
        if (filterConfig.assignee && filterConfig.assignee.length > 0) {
            filtered = filtered.filter((task) => filterConfig.assignee.includes(task.assignee));
        }
        // Date range filter
        if (filterConfig.dateRange) {
            const { start, end } = filterConfig.dateRange;
            if (start || end) {
                filtered = filtered.filter((task) => {
                    const taskDate = new Date(task.expectedStart);
                    const startDate = start
                        ? new Date(start)
                        : new Date("1900-01-01");
                    const endDate = end
                        ? new Date(end)
                        : new Date("2100-12-31");
                    return taskDate >= startDate && taskDate <= endDate;
                });
            }
        }
        return filtered;
    }, [tasks, searchTerm, filterConfig]);
    const sortedTasks = useMemo(() => {
        if (!sortConfig)
            return filteredTasks;
        return [...filteredTasks].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            let comparison = 0;
            // Handle date sorting
            if (sortConfig.key === "expectedStart" ||
                sortConfig.key === "expectedDue") {
                const aDate = new Date(aValue);
                const bDate = new Date(bValue);
                comparison = aDate.getTime() - bDate.getTime();
            }
            // Handle string sorting
            else if (typeof aValue === "string" && typeof bValue === "string") {
                comparison = aValue.localeCompare(bValue);
            }
            // Handle other types
            else if (aValue != null && bValue != null) {
                if (aValue < bValue)
                    comparison = -1;
                else if (aValue > bValue)
                    comparison = 1;
            }
            return sortConfig.direction === "asc" ? comparison : -comparison;
        });
    }, [filteredTasks, sortConfig]);
    const paginatedTasks = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return sortedTasks.slice(startIndex, startIndex + pageSize);
    }, [sortedTasks, currentPage, pageSize]);
    return { filteredTasks, sortedTasks, paginatedTasks };
}
export default TaskManager;
