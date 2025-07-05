# Schilling Widgets System

A complete UI components library for React applications with TypeScript that **works out of the box** - no additional setup required! Built with flexibility in mind, it can integrate seamlessly with existing Tailwind CSS setups or work independently with its own styling system.

## 🚀 Key Features

### 🎨 Zero-Setup Styling System

- **🔧 No Configuration Required**: Works immediately after installation
- **🎨 Built-in Tailwind Utilities**: Pre-compiled and included in the package
- **🔗 Existing Tailwind Integration**: Seamlessly integrates with your app's Tailwind setup
- **💄 CSS-only Fallback**: Works without any CSS framework
- **🌙 Theme Support**: Light/dark mode with customizable colors

### 📦 Complete Component Library

- **Basic Components**: Button, Card, Input, Dialog, LoadingSpinner
- **Advanced Components**: Accordion, AlertDialog, Avatar, Badge, Checkbox, DropdownMenu, Select, Tabs, Tooltip
- **Advanced Widgets**: InfiniteTable, TaskManager with virtualization
- **Complete Shadcn UI**: Full set of accessible and modern components

### 🛠️ Development Experience

- **TypeScript First**: Complete type safety and IntelliSense
- **TanStack Query**: Efficient data and state management (bundled)
- **Optimized**: Tree-shaking and only loads what you need
- **Accessible**: Built following accessibility best practices
- **Self-Contained**: All dependencies bundled - no peer dependency conflicts

## 📦 Installation

```bash
npm install schilling-widgets-system
```

### Peer Dependencies

Only React and ReactDOM are required:

```bash
npm install react react-dom
```

**That's it!** The package includes its own styling system and all dependencies are bundled:

- ✅ **Tailwind CSS utilities** - Pre-built and included
- ✅ **TanStack Query** - Bundled for data management
- ✅ **Lucide React icons** - All icons included
- ✅ **CSS-only fallback** - Works without any CSS framework

**No additional setup required!** The package works out of the box.

## 🎯 Quick Start

### Simple Usage

```tsx
import React from 'react';
import {
  SchillingWidgets,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from 'schilling-widgets-system';

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
import React from 'react';
import { SchillingWidgets, TaskManager, Task } from 'schilling-widgets-system';

const sampleTasks: Task[] = [
  {
    id: '1',
    name: 'Setup project',
    status: 'In progress',
    reference: 'PROJ-001',
    phase: 'Development',
    expectedStart: '2025-01-01',
    expectedDue: '2025-01-15',
    assignee: 'John Doe',
    priority: 'high',
    progress: 50,
  },
];

function App() {
  return (
    <SchillingWidgets>
      <TaskManager tasks={sampleTasks} height={600} enableInlineEdit={true} />
    </SchillingWidgets>
  );
}

export default App;
```

## 🎯 Usage Modes

The Schilling Widgets System is designed to work **independently** without requiring any additional CSS framework setup. However, it offers flexible integration options:

### 🚀 Default Mode (Recommended)

**Zero configuration required!** Just import and use:

```tsx
import React from 'react';
import {
  SchillingWidgets,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from 'schilling-widgets-system';

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

The package includes:

- ✅ Pre-built Tailwind utilities
- ✅ Complete styling system
- ✅ Dark/light theme support
- ✅ All necessary dependencies

### 🎨 Integration with Existing Tailwind CSS

If your application **already uses Tailwind CSS** and you want the package to follow your app's design system:

#### 1. Configure Content Scanning

Add the package to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add this line to include package components
    './node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your existing theme configuration
      colors: {
        // The package will use your app's color system
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        // ... rest of your colors
      },
    },
  },
  plugins: [
    // Your existing plugins
  ],
};
```

#### 2. Define CSS Variables

Ensure your app's CSS includes the design tokens the package expects:

