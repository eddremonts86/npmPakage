# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.1] - 2025-07-05

### 🔧 Package Structure & Development

#### ✨ New Features

- **Development Environments**: Added two complete development environments for testing components:
  - `develoments/css-based/` - Tests components without Tailwind CSS dependency
  - `develoments/tailwind-based/` - Tests components with Tailwind CSS integration
- **Example Integration**: Both environments include all component examples from `src/examples/`
- **Package Configuration**: Updated package.json to optimize file structure and dependencies

#### 🛠️ Improvements

- **Documentation**: Enhanced README with development environment instructions
- **Testing**: Improved component testing with real application environments
- **Flexibility**: Demonstrated package works both with and without Tailwind CSS
- **Development Experience**: Streamlined development workflow with dedicated test environments

#### 📦 Files Structure

- Optimized package files to include only distribution and documentation
- Improved build configuration for better development experience
- Enhanced TypeScript configuration for both development environments

## [2.0.0] - 2025-07-04

### 🎉 MAJOR RELEASE - Self-Contained Package

This is a major version that significantly improves the developer experience by eliminating external dependency requirements.

#### 🔥 Breaking Changes

- **Dependencies**: Moved all dependencies (except React and ReactDOM) from `peerDependencies` to bundled `dependencies`
- **Installation**: Now only requires `react` and `react-dom` as peer dependencies
- **Bundle Size**: Package size increased to ~785KB (from ~100KB) due to bundled dependencies

#### ✨ New Features

- **SchillingWidgets Component**: New root wrapper component that automatically configures TanStack Query
- **Auto-Configuration**: TanStack Query is now automatically configured - no manual setup required
- **Self-Contained**: All dependencies (TanStack Query, Lucide React, Radix UI, etc.) are now bundled
- **Simplified API**: Users can now start using components immediately after installation

#### 📦 Bundled Dependencies

The following dependencies are now included in the package:

- `@tanstack/react-query`
- `lucide-react`
- All `@radix-ui/react-*` components
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `react-window`

#### 🛠️ Developer Experience Improvements

- **One-Step Installation**: `npm install @schilling-apps/schilling-widgets-system` + React deps
- **Zero Configuration**: No need to install or configure TanStack Query manually
- **No Version Conflicts**: All internal dependencies are controlled and tested together
- **Backward Compatibility**: Existing component APIs remain unchanged

#### 📖 Documentation Updates

- Updated README with simplified installation instructions
- Added Quick Start section with immediate usage examples
- Updated all code examples to use the new `SchillingWidgets` wrapper
- Removed references to manual dependency installation

#### 🔧 Build System Changes

- Updated Rollup configuration to bundle all dependencies except React/ReactDOM
- Removed `peerDepsExternal` plugin
- Configured proper externalization of only React dependencies

#### 🚀 Migration Guide

**Before (v1.x):**

```bash
npm install @schilling-apps/schilling-widgets-system
npm install @tanstack/react-query lucide-react
```

```tsx
import {
  QueryProvider,
  TaskManager,
} from '@schilling-apps/schilling-widgets-system';

<QueryProvider>
  <TaskManager tasks={tasks} />
</QueryProvider>;
```

**After (v2.x):**

```bash
npm install @schilling-apps/schilling-widgets-system
# Only React and ReactDOM needed as peer deps
```

```tsx
import {
  SchillingWidgets,
  TaskManager,
} from '@schilling-apps/schilling-widgets-system';

<SchillingWidgets>
  <TaskManager tasks={tasks} />
</SchillingWidgets>;
```

## [1.0.0] - 2025-01-03

### ✨ Added

#### Basic Components

- **Button** - Button component with multiple variants (default, destructive, outline, secondary, ghost, link) and sizes (sm, md, lg)
- **Card** - Container with header, content and footer
- **Input** - Input field with support for different types
- **LoadingSpinner** - Animated loading indicator
- **Dialog** - Modal dialogs with overlay

#### Advanced Components

- **Accordion** - Collapsible panels with single/multiple support
- **AlertDialog** - Confirmation dialogs
- **Avatar** - Profile images with fallbacks
- **Badge** - Tags with color variants
- **Checkbox** - Checkboxes
- **DropdownMenu** - Dropdown menus with options
- **Select** - Dropdown selectors
- **Tabs** - Tab navigation
- **Tooltip** - Contextual information on hover

#### Specialized Widgets

- **TaskManager** - Complete task management widget with:
  - Virtualization with react-window for performance
  - Advanced filtering (text, status, assignee)
  - Column sorting
  - Inline task editing
  - Contextual action menus
  - Configurable pagination
  - Informative tooltips
  - Complete keyboard navigation
  - Custom column support
