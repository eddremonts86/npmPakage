# Schilling Widgets System

![Version](https://img.shields.io/badge/version-2.1.1-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)
![React](https://img.shields.io/badge/React-18+-blue.svg)

A comprehensive UI components library for React applications with TypeScript. Built with **Shadcn UI** design system, **TanStack Query** for data management, and **Radix UI** primitives for accessibility. Works out of the box with no additional configuration required!

## 🚀 Key Features

### 🎨 **Complete Design System**

- ✅ **Shadcn UI Design System** - Beautiful, modern components
- ✅ **Built-in Tailwind CSS** - Pre-compiled utilities included
- ✅ **Dark/Light Theme** - Full theme support with custom CSS variables
- ✅ **Responsive Design** - Mobile-first, works on all screen sizes
- ✅ **CSS-only Fallback** - Works without any CSS framework

### 📦 **Rich Component Library**

- ✅ **Basic Components**: Button, Card, Input, Dialog, LoadingSpinner
- ✅ **Advanced Components**: Accordion, AlertDialog, Avatar, Badge, Checkbox, DropdownMenu, Select, Tabs, Tooltip
- ✅ **Advanced Widgets**: InfiniteTable (virtualized), TaskManager (full-featured)
- ✅ **Accessibility First** - Built with Radix UI primitives
- ✅ **TypeScript Ready** - Complete type definitions included

### 🛠️ **Developer Experience**

- ✅ **Zero Configuration** - Works immediately after installation
- ✅ **TanStack Query** - Built-in data management and caching
- ✅ **Tree Shaking** - Only imports what you use
- ✅ **Self-contained** - All dependencies bundled, no conflicts
- ✅ **Dual Development Environments** - CSS-based and Tailwind-based testing

## 📦 Installation

```bash
npm install schilling-widgets-system
```

### Peer Dependencies

Only React and ReactDOM are required:

```bash
npm install react react-dom
```

**That's it!** Everything else is bundled:

- ✅ Tailwind CSS utilities (pre-compiled)
- ✅ TanStack Query (data management)
- ✅ Lucide React (icons)
- ✅ Radix UI primitives (accessibility)
- ✅ All styling and animations

## 🎯 Quick Start

### Basic Example

```tsx
import React from "react";
import {
    SchillingWidgets,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            <div className="p-6 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome to Schilling Widgets</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            A complete UI component library that works out of
                            the box!
                        </p>

                        <div className="flex gap-2 mb-4">
                            <Button>Primary Button</Button>
                            <Button variant="outline">Secondary Button</Button>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Welcome!</DialogTitle>
                                    <DialogDescription>
                                        This dialog demonstrates the
                                        accessibility and animation features.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button>Close</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>
            </div>
        </SchillingWidgets>
    );
}

export default App;
```

## 🧩 Core Components

### Button

Modern button with multiple variants and sizes:

```tsx
import { Button } from 'schilling-widgets-system';

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card

Flexible card component for content organization:

```tsx
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "schilling-widgets-system";

<Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Optional description</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Your content here...</p>
    </CardContent>
    <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>;
```

### Dialog

Accessible modal dialog with animations and proper focus management:

```tsx
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "schilling-widgets-system";

<Dialog>
    <DialogTrigger asChild>
        <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
                Are you sure you want to proceed? This action cannot be undone.
            </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>;
```

### Input

Styled input with proper focus states:

```tsx
import { Input } from "schilling-widgets-system";

<Input
    type="text"
    placeholder="Enter your name..."
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>;
```

## 🎛️ Advanced Components

### Accordion

Collapsible content sections:

```tsx
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "schilling-widgets-system";

<Accordion
    type="single"
    collapsible
>
    <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
    </AccordionItem>
</Accordion>;
```

### Tabs

Tabbed interface for organizing content:

```tsx
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "schilling-widgets-system";

<Tabs defaultValue="overview">
    <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
        <p>Overview content...</p>
    </TabsContent>
    <TabsContent value="details">
        <p>Details content...</p>
    </TabsContent>
    <TabsContent value="settings">
        <p>Settings content...</p>
    </TabsContent>
</Tabs>;
```

### Select

Dropdown select with search and keyboard navigation:

```tsx
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "schilling-widgets-system";

<Select>
    <SelectTrigger>
        <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
    </SelectContent>
</Select>;
```

## 🎯 Advanced Widgets

### TaskManager

Complete task management widget with virtualization, filtering, and real-time updates:

```tsx
import { TaskManager, Task, TaskStatus } from "schilling-widgets-system";

const tasks: Task[] = [
    {
        id: "1",
        title: "Complete project documentation",
        description: "Write comprehensive README and setup guides",
        status: "In Progress",
        priority: "High",
        assignee: "John Doe",
        dueDate: "2024-12-31",
        tags: ["documentation", "high-priority"],
    },
    {
        id: "2",
        title: "Implement user authentication",
        description: "Add OAuth and JWT authentication",
        status: "Not started",
        priority: "Medium",
        assignee: "Jane Smith",
        dueDate: "2024-12-15",
        tags: ["auth", "security"],
    },
];

function TaskManagerExample() {
    const handleTaskUpdate = (updatedTask: Task) => {
        console.log("Task updated:", updatedTask);
        // Update your state/API here
    };

    const handleTaskDelete = (taskId: string) => {
        console.log("Task deleted:", taskId);
        // Delete from your state/API here
    };

    return (
        <TaskManager
            tasks={tasks}
            onTaskUpdate={handleTaskUpdate}
            onTaskDelete={handleTaskDelete}
            enableInlineEdit={true}
            enableRealTimeUpdates={false}
            height={600}
            pageSize={25}
        />
    );
}
```

#### TaskManager Props

| Prop                    | Type                   | Required | Default         | Description                 |
| ----------------------- | ---------------------- | -------- | --------------- | --------------------------- |
| `tasks`                 | `Task[]`               | ✅       | -               | Array of tasks to display   |
| `columns`               | `TaskColumn[]`         | ❌       | Default columns | Custom column configuration |
| `loading`               | `boolean`              | ❌       | `false`         | Show loading state          |
| `height`                | `number`               | ❌       | `600`           | Component height in pixels  |
| `enableInlineEdit`      | `boolean`              | ❌       | `true`          | Enable inline editing       |
| `enableRealTimeUpdates` | `boolean`              | ❌       | `false`         | Auto-refresh data           |
| `pageSize`              | `number`               | ❌       | `50`            | Items per page              |
| `onTaskUpdate`          | `(task: Task) => void` | ❌       | -               | Task update callback        |
| `onTaskDelete`          | `(id: string) => void` | ❌       | -               | Task delete callback        |
| `onRefresh`             | `() => void`           | ❌       | -               | Refresh callback            |

#### Task Interface

```typescript
interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: "Low" | "Medium" | "High" | "Critical";
    assignee?: string;
    dueDate?: string;
    tags?: string[];
}

type TaskStatus =
    | "Not started"
    | "In Progress"
    | "Completed"
    | "Cancelled"
    | "Overdue";
```

### InfiniteTable

Virtualized table for large datasets with sorting and filtering:

```tsx
import { InfiniteTable, TableColumn } from "schilling-widgets-system";

const columns: TableColumn[] = [
    { key: "id", label: "ID", width: 80 },
    { key: "name", label: "Name", width: 200 },
    { key: "email", label: "Email", width: 250 },
    { key: "status", label: "Status", width: 120 },
];

const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        status: "Inactive",
    },
    // ... more data
];