```css
/* In your main CSS file */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Define your app's design tokens */
  --primary: 222.2 84% 4.9%; /* Your primary color */
  --secondary: 210 40% 96%; /* Your secondary color */
  --destructive: 0 84.2% 60.2%; /* Your destructive/error color */
  --muted: 210 40% 96%; /* Your muted color */
  --accent: 210 40% 96%; /* Your accent color */
  --border: 214.3 31.8% 91.4%; /* Your border color */
  --input: 214.3 31.8% 91.4%; /* Your input border color */
  --ring: 222.2 84% 4.9%; /* Your focus ring color */
  --background: 0 0% 100%; /* Your background color */
  --foreground: 222.2 84% 4.9%; /* Your text color */

  /* Card colors */
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;

  /* Popover colors */
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;

  /* Muted variations */
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent-foreground: 222.2 84% 4.9%;
}

.dark {
  /* Dark mode versions of your colors */
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

#### 3. Use with Your Theme

```tsx
import { ThemeProvider } from '@schilling-apps/schilling-widgets-system';

function MyApp() {
  return (
    <ThemeProvider>
      {/* Components will now use your app's Tailwind configuration */}
      <YourAppComponents />
    </ThemeProvider>
  );
}
```

### 🎭 CSS-Only Mode

For applications that don't use Tailwind CSS at all:

```tsx
import {
  configureTheme,
  SchillingWidgets,
  Button,
} from '@schilling-apps/schilling-widgets-system';

// Configure CSS-only mode
configureTheme({ useTailwind: false });

function App() {
  return (
    <SchillingWidgets>
      <Button>Works with any CSS framework!</Button>
    </SchillingWidgets>
  );
}
```

### ⚙️ Advanced Configuration

You can also configure the theme system programmatically:

```tsx
import { configureTheme } from '@schilling-apps/schilling-widgets-system';

// Configure theme behavior
configureTheme({
  useTailwind: true, // Use Tailwind classes
  enforceHostStyles: true, // Follow host app's styles
  fallbackToCss: true, // Fallback to CSS-only if needed
  customPrefix: 'my-app', // Custom CSS prefix
});
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
} from '@schilling-apps/schilling-widgets-system';

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
import { Input } from '@schilling-apps/schilling-widgets-system';

<Input
  type='text'
  placeholder='Enter your text'
  value={value}
  onChange={e => setValue(e.target.value)}
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
} from '@schilling-apps/schilling-widgets-system';

<Accordion type='single' collapsible>
  <AccordionItem value='item-1'>
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
} from '@schilling-apps/schilling-widgets-system';

<Tabs defaultValue='tab1'>
  <TabsList>
    <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
    <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value='tab1'>
    <p>Tab 1 content</p>
  </TabsContent>
  <TabsContent value='tab2'>
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
} from '@schilling-apps/schilling-widgets-system';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant='outline'>Hover here</Button>
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

- ormance\*\*: Virtualization with react-window for large datasets
- ures\*\*: Sorting, filtering, pagination, customizable columns
- ing\*\*: Inline editing, action menus, complete callbacks
- X\*\*: Tooltips, visual states, responsive design, theming
- ssibility\*\*: Keyboard navigation, ARIA labels, semantic HTML

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

Virtualized table for large datasets:

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
import { SchillingWidgets } from '@schilling-apps/schilling-widgets-system';

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
import { SchillingWidgets } from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets disableQueryProvider={true}>
      <MyApplication />
    </SchillingWidgets>
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
      {/* Form */}
      <Button type='submit' disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </Button>
    </form>
  );
}
```

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

// Use with context
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

## 📖 Complete Examples

### Basic Example

```tsx
import React from 'react';
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
} from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets>
      <ThemeProvider defaultTheme='light'>
        <div className='container mx-auto p-4'>
          <Card>
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
        </div>
      </ThemeProvider>
    </SchillingWidgets>
  );
}

export default App;
```

### TaskManager Example

```tsx
import React, { useState, useCallback } from 'react';
import {
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

function TaskManagerDemo() {
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
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>Task Manager</h1>
      <TaskManager
        tasks={tasks}
        height={600}
        enableInlineEdit={true}
        enableRealTimeUpdates={true}
        onTaskUpdate={handleTaskUpdate}
        onTaskDelete={handleTaskDelete}
        onRefresh={() => console.log('Refresh data')}
      />
    </div>
  );
}

