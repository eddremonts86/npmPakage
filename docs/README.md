# Documentation - Schilling Widgets System

Welcome to the **Schilling Widgets System** documentation! This folder contains all the guides you need to use the package effectively.

## 📚 Documentation Structure

### 🚀 [Complete Guide](./COMPLETE_GUIDE.md) **→ START HERE**

**Everything you need in one place:**

- ⚡ Quick Start (zero configuration)
- 📦 Installation guide
- 🎯 Usage modes (default, Tailwind integration, CSS-only)
- 🔗 Integration with existing projects
- 🔄 Migration from v1.x to v2.0
- 🔄 Migration from other UI libraries
- ⚙️ Advanced configuration
- 🔍 Troubleshooting

### 📖 [Unified Documentation](./UNIFIED_DOCUMENTATION.md)

**Comprehensive API reference:**

- 📋 Complete component library
- 🎛️ Advanced widgets (TaskManager, InfiniteTable)
- 🎨 Theme customization
- 💡 Practical examples
- 🔧 Development guidelines

## 🎯 Quick Navigation

| What you want to do                  | Go to                                                                                            |
| ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Start using the package**          | [Complete Guide - Quick Start](./COMPLETE_GUIDE.md#-quick-start)                                 |
| **Integrate with existing Tailwind** | [Complete Guide - Tailwind Integration](./COMPLETE_GUIDE.md#-integration-with-existing-tailwind) |
| **Migrate from v1.x**                | [Complete Guide - Migration](./COMPLETE_GUIDE.md#-migration-from-v1x-to-v20)                     |
| **See all components**               | [Unified Documentation - Components](./UNIFIED_DOCUMENTATION.md#-basic-components)               |
| **Use TaskManager widget**           | [Unified Documentation - TaskManager](./UNIFIED_DOCUMENTATION.md#taskmanager)                    |
| **Customize themes**                 | [Unified Documentation - Themes](./UNIFIED_DOCUMENTATION.md#-theme-customization)                |
| **Troubleshoot issues**              | [Complete Guide - Troubleshooting](./COMPLETE_GUIDE.md#-troubleshooting)                         |

## ⚡ TL;DR - Get Started in 30 Seconds

```bash
npm install @schilling-apps/schilling-widgets-system react react-dom
```

```tsx
import {
  SchillingWidgets,
  Button,
  Card,
} from '@schilling-apps/schilling-widgets-system';

function App() {
  return (
    <SchillingWidgets>
      <Card>
        <Button>Hello World!</Button>
      </Card>
    </SchillingWidgets>
  );
}
```

**Done!** No configuration needed. ✨

---

## 📋 What's New in v2.0

- ✅ **Zero configuration** - works immediately after install
- ✅ **All dependencies bundled** - no more peer dependency conflicts
- ✅ **Simplified API** - single `SchillingWidgets` wrapper
- ✅ **Better performance** - optimized bundle and runtime
- ✅ **Enhanced flexibility** - works with any setup

---

For the main package README, see: [../README.md](../README.md)
