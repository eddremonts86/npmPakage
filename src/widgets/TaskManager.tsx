import {
    AlertTriangle,
    ChevronDown,
    ChevronUp,
    Clock,
    MoreHorizontal,
    RefreshCw,
    Search,
} from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../components/DropdownMenu";
import { Input } from "../components/Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/Select";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/Tooltip";
import { cn } from "../utils/cn";

export type TaskStatus =
    | "Overdue"
    | "Blocked"
    | "In progress"
    | "On hold"
    | "Not started";

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

// Status color configurations
const STATUS_STYLES: Record<
    TaskStatus,
    { bg: string; text: string; cssClass: string }
> = {
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
const DEFAULT_COLUMNS: TaskColumn[] = [
    {
        key: "name",
        header: "Tasks",
        width: 250,
        sortable: true,
        filterable: true,
        sticky: true,
        render: (value, task) => (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    {task.priority && (
                        <div
                            className={cn(
                                "flex items-center",
                                PRIORITY_STYLES[task.priority].color
                            )}
                        >
                            {React.createElement(
                                PRIORITY_STYLES[task.priority].icon,
                                {
                                    className: "h-3 w-3",
                                }
                            )}
                        </div>
                    )}
                    <span
                        className="font-medium text-sm truncate"
                        title={value}
                    >
                        {value}
                    </span>
                </div>
                {task.description && (
                    <span
                        className="text-xs text-muted-foreground truncate"
                        title={task.description}
                    >
                        {task.description}
                    </span>
                )}
            </div>
        ),
    },
    {
        key: "status",
        header: "Status",
        width: 120,
        sortable: true,
        filterable: true,
        render: (value: TaskStatus) => {
            const style = STATUS_STYLES[value];
            return (
                <Badge
                    className={cn(style.bg, style.text, style.cssClass)}
                    variant="secondary"
                >
                    {value}
                </Badge>
            );
        },
    },
    {
        key: "reference",
        header: "Reference",
        width: 120,
        sortable: true,
        render: (value) => (
            <span className="text-xs text-blue-600 hover:underline cursor-pointer font-mono">
                {value}
            </span>
        ),
    },
    {
        key: "phase",
        header: "Phase",
        width: 140,
        sortable: true,
        filterable: true,
        render: (value) => (
            <span className="text-xs text-muted-foreground">{value}</span>
        ),
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

            return (
                <Tooltip>
                    <TooltipTrigger>
                        <span
                            className={cn(
                                "text-xs cursor-help",
                                isOverdue
                                    ? "text-red-600 font-medium"
                                    : "text-muted-foreground"
                            )}
                        >
                            {date.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            {date.toLocaleDateString("en-GB", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </TooltipContent>
                </Tooltip>
            );
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

            return (
                <Tooltip>
                    <TooltipTrigger>
                        <span
                            className={cn(
                                "text-xs cursor-help",
                                isOverdue
                                    ? "text-red-600 font-medium"
                                    : "text-muted-foreground"
                            )}
                        >
                            {date.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            {date.toLocaleDateString("en-GB", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </TooltipContent>
                </Tooltip>
            );
        },
    },
    {
        key: "assignee",
        header: "Assignee",
        width: 100,
        sortable: true,
        filterable: true,
        render: (value) => (
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex items-center gap-2 cursor-help">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                            {value?.charAt(0)?.toUpperCase() ?? "?"}
                        </div>
                        <span className="text-xs font-medium">{value}</span>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Assigned to: {value}</p>
                </TooltipContent>
            </Tooltip>
        ),
    },
];

// Header component (outside of main component)
const TaskHeader: React.FC<{
    onRefresh?: () => void;
    onOpenTaskManager?: () => void;
}> = ({ onRefresh, onOpenTaskManager }) => (
    <div
        className={cn(
            "flex items-center justify-between p-4 border-b",
            "schilling-task-header"
        )}
    >
        <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Tasks (next 7 days)</h2>
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="text-sm"
                >
                    Assigned to me
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-sm"
                >
                    Assigned to my role
                </Button>
            </div>
        </div>
        <div className="flex items-center gap-2">
            {onRefresh && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onRefresh}
                >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                </Button>
            )}
            {onOpenTaskManager && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onOpenTaskManager}
                >
                    📋 Open task manager
                </Button>
            )}
        </div>
    </div>
);

// Filters component (outside of main component)
const TaskFilters: React.FC<{
    searchTerm: string;
    onSearch: (term: string) => void;
    onFilter: (field: keyof FilterConfig, value: any) => void;
    filteredCount: number;
    totalCount: number;
}> = ({ searchTerm, onSearch, onFilter, filteredCount, totalCount }) => (
    <div
        className={cn(
            "flex items-center gap-4 p-4 bg-muted/30",
            "schilling-task-filters"
        )}
    >
        <div className="flex items-center gap-2 flex-1">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search tasks or assignees..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="max-w-sm"
            />
        </div>

        <Select
            onValueChange={(value: string) =>
                onFilter("status", value === "all" ? undefined : [value])
            }
        >
            <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Overdue">Overdue</SelectItem>
                <SelectItem value="Blocked">Blocked</SelectItem>
                <SelectItem value="In progress">In progress</SelectItem>
                <SelectItem value="On hold">On hold</SelectItem>
                <SelectItem value="Not started">Not started</SelectItem>
            </SelectContent>
        </Select>

        <div className="text-sm text-muted-foreground">
            {filteredCount} of {totalCount} tasks
        </div>
    </div>
);

// Table header component (outside of main component)
const TableHeader: React.FC<{
    columns: TaskColumn[];
    sortConfig: SortConfig | null;
    onSort: (key: keyof Task) => void;
}> = ({ columns, sortConfig, onSort }) => (
    <div
        className={cn(
            "flex bg-muted/50 border-b sticky top-0 z-10",
            "schilling-table-header"
        )}
    >
        {columns.map((column) => (
            <button
                key={column.key}
                className={cn(
                    "flex items-center gap-2 p-3 font-medium text-sm text-muted-foreground border-r last:border-r-0",
                    column.sortable && "cursor-pointer hover:bg-muted/80",
                    "schilling-table-header-cell"
                )}
                style={{ width: column.width, minWidth: column.width }}
                onClick={() => column.sortable && onSort(column.key)}
                disabled={!column.sortable}
                type="button"
            >
                <span>{column.header}</span>
                {column.sortable &&
                    sortConfig?.key === column.key &&
                    (sortConfig.direction === "asc" ? (
                        <ChevronUp className="h-4 w-4" />
                    ) : (
                        <ChevronDown className="h-4 w-4" />
                    ))}
            </button>
        ))}
        <div className="w-12 p-3 text-center font-medium text-sm text-muted-foreground">
            Actions
        </div>
    </div>
);

// Table row component (outside of main component)
const TableRow: React.FC<{
    task: Task;
    columns: TaskColumn[];
    index: number;
    style: React.CSSProperties;
    onTaskUpdate?: (taskId: string, updates: Partial<Task>) => void;
    onTaskDelete?: (taskId: string) => void;
    enableInlineEdit?: boolean;
    editingCell: { taskId: string; field: keyof Task } | null;
    setEditingCell: (
        cell: { taskId: string; field: keyof Task } | null
    ) => void;
}> = ({
    task,
    columns,
    index,
    style,
    onTaskUpdate,
    onTaskDelete,
    enableInlineEdit,
    editingCell,
    setEditingCell,
}) => {
    const handleCellEdit = useCallback(
        (taskId: string, field: keyof Task, value: any) => {
            if (onTaskUpdate) {
                onTaskUpdate(taskId, { [field]: value });
            }
            setEditingCell(null);
        },
        [onTaskUpdate, setEditingCell]
    );

    const renderCell = useCallback(
        (column: TaskColumn, task: Task, index: number) => {
            const value = task[column.key];
            const isEditing =
                editingCell?.taskId === task.id &&
                editingCell?.field === column.key;

            if (column.render) {
                return column.render(value, task, index);
            }

            if (column.key === "name" && isEditing && enableInlineEdit) {
                return (
                    <Input
                        defaultValue={value as string}
                        onBlur={(e) =>
                            handleCellEdit(task.id, column.key, e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleCellEdit(
                                    task.id,
                                    column.key,
                                    (e.target as HTMLInputElement).value
                                );
                            } else if (e.key === "Escape") {
                                setEditingCell(null);
                            }
                        }}
                        autoFocus
                        className="h-8"
                    />
                );
            }

            if (column.key === "name" && enableInlineEdit) {
                return (
                    <button
                        className={cn(
                            "cursor-pointer hover:bg-muted/50 p-1 rounded text-left",
                            "schilling-editable-cell"
                        )}
                        onClick={() =>
                            setEditingCell({
                                taskId: task.id,
                                field: column.key,
                            })
                        }
                        type="button"
                    >
                        {value as string}
                    </button>
                );
            }

            return <span>{value as string}</span>;
        },
        [editingCell, enableInlineEdit, handleCellEdit, setEditingCell]
    );

    const renderActionMenu = useCallback(
        (task: Task) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() =>
                                setEditingCell({
                                    taskId: task.id,
                                    field: "name",
                                })
                            }
                        >
                            Edit task
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() =>
                                setEditingCell({
                                    taskId: task.id,
                                    field: "assignee",
                                })
                            }
                        >
                            Reassign
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => onTaskDelete?.(task.id)}
                            className="text-red-600"
                        >
                            Delete task
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
        [onTaskDelete, setEditingCell]
    );

    return (
        <div
            style={style}
            className={cn(
                "flex border-b hover:bg-muted/30 transition-colors",
                "schilling-table-row"
            )}
        >
            {columns.map((column) => (
                <div
                    key={`${task.id}-${column.key}`}
                    className={cn(
                        "p-3 text-sm border-r last:border-r-0 flex items-center",
                        "schilling-table-cell"
                    )}
                    style={{ width: column.width, minWidth: column.width }}
                >
                    {renderCell(column, task, index)}
                </div>
            ))}
            <div className="w-12 p-3 flex items-center justify-center">
                {renderActionMenu(task)}
            </div>
        </div>
    );
};