export default TaskManagerDemo;
```

## ✨ Why Choose Schilling Widgets System?

### 🚀 **Zero Configuration**

- **Start coding immediately** - no build setup, no configuration files
- **No dependency conflicts** - everything is bundled and tested together
- **Works anywhere** - Next.js, Create React App, Vite, or any React project

### 🎯 **Maximum Flexibility**

- **Bring your own styles** - integrates with existing Tailwind setups
- **Or use ours** - complete styling system included out of the box
- **Progressive enhancement** - start simple, customize as needed

### 🛡️ **Production Ready**

- **TypeScript first** - complete type safety and IDE support
- **Thoroughly tested** - all components tested and documented
- **Performance optimized** - tree-shaking, virtualization, and minimal bundle impact
- **Accessibility compliant** - meets WCAG standards

### 🔧 **Developer Experience**

- **Instant IntelliSense** - comprehensive TypeScript definitions
- **Rich documentation** - examples, API reference, and best practices
- **Consistent API** - follows established patterns from Shadcn UI
- **Modern tooling** - built with the latest React patterns and best practices

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

- \*\*: `@radix-ui/react-dialog`
- \*\*: `@radix-ui/react-select`
- ox\*\*: `@radix-ui/react-checkbox`
- \*\*: `@radix-ui/react-switch`
- ialog\*\*: `@radix-ui/react-alert-dialog`
- wnMenu\*\*: `@radix-ui/react-dropdown-menu`
- \*: `@radix-ui/react-tabs`
- p\*\*: `@radix-ui/react-tooltip`
- r\*\*: `@radix-ui/react-popover`
- ion\*\*: `@radix-ui/react-accordion`

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

- l implementation with all basic components
- t for Tailwind CSS and CSS-only
- nager widget with advanced features
- teTable widget with virtualization
- te theme system
- ck Query integration
- te documentation and examples

## �️ Development & Testing

This package includes two development environments for testing components:

### CSS-Based Development Environment

Located in `./develoments/css-based/` - Tests components without Tailwind CSS dependency:

```bash
cd develoments/css-based
npm install
npm run dev
```

This environment demonstrates:

- ✅ **CSS-only styling** - Components work without Tailwind
- ✅ **Global CSS variables** - Theme customization through CSS
- ✅ **Component testing** - All examples are included
- ✅ **Zero configuration** - No additional setup required

### Tailwind-Based Development Environment

Located in `./develoments/tailwind-based/` - Tests components with Tailwind CSS integration:

```bash
cd develoments/tailwind-based
npm install
npm run dev
```

This environment demonstrates:

- ✅ **Tailwind integration** - Components work with existing Tailwind setup
- ✅ **Custom configuration** - Enhanced styling with Tailwind utilities
- ✅ **Theme customization** - Custom color schemes and styling
- ✅ **Performance optimization** - Tree-shaking and utility-first approach

Both environments include all component examples from `src/examples/` and demonstrate the flexibility of the widget system.

## �📚 Documentation

### 📖 Complete Guides

- **[📖 Complete Guide](./docs/COMPLETE_GUIDE.md)** - Everything you need: installation, integration, migration, and troubleshooting
- **[📚 API Documentation](./docs/UNIFIED_DOCUMENTATION.md)** - Complete component reference and advanced examples
- **[📁 Documentation Index](./docs/README.md)** - Quick navigation to all guides

### 🔗 External Resources

- **[React](https://reactjs.org/docs)** - The React library
- **[TypeScript](https://www.typescriptlang.org/docs)** - TypeScript documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[TanStack Query](https://tanstack.com/query/latest)** - Data fetching library
- **[Radix UI](https://www.radix-ui.com/docs)** - Unstyled, accessible components
- **[Lucide Icons](https://lucide.dev/icons)** - Beautiful & consistent icons

### 💡 Project Examples

The examples included in the package demonstrate:

- **Comprehensive Example**: Usage of all components together
- **TaskManager Example**: Complete task management widget implementation
- **InfiniteTable Example**: Data table with virtualization and public API integration

---

**Developed by Schilling Apps** - A complete solution for your React applications.