<InfiniteTable
    data={data}
    columns={columns}
    height={400}
    loading={false}
    onRowClick={(row) => console.log("Row clicked:", row)}
/>;
```

## 🔧 Data Management

### Built-in TanStack Query

TanStack Query is included and configured automatically:

```tsx
import { SchillingWidgets } from "schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            {/* Your app components - Query client is automatically provided */}
        </SchillingWidgets>
    );
}
```

### API Hooks

Built-in hooks for common API operations:

```tsx
import { useApiQuery, useApiMutation } from "schilling-widgets-system";

// GET request
function UserList() {
    const { data, loading, error } = useApiQuery<User[]>({
        queryKey: ["users"],
        queryFn: () => fetch("/api/users").then((res) => res.json()),
    });

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data?.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}

// POST/PUT/DELETE request
function CreateUser() {
    const { mutate, loading } = useApiMutation<User>({
        mutationFn: (userData) =>
            fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            }).then((res) => res.json()),
    });

    const handleCreate = (userData: User) => {
        mutate(userData, {
            onSuccess: () => console.log("User created successfully"),
            onError: (error) => console.error("Error creating user:", error),
        });
    };

    return (
        <Button
            onClick={() => handleCreate(newUser)}
            disabled={loading}
        >
            {loading ? "Creating..." : "Create User"}
        </Button>
    );
}
```

## 🎨 Theme System

### Theme Provider

Configure themes for your application:

```tsx
import { ThemeProvider, useTheme } from "schilling-widgets-system";