- **InfiniteTable** - Virtualized table for large datasets with:
  - Efficient rendering of thousands of rows
  - Infinite scroll
  - Column sorting
  - Custom cell rendering

#### Theme System

- **ThemeProvider** - Context provider for themes
- **configureTheme** - Global theme configuration
- **useTheme** - Hook for theme management
- Complete support for light/dark mode
- Customizable CSS variables
- Compatibility with Tailwind CSS and CSS-only

#### Data Management

- **QueryProvider** - Proveedor de TanStack Query optimizado
- **useApiQuery** - Hook para consultas GET con caché
- **useApiMutation** - Hook para operaciones POST/PUT/DELETE
- **fetchApi** - Función utilitaria para llamadas API
- Manejo automático de estados de carga y error
- Invalidación de caché inteligente

#### Utilidades

- **cn** - Function to combine CSS classes with conditional support
- Automatic mapping between Tailwind classes and CSS-only
- Runtime configuration for mode switching

#### Dual Styling System

- **Tailwind CSS Mode** - Complete integration with Tailwind
- **CSS-only Mode** - Independent styles without dependencies
- Dynamic switching between modes at runtime
- CSS variables for color customization

#### Documentation and Examples

- Unified README with complete guide
- Detailed technical documentation
- Usage examples for all components
- Practical examples of complete applications
- Migration guides and best practices

#### Accesibilidad

- Complete keyboard navigation in all components
- Appropriate ARIA labels
- Correct HTML semantics
- Screen reader support
- Contrasts that meet WCAG 2.1

#### TypeScript

- Complete typing of all components and props
- Exported interfaces for extensibility
- Tipos genéricos para APIs flexibles
- IntelliSense completo en IDEs

#### Rendimiento

- Tree-shaking for optimized imports
- Memoization of critical components
- Virtualization for large datasets
- Lazy loading of heavy components

#### Build and Development

- Rollup configuration for multiple formats (CJS, ESM)
- Sourcemaps for debugging
- Optimized TypeScript configuration
- Development scripts with watch mode

### 🔧 Configuration

#### Peer Dependencies

- react ^18.0.0
- react-dom ^18.0.0
- @tanstack/react-query ^5.0.0
- lucide-react ^0.300.0

#### Development Dependencies

- @radix-ui/\* - Accessible base components
- react-window - Virtualization
- class-variance-authority - Variant management
- clsx - CSS class utility
- tailwind-merge - Tailwind class combination

### 📦 Distribution

#### Formatos de Salida

- **CommonJS** - `dist/index.cjs.js`
- **ES Modules** - `dist/index.esm.js`
- **TypeScript** - `dist/index.d.ts`
- **CSS** - `dist/styles.css`

#### Estructura de Archivos

```
dist/
├── index.cjs.js       # Formato CommonJS
├── index.esm.js       # Formato ES Modules
├── index.d.ts         # TypeScript definitions
├── styles.css         # Compiled styles
├── components/        # Individual components
├── widgets/          # Specialized widgets
├── hooks/            # Exported hooks
└── utils/            # Exported utilities
```

### 🎯 Compatibility

#### Supported Browsers

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

#### Frameworks Compatibles

- Next.js 13+
- Vite 4+
- Create React App 5+
- Remix 1.15+

### 📚 Recursos

#### Documentation

- [Main README](./README.md)
- [Unified Documentation](./docs/DOCUMENTACION_UNIFICADA.md)
- [Usage Examples](./src/examples/)

#### Useful Links

- [TanStack Query](https://tanstack.com/query/latest)
- [Radix UI](https://www.radix-ui.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)

---

### 📝 Version Notes

This is the initial version of the **Schilling Widgets System**. It includes all essential components for building modern React applications with consistent and accessible design.

The system is designed to be:

- **Flexible**: Works with or without Tailwind CSS
- **Complete**: Includes from basic components to advanced widgets
- **Performant**: Optimized for large-scale applications
- **Accessible**: Meets accessibility standards
- **Maintainable**: Clear architecture and complete documentation

### 🔮 Future Versions

#### v1.1.0 (Planned)

- Additional components (Form, Calendar, DataTable)
- More theme customization options
- Performance improvements
- Automated tests

#### v1.2.0 (Planned)

- React 19 support
- Navigation components (Breadcrumb, Pagination)
- Notification system (Toast, Alert)
- Interactive documentation

---

**Developed by Schilling Apps** - v1.0.0
