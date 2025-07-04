# Documentation - Schilling Widgets System

This folder contains the complete documentation for the **Schilling Widgets System**.

## 📚 Available Documents

### 📖 [Main README](../README.md)

Primary documentation with v2.0.0 updates:

-   **Simplified Installation**: Only React dependencies required
-   **Quick Start Guide**: Using SchillingWidgets wrapper
-   Complete component library reference
-   Theme configuration and examples

### 🔄 [Migration Guide v2.0.0](./MIGRATION_V2.md) **NEW**

Essential guide for upgrading from v1.x to v2.0.0:

-   Breaking changes overview
-   Step-by-step migration instructions
-   API compatibility information
-   Advanced configuration options

### 📖 [Unified Documentation](./UNIFIED_DOCUMENTATION.md)

Comprehensive documentation (English):

-   Complete component guide
-   Advanced patterns and examples
-   API reference
-   Performance considerations

### � [Documentación Unificada](./DOCUMENTACION_UNIFICADA.md)

Documentación completa (Español):

-   Guía completa de componentes
-   Patrones avanzados y ejemplos
-   Referencia de API
-   Consideraciones de rendimiento

## 🚀 Quick Start

1. **Installation**:

```bash
npm install @schilling-apps/schilling-widgets-system
# Only React and ReactDOM needed as peer dependencies!
```

2. **Basic usage**:

```tsx
import {
    SchillingWidgets,
    Button,
    Card,
    TaskManager,
} from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <SchillingWidgets>
            <Card>
                <Button>Hello World!</Button>
                <TaskManager tasks={tasks} />
            </Card>
        </SchillingWidgets>
    );
}
```

3. **That's it!** All dependencies (TanStack Query, Lucide React, etc.) are bundled automatically.

## 🎯 Main Components

-   **Basic**: Button, Card, Input, LoadingSpinner
-   **Advanced**: Accordion, Tabs, Tooltip, Dialog
-   **Widgets**: TaskManager, InfiniteTable
-   **Utilities**: ThemeProvider, QueryProvider, useApi

## 🎨 Themes

The system supports:

-   **Tailwind CSS**: Full mode with all features
-   **CSS-only**: Independent mode without Tailwind requirement
-   **Themes**: Light/Dark with complete customization

## 📞 Support

To report issues or request features:

-   Create an issue in the repository
-   Include code examples
-   Specify the version used

---

**Schilling Widgets System v1.0.0** - A complete solution for React applications
