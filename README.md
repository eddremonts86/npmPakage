# Schilling Widgets System

A complete UI components library for React applications with TypeScript, that works **with or without Tailwind CSS**. Includes all essential Shadcn UI components, advanced widgets, and tools for data management with TanStack Query.

## 🚀 Key Features

### 🎨 Flexible Styling System

-   **Tailwind CSS**: Complete integration with custom configuration
-   **CSS-only Mode**: Works without Tailwind CSS for maximum flexibility
-   **Runtime Configuration**: Dynamic switching between modes
-   **Theme Support**: Light/dark mode with customizable colors

### 📦 Complete Component Library

-   **Basic Components**: Button, Card, Input, Dialog, LoadingSpinner
-   **Advanced Components**: Accordion, AlertDialog, Avatar, Badge, Checkbox, DropdownMenu, Select, Tabs, Tooltip
-   **Advanced Widgets**: InfiniteTable, TaskManager with virtualization
-   **Complete Shadcn UI**: Full set of accessible and modern components

### 🛠️ Development Tools

-   **TypeScript First**: Complete type safety and IntelliSense
-   **TanStack Query**: Efficient data and state management (bundled)
-   **Optimized**: Tree-shaking and only loads what you need
-   **Accessible**: Built following accessibility best practices

## 📦 Installation

```bash
npm install @schilling-apps/schilling-widgets-system
```

### Peer Dependencies

Only React and ReactDOM are required:

```bash
npm install react react-dom
```

**That's it!** All other dependencies (TanStack Query, Lucide React, Tailwind CSS utilities, etc.) are bundled within the package.

## 🎯 Quick Start

### Simple Usage

```tsx
import React from "react";
import {
    SchillingWidgets,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            <Card>
                <CardHeader>
                    <CardTitle>Welcome to Schilling Widgets</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button>Get Started</Button>
                </CardContent>
            </Card>
        </SchillingWidgets>
    );
}

export default App;
```

### Advanced Usage with TaskManager

```tsx
import React from "react";
import {
    SchillingWidgets,
    TaskManager,
    Task,
} from "@schilling-apps/schilling-widgets-system";

const sampleTasks: Task[] = [
    {
        id: "1",
        name: "Setup project",
        status: "In progress",
        reference: "PROJ-001",
        phase: "Development",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "John Doe",
        priority: "high",
        progress: 50,
    },
];

function App() {
    return (
        <SchillingWidgets>
            <TaskManager
                tasks={sampleTasks}
                height={600}
                enableInlineEdit={true}
            />
        </SchillingWidgets>
    );
}

export default App;
```

## 🎯 Usage Modes

### With Tailwind CSS (Recommended)

#### 1. Configure Tailwind

Include the library components in your `tailwind.config.js`:

```javascript
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary))",
                secondary: "hsl(var(--secondary))",
                destructive: "hsl(var(--destructive))",
                muted: "hsl(var(--muted))",
                accent: "hsl(var(--accent))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
            },
        },
    },
    plugins: [],
};
```

#### 2. Importar CSS de Tailwind

En tu archivo CSS principal:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Theme variables */
:root {
    --primary: 222.2 84% 4.9%;
    --secondary: 210 40% 96%;
    --destructive: 0 84.2% 60.2%;
    --muted: 210 40% 96%;
    --accent: 210 40% 96%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent-foreground: 222.2 84% 4.9%;
}

.dark {
    --primary: 210 40% 98%;
    --secondary: 222.2 84% 4.9%;
    --destructive: 0 62.8% 30.6%;
    --muted: 217.2 32.6% 17.5%;
    --accent: 217.2 32.6% 17.5%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent-foreground: 210 40% 98%;
}
```

#### 3. Use the Components

```tsx
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    TaskManager,
    ThemeProvider,
} from "@schilling-apps/schilling-widgets-system";

