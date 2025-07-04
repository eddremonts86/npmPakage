# Unified Documentation - Schilling Widgets System

This documentation consolidates all information about the **Schilling Widgets System** in one place to facilitate its use and understanding.

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Installation and Configuration](#installation-and-configuration)
3. [Basic Components](#basic-components)
4. [Advanced Components](#advanced-components)
5. [Specialized Widgets](#specialized-widgets)
6. [Data Management](#data-management)
7. [Theme Customization](#theme-customization)
8. [Practical Examples](#practical-examples)
9. [Development and Contributing](#development-and-contributing)
10. [API Reference](#api-reference)

---

## 🚀 Introduction

The **Schilling Widgets System** is a complete UI component library for React that offers **zero-configuration setup** while maintaining maximum flexibility:

- **🔧 No Setup Required**: Works immediately after installation - no build configuration, no CSS imports, no dependency management
- **🎨 Flexible Integration**: Seamlessly integrates with existing Tailwind CSS setups or works independently
- **📦 Complete Components**: All essential Shadcn UI components plus advanced widgets
- **🛠️ Advanced Widgets**: TaskManager and InfiniteTable with virtualization for complex data scenarios
- **📋 TypeScript First**: Complete types and IntelliSense out of the box
- **♿ Accessibility**: Meets WCAG standards with full keyboard navigation and screen reader support
- **⚡ Performance**: Optimized for large applications with tree-shaking and virtualization

### Key Benefits

✅ **Start coding immediately** - no configuration files, no build setup
✅ **Works anywhere** - Next.js, Create React App, Vite, or any React project
✅ **Bring your styles** - integrates with existing Tailwind setups
✅ **Complete styling included** - works without any CSS framework
✅ **Production ready** - thoroughly tested and optimized

### System Architecture

```text
Schilling Widgets System
├── 🎨 Zero-Config Styling (Built-in Tailwind + CSS fallback)
├── 📦 Basic Components (Button, Card, Input, etc.)
├── 🧩 Advanced Components (Accordion, Tabs, etc.)
├── 🎛️ Specialized Widgets (TaskManager, InfiniteTable)
├── 🔧 Data Management (TanStack Query bundled)
├── 🎭 Theme System (Light/Dark + Custom)
└── 🔌 Flexible Integration (Works with existing setups)
```

---

## 📦 Installation and Configuration

### Base Installation

```bash
# Install the main package
npm install @schilling-apps/schilling-widgets-system

# Install peer dependencies (only React is required)
npm install react react-dom
```

**That's it!** The package includes its own complete styling system and all dependencies are bundled:

- ✅ **Tailwind CSS utilities** - Pre-built and included
- ✅ **TanStack Query** - Bundled for data management
- ✅ **Lucide React icons** - All icons included
- ✅ **CSS-only fallback** - Works without any CSS framework

**No additional setup required!** The package works out of the box.

### 🚀 Default Mode (Zero Configuration)

The simplest way to use the package - no setup needed:

```tsx
import React from 'react';
import {
  SchillingWidgets,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets>
      <Card>
        <CardHeader>
          <CardTitle>Ready to use!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>No setup needed</Button>
        </CardContent>
      </Card>
    </SchillingWidgets>
  );
}
```

### 🎨 Integration with Existing Tailwind CSS

If your application **already uses Tailwind CSS** and you want the package to follow your app's design system, you can configure it to use your existing Tailwind setup.

#### 1. Configure Content Scanning

Add the package to your existing `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add this line to include package components in your build
    './node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your existing theme configuration
      colors: {
        // The package will use your app's color system
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        destructive: 'hsl(var(--destructive))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
    },
  },
  plugins: [
    // Your existing plugins
  ],
};
```

#### 2. Define CSS Variables in Your App

Ensure your application's CSS includes the design tokens that the package expects. Add these to your main CSS file:

```css
/* In your main CSS file */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Define your app's design tokens - the package will use these */
  --primary: 222.2 84% 4.9%; /* Your primary brand color */
  --secondary: 210 40% 96%; /* Your secondary color */
  --destructive: 0 84.2% 60.2%; /* Your error/destructive color */
  --muted: 210 40% 96%; /* Your muted/disabled color */
  --accent: 210 40% 96%; /* Your accent color */
  --border: 214.3 31.8% 91.4%; /* Your border color */
  --input: 214.3 31.8% 91.4%; /* Your input border color */
  --ring: 222.2 84% 4.9%; /* Your focus ring color */
  --background: 0 0% 100%; /* Your background color */
  --foreground: 222.2 84% 4.9%; /* Your main text color */

  /* Card colors */
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;

  /* Popover colors */
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;

  /* Muted text variations */
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent-foreground: 222.2 84% 4.9%;
}

/* Dark mode support */
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

#### 3. Use with Your Existing Theme

```tsx
import { ThemeProvider } from '@schilling-apps/schilling-widgets-system';

function MyApp() {
  return (
    <ThemeProvider>
      {/*
                Components will now use your app's Tailwind configuration
                and follow your design system
            */}
      <YourExistingComponents />
      <SchillingWidgetComponents />
    </ThemeProvider>
  );
}
```

### 🎭 CSS-Only Mode

For applications that don't use Tailwind CSS at all, you can configure the package to work with pure CSS:

#### 1. Configure CSS-Only Mode

```tsx
import {
  configureTheme,
  SchillingWidgets,
  Button,
  Card,
  CardContent,
} from '@schilling-apps/schilling-widgets-system';

// Configure CSS-only mode at application startup
configureTheme({ useTailwind: false });

function App() {
  return (
    <SchillingWidgets>
      <Card>
        <CardContent>
          <Button>Works with any CSS framework!</Button>
        </CardContent>
      </Card>
    </SchillingWidgets>
  );
}
```

In this mode, the package will use pre-built CSS classes instead of Tailwind utilities.

### ⚙️ Advanced Configuration Options

You can fine-tune the package behavior with advanced configuration:

```tsx
import { configureTheme } from '@schilling-apps/schilling-widgets-system';

// Advanced configuration
configureTheme({
  useTailwind: true, // Use Tailwind classes (default: true)
  enforceHostStyles: true, // Follow host app's styles when possible
  fallbackToCss: true, // Fallback to CSS-only if Tailwind fails
  customPrefix: 'my-app', // Custom CSS class prefix
  darkModeClass: 'dark-theme', // Custom dark mode class name
});
```

#### Configuration Options

- **`useTailwind`**: Whether to use Tailwind CSS classes or pure CSS
- **`enforceHostStyles`**: When true, the package will try to use the host app's existing Tailwind configuration
- **`fallbackToCss`**: Automatically fallback to CSS-only mode if Tailwind is not available
- **`customPrefix`**: Add a custom prefix to all CSS classes for isolation
- **`darkModeClass`**: Specify the class name used for dark mode detection

### 🎨 Customizing Styles

Regardless of the mode you choose, you can always override styles:

```css
/* Custom styles for your application */
.schilling-button {
  /* Override button styles */
  background: linear-gradient(45deg, #your-color, #another-color);
  border-radius: 12px;
}

.schilling-card {
  /* Override card styles */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--your-brand-color);
}

/* Dark mode customizations */
.dark .schilling-button {
  background: linear-gradient(45deg, #dark-color, #another-dark);
}
```

---

## 🧩 Basic Components

### Button

The Button component offers multiple variants and sizes.

#### Basic Usage

```tsx
import { Button } from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <div className='flex gap-2'>
      <Button variant='default'>Default</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='destructive'>Destructive</Button>
    </div>
  );
}
```

#### Button Props

| Prop       | Type                                                                          | Default     | Description               |
| ---------- | ----------------------------------------------------------------------------- | ----------- | ------------------------- |
| `variant`  | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Button style variant      |
| `size`     | `'sm' \| 'md' \| 'lg'`                                                        | `'md'`      | Button size               |
| `disabled` | `boolean`                                                                     | `false`     | Disabled state            |
| `asChild`  | `boolean`                                                                     | `false`     | Render as child component |

#### Available Variants

- **default**: Primary button with solid background
- **outline**: Button with border and transparent background
- **destructive**: Red button for dangerous actions
- **secondary**: Secondary button with muted colors
- **ghost**: Transparent button with hover effects
- **link**: Button styled as a link

#### Available Sizes

- **sm**: Small button (24px height)
- **md**: Medium button (32px height)
- **lg**: Large button (40px height)

### Card

Container component for grouping related content.

#### Basic Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

#### Card Components

- **Card**: Main container
- **CardHeader**: Header section
- **CardTitle**: Title text
- **CardDescription**: Description text
- **CardContent**: Main content area
- **CardFooter**: Footer section

### Input

Input field component with various types and states.

#### Basic Usage

```tsx
import { Input } from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <div className='space-y-2'>
      <Input type='text' placeholder='Enter text' />
      <Input type='email' placeholder='Enter email' />
      <Input type='password' placeholder='Enter password' />
      <Input type='text' placeholder='Disabled' disabled />
    </div>
  );
}
```

#### Input Props

| Prop          | Type       | Default     | Description      |
| ------------- | ---------- | ----------- | ---------------- |
| `type`        | `string`   | `'text'`    | Input type       |
| `placeholder` | `string`   | `undefined` | Placeholder text |
| `disabled`    | `boolean`  | `false`     | Disabled state   |
| `value`       | `string`   | `undefined` | Controlled value |
| `onChange`    | `function` | `undefined` | Change handler   |

### LoadingSpinner

Animated loading indicator component.

#### Basic Usage

```tsx
import { LoadingSpinner } from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <div className='flex gap-4'>
      <LoadingSpinner size='sm' />
      <LoadingSpinner size='md' />
      <LoadingSpinner size='lg' />
    </div>
  );
}
```

#### LoadingSpinner Props

| Prop   | Type                   | Default | Description  |
| ------ | ---------------------- | ------- | ------------ |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'`  | Spinner size |

---

## 🎛️ Advanced Components

### Accordion

Collapsible panels for organizing content.

#### Basic Usage

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Tabs

Tab navigation component for switching between different views.

#### Basic Usage

```tsx
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <p>Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value='password'>
        <p>Change your password here.</p>
      </TabsContent>
    </Tabs>
  );
}
```

### Dialog

Modal dialog component for displaying content in an overlay.

#### Basic Usage

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='name' className='text-right'>
              Name
            </label>
            <Input
              id='name'
              defaultValue='Pedro Duarte'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='username' className='text-right'>
              Username
            </label>
            <Input
              id='username'
              defaultValue='@peduarte'
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Tooltip

Tooltip component for displaying additional information on hover.

#### Basic Usage

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@schilling-apps/schilling-widgets-system';

function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

---

## 🎛️ Specialized Widgets

### TaskManager

Complete task management widget with advanced features.

#### Basic Usage

```tsx
import { TaskManager, Task } from '@schilling-apps/schilling-widgets-system';

const tasks: Task[] = [
  {
    id: 'task-1',
    name: 'Implement authentication',
    status: 'In progress',
    reference: 'REF-001',
    phase: 'Development',
    expectedStart: '2025-01-01',
    expectedDue: '2025-01-15',
    assignee: 'John Doe',
    priority: 'high',
    description: 'Implement JWT authentication system',
    progress: 75,
    tags: ['auth', 'security'],
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
        console.log('Task updated:', id, updates);
      }}
      onTaskDelete={id => {
        console.log('Task deleted:', id);
      }}
      onRefresh={() => {
        console.log('Refresh data');
      }}
    />
  );
}
```

#### TaskManager Features

- **🚀 Performance**: Virtualization with react-window for large data volumes
- **📊 Features**: Sorting, filtering, pagination, customizable columns
- **✏️ Editing**: Inline editing, action menus, complete callbacks
- **🎨 UI/UX**: Tooltips, visual states, responsive design, theming
- **♿ Accessibility**: Keyboard navigation, ARIA labels, semantic HTML

#### TaskManager Props

| Prop                    | Type           | Required | Default         | Description               |
| ----------------------- | -------------- | -------- | --------------- | ------------------------- |
| `tasks`                 | `Task[]`       | ✅       | -               | Array of tasks to display |
| `columns`               | `TaskColumn[]` | ❌       | DEFAULT_COLUMNS | Column configuration      |
| `loading`               | `boolean`      | ❌       | `false`         | Loading state             |
| `height`                | `number`       | ❌       | `600`           | Component height          |
| `enableInlineEdit`      | `boolean`      | ❌       | `true`          | Enable inline editing     |
| `enableRealTimeUpdates` | `boolean`      | ❌       | `false`         | Auto updates              |
| `pageSize`              | `number`       | ❌       | `50`            | Items per page            |
| `onTaskUpdate`          | `function`     | ❌       | -               | Update task callback      |
| `onTaskDelete`          | `function`     | ❌       | -               | Delete task callback      |
| `onRefresh`             | `function`     | ❌       | -               | Refresh data callback     |

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
  priority?: 'low' | 'medium' | 'high';
  description?: string; // Detailed description
  tags?: string[]; // Tags
}

type TaskStatus =
  | 'Overdue'
  | 'Blocked'
  | 'In progress'
  | 'On hold'
  | 'Not started';
```

### InfiniteTable

Virtualized table for large datasets.

#### Basic Usage

```tsx
import { InfiniteTable } from '@schilling-apps/schilling-widgets-system';

const columns = [
  {
    key: 'name',
    header: 'Name',
    width: 200,
    render: value => <strong>{value}</strong>,
  },
  {
    key: 'email',
    header: 'Email',
    width: 250,
  },
];

function MyInfiniteTable() {
  return (
    <InfiniteTable
      data={users}
      columns={columns}
      height={400}
      onLoadMore={() => loadMoreUsers()}
      loading={loading}
    />
  );
}
```

---

## 🔧 Data Management

### QueryProvider

TanStack Query provider with optimized configuration.

#### Basic Usage

```tsx
import { QueryProvider } from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <QueryProvider>
      <MyApplication />
    </QueryProvider>
  );
}
```

### API Hooks

```tsx
import {
  useApiQuery,
  useApiMutation,
} from '@schilling-apps/schilling-widgets-system';

// For GET queries
function UserList() {
  const { data, loading, error } = useApiQuery<User[]>({
    queryKey: ['users'],
    url: 'https://api.example.com/users',
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// For POST/PUT/DELETE mutations
function CreateUser() {
  const { mutate, loading } = useApiMutation<User>({
    url: 'https://api.example.com/users',
    method: 'POST',
    onSuccess: data => {
      console.log('User created:', data);
    },
  });

  const handleSubmit = (userData: Partial<User>) => {
    mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form content */}
      <Button type='submit' disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </Button>
    </form>
  );
}
```

---

## 🎨 Theme Customization

### Theme Configuration

```tsx
import {
  configureTheme,
  ThemeProvider,
} from '@schilling-apps/schilling-widgets-system';

// Global configuration
configureTheme({
  useTailwind: true,
  theme: 'dark',
  customColors: {
    primary: 'hsl(210 100% 50%)',
    secondary: 'hsl(210 50% 90%)',
  },
});

// Usage with context
function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <MyApplication />
    </ThemeProvider>
  );
}
```

### Theme Hook

```tsx
import { useTheme } from '@schilling-apps/schilling-widgets-system';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}
```

---

## 📖 Practical Examples

### Complete Application Example

```tsx
import React, { useState, useCallback } from 'react';
import {
  ThemeProvider,
  QueryProvider,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  TaskManager,
  Task,
  TaskStatus,
} from '@schilling-apps/schilling-widgets-system';

