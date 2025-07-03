# Documentation - Schilling Widgets System

This folder contains the complete documentation for the **Schilling Widgets System**.

## 📚 Available Documents

### 📖 [Unified Documentation](./DOCUMENTACION_UNIFICADA.md)

Main document that consolidates all system information:

-   Installation and configuration
-   Complete guide to all components
-   Practical examples
-   API reference
-   Best practices

### 📋 [Main README](../README.md)

Introduction and quick reference document:

-   Basic installation
-   Usage examples
-   Theme configuration
-   Project structure

## 🚀 Quick Start

1. **Installation**:

    ```bash
    npm install @schilling-apps/schilling-widgets-system
    npm install react react-dom @tanstack/react-query lucide-react
    ```

2. **Basic usage**:

    ```tsx
    import {
        Button,
        Card,
        TaskManager,
    } from "@schilling-apps/schilling-widgets-system";
    ```

3. **Tailwind configuration**:
    ```javascript
    // tailwind.config.js
    module.exports = {
        content: [
            "./src/**/*.{js,ts,jsx,tsx}",
            "./node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}",
        ],
        // ... rest of configuration
    };
    ```

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