// Memoized table row for performance
const MemoizedTableRow = React.memo(({ index, style, data }: any) => {
    const task = data.tasks[index];
    if (!task) return null;

    return (
        <TableRow
            task={task}
            columns={data.columns}
            index={index}
            style={style}
            onTaskUpdate={data.onTaskUpdate}
            onTaskDelete={data.onTaskDelete}
            enableInlineEdit={data.enableInlineEdit}
            editingCell={data.editingCell}
            setEditingCell={data.setEditingCell}
        />
    );
});

// Pagination component (outside of main component)
const Pagination: React.FC<{
    currentPage: number;
    totalItems: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}> = ({ currentPage, totalItems, pageSize, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <div
            className={cn(
                "flex items-center justify-between p-4 border-t",
                "schilling-pagination"
            )}
        >
            <div className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * pageSize + 1} to{" "}
                {Math.min(currentPage * pageSize, totalItems)} of {totalItems}{" "}
                tasks
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <span className="text-sm">
                    Page {currentPage} of {totalPages}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        onPageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

// Main TaskManager component
export function TaskManager({
    tasks,
    columns = DEFAULT_COLUMNS,
    loading = false,
    onTaskUpdate,
    onTaskDelete,
    onOpenTaskManager,
    onRefresh,
    className,
    enableInlineEdit = true,
    enableRealTimeUpdates = false,
    pageSize = 50,
    height = 600,
}: TaskManagerProps) {
    // State management
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
    const [filterConfig, setFilterConfig] = useState<FilterConfig>({});
    const [editingCell, setEditingCell] = useState<{
        taskId: string;
        field: keyof Task;
    } | null>(null);
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
    const handleSort = useCallback((key: keyof Task) => {
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

    const handleFilter = useCallback(
        (field: keyof FilterConfig, value: any) => {
            setFilterConfig((prev) => ({
                ...prev,
                [field]: value,
            }));
            setCurrentPage(1); // Reset to first page when filtering
        },
        []
    );

    const handleSearch = useCallback((term: string) => {
        setSearchTerm(term);
        setCurrentPage(1);
    }, []);

    if (loading) {
        return (
            <div
                className={cn(
                    "flex items-center justify-center h-64",
                    "schilling-loading"
                )}
            >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
        );
    }

    return (
        <TooltipProvider>
            <div
                className={cn(
                    "border rounded-lg bg-background",
                    "schilling-task-manager",
                    className
                )}
            >
                <TaskHeader
                    onRefresh={onRefresh}
                    onOpenTaskManager={onOpenTaskManager}
                />
                <TaskFilters
                    searchTerm={searchTerm}
                    onSearch={handleSearch}
                    onFilter={handleFilter}
                    filteredCount={filteredTasks.length}
                    totalCount={tasks.length}
                />

                <div className="relative">
                    <TableHeader
                        columns={columns}
                        sortConfig={sortConfig}
                        onSort={handleSort}
                    />

                    <div style={{ height: height - 200 }}>
                        <List
                            height={height - 200}
                            width="100%"
                            itemCount={paginatedTasks.length}
                            itemSize={60}
                            itemData={{
                                tasks: paginatedTasks,
                                columns,
                                onTaskUpdate,
                                onTaskDelete,
                                enableInlineEdit,
                                editingCell,
                                setEditingCell,
                            }}
                        >
                            {MemoizedTableRow}
                        </List>
                    </div>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalItems={filteredTasks.length}
                    pageSize={pageSize}
                    onPageChange={setCurrentPage}
                />
            </div>
        </TooltipProvider>
    );
}

// Custom hook for task management
export function useTasks({
    tasks,
    sortConfig,
    filterConfig,
    searchTerm,
    currentPage,
    pageSize,
}: {
    tasks: Task[];
    sortConfig: SortConfig | null;
    filterConfig: FilterConfig;
    searchTerm: string;
    currentPage: number;
    pageSize: number;
}) {
    const filteredTasks = useMemo(() => {
        let filtered = tasks;

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(
                (task) =>
                    task.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    task.assignee
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    task.reference
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (filterConfig.status && filterConfig.status.length > 0) {
            filtered = filtered.filter((task) =>
                filterConfig.status!.includes(task.status)
            );
        }

        // Assignee filter
        if (filterConfig.assignee && filterConfig.assignee.length > 0) {
            filtered = filtered.filter((task) =>
                filterConfig.assignee!.includes(task.assignee)
            );
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
        if (!sortConfig) return filteredTasks;

        return [...filteredTasks].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            let comparison = 0;

            // Handle date sorting
            if (
                sortConfig.key === "expectedStart" ||
                sortConfig.key === "expectedDue"
            ) {
                const aDate = new Date(aValue as string);
                const bDate = new Date(bValue as string);
                comparison = aDate.getTime() - bDate.getTime();
            }
            // Handle string sorting
            else if (typeof aValue === "string" && typeof bValue === "string") {
                comparison = aValue.localeCompare(bValue);
            }
            // Handle other types
            else if (aValue != null && bValue != null) {
                if (aValue < bValue) comparison = -1;
                else if (aValue > bValue) comparison = 1;
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
