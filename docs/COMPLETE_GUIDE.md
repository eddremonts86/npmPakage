# Complete Guide - Schilling Widgets System

This comprehensive guide covers everything you need to know about using, integrating, and migrating to the Schilling Widgets System.

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage Modes](#-usage-modes)
- [Integration with Existing Projects](#-integration-with-existing-projects)
- [Migration from v1.x to v2.0](#-migration-from-v1x-to-v20)
- [Migration from Other Libraries](#-migration-from-other-libraries)
- [Advanced Configuration](#-advanced-configuration)
- [Troubleshooting](#-troubleshooting)

---

## 🚀 Quick Start

**Zero configuration required!** Just install and use:

```bash
npm install @schilling-apps/schilling-widgets-system react react-dom
```

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

**That's it!** No additional configuration, no CSS imports, no build setup needed.

---

## 📦 Installation

### New Projects

```bash
# Install the package
npm install @schilling-apps/schilling-widgets-system

# Install peer dependencies (only React is required)
npm install react react-dom
```

**What's included:**

- ✅ **Pre-built Tailwind utilities** - No Tailwind setup needed
- ✅ **TanStack Query** - Bundled for data management
- ✅ **Lucide React icons** - All icons included
- ✅ **CSS-only fallback** - Works without any CSS framework

### Existing Projects

The package works seamlessly with existing projects. See [Integration section](#-integration-with-existing-projects) for specific scenarios.

---

## 🎯 Usage Modes

### 🚀 Default Mode (Recommended)

**Zero configuration** - works immediately:

```tsx
import {
  SchillingWidgets,
  Button,
} from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets>
      <Button>Works out of the box!</Button>
    </SchillingWidgets>
  );
}
```

### 🎨 Integration with Existing Tailwind

If your app already uses Tailwind CSS, the package can follow your design system:

#### 1. Update Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add this line to include package components
    './node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Package will use your app's color system
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        // ... rest of your colors
      },
    },
  },
  // Your existing plugins
};
```

#### 2. Define CSS Variables

```css
/* In your main CSS file */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Your app's design tokens */
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
  /* ... more variables */
}
```

#### 3. Use with Your Theme

```tsx
import { ThemeProvider } from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <ThemeProvider>
      {/* Components will follow your app's Tailwind configuration */}
      <YourExistingComponents />
      <SchillingWidgetComponents />
    </ThemeProvider>
  );
}
```

### 🎭 CSS-Only Mode

For apps using other CSS frameworks:

```tsx
import {
  configureTheme,
  SchillingWidgets,
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

---

## 🔗 Integration with Existing Projects

### Next.js Projects

```tsx
// pages/_app.tsx or app/layout.tsx
import { SchillingWidgets } from '@schilling-apps/schilling-widgets-system';

export default function App({ Component, pageProps }) {
  return (
    <SchillingWidgets>
      <Component {...pageProps} />
    </SchillingWidgets>
  );
}
```

### Create React App

```tsx
// src/index.tsx
import { SchillingWidgets } from '@schilling-apps/schilling-widgets-system';

root.render(
  <SchillingWidgets>
    <App />
  </SchillingWidgets>
);
```

### Vite Projects

```tsx
// src/main.tsx
import { SchillingWidgets } from '@schilling-apps/schilling-widgets-system';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SchillingWidgets>
    <App />
  </SchillingWidgets>
);
```

### Projects with Existing TanStack Query

If you already use TanStack Query:

```tsx
import { SchillingWidgets } from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets disableQueryProvider={true}>
      {/* Your existing QueryClient setup */}
      <YourApp />
    </SchillingWidgets>
  );
}
```

---

## 🔄 Migration from v1.x to v2.0

### Overview

v2.0.0 significantly simplifies installation and usage by bundling all dependencies.

### Breaking Changes

#### Dependencies

**Before (v1.x):**

```bash
npm install @schilling-apps/schilling-widgets-system
npm install @tanstack/react-query lucide-react
```

**After (v2.0.0):**

```bash
npm install @schilling-apps/schilling-widgets-system
npm install react react-dom  # Only peer dependencies
```

#### Usage

**Before (v1.x):**

```tsx
import {
  QueryProvider,
  TaskManager,
  ThemeProvider,
} from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <TaskManager tasks={tasks} />
      </ThemeProvider>
    </QueryProvider>
  );
}
```

**After (v2.0.0):**

```tsx
import {
  SchillingWidgets,
  TaskManager,
} from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets>
      <TaskManager tasks={tasks} />
    </SchillingWidgets>
  );
}
```

### Migration Steps

#### 1. Update Dependencies

```bash
# Remove old peer dependencies
npm uninstall @tanstack/react-query lucide-react

# Update to v2.0.0
npm install @schilling-apps/schilling-widgets-system@latest
```

#### 2. Update Code

Replace `QueryProvider` and `ThemeProvider` wrappers with `SchillingWidgets`:

```tsx
// Before
<QueryProvider>
    <ThemeProvider>
        <YourApp />
    </ThemeProvider>
</QueryProvider>

// After
<SchillingWidgets>
    <YourApp />
</SchillingWidgets>
```

#### 3. Remove Manual Query Configuration

Remove manual TanStack Query setup if it was only used for widgets:

```tsx
// Remove this if only used for widgets
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
```

#### 4. Test and Verify

All components should work exactly the same, but with less setup.

---

## 🔄 Migration from Other Libraries

### From Chakra UI

```tsx
// Before (Chakra UI)
import { Button, Box, Text } from '@chakra-ui/react';

<Box p={4} bg='gray.100'>
  <Text fontSize='lg' fontWeight='bold'>
    Title
  </Text>
  <Button colorScheme='blue' size='md'>
    Action
  </Button>
</Box>;

// After (Schilling Widgets)
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from '@schilling-apps/schilling-widgets-system';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Action</Button>
  </CardContent>
</Card>;
```

### From Material-UI

```tsx
// Before (Material-UI)
import { Button, Card, CardContent, Typography } from '@mui/material';

<Card>
  <CardContent>
    <Typography variant='h5' component='h2'>
      Title
    </Typography>
    <Button variant='contained' color='primary'>
      Action
    </Button>
  </CardContent>
</Card>;

// After (Schilling Widgets)
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from '@schilling-apps/schilling-widgets-system';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Action</Button>
  </CardContent>
</Card>;
```

### From Ant Design

```tsx
// Before (Ant Design)
import { Button, Card } from 'antd';

<Card title='Title' bordered={false}>
  <Button type='primary'>Action</Button>
</Card>;

// After (Schilling Widgets)
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from '@schilling-apps/schilling-widgets-system';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Action</Button>
  </CardContent>
</Card>;
```

---

## ⚙️ Advanced Configuration

### Runtime Configuration

```tsx
import { configureTheme } from '@schilling-apps/schilling-widgets-system';

configureTheme({
  useTailwind: true, // Use Tailwind classes
  enforceHostStyles: true, // Follow host app's styles
  fallbackToCss: true, // Fallback to CSS-only if needed
  customPrefix: 'my-app', // Custom CSS prefix
  darkModeClass: 'dark', // Dark mode class name
});
```

### Environment-Specific Configuration

```tsx
// config/widgets.ts
const widgetConfig = {
  development: {
    useTailwind: true,
    enforceHostStyles: false,
    fallbackToCss: true,
  },
  production: {
    useTailwind: true,
    enforceHostStyles: true,
    fallbackToCss: false,
  },
  test: {
    useTailwind: false,
    customPrefix: 'test-widgets',
  },
};

configureTheme(widgetConfig[process.env.NODE_ENV]);
```

### Custom Styling

```css
/* Override styles regardless of mode */
.schilling-button {
  background: linear-gradient(45deg, #your-color, #another-color);
  border-radius: 12px;
}

.schilling-card {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--your-brand-color);
}

/* Dark mode customizations */
.dark .schilling-button {
  background: linear-gradient(45deg, #dark-color, #another-dark);
}
```

---

## 🔍 Troubleshooting

### Common Issues

#### Styles Not Applied

**Problem**: Widget components don't have proper styling.

**Solutions**:

1. Check if CSS variables are defined in your global CSS
2. Ensure Tailwind content paths include the widget package
3. Verify ThemeProvider wraps your app

#### Conflicting Styles

**Problem**: Widget styles conflict with existing styles.

**Solutions**:

1. Use CSS-only mode with custom prefix
2. Increase CSS specificity for your custom styles
3. Use CSS modules or styled-components for isolation

#### TypeScript Errors

**Problem**: TypeScript compilation errors with widget imports.

**Solutions**:

1. Ensure TypeScript version is 4.5 or higher
2. Add proper type imports: `import type { ComponentProps } from "react"`
3. Check that peer dependencies are installed

### Performance Optimization

#### Bundle Size

```tsx
// Use specific imports for tree-shaking
import { Button } from '@schilling-apps/schilling-widgets-system/components/Button';
import { Card } from '@schilling-apps/schilling-widgets-system/components/Card';

// Instead of
import { Button, Card } from '@schilling-apps/schilling-widgets-system';
```

#### Runtime Performance

```tsx
// Configure for optimal performance
configureTheme({
  useTailwind: true, // Faster than CSS-only mode
  enforceHostStyles: false, // Reduces style computation
  fallbackToCss: false, // Eliminates fallback checks
});
```

### Getting Help

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Complete guides and API reference
- **TypeScript Support**: Full type definitions included
- **Examples**: Real-world usage examples in the repository

---

## 📈 Performance Tips

1. **Use tree-shaking**: Import specific components
2. **Optimize Tailwind**: Configure for production builds
3. **Lazy loading**: Use React.lazy() for large widgets
4. **Memoization**: Wrap expensive components with React.memo()
5. **Bundle analysis**: Use webpack-bundle-analyzer to check impact

---

## 🎯 Best Practices

1. **Start with defaults**: Use zero-config mode first
2. **Progressive enhancement**: Add customization as needed
3. **Consistent theming**: Use CSS variables for colors
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Performance**: Profile your app after adding widgets

---

This guide should cover all your integration and migration needs. For specific questions, check the main README or create an issue in the repository.
