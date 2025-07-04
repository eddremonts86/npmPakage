# Migration Guide: v1.x to v2.0.0

## Overview

Schilling Widgets System v2.0.0 introduces a major improvement in developer experience by bundling all dependencies within the package. This eliminates the need to manually install and configure external dependencies.

## Key Changes

### 📦 Dependencies

**Before (v1.x):**

-   Required manual installation of multiple peer dependencies
-   Users needed to configure TanStack Query manually
-   Potential version conflicts between dependencies

**After (v2.0.0):**

-   Only React and ReactDOM required as peer dependencies
-   All other dependencies bundled within the package
-   Zero configuration for TanStack Query

### 🚀 Installation

**Before (v1.x):**

```bash
npm install @schilling-apps/schilling-widgets-system
npm install @tanstack/react-query lucide-react
```

**After (v2.0.0):**

```bash
npm install @schilling-apps/schilling-widgets-system
# That's it! Only React and ReactDOM needed as peer deps
```

### 🔧 Usage

**Before (v1.x):**

```tsx
import {
    QueryProvider,
    TaskManager,
    ThemeProvider,
} from "@schilling-apps/schilling-widgets-system";

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
    ThemeProvider,
} from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            <ThemeProvider>
                <TaskManager tasks={tasks} />
            </ThemeProvider>
        </SchillingWidgets>
    );
}
```

## Component API Compatibility

✅ **All existing component APIs remain unchanged**

-   All props, methods, and behaviors are identical
-   No code changes needed for existing components
-   Only the root wrapper changes

## Migration Steps

### Step 1: Update Package

```bash
npm uninstall @tanstack/react-query lucide-react
npm update @schilling-apps/schilling-widgets-system
```

### Step 2: Replace Root Wrapper

Replace `QueryProvider` with `SchillingWidgets`:

```tsx
// Before
import { QueryProvider } from "@schilling-apps/schilling-widgets-system";

// After
import { SchillingWidgets } from "@schilling-apps/schilling-widgets-system";
```

### Step 3: Update JSX

```tsx
// Before
<QueryProvider>
  {/* Your app */}
</QueryProvider>

// After
<SchillingWidgets>
  {/* Your app */}
</SchillingWidgets>
```

### Step 4: Remove Manual Query Configuration (Optional)

If you were manually configuring TanStack Query, you can now remove that code since it's handled automatically.

## Advanced Configuration

### Custom QueryClient

If you need a custom QueryClient configuration:

```tsx
import {
    SchillingWidgets,
    createQueryClient,
} from "@schilling-apps/schilling-widgets-system";

const customClient = createQueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10000,
        },
    },
});

function App() {
    return (
        <SchillingWidgets queryClient={customClient}>
            {/* Your app */}
        </SchillingWidgets>
    );
}
```

### Disable Internal QueryProvider

If you're already using TanStack Query in your app:

```tsx
function App() {
    return (
        <SchillingWidgets disableQueryProvider={true}>
            {/* Your app */}
        </SchillingWidgets>
    );
}
```

## Benefits of v2.0.0

-   ✅ **Simplified Installation**: One command installs everything
-   ✅ **Zero Configuration**: TanStack Query configured automatically
-   ✅ **No Version Conflicts**: All dependencies controlled internally
-   ✅ **Better Developer Experience**: Immediate productivity
-   ✅ **Backward Compatibility**: Existing code mostly unchanged

## Bundle Size Impact

-   **v1.x**: ~100KB + external dependencies
-   **v2.0.0**: ~785KB (all dependencies included)

The larger bundle size is offset by:

-   Elimination of separate dependency downloads
-   No risk of version conflicts
-   Simplified maintenance and updates

## Need Help?

If you encounter any issues during migration:

1. Check that you're using React 18+ and ReactDOM 18+
2. Ensure you've removed old peer dependencies
3. Verify you're using `SchillingWidgets` instead of `QueryProvider`
4. Check the console for any TypeScript or runtime errors

For additional support, please open an issue in the repository.
