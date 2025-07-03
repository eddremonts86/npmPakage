# Documentación - Schilling Widgets System

Esta carpeta contiene la documentación completa del **Schilling Widgets System**.

## 📚 Documentos Disponibles

### 📖 [Documentación Unificada](./DOCUMENTACION_UNIFICADA.md)

Documento principal que consolida toda la información del sistema:

-   Instalación y configuración
-   Guía completa de todos los componentes
-   Ejemplos prácticos
-   Referencia de APIs
-   Mejores prácticas

### 📋 [README Principal](../README.md)

Documento de introducción y referencia rápida:

-   Instalación básica
-   Ejemplos de uso
-   Configuración de temas
-   Estructura del proyecto

## 🚀 Inicio Rápido

1. **Instalación**:

    ```bash
    npm install @schilling-apps/schilling-widgets-system
    npm install react react-dom @tanstack/react-query lucide-react
    ```

2. **Uso básico**:

    ```tsx
    import {
        Button,
        Card,
        TaskManager,
    } from "@schilling-apps/schilling-widgets-system";
    ```

3. **Configuración con Tailwind**:
    ```javascript
    // tailwind.config.js
    module.exports = {
        content: [
            "./src/**/*.{js,ts,jsx,tsx}",
            "./node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}",
        ],
        // ... resto de configuración
    };
    ```

## 🎯 Componentes Principales

-   **Básicos**: Button, Card, Input, LoadingSpinner
-   **Avanzados**: Accordion, Tabs, Tooltip, Dialog
-   **Widgets**: TaskManager, InfiniteTable
-   **Utilidades**: ThemeProvider, QueryProvider, useApi

## 🎨 Temas

El sistema soporta:

-   **Tailwind CSS**: Modo completo con todas las funcionalidades
-   **CSS-only**: Modo independiente sin necesidad de Tailwind
-   **Temas**: Light/Dark con personalización completa

## 📞 Soporte

Para reportar problemas o solicitar características:

-   Crea un issue en el repositorio
-   Incluye ejemplos de código
-   Especifica la versión utilizada

---

**Schilling Widgets System v1.0.0** - Una solución completa para aplicaciones React
