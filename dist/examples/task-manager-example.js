import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertTriangle, Calendar, Clock, User } from "lucide-react";
import { useCallback, useState } from "react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { TaskManager, } from "../widgets/TaskManager";
// Sample data matching the design requirements
const SAMPLE_TASKS = [
    {
        id: "1",
        name: "Complete project documentation",
        status: "In progress",
        reference: "DOC-001",
        phase: "Documentation",
        expectedStart: "2024-01-15",
        expectedDue: "2024-01-30",
        assignee: "John Doe",
        progress: 75,
        priority: "high",
        description: "Write comprehensive documentation for the new feature",
        tags: ["documentation", "high-priority"],
    },
    {
        id: "2",
        name: "Fix authentication bug",
        status: "Overdue",
        reference: "BUG-002",
        phase: "Development",
        expectedStart: "2024-01-10",
        expectedDue: "2024-01-20",
        assignee: "Jane Smith",
        progress: 25,
        priority: "high",
        description: "Critical authentication issue affecting users",
        tags: ["bug", "authentication", "critical"],
    },
    {
        id: "3",
        name: "Design new UI components",
        status: "Not started",
        reference: "UI-003",
        phase: "Design",
        expectedStart: "2024-02-01",
        expectedDue: "2024-02-15",
        assignee: "Alice Johnson",
        progress: 0,
        priority: "medium",
        description: "Create new UI components for the dashboard",
        tags: ["design", "ui", "components"],
    },
    {
        id: "4",
        name: "Database optimization",
        status: "Blocked",
        reference: "DB-004",
        phase: "Backend",
        expectedStart: "2024-01-25",
        expectedDue: "2024-02-10",
        assignee: "Bob Wilson",
        progress: 50,
        priority: "medium",
        description: "Optimize database queries for better performance",
        tags: ["database", "optimization", "performance"],
    },
    {
        id: "5",
        name: "User testing preparation",
        status: "On hold",
        reference: "TEST-005",
        phase: "Testing",
        expectedStart: "2024-02-05",
        expectedDue: "2024-02-20",
        assignee: "Carol Davis",
        progress: 10,
        priority: "low",
        description: "Prepare materials and setup for user testing sessions",
        tags: ["testing", "user-research"],
    },
    {
        id: "6",
        name: "API integration",
        status: "In progress",
        reference: "API-006",
        phase: "Development",
        expectedStart: "2024-01-20",
        expectedDue: "2024-02-05",
        assignee: "David Miller",
        progress: 60,
        priority: "high",
        description: "Integrate third-party API for payment processing",
        tags: ["api", "integration", "payments"],
    },
    {
        id: "7",
        name: "Mobile app testing",
        status: "Not started",
        reference: "MOB-007",
        phase: "Testing",
        expectedStart: "2024-02-10",
        expectedDue: "2024-02-25",
        assignee: "Emma Brown",
        progress: 0,
        priority: "medium",
        description: "Test mobile app on various devices and platforms",
        tags: ["mobile", "testing", "qa"],
    },
    {
        id: "8",
        name: "Security audit",
        status: "In progress",
        reference: "SEC-008",
        phase: "Security",
        expectedStart: "2024-01-30",
        expectedDue: "2024-02-15",
        assignee: "Frank Garcia",
        progress: 30,
        priority: "high",
        description: "Conduct comprehensive security audit",
        tags: ["security", "audit", "compliance"],
    },
];
// Custom columns for different views
const CUSTOM_COLUMNS = [
    {
        key: "name",
        header: "Task Name",
        width: 300,
        sortable: true,
        filterable: true,
        sticky: true,
        render: (value, task) => (_jsxs("div", { className: "flex items-center gap-2", children: [task.priority === "high" && (_jsx(AlertTriangle, { className: "h-4 w-4 text-red-500" })), _jsx("span", { className: "font-medium truncate", title: value, children: value })] })),
    },
    {
        key: "status",
        header: "Status",
        width: 120,
        sortable: true,
        filterable: true,
        render: (value) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: value })),
    },
    {
        key: "assignee",
        header: "Assignee",
        width: 150,
        sortable: true,
        filterable: true,
        render: (value) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(User, { className: "h-4 w-4 text-gray-500" }), _jsx("span", { className: "text-sm", children: value })] })),
    },
    {
        key: "expectedDue",
        header: "Due Date",
        width: 120,
        sortable: true,
        render: (value) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-4 w-4 text-gray-500" }), _jsx("span", { className: "text-sm", children: new Date(value).toLocaleDateString() })] })),
    },
    {
        key: "progress",
        header: "Progress",
        width: 100,
        sortable: true,
        render: (value) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-12 bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-500 h-2 rounded-full", style: { width: `${value || 0}%` } }) }), _jsxs("span", { className: "text-xs text-gray-600", children: [value || 0, "%"] })] })),
    },
];
export const TaskManagerExample = () => {
    const [tasks, setTasks] = useState(SAMPLE_TASKS);
    const [loading, setLoading] = useState(false);
    const [useCustomColumns, setUseCustomColumns] = useState(false);
    // Handle task updates
    const handleTaskUpdate = useCallback((taskId, updates) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, ...updates } : task));
        console.log("Task updated:", taskId, updates);
    }, []);
    // Handle task deletion
    const handleTaskDelete = useCallback((taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        console.log("Task deleted:", taskId);
    }, []);
    // Handle refresh
    const handleRefresh = useCallback(() => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            console.log("Tasks refreshed");
        }, 1000);
    }, []);
    // Handle opening task manager
    const handleOpenTaskManager = useCallback(() => {
        console.log("Opening task manager...");
        // This would typically open a modal or navigate to a full-screen view
    }, []);
    // Add a new task
    const addSampleTask = useCallback(() => {
        const newTask = {
            id: Date.now().toString(),
            name: `New Task ${tasks.length + 1}`,
            status: "Not started",
            reference: `NEW-${String(tasks.length + 1).padStart(3, "0")}`,
            phase: "Planning",
            expectedStart: new Date().toISOString().split("T")[0],
            expectedDue: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0],
            assignee: "New User",
            progress: 0,
            priority: "medium",
            description: "A new task added dynamically",
            tags: ["new", "sample"],
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }, [tasks.length]);
    return (_jsxs("div", { className: "p-6 max-w-full mx-auto space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "TaskManager Component Demo" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Comprehensive example showcasing all TaskManager features" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => setUseCustomColumns(!useCustomColumns), children: useCustomColumns ? "Default View" : "Custom View" }), _jsx(Button, { variant: "outline", size: "sm", onClick: addSampleTask, children: "Add Task" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsxs(Card, { className: "p-4", children: [_jsx("div", { className: "text-2xl font-bold text-green-600", children: tasks.filter((t) => t.status === "In progress").length }), _jsx("div", { className: "text-sm text-gray-600", children: "In Progress" })] }), _jsxs(Card, { className: "p-4", children: [_jsx("div", { className: "text-2xl font-bold text-red-600", children: tasks.filter((t) => t.status === "Overdue").length }), _jsx("div", { className: "text-sm text-gray-600", children: "Overdue" })] }), _jsxs(Card, { className: "p-4", children: [_jsx("div", { className: "text-2xl font-bold text-orange-600", children: tasks.filter((t) => t.status === "Blocked").length }), _jsx("div", { className: "text-sm text-gray-600", children: "Blocked" })] }), _jsxs(Card, { className: "p-4", children: [_jsx("div", { className: "text-2xl font-bold text-blue-600", children: tasks.length }), _jsx("div", { className: "text-sm text-gray-600", children: "Total Tasks" })] })] }), _jsx(Card, { className: "p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Task Management" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-4 w-4 text-gray-500" }), _jsx("span", { className: "text-sm text-gray-600", children: new Date().toLocaleDateString() })] })] }), _jsx(TaskManager, { tasks: tasks, columns: useCustomColumns ? CUSTOM_COLUMNS : undefined, loading: loading, height: 500, className: "border rounded-lg", enableInlineEdit: true, enableRealTimeUpdates: true, pageSize: 10, onTaskUpdate: handleTaskUpdate, onTaskDelete: handleTaskDelete, onRefresh: handleRefresh, onOpenTaskManager: handleOpenTaskManager })] }) }), _jsxs(Card, { className: "p-6", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Features Demonstrated" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "font-medium", children: "Core Features" }), _jsxs("ul", { className: "text-sm text-gray-600 space-y-1", children: [_jsx("li", { children: "\u2022 Virtualized scrolling for performance" }), _jsx("li", { children: "\u2022 Sortable columns (click headers)" }), _jsx("li", { children: "\u2022 Advanced filtering with search" }), _jsx("li", { children: "\u2022 Inline editing capabilities" }), _jsx("li", { children: "\u2022 Responsive design" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "font-medium", children: "Advanced Features" }), _jsxs("ul", { className: "text-sm text-gray-600 space-y-1", children: [_jsx("li", { children: "\u2022 Real-time updates simulation" }), _jsx("li", { children: "\u2022 Action menus with tooltips" }), _jsx("li", { children: "\u2022 Keyboard navigation (Tab, Enter)" }), _jsx("li", { children: "\u2022 Custom column rendering" }), _jsx("li", { children: "\u2022 Accessibility support" })] })] })] })] }), _jsxs(Card, { className: "p-6", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Try These Features" }), _jsxs("div", { className: "space-y-3 text-sm", children: [_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "1" }), _jsxs("div", { children: [_jsx("strong", { children: "Sorting:" }), " Click on any column header to sort. Click again to reverse the sort order."] })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "2" }), _jsxs("div", { children: [_jsx("strong", { children: "Filtering:" }), " Use the search box to filter tasks by name. Use the status and assignee filters for specific criteria."] })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "3" }), _jsxs("div", { children: [_jsx("strong", { children: "Inline Editing:" }), " Click on task names to edit them directly. Press Enter to save or Escape to cancel."] })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "4" }), _jsxs("div", { children: [_jsx("strong", { children: "Actions:" }), " Click the three-dot menu on any row to see available actions (Edit, Delete, etc.)."] })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "5" }), _jsxs("div", { children: [_jsx("strong", { children: "Keyboard Navigation:" }), " Use Tab to navigate between interactive elements, Enter to activate, and Escape to close dialogs."] })] })] })] })] }));
};
export default TaskManagerExample;