function MyApp() {
    return (
        <ThemeProvider>
            <Card>
                <CardHeader>
                    <CardTitle>My Application</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button>Click Me</Button>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
```

### Without Tailwind CSS

#### 1. Configure CSS-only Mode

```tsx
import {
    configureTheme,
    ThemeProvider,
    Button,
    Card,
} from "@schilling-apps/schilling-widgets-system";

// Configure at your application root
configureTheme({ useTailwind: false });

function App() {
    return (
        <ThemeProvider>
            <Card>
                <CardContent>
                    <Button>Works without Tailwind!</Button>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
```

#### 2. Customize Styles

```css
/* You can override the predefined styles */
.schilling-button {
    background-color: #your-color;
    border-radius: 8px;
    /* ... more custom styles */
}

.schilling-card {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    /* ... more custom styles */
}
```

## 🧩 Available Components

### Basic Components

#### Button

```tsx
import { Button } from "@schilling-apps/schilling-widgets-system";

<Button variant="default" size="md">
    Primary Button
</Button>
<Button variant="outline" size="sm">
    Secondary Button
</Button>
<Button variant="destructive" size="lg">
    Dangerous Button
</Button>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`

**Sizes**: `sm`, `md`, `lg`

#### Card

```tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@schilling-apps/schilling-widgets-system";

<Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Optional description</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Card content</p>
    </CardContent>
    <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>;
```

#### Input

```tsx
import { Input } from "@schilling-apps/schilling-widgets-system";

<Input
    type="text"
    placeholder="Enter your text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>;
```

### Advanced Components

#### Accordion

```tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@schilling-apps/schilling-widgets-system";

<Accordion
    type="single"
    collapsible
>
    <AccordionItem value="item-1">
        <AccordionTrigger>What is Schilling Widgets?</AccordionTrigger>
        <AccordionContent>
            A complete UI components library for React.
        </AccordionContent>
    </AccordionItem>
</Accordion>;
```

#### Tabs

```tsx
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@schilling-apps/schilling-widgets-system";

<Tabs defaultValue="tab1">
    <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
        <p>Tab 1 content</p>
    </TabsContent>
    <TabsContent value="tab2">
        <p>Tab 2 content</p>
    </TabsContent>
</Tabs>;
```

#### Tooltip

```tsx
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@schilling-apps/schilling-widgets-system";

<TooltipProvider>
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="outline">Hover here</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Additional information</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>;
```

## 🎛️ Advanced Widgets

### TaskManager

A complete task management widget with advanced features:

```tsx
import { TaskManager, Task } from "@schilling-apps/schilling-widgets-system";

const tasks: Task[] = [
    {
        id: "task-1",
        name: "Implement authentication",
        status: "In progress",
        reference: "REF-001",
        phase: "Development",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "John Doe",
        priority: "high",
        description: "Implement JWT authentication system",
        progress: 75,
        tags: ["auth", "security"],
    },
];

function MyTaskManager() {
    return (
        <TaskManager
            tasks={tasks}
            height={600}
            enableInlineEdit={true}
            enableRealTimeUpdates={true}
            onTaskUpdate={(id, updates) => {
                console.log("Task updated:", id, updates);
            }}
            onTaskDelete={(id) => {
                console.log("Task deleted:", id);
            }}
            onRefresh={() => {
                console.log("Refresh data");
            }}
        />
    );
}
```

#### TaskManager Features

-   Performance\*\*: Virtualization with react-window for large datasets
-   Features\*\*: Sorting, filtering, pagination, customizable columns
-   Editing\*\*: Inline editing, action menus, complete callbacks
-   UI/UX\*\*: Tooltips, visual states, responsive design, theming
-   Accessibility\*\*: Keyboard navigation, ARIA labels, semantic HTML

#### TaskManager Props

| Prop                    | Type           | Required | Default         | Description               |
| ----------------------- | -------------- | -------- | --------------- | ------------------------- |
| `tasks`                 | `Task[]`       | ✅       | -               | Array of tasks to display |
| `columns`               | `TaskColumn[]` | ❌       | DEFAULT_COLUMNS | Column configuration      |
| `loading`               | `boolean`      | ❌       | `false`         | Loading state             |
| `height`                | `number`       | ❌       | `600`           | Component height          |
| `enableInlineEdit`      | `boolean`      | ❌       | `true`          | Enable inline editing     |
| `enableRealTimeUpdates` | `boolean`      | ❌       | `false`         | Automatic updates         |
| `pageSize`              | `number`       | ❌       | `50`            | Items per page            |
| `onTaskUpdate`          | `function`     | ❌       | -               | Task update callback      |
| `onTaskDelete`          | `function`     | ❌       | -               | Task delete callback      |
| `onRefresh`             | `function`     | ❌       | -               | Data refresh callback     |

#### Task Interface

```typescript
interface Task {
    id: string; // Unique identifier
    name: string; // Task name
    status: TaskStatus; // Current status
    reference: string; // Reference/code
    phase: string; // Project phase
    expectedStart: string; // Expected start date (ISO)
    expectedDue: string; // Expected due date (ISO)
    assignee: string; // Assigned person
    progress?: number; // Progress (0-100)
    priority?: "low" | "medium" | "high";
    description?: string; // Detailed description
    tags?: string[]; // Tags
}

type TaskStatus =
    | "Overdue"
    | "Blocked"
    | "In progress"
    | "On hold"
    | "Not started";
```

### InfiniteTable

Virtualized table for large datasets:

```tsx
import { InfiniteTable } from "@schilling-apps/schilling-widgets-system";

const columns = [
    {
        key: "name",
        header: "Name",
        width: 200,
        render: (value) => <strong>{value}</strong>,
    },
    {
        key: "email",
        header: "Email",
        width: 250,
    },
];

<InfiniteTable
    data={users}
    columns={columns}
    height={400}
    onLoadMore={() => loadMoreUsers()}
    loading={loading}
/>;
```

## 🔧 Data Management

### Data Management (Built-in)

TanStack Query is included and configured automatically with `SchillingWidgets`. No manual setup required!

```tsx
import { SchillingWidgets } from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            <MyApplication />
        </SchillingWidgets>
    );
}
```

**Note**: If you're already using TanStack Query in your app, you can disable the internal provider:

```tsx
import { SchillingWidgets } from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets disableQueryProvider={true}>
            <MyApplication />
        </SchillingWidgets>
    );
}
```

````

### API Hooks

```tsx
import {
    useApiQuery,
    useApiMutation,
} from "@schilling-apps/schilling-widgets-system";