const SAMPLE_TASKS: Task[] = [
  {
    id: '1',
    name: 'Implement authentication',
    status: 'In progress',
    reference: 'AUTH-001',
    phase: 'Development',
    expectedStart: '2025-01-01',
    expectedDue: '2025-01-15',
    assignee: 'John Doe',
    priority: 'high',
    progress: 75,
    description: 'Implement JWT authentication system',
    tags: ['auth', 'security'],
  },
  {
    id: '2',
    name: 'Design user interface',
    status: 'Not started',
    reference: 'UI-002',
    phase: 'Design',
    expectedStart: '2025-01-10',
    expectedDue: '2025-01-20',
    assignee: 'Jane Smith',
    priority: 'medium',
    progress: 0,
    description: 'Create mockups and prototypes',
    tags: ['ui', 'design'],
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

  const handleTaskUpdate = useCallback(
    (taskId: string, updates: Partial<Task>) => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, ...updates } : task
        )
      );
    },
    []
  );

  const handleTaskDelete = useCallback((taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  return (
    <QueryProvider>
      <ThemeProvider defaultTheme='light'>
        <div className='container mx-auto p-4'>
          <Card className='mb-6'>
            <CardHeader>
              <CardTitle>My Application</CardTitle>
              <CardDescription>
                Built with Schilling Widgets System
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <Input placeholder='Enter your name' />
              <Button>Submit</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Task Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskManager
                tasks={tasks}
                height={600}
                enableInlineEdit={true}
                enableRealTimeUpdates={true}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
                onRefresh={() => console.log('Refresh data')}
              />
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
```

---

## 🔨 Development and Contributing

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

### Available Scripts

```bash
# Build the package
npm run build

# Development with watch mode
npm run dev

# Prepare for publishing
npm run prepublishOnly
```

### Adding New Components

1. **Install required dependencies**

```bash
npm install @radix-ui/react-[component-name]
```

2. **Create component file**

```tsx
// src/components/NewComponent.tsx
import React from 'react';
import { cn } from '../utils/cn';

interface NewComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('schilling-new-component', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NewComponent.displayName = 'NewComponent';
```

3. **Export component**

```tsx
// src/index.ts
export { NewComponent } from './components/NewComponent';
export type { NewComponentProps } from './components/NewComponent';
```

4. **Build package**

```bash
npm run build
```

### Available Radix UI Components

- **Dialog**: `@radix-ui/react-dialog`
- **Select**: `@radix-ui/react-select`
- **Checkbox**: `@radix-ui/react-checkbox`
- **Switch**: `@radix-ui/react-switch`
- **AlertDialog**: `@radix-ui/react-alert-dialog`
- **DropdownMenu**: `@radix-ui/react-dropdown-menu`
- **Tabs**: `@radix-ui/react-tabs`
- **Tooltip**: `@radix-ui/react-tooltip`
- **Popover**: `@radix-ui/react-popover`
- **Accordion**: `@radix-ui/react-accordion`

### Best Practices

1. **Components**: Keep components small and focused
2. **Types**: Provide comprehensive TypeScript types
3. **Documentation**: Include JSDoc comments for public APIs
4. **Testing**: Test components in isolation
5. **Performance**: Use React.memo and useMemo when needed

---

## 🔍 API Reference

### Component Props

All components extend their respective HTML element props and include additional custom props.

#### Common Props

| Prop        | Type        | Description               |
| ----------- | ----------- | ------------------------- |
| `className` | `string`    | Additional CSS classes    |
| `children`  | `ReactNode` | Child components          |
| `asChild`   | `boolean`   | Render as child component |

#### Styling Props

| Prop       | Type      | Description       |
| ---------- | --------- | ----------------- |
| `variant`  | `string`  | Component variant |
| `size`     | `string`  | Component size    |
| `disabled` | `boolean` | Disabled state    |

### Hook APIs

#### useTheme

```tsx
const { theme, setTheme } = useTheme();
```

Returns:

- `theme`: Current theme ('light' | 'dark')
- `setTheme`: Function to change theme

#### useApiQuery

```tsx
const { data, loading, error, refetch } = useApiQuery<T>(options);
```

Parameters:

- `queryKey`: Unique query key
- `url`: API endpoint
- `options`: Query configuration

Returns:

- `data`: Query result
- `loading`: Loading state
- `error`: Error object
- `refetch`: Function to refetch data

#### useApiMutation

```tsx
const { mutate, loading, error } = useApiMutation<T>(options);
```

Parameters:

- `mutationFn`: Mutation function
- `options`: Mutation configuration

Returns:

- `mutate`: Function to trigger mutation
- `loading`: Loading state
- `error`: Error object

### Utility Functions

#### cn (className utility)

```tsx
import { cn } from '@schilling-apps/schilling-widgets-system';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  customClass
);
```

#### configureTheme

```tsx
import { configureTheme } from '@schilling-apps/schilling-widgets-system';

configureTheme({
  useTailwind: boolean,
  theme: 'light' | 'dark',
  customColors: Record<string, string>,
});
```

---

**Documentation created for Schilling Widgets System v1.0.0**

**Developed by Schilling Apps** - A complete solution for React applications.