function App() {
    return (
        <ThemeProvider
            defaultTheme="light"
            storageKey="my-app-theme"
        >
            <MyApp />
        </ThemeProvider>
    );
}

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            variant="outline"
        >
            {theme === "light" ? "🌙" : "☀️"}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
    );
}
```

### Custom CSS Variables

The theme system uses CSS variables that you can customize:

```css
:root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
}

.dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    /* ... other dark theme values */
}
```

## 🛠️ Development

### Development Environments

This package includes two development environments for testing:

- **CSS-based** (port 5173): Uses pre-compiled CSS utilities
- **Tailwind-based** (port 5174): Uses Tailwind CSS directly

Both environments are visually identical and include all examples.

### Running Development Servers

```bash
# From project root
npm run dev:css         # Start CSS-based environment
npm run dev:tailwind    # Start Tailwind-based environment

# Or use the provided scripts
./scripts/LAUNCH-BOTH.bat     # Windows - launch both environments
./scripts/TEST-FINAL.bat      # Windows - build and test everything
```

### Building

```bash
# Build the package
npm run build

# Build with watch mode
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Full validation
npm run validate
```

### Publishing

```bash
# Patch version
npm run publish:patch

# Minor version
npm run publish:minor

# Major version
npm run publish:major

# Or build and publish manually
npm run prepublishOnly
npm publish --access public
```

## 📁 Project Structure

```
schilling-widgets-system/
├── src/
│   ├── components/          # UI Components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Dialog.tsx
│   │   ├── Input.tsx
│   │   ├── Accordion.tsx
│   │   ├── AlertDialog.tsx
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Checkbox.tsx
│   │   ├── DropdownMenu.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Select.tsx
│   │   ├── Tabs.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── Tooltip.tsx
│   │   └── SchillingWidgets.tsx
│   ├── widgets/            # Advanced Widgets
│   │   ├── TaskManager.tsx
│   │   └── InfiniteTable.tsx
│   ├── hooks/             # Custom Hooks
│   │   ├── useApi.ts
│   │   └── QueryProvider.tsx
│   ├── utils/             # Utilities
│   │   └── cn.ts
│   ├── styles/            # Styling
│   │   ├── globals.css
│   │   ├── schilling-widgets.css
│   │   └── design-system.ts
│   └── index.ts           # Main exports
├── develoments/           # Development environments
│   ├── css-based/         # CSS-based testing
│   │   └── src/examples/  # Example components
│   └── tailwind-based/    # Tailwind-based testing
│       └── src/examples/  # Example components
├── scripts/               # Build scripts
│   ├── LAUNCH-BOTH.bat
│   ├── TEST-FINAL.bat
│   └── publish.bat
├── dist/                  # Built package
├── package.json
└── README.md
```

## 🔄 Integration Options

### With Existing Tailwind CSS

If your project already uses Tailwind CSS:

```javascript
// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/schilling-widgets-system/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Your custom theme extensions
        },
    },
};
```

### With Existing TanStack Query

If you already have TanStack Query configured:

```tsx
import { SchillingWidgets } from "schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets disableQueryProvider={true}>
            {/* Your components */}
        </SchillingWidgets>
    );
}
```

### CSS-only Mode

For projects without Tailwind CSS:

```tsx
import { configureTheme } from "schilling-widgets-system";

// Configure to use CSS-only mode
configureTheme({ useTailwind: false });
```

## 🔗 Links and Resources

- **NPM Package**: `schilling-widgets-system`
- **GitHub**: [Repository Link]
- **Documentation**: This README
- **Examples**: Available in `develoments/` folders
- **TypeScript**: Full type definitions included

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions, issues, or feature requests:

- Open an issue on GitHub
- Check the examples in `develoments/` folders
- Review the TypeScript definitions for API details

---

**Made with ❤️ by Edd Remonts and the Schilling Apps team**
