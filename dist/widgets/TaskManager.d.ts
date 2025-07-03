import React from "react";
export type TaskStatus = "Overdue" | "Blocked" | "In progress" | "On hold" | "Not started";
export interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    reference: string;
    phase: string;
    expectedStart: string;
    expectedDue: string;
    assignee: string;
    progress?: number;
    priority?: "low" | "medium" | "high";
    description?: string;
    tags?: string[];
}
export interface TaskColumn {
    key: keyof Task;
    header: string;
    width?: number;
    sortable?: boolean;
    filterable?: boolean;
    sticky?: boolean;
    render?: (value: any, task: Task, index: number) => React.ReactNode;
}
export interface SortConfig {
    key: keyof Task;
    direction: "asc" | "desc";
}
export interface FilterConfig {
    status?: TaskStatus[];
    assignee?: string[];
    dateRange?: {
        start?: string;
        end?: string;
    };
    priority?: ("low" | "medium" | "high")[];
    search?: string;
}
export interface TaskManagerProps {
    tasks: Task[];
    columns?: TaskColumn[];
    loading?: boolean;
    height?: number;
    className?: string;
    enableInlineEdit?: boolean;
    enableRealTimeUpdates?: boolean;
    pageSize?: number;
    onTaskUpdate?: (taskId: string, updates: Partial<Task>) => void;
    onTaskDelete?: (taskId: string) => void;
    onRefresh?: () => void;
    onOpenTaskManager?: () => void;
}
export declare function TaskManager({ tasks, columns, loading, onTaskUpdate, onTaskDelete, onOpenTaskManager, onRefresh, className, enableInlineEdit, enableRealTimeUpdates, pageSize, height, }: TaskManagerProps): import("react/jsx-runtime").JSX.Element;
export declare function useTasks({ tasks, sortConfig, filterConfig, searchTerm, currentPage, pageSize, }: {
    tasks: Task[];
    sortConfig: SortConfig | null;
    filterConfig: FilterConfig;
    searchTerm: string;
    currentPage: number;
    pageSize: number;
}): {
    filteredTasks: Task[];
    sortedTasks: Task[];
    paginatedTasks: Task[];
};
export default TaskManager;
//# sourceMappingURL=TaskManager.d.ts.map