// For GET queries
function UserList() {
    const { data, loading, error } = useApiQuery<User[]>({
        queryKey: ["users"],
        url: "https://api.example.com/users",
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data?.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

// For POST/PUT/DELETE mutations
function CreateUser() {
    const { mutate, loading } = useApiMutation<User>({
        url: "https://api.example.com/users",
        method: "POST",
        onSuccess: (data) => {
            console.log("User created:", data);
        },
    });

    const handleSubmit = (userData: Partial<User>) => {
        mutate(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form */}
            <Button
                type="submit"
                disabled={loading}
            >
                {loading ? "Creating..." : "Create User"}
            </Button>
        </form>
    );
}
````

## 🎨 Theme Customization

### Theme Configuration

```tsx
import {
    configureTheme,
    ThemeProvider,
} from "@schilling-apps/schilling-widgets-system";

// Global configuration
configureTheme({
    useTailwind: true,
    theme: "dark",
    customColors: {
        primary: "hsl(210 100% 50%)",
        secondary: "hsl(210 50% 90%)",
    },
});

// Use with context
function App() {
    return (
        <ThemeProvider defaultTheme="dark">
            <MyApplication />
        </ThemeProvider>
    );
}
```

### Theme Hook

```tsx
import { useTheme } from "@schilling-apps/schilling-widgets-system";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
        </Button>
    );
}
```

## 📖 Complete Examples

### Basic Example

```tsx
import React from "react";
import {
    SchillingWidgets,
    ThemeProvider,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Button,
    Input,
} from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            <ThemeProvider defaultTheme="light">
                <div className="container mx-auto p-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Application</CardTitle>
                            <CardDescription>
                                Built with Schilling Widgets System
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input placeholder="Enter your name" />
                            <Button>Submit</Button>
                        </CardContent>
                    </Card>
                </div>
            </ThemeProvider>
        </SchillingWidgets>
    );
}

export default App;
```

### TaskManager Example

```tsx
import React, { useState, useCallback } from "react";
import {
    TaskManager,
    Task,
    TaskStatus,
} from "@schilling-apps/schilling-widgets-system";

const SAMPLE_TASKS: Task[] = [
    {
        id: "1",
        name: "Implement authentication",
        status: "In progress",
        reference: "AUTH-001",
        phase: "Development",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "John Doe",
        priority: "high",
        progress: 75,
        description: "Implement JWT authentication system",
        tags: ["auth", "security"],
    },
    {
        id: "2",
        name: "Design user interface",
        status: "Not started",
        reference: "UI-002",
        phase: "Design",
        expectedStart: "2025-01-10",
        expectedDue: "2025-01-20",
        assignee: "Jane Smith",
        priority: "medium",
        progress: 0,
        description: "Create mockups and prototypes",
        tags: ["ui", "design"],
    },
];

function TaskManagerDemo() {
    const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

    const handleTaskUpdate = useCallback(
        (taskId: string, updates: Partial<Task>) => {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, ...updates } : task
                )
            );
        },
        []
    );

    const handleTaskDelete = useCallback((taskId: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
            <TaskManager
                tasks={tasks}
                height={600}
                enableInlineEdit={true}
                enableRealTimeUpdates={true}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
                onRefresh={() => console.log("Refresh data")}
            />
        </div>
    );
}

export default TaskManagerDemo;
```

## 🔨 Development and Build

### Available Scripts

```bash
# Build the package
npm run build

# Development with watch mode
npm run dev

# Prepare for publication
npm run prepublishOnly
```

### Project Structure

```
schilling-widgets-system/
├── src/
│   ├── components/          # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Accordion.tsx
│   │   ├── AlertDialog.tsx
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Dialog.tsx
│   │   ├── DropdownMenu.tsx
│   │   ├── Select.tsx
│   │   ├── Tabs.tsx
│   │   ├── Tooltip.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ThemeProvider.tsx
│   ├── widgets/            # Advanced widgets
│   │   ├── InfiniteTable.tsx
│   │   └── TaskManager.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── QueryProvider.tsx
│   │   └── useApi.ts
│   ├── utils/              # Utilities
│   │   └── cn.ts
│   ├── styles/             # Styles
│   │   ├── globals.css
│   │   ├── css-only.css
│   │   └── index.ts
│   ├── examples/           # Usage examples
│   │   ├── comprehensive-example.tsx
│   │   ├── infinite-table-example.tsx
│   │   └── task-manager-example.tsx
│   └── index.ts           # Main exports
├── dist/                  # Compiled files
│   ├── index.cjs.js
│   ├── index.esm.js
│   ├── index.d.ts
│   └── styles.css
├── docs/                  # Additional documentation
├── package.json
├── tsconfig.json
├── rollup.config.js
├── tailwind.config.js
└── README.md
```

## 🤝 Contributing

### Adding New Components

1. **Install required dependencies**

```bash
npm install @radix-ui/react-[component-name]
```

2. **Create component file**

```tsx
// src/components/NewComponent.tsx
import React from "react";
import { cn } from "../utils/cn";

interface NewComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("schilling-new-component", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NewComponent.displayName = "NewComponent";
```

3. **Export component**

```tsx
// src/index.ts
export { NewComponent } from "./components/NewComponent";
export type { NewComponentProps } from "./components/NewComponent";
```

4. **Build package**

```bash
npm run build
```

### Available Radix UI Components

-   alog\*\*: `@radix-ui/react-dialog`
-   lect\*\*: `@radix-ui/react-select`
-   eckbox\*\*: `@radix-ui/react-checkbox`
-   itch\*\*: `@radix-ui/react-switch`
-   ertDialog\*\*: `@radix-ui/react-alert-dialog`
-   opdownMenu\*\*: `@radix-ui/react-dropdown-menu`
-   bs\*\*: `@radix-ui/react-tabs`
-   oltip\*\*: `@radix-ui/react-tooltip`
-   pover\*\*: `@radix-ui/react-popover`
-   cordion\*\*: `@radix-ui/react-accordion`

## 📄 License

MIT License - see LICENSE file for more details.

## 🆘 Support

To report issues or request features:

1. Create an issue in the repository
2. Include code examples when possible
3. Specify the package version you're using
4. Describe expected vs. actual behavior

## 🔄 Changelog

### v1.0.0

-   itial implementation with all basic components
-   pport for Tailwind CSS and CSS-only
-   skManager widget with advanced features
-   finiteTable widget with virtualization
-   mplete theme system
-   nStack Query integration
-   mplete documentation and examples

## 📚 Additional Resources

### Dependencies Documentation

-   ct](https://reactjs.org/docs)
-   eScript](https://www.typescriptlang.org/docs)
-   lwind CSS](https://tailwindcss.com/docs)
-   Stack Query](https://tanstack.com/query/latest)
-   ix UI](https://www.radix-ui.com/docs)
-   ide Icons](https://lucide.dev/icons)

### Project Examples

The examples included in the package show:

-   mprehensive Example\*\*: Usage of all components
-   skManager Example\*\*: Complete task widget implementation
-   finiteTable Example\*\*: Table with public API data

---

**Developed by Schilling Apps** - A complete solution for your React applications.
