# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2025-01-03

### ✨ Agregado

#### Componentes Básicos

-   **Button** - Componente de botón con múltiples variantes (default, destructive, outline, secondary, ghost, link) y tamaños (sm, md, lg)
-   **Card** - Contenedor con header, content y footer
-   **Input** - Campo de entrada con soporte para diferentes tipos
-   **LoadingSpinner** - Indicador de carga animado
-   **Dialog** - Modal dialogs con overlay

#### Componentes Avanzados

-   **Accordion** - Paneles colapsables con soporte para single/multiple
-   **AlertDialog** - Diálogos de confirmación
-   **Avatar** - Imágenes de perfil con fallbacks
-   **Badge** - Etiquetas con variantes de color
-   **Checkbox** - Casillas de verificación
-   **DropdownMenu** - Menús desplegables con opciones
-   **Select** - Selectores dropdown
-   **Tabs** - Navegación por pestañas
-   **Tooltip** - Información contextual al hover

#### Widgets Especializados

-   **TaskManager** - Widget completo para gestión de tareas con:
    -   Virtualización con react-window para rendimiento
    -   Filtrado avanzado (texto, estado, asignado)
    -   Ordenación por columnas
    -   Edición inline de tareas
    -   Menús de acción contextuales
    -   Paginación configurable
    -   Tooltips informativos
    -   Navegación por teclado completa
    -   Soporte para columnas personalizadas
-   **InfiniteTable** - Tabla virtualizada para grandes datasets con:
    -   Renderizado eficiente de miles de filas
    -   Scroll infinito
    -   Ordenación por columnas
    -   Renderizado personalizado de celdas

#### Sistema de Temas

-   **ThemeProvider** - Proveedor de contexto para temas
-   **configureTheme** - Configuración global de temas
-   **useTheme** - Hook para gestión de temas
-   Soporte completo para modo claro/oscuro
-   Variables CSS personalizables
-   Compatibilidad con Tailwind CSS y CSS-only

#### Gestión de Datos

-   **QueryProvider** - Proveedor de TanStack Query optimizado
-   **useApiQuery** - Hook para consultas GET con caché
-   **useApiMutation** - Hook para operaciones POST/PUT/DELETE
-   **fetchApi** - Función utilitaria para llamadas API
-   Manejo automático de estados de carga y error
-   Invalidación de caché inteligente

#### Utilidades

-   **cn** - Función para combinar clases CSS con soporte condicional
-   Mapeo automático entre clases Tailwind y CSS-only
-   Configuración runtime para cambio de modos

#### Sistema de Estilos Dual

-   **Modo Tailwind CSS** - Integración completa con Tailwind
-   **Modo CSS-only** - Estilos independientes sin dependencias
-   Cambio dinámico entre modos en runtime
-   Variables CSS para personalización de colores

#### Documentación y Ejemplos

-   README unificado con guía completa
-   Documentación técnica detallada
-   Ejemplos de uso para todos los componentes
-   Ejemplos prácticos de aplicaciones completas
-   Guías de migración y mejores prácticas

#### Accesibilidad

-   Navegación completa por teclado en todos los componentes
-   Etiquetas ARIA apropiadas
-   Semántica HTML correcta
-   Soporte para lectores de pantalla
-   Contrastes que cumplen WCAG 2.1

#### TypeScript

-   Tipado completo de todos los componentes y props
-   Interfaces exportadas para extensibilidad
-   Tipos genéricos para APIs flexibles
-   IntelliSense completo en IDEs

#### Rendimiento

-   Tree-shaking para importaciones optimizadas
-   Memoización de componentes críticos
-   Virtualización para grandes datasets
-   Lazy loading de componentes pesados

#### Construcción y Desarrollo

-   Configuración de Rollup para múltiples formatos (CJS, ESM)
-   Sourcemaps para debugging
-   Configuración de TypeScript optimizada
-   Scripts de desarrollo con watch mode

### 🔧 Configuración

#### Dependencias Peer

-   react ^18.0.0
-   react-dom ^18.0.0
-   @tanstack/react-query ^5.0.0
-   lucide-react ^0.300.0

#### Dependencias de Desarrollo

-   @radix-ui/\* - Componentes base accesibles
-   react-window - Virtualización
-   class-variance-authority - Manejo de variantes
-   clsx - Utilidad para clases CSS
-   tailwind-merge - Combinación de clases Tailwind

### 📦 Distribución

#### Formatos de Salida

-   **CommonJS** - `dist/index.cjs.js`
-   **ES Modules** - `dist/index.esm.js`
-   **TypeScript** - `dist/index.d.ts`
-   **CSS** - `dist/styles.css`

#### Estructura de Archivos

```
dist/
├── index.cjs.js       # Formato CommonJS
├── index.esm.js       # Formato ES Modules
├── index.d.ts         # Definiciones TypeScript
├── styles.css         # Estilos compilados
├── components/        # Componentes individuales
├── widgets/          # Widgets especializados
├── hooks/            # Hooks exportados
└── utils/            # Utilidades exportadas
```

### 🎯 Compatibilidad

#### Navegadores Soportados

-   Chrome >= 90
-   Firefox >= 88
-   Safari >= 14
-   Edge >= 90

#### Frameworks Compatibles

-   Next.js 13+
-   Vite 4+
-   Create React App 5+
-   Remix 1.15+

### 📚 Recursos

#### Documentación

-   [README Principal](./README.md)
-   [Documentación Unificada](./docs/DOCUMENTACION_UNIFICADA.md)
-   [Ejemplos de Uso](./src/examples/)

#### Enlaces Útiles

-   [TanStack Query](https://tanstack.com/query/latest)
-   [Radix UI](https://www.radix-ui.com/docs)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [Lucide Icons](https://lucide.dev/icons)

---

### 📝 Notas de Versión

Esta es la versión inicial del **Schilling Widgets System**. Incluye todos los componentes esenciales para construir aplicaciones React modernas con un diseño consistente y accesible.

El sistema está diseñado para ser:

-   **Flexible**: Funciona con o sin Tailwind CSS
-   **Completo**: Incluye desde componentes básicos hasta widgets avanzados
-   **Performante**: Optimizado para aplicaciones de gran escala
-   **Accesible**: Cumple con estándares de accesibilidad
-   **Mantenible**: Arquitectura clara y documentación completa

### 🔮 Próximas Versiones

#### v1.1.0 (Planificado)

-   Componentes adicionales (Form, Calendar, DataTable)
-   Más opciones de personalización de temas
-   Mejoras en rendimiento
-   Tests automatizados

#### v1.2.0 (Planificado)

-   Soporte para React 19
-   Componentes de navegación (Breadcrumb, Pagination)
-   Sistema de notificaciones (Toast, Alert)
-   Documentación interactiva

---

**Desarrollado por Schilling Apps** - v1.0.0
