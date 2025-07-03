// Components
export { Button, buttonVariants } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/Card";
export type { CardProps } from "./components/Card";

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { LoadingSpinner } from "./components/LoadingSpinner";
export type { LoadingSpinnerProps } from "./components/LoadingSpinner";

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from "./components/Dialog";

// Shadcn Components
export {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./components/Accordion";

export {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./components/AlertDialog";

export { Avatar, AvatarFallback, AvatarImage } from "./components/Avatar";
export { Badge, badgeVariants } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";
export { Checkbox } from "./components/Checkbox";
export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./components/DropdownMenu";
export {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./components/Select";
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/Tabs";
export {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./components/Tooltip";

// Theme Provider
export {
    ThemeProvider,
    configureTheme,
    useTheme,
} from "./components/ThemeProvider";
export type { ThemeConfig } from "./components/ThemeProvider";

// Widgets
export { InfiniteTable } from "./widgets/InfiniteTable";
export type { InfiniteTableProps, TableColumn } from "./widgets/InfiniteTable";

export { TaskManager, useTasks } from "./widgets/TaskManager";
export type {
    FilterConfig,
    SortConfig,
    Task,
    TaskColumn,
    TaskManagerProps,
    TaskStatus,
} from "./widgets/TaskManager";

// Hooks and utilities
export { QueryProvider, createQueryClient } from "./hooks/QueryProvider";
export type { QueryProviderProps } from "./hooks/QueryProvider";

export {
    fetchApi,
    useApiMutation,
    useApiQuery,
    useErrorHandler,
    useLoadingState,
} from "./hooks/useApi";

// Utils
export { cn, getUseTailwind, mapClasses, setUseTailwind } from "./utils/cn";

// Styles
export { STYLES_PATH, getStylesPath } from "./styles";

// Note: CSS-only styles are available in the package files
