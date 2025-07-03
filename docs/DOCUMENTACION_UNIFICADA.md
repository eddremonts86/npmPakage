# Documentación Unificada - Schilling Widgets System

Esta documentación consolida toda la información sobre el **Schilling Widgets System** en un solo lugar para facilitar su uso y comprensión.

## 📋 Índice

1. [Introducción](#introducción)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [Componentes Básicos](#componentes-básicos)
4. [Componentes Avanzados](#componentes-avanzados)
5. [Widgets Especializados](#widgets-especializados)
6. [Gestión de Datos](#gestión-de-datos)
7. [Personalización de Temas](#personalización-de-temas)
8. [Ejemplos Prácticos](#ejemplos-prácticos)
9. [Desarrollo y Contribución](#desarrollo-y-contribución)
10. [Referencia de APIs](#referencia-de-apis)

---

## 🚀 Introducción

El **Schilling Widgets System** es una librería completa de componentes UI para React que ofrece:

-   **Flexibilidad Total**: Funciona con o sin Tailwind CSS
-   **Componentes Completos**: Todos los componentes esenciales de Shadcn UI
-   **Widgets Avanzados**: TaskManager e InfiniteTable con virtualización
-   **TypeScript First**: Tipos completos y IntelliSense
-   **Accesibilidad**: Cumple con estándares WCAG
-   **Rendimiento**: Optimizado para aplicaciones grandes

### Arquitectura del Sistema

```
Schilling Widgets System
├── 🎨 Sistema de Estilos (Tailwind + CSS-only)
├── 🧩 Componentes Básicos (Button, Card, Input, etc.)
├── 📊 Componentes Avanzados (Accordion, Tabs, Tooltip, etc.)
├── 🎛️ Widgets Especializados (TaskManager, InfiniteTable)
├── 🔧 Gestión de Datos (TanStack Query)
└── 🎭 Sistema de Temas (Light/Dark + Custom)
```

---

## 📦 Instalación y Configuración

### Instalación Base

```bash
# Instalar el paquete principal
npm install @schilling-apps/schilling-widgets-system

# Instalar dependencias peer
npm install react react-dom @tanstack/react-query lucide-react
```

### Configuración con Tailwind CSS

#### 1. Configurar tailwind.config.js

```javascript
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary))",
                secondary: "hsl(var(--secondary))",
                destructive: "hsl(var(--destructive))",
                muted: "hsl(var(--muted))",
                accent: "hsl(var(--accent))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
            },
        },
    },
    plugins: [],
};
```

#### 2. Configurar CSS Global

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
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
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent-foreground: 222.2 84% 4.9%;
}

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

### Configuración sin Tailwind CSS

```tsx
import { configureTheme } from "@schilling-apps/schilling-widgets-system";

// Configurar en el punto de entrada de tu aplicación
configureTheme({
    useTailwind: false,
    theme: "light", // o 'dark'
});
```

---

## 🧩 Componentes Básicos

### Button

El componente Button ofrece múltiples variantes y tamaños.

#### Uso Básico

```tsx
import { Button } from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return (
        <div className="space-x-2">
            <Button variant="default">Botón Principal</Button>
            <Button variant="secondary">Botón Secundario</Button>
            <Button variant="outline">Botón Outline</Button>
            <Button variant="ghost">Botón Ghost</Button>
            <Button variant="destructive">Botón Destructivo</Button>
        </div>
    );
}
```

#### Props del Button

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}
```

#### Variantes Disponibles

-   **default**: Botón principal con fondo sólido
-   **destructive**: Para acciones destructivas (eliminar, etc.)
-   **outline**: Botón con borde sin fondo
-   **secondary**: Botón secundario con fondo suave
-   **ghost**: Botón sin fondo, solo texto
-   **link**: Estilo de enlace

#### Tamaños Disponibles

-   **sm**: 32px de altura
-   **md**: 40px de altura (default)
-   **lg**: 48px de altura

### Card

Componente contenedor versátil para agrupar contenido.

#### Uso Básico

```tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@schilling-apps/schilling-widgets-system";

function MyCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Título de la Tarjeta</CardTitle>
                <CardDescription>
                    Descripción opcional que explica el contenido
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Contenido principal de la tarjeta</p>
            </CardContent>
            <CardFooter>
                <Button>Acción Principal</Button>
                <Button variant="outline">Cancelar</Button>
            </CardFooter>
        </Card>
    );
}
```

#### Componentes de Card

-   **Card**: Contenedor principal
-   **CardHeader**: Encabezado con título y descripción
-   **CardTitle**: Título principal
-   **CardDescription**: Descripción opcional
-   **CardContent**: Contenido principal
-   **CardFooter**: Pie con acciones

### Input

Campo de entrada con soporte para diferentes tipos y estados.

#### Uso Básico

```tsx
import { Input } from "@schilling-apps/schilling-widgets-system";

function MyForm() {
    const [value, setValue] = useState("");

    return (
        <div className="space-y-4">
            <Input
                type="text"
                placeholder="Ingresa tu nombre"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Input
                type="email"
                placeholder="correo@ejemplo.com"
                disabled
            />
            <Input
                type="password"
                placeholder="Contraseña"
                className="border-red-500" // Para estados de error
            />
        </div>
    );
}
```

#### Props del Input

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
```

---

## 📊 Componentes Avanzados

### Accordion

Componente para contenido colapsable organizado en paneles.

#### Uso Básico

```tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@schilling-apps/schilling-widgets-system";

function MyAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    ¿Qué es Schilling Widgets System?
                </AccordionTrigger>
                <AccordionContent>
                    Una librería completa de componentes UI para React con
                    TypeScript, que funciona con o sin Tailwind CSS.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo instalar el paquete?</AccordionTrigger>
                <AccordionContent>
                    Ejecuta: npm install
                    @schilling-apps/schilling-widgets-system
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
```

#### Props del Accordion

```typescript
interface AccordionProps {
    type: "single" | "multiple";
    collapsible?: boolean;
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
}
```

### Tabs

Sistema de pestañas para organizar contenido en secciones.

#### Uso Básico

```tsx
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@schilling-apps/schilling-widgets-system";

function MyTabs() {
    return (
        <Tabs defaultValue="overview">
            <TabsList>
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="settings">Configuración</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <Card>
                    <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">Resumen General</h3>
                        <p>Información general del proyecto.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="details">
                <Card>
                    <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">
                            Detalles Técnicos
                        </h3>
                        <p>Información técnica detallada.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="settings">
                <Card>
                    <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">Configuración</h3>
                        <p>Opciones de configuración disponibles.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
```

### Tooltip

Información contextual que aparece al pasar el cursor.

#### Uso Básico

```tsx
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@schilling-apps/schilling-widgets-system";

function MyTooltip() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Información</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Este botón proporciona información adicional</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
```

#### Tooltip con Delay

```tsx
<TooltipProvider delayDuration={300}>
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="ghost">Hover aquí</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
            <p>Tooltip que aparece arriba</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
```

---

## 🎛️ Widgets Especializados

### TaskManager

Widget completo para gestión de tareas con funcionalidades avanzadas.

#### Características Principales

-   **Virtualización**: Renderizado eficiente de miles de tareas
-   **Filtrado Avanzado**: Por estado, asignado, fechas, prioridad
-   **Ordenación**: Múltiples criterios de ordenación
-   **Edición Inline**: Edición directa en la tabla
-   **Acciones Contextuales**: Menús desplegables por tarea
-   **Accesibilidad**: Navegación completa por teclado
-   **Responsive**: Adaptable a diferentes tamaños de pantalla

#### Uso Básico

```tsx
import { TaskManager, Task } from "@schilling-apps/schilling-widgets-system";

const tasks: Task[] = [
    {
        id: "1",
        name: "Implementar autenticación",
        status: "In progress",
        reference: "AUTH-001",
        phase: "Development",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "Juan Pérez",
        priority: "high",
        progress: 75,
        description: "Implementar sistema de autenticación JWT",
        tags: ["auth", "security"],
    },
    {
        id: "2",
        name: "Diseñar dashboard",
        status: "Not started",
        reference: "UI-002",
        phase: "Design",
        expectedStart: "2025-01-10",
        expectedDue: "2025-01-20",
        assignee: "Ana García",
        priority: "medium",
        progress: 0,
        description: "Crear wireframes y mockups del dashboard",
        tags: ["ui", "design"],
    },
];

function MyTaskManager() {
    const handleTaskUpdate = (taskId: string, updates: Partial<Task>) => {
        console.log("Actualizando tarea:", taskId, updates);
        // Lógica para actualizar la tarea
    };

    const handleTaskDelete = (taskId: string) => {
        console.log("Eliminando tarea:", taskId);
        // Lógica para eliminar la tarea
    };

    return (
        <TaskManager
            tasks={tasks}
            height={600}
            enableInlineEdit={true}
            enableRealTimeUpdates={true}
            onTaskUpdate={handleTaskUpdate}
            onTaskDelete={handleTaskDelete}
            onRefresh={() => console.log("Refrescar datos")}
        />
    );
}
```

#### Props del TaskManager

```typescript
interface TaskManagerProps {
    tasks: Task[]; // Array de tareas (requerido)
    columns?: TaskColumn[]; // Configuración de columnas
    loading?: boolean; // Estado de carga
    height?: number; // Altura del componente
    className?: string; // Clases CSS adicionales
    enableInlineEdit?: boolean; // Habilitar edición inline
    enableRealTimeUpdates?: boolean; // Actualizaciones en tiempo real
    pageSize?: number; // Elementos por página
    onTaskUpdate?: (id: string, updates: Partial<Task>) => void; // Callback actualización
    onTaskDelete?: (id: string) => void; // Callback eliminación
    onRefresh?: () => void; // Callback refrescar
    onOpenTaskManager?: () => void; // Callback abrir gestor completo
}
```

#### Interfaz Task

```typescript
interface Task {
    id: string; // Identificador único
    name: string; // Nombre de la tarea
    status: TaskStatus; // Estado actual
    reference: string; // Referencia/código
    phase: string; // Fase del proyecto
    expectedStart: string; // Fecha inicio (ISO)
    expectedDue: string; // Fecha fin (ISO)
    assignee: string; // Persona asignada
    progress?: number; // Progreso 0-100
    priority?: "low" | "medium" | "high"; // Prioridad
    description?: string; // Descripción detallada
    tags?: string[]; // Etiquetas
}

type TaskStatus =
    | "Overdue"
    | "Blocked"
    | "In progress"
    | "On hold"
    | "Not started";
```

#### Columnas Personalizadas

```tsx
import { TaskColumn } from "@schilling-apps/schilling-widgets-system";

const customColumns: TaskColumn[] = [
    {
        key: "name",
        header: "Tarea",
        width: 300,
        sortable: true,
        filterable: true,
        sticky: true,
        render: (value, task) => (
            <div className="flex items-center gap-2">
                {task.priority === "high" && (
                    <span className="text-red-500">🔥</span>
                )}
                <span className="font-medium">{value}</span>
            </div>
        ),
    },
    {
        key: "status",
        header: "Estado",
        width: 120,
        sortable: true,
        filterable: true,
        render: (value: TaskStatus) => (
            <Badge variant={getStatusVariant(value)}>{value}</Badge>
        ),
    },
    {
        key: "progress",
        header: "Progreso",
        width: 120,
        sortable: true,
        render: (value) => (
            <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${value || 0}%` }}
                    />
                </div>
                <span className="text-sm">{value || 0}%</span>
            </div>
        ),
    },
];

<TaskManager
    tasks={tasks}
    columns={customColumns}
    onTaskUpdate={handleTaskUpdate}
/>;
```

#### Funcionalidades Avanzadas

**Filtrado Avanzado**:

```tsx
// El TaskManager incluye automáticamente:
// - Búsqueda por texto en nombres de tareas
// - Filtro por estado (dropdown)
// - Filtro por asignado (dropdown)
// - Filtros adicionales según configuración
```

**Ordenación**:

```tsx
// Funcionalidad automática:
// - Click en encabezados para ordenar
// - Indicadores visuales de dirección
// - Ordenación por múltiples criterios
```

**Edición Inline**:

```tsx
// Características automáticas:
// - Click en nombres para editar
// - Enter para guardar
// - Escape para cancelar
// - Validación automática
```

### InfiniteTable

Tabla virtualizada para grandes conjuntos de datos.

#### Uso Básico

```tsx
import { InfiniteTable } from "@schilling-apps/schilling-widgets-system";

const columns = [
    {
        key: "name",
        header: "Nombre",
        width: 200,
        render: (value) => <strong>{value}</strong>,
    },
    {
        key: "email",
        header: "Email",
        width: 250,
        render: (value) => <a href={`mailto:${value}`}>{value}</a>,
    },
    {
        key: "company",
        header: "Empresa",
        width: 200,
    },
];

function MyInfiniteTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadMoreData = async () => {
        setLoading(true);
        try {
            const newData = await fetchMoreUsers();
            setData((prev) => [...prev, ...newData]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <InfiniteTable
            data={data}
            columns={columns}
            height={400}
            onLoadMore={loadMoreData}
            loading={loading}
            hasMore={true}
            sortable={true}
            onSort={(key, direction) => {
                console.log("Ordenar por:", key, direction);
            }}
        />
    );
}
```

#### Props del InfiniteTable

```typescript
interface InfiniteTableProps<T> {
    data: T[]; // Datos a mostrar
    columns: TableColumn<T>[]; // Configuración de columnas
    height?: number; // Altura de la tabla
    width?: number; // Ancho de la tabla
    rowHeight?: number; // Altura de cada fila
    loading?: boolean; // Estado de carga
    hasMore?: boolean; // Hay más datos disponibles
    sortable?: boolean; // Habilitar ordenación
    onLoadMore?: () => void; // Callback cargar más datos
    onSort?: (key: keyof T, direction: "asc" | "desc") => void; // Callback ordenación
    onRowClick?: (row: T, index: number) => void; // Callback click en fila
    className?: string; // Clases CSS adicionales
}
```

---

## 🔧 Gestión de Datos

### QueryProvider

Proveedor de TanStack Query con configuración optimizada.

#### Configuración Básica

```tsx
import { QueryProvider } from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <QueryProvider>
            <MyApplication />
        </QueryProvider>
    );
}
```

#### Configuración Avanzada

```tsx
import {
    QueryProvider,
    createQueryClient,
} from "@schilling-apps/schilling-widgets-system";

const queryClient = createQueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutos
            cacheTime: 10 * 60 * 1000, // 10 minutos
            retry: 3,
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    return (
        <QueryProvider client={queryClient}>
            <MyApplication />
        </QueryProvider>
    );
}
```

### Hooks de API

#### useApiQuery

Hook para consultas GET con caché y manejo de errores.

```tsx
import { useApiQuery } from "@schilling-apps/schilling-widgets-system";

interface User {
    id: number;
    name: string;
    email: string;
}

function UserList() {
    const { data, loading, error, refetch } = useApiQuery<User[]>({
        queryKey: ["users"],
        url: "https://jsonplaceholder.typicode.com/users",
        staleTime: 5 * 60 * 1000, // 5 minutos
        cacheTime: 10 * 60 * 1000, // 10 minutos
    });

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Button onClick={() => refetch()}>Refrescar</Button>
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

#### useApiMutation

Hook para operaciones POST, PUT, DELETE con actualización optimista.

```tsx
import { useApiMutation } from "@schilling-apps/schilling-widgets-system";

function CreateUser() {
    const { mutate, loading, error } = useApiMutation<User>({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "POST",
        onSuccess: (data) => {
            console.log("Usuario creado:", data);
            // Invalidar caché relacionado
            queryClient.invalidateQueries(["users"]);
        },
        onError: (error) => {
            console.error("Error creando usuario:", error);
        },
    });

    const handleSubmit = (formData: FormData) => {
        mutate({
            name: formData.get("name"),
            email: formData.get("email"),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="name"
                placeholder="Nombre"
                required
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                required
            />
            <Button
                type="submit"
                disabled={loading}
            >
                {loading ? "Creando..." : "Crear Usuario"}
            </Button>
            {error && <p className="text-red-500">Error: {error.message}</p>}
        </form>
    );
}
```

#### fetchApi

Función utilitaria para llamadas a API con manejo de errores.

```tsx
import { fetchApi } from "@schilling-apps/schilling-widgets-system";

async function getUserData(userId: number) {
    try {
        const user = await fetchApi<User>({
            url: `https://jsonplaceholder.typicode.com/users/${userId}`,
            method: "GET",
        });
        return user;
    } catch (error) {
        console.error("Error obteniendo usuario:", error);
        throw error;
    }
}
```

---

## 🎨 Personalización de Temas

### Configuración Global

```tsx
import { configureTheme } from "@schilling-apps/schilling-widgets-system";

// Configuración al iniciar la aplicación
configureTheme({
    useTailwind: true,
    theme: "light",
    customColors: {
        primary: "hsl(210 100% 50%)",
        secondary: "hsl(210 50% 90%)",
        accent: "hsl(160 100% 50%)",
    },
});
```

### ThemeProvider

Proveedor de contexto para temas con persistencia.

```tsx
import { ThemeProvider } from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <ThemeProvider
            defaultTheme="system"
            storageKey="app-theme"
        >
            <MyApplication />
        </ThemeProvider>
    );
}
```

### Hook useTheme

```tsx
import { useTheme } from "@schilling-apps/schilling-widgets-system";

function ThemeToggle() {
    const { theme, setTheme, themes } = useTheme();

    return (
        <div className="flex items-center gap-2">
            <span>Tema actual: {theme}</span>
            <Button
                variant="outline"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? "🌙" : "☀️"}
            </Button>
        </div>
    );
}
```

### Colores Personalizados

```css
/* Definir colores personalizados */
:root {
    --primary: 210 100% 50%; /* Azul vibrante */
    --secondary: 210 50% 90%; /* Azul claro */
    --accent: 160 100% 50%; /* Verde */
    --destructive: 0 84% 60%; /* Rojo */
    --warning: 45 100% 50%; /* Amarillo */
    --success: 120 100% 40%; /* Verde oscuro */
}

.dark {
    --primary: 210 100% 60%;
    --secondary: 210 20% 20%;
    --accent: 160 100% 40%;
    --destructive: 0 84% 50%;
    --warning: 45 100% 60%;
    --success: 120 100% 50%;
}
```

---

## 📖 Ejemplos Prácticos

### Ejemplo 1: Aplicación de Gestión de Proyectos

```tsx
import React, { useState } from "react";
import {
    ThemeProvider,
    QueryProvider,
    TaskManager,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Button,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    useTheme,
    Task,
} from "@schilling-apps/schilling-widgets-system";

const sampleTasks: Task[] = [
    {
        id: "1",
        name: "Diseño de la aplicación",
        status: "In progress",
        reference: "PROJ-001",
        phase: "Design",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "Ana García",
        priority: "high",
        progress: 65,
        description: "Crear wireframes y mockups",
        tags: ["design", "ui"],
    },
    {
        id: "2",
        name: "Implementación del backend",
        status: "Not started",
        reference: "PROJ-002",
        phase: "Development",
        expectedStart: "2025-01-10",
        expectedDue: "2025-01-25",
        assignee: "Carlos López",
        priority: "high",
        progress: 0,
        description: "Desarrollar API REST",
        tags: ["backend", "api"],
    },
    {
        id: "3",
        name: "Testing y QA",
        status: "On hold",
        reference: "PROJ-003",
        phase: "Testing",
        expectedStart: "2025-01-20",
        expectedDue: "2025-02-05",
        assignee: "María Rodríguez",
        priority: "medium",
        progress: 0,
        description: "Pruebas unitarias y de integración",
        tags: ["testing", "qa"],
    },
];

function ProjectHeader() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-3xl font-bold">Gestión de Proyectos</h1>
                <p className="text-muted-foreground">
                    Administra tus proyectos y tareas de manera eficiente
                </p>
            </div>
            <Button
                variant="outline"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? "🌙" : "☀️"}
            </Button>
        </div>
    );
}

function ProjectStats({ tasks }: { tasks: Task[] }) {
    const stats = {
        total: tasks.length,
        inProgress: tasks.filter((t) => t.status === "In progress").length,
        completed: tasks.filter((t) => t.status === "Completed").length,
        overdue: tasks.filter((t) => t.status === "Overdue").length,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
                <CardContent className="p-4">
                    <div className="text-2xl font-bold text-blue-600">
                        {stats.total}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        Total de tareas
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">
                        {stats.inProgress}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        En progreso
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="text-2xl font-bold text-purple-600">
                        {stats.completed}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        Completadas
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="text-2xl font-bold text-red-600">
                        {stats.overdue}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        Atrasadas
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function ProjectManagementApp() {
    const [tasks, setTasks] = useState<Task[]>(sampleTasks);

    const handleTaskUpdate = (taskId: string, updates: Partial<Task>) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, ...updates } : task
            )
        );
    };

    const handleTaskDelete = (taskId: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <QueryProvider>
            <ThemeProvider defaultTheme="light">
                <div className="min-h-screen bg-background">
                    <div className="container mx-auto p-6">
                        <ProjectHeader />
                        <ProjectStats tasks={tasks} />

                        <Tabs
                            defaultValue="kanban"
                            className="w-full"
                        >
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="kanban">
                                    Vista Kanban
                                </TabsTrigger>
                                <TabsTrigger value="table">
                                    Vista Tabla
                                </TabsTrigger>
                                <TabsTrigger value="calendar">
                                    Calendario
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent
                                value="kanban"
                                className="mt-6"
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Tablero Kanban</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-center py-12 text-muted-foreground">
                                            Vista Kanban en desarrollo...
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent
                                value="table"
                                className="mt-6"
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Gestión de Tareas</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <TaskManager
                                            tasks={tasks}
                                            height={500}
                                            enableInlineEdit={true}
                                            enableRealTimeUpdates={true}
                                            onTaskUpdate={handleTaskUpdate}
                                            onTaskDelete={handleTaskDelete}
                                            onRefresh={() =>
                                                console.log("Refrescar tareas")
                                            }
                                        />
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent
                                value="calendar"
                                className="mt-6"
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Vista Calendario</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-center py-12 text-muted-foreground">
                                            Vista de calendario en desarrollo...
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </ThemeProvider>
        </QueryProvider>
    );
}

export default ProjectManagementApp;
```

### Ejemplo 2: Dashboard de Usuarios

```tsx
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
    Button,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    InfiniteTable,
    useApiQuery,
    QueryProvider,
} from "@schilling-apps/schilling-widgets-system";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

function UserDashboard() {
    const [searchTerm, setSearchTerm] = useState("");

    const {
        data: users,
        loading,
        error,
    } = useApiQuery<User[]>({
        queryKey: ["users"],
        url: "https://jsonplaceholder.typicode.com/users",
    });

    const filteredUsers =
        users?.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];

    const columns = [
        {
            key: "name" as keyof User,
            header: "Usuario",
            width: 250,
            render: (value: string, user: User) => (
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
                        />
                        <AvatarFallback>
                            {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-medium">{value}</div>
                        <div className="text-sm text-muted-foreground">
                            {user.email}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            key: "phone" as keyof User,
            header: "Teléfono",
            width: 150,
        },
        {
            key: "website" as keyof User,
            header: "Sitio Web",
            width: 200,
            render: (value: string) => (
                <a
                    href={`https://${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    {value}
                </a>
            ),
        },
        {
            key: "company" as keyof User,
            header: "Empresa",
            width: 200,
            render: (value: User["company"]) => (
                <Badge variant="secondary">{value.name}</Badge>
            ),
        },
    ];

    if (loading) return <div className="p-6">Cargando usuarios...</div>;
    if (error)
        return <div className="p-6 text-red-500">Error: {error.message}</div>;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard de Usuarios</CardTitle>
                    <div className="flex items-center gap-4 mt-4">
                        <Input
                            placeholder="Buscar usuarios..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="max-w-sm"
                        />
                        <Button variant="outline">Exportar</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <InfiniteTable
                        data={filteredUsers}
                        columns={columns}
                        height={500}
                        sortable={true}
                        onRowClick={(user) =>
                            console.log("Usuario seleccionado:", user)
                        }
                    />
                </CardContent>
            </Card>
        </div>
    );
}

function UserDashboardApp() {
    return (
        <QueryProvider>
            <UserDashboard />
        </QueryProvider>
    );
}

export default UserDashboardApp;
```

---

## 🔨 Desarrollo y Contribución

### Estructura del Proyecto

```
src/
├── components/          # Componentes UI básicos
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Accordion.tsx
│   ├── AlertDialog.tsx
│   ├── Avatar.tsx
│   ├── Badge.tsx
│   ├── Checkbox.tsx
│   ├── Dialog.tsx
│   ├── DropdownMenu.tsx
│   ├── Select.tsx
│   ├── Tabs.tsx
│   ├── Tooltip.tsx
│   ├── LoadingSpinner.tsx
│   └── ThemeProvider.tsx
├── widgets/            # Widgets avanzados
│   ├── InfiniteTable.tsx
│   └── TaskManager.tsx
├── hooks/              # Hooks personalizados
│   ├── QueryProvider.tsx
│   └── useApi.ts
├── utils/              # Utilidades
│   └── cn.ts
├── styles/             # Estilos
│   ├── globals.css
│   ├── css-only.css
│   └── index.ts
├── examples/           # Ejemplos de uso
│   ├── comprehensive-example.tsx
│   ├── infinite-table-example.tsx
│   └── task-manager-example.tsx
└── index.ts           # Exportaciones principales
```

### Agregar Nuevos Componentes

#### 1. Crear el Componente

```tsx
// src/components/NewComponent.tsx
import React from "react";
import { cn } from "../utils/cn";

interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "alternate";
    size?: "sm" | "md" | "lg";
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
    (
        { className, variant = "default", size = "md", children, ...props },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    // Clases base
                    "schilling-new-component",
                    // Variantes
                    {
                        "schilling-new-component--default":
                            variant === "default",
                        "schilling-new-component--alternate":
                            variant === "alternate",
                    },
                    // Tamaños
                    {
                        "schilling-new-component--sm": size === "sm",
                        "schilling-new-component--md": size === "md",
                        "schilling-new-component--lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NewComponent.displayName = "NewComponent";
```

#### 2. Agregar Estilos CSS-only

```css
/* src/styles/css-only.css */
.schilling-new-component {
    /* Estilos base */
    display: flex;
    align-items: center;
    border-radius: 0.375rem;
    transition: all 0.2s;
}

.schilling-new-component--default {
    background-color: var(--primary);
    color: white;
}

.schilling-new-component--alternate {
    background-color: var(--secondary);
    color: var(--secondary-foreground);
}

.schilling-new-component--sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

.schilling-new-component--md {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
}

.schilling-new-component--lg {
    padding: 1rem 2rem;
    font-size: 1.125rem;
}
```

#### 3. Actualizar Exportaciones

```tsx
// src/index.ts
export { NewComponent } from "./components/NewComponent";
export type { NewComponentProps } from "./components/NewComponent";
```

#### 4. Agregar Ejemplo

```tsx
// src/examples/new-component-example.tsx
import React from "react";
import { NewComponent } from "../components/NewComponent";

export function NewComponentExample() {
    return (
        <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">NewComponent Examples</h2>

            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">Variants</h3>
                    <div className="flex gap-4">
                        <NewComponent variant="default">Default</NewComponent>
                        <NewComponent variant="alternate">
                            Alternate
                        </NewComponent>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Sizes</h3>
                    <div className="flex gap-4 items-center">
                        <NewComponent size="sm">Small</NewComponent>
                        <NewComponent size="md">Medium</NewComponent>
                        <NewComponent size="lg">Large</NewComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Scripts de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con watch mode
npm run dev

# Construir para producción
npm run build

# Verificar tipos
npx tsc --noEmit

# Limpiar dist
rm -rf dist
```

### Guidelines de Desarrollo

#### Convenciones de Naming

-   **Componentes**: PascalCase (`Button`, `TaskManager`)
-   **Props**: camelCase (`className`, `onClick`)
-   **Archivos**: PascalCase para componentes (`Button.tsx`)
-   **Clases CSS**: kebab-case con prefijo (`schilling-button`)

#### Estructura de Componentes

```tsx
// 1. Imports
import React from "react";
import { cn } from "../utils/cn";

// 2. Interfaces
interface ComponentProps {
    // Props específicas primero
    variant?: "default" | "alternate";
    size?: "sm" | "md" | "lg";
    // Props nativas después
    className?: string;
    children?: React.ReactNode;
}

// 3. Componente
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "base-classes",
                    variantClasses[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

// 4. Display name
Component.displayName = "Component";
```

#### Accesibilidad

-   Usar elementos HTML semánticos
-   Incluir atributos ARIA apropiados
-   Soporte para navegación por teclado
-   Contrastes adecuados
-   Textos alternativos para elementos visuales

```tsx
// Ejemplo de accesibilidad
<button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    aria-label={ariaLabel}
    aria-pressed={pressed}
    role="button"
    tabIndex={disabled ? -1 : 0}
    {...props}
>
    {children}
</button>
```

---

## 📚 Referencia de APIs

### Utility Functions

#### cn (className merger)

```typescript
function cn(...classes: (string | undefined | null | false)[]): string;

// Ejemplos
cn("base-class", "additional-class"); // 'base-class additional-class'
cn("base-class", condition && "conditional-class"); // 'base-class conditional-class'
cn("base-class", false && "never-added"); // 'base-class'
```

#### configureTheme

```typescript
interface ThemeConfig {
    useTailwind?: boolean;
    theme?: "light" | "dark" | "system";
    customColors?: Record<string, string>;
}

function configureTheme(config: ThemeConfig): void;
```

### Type Definitions

#### Task Interface

```typescript
interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    reference: string;
    phase: string;
    expectedStart: string;
    expectedDue: string;
    assignee: string;
    progress?: number;
    priority?: "low" | "medium" | "high";
    description?: string;
    tags?: string[];
}

type TaskStatus =
    | "Overdue"
    | "Blocked"
    | "In progress"
    | "On hold"
    | "Not started";
```

#### TaskColumn Interface

```typescript
interface TaskColumn {
    key: keyof Task;
    header: string;
    width?: number;
    sortable?: boolean;
    filterable?: boolean;
    sticky?: boolean;
    render?: (value: any, task: Task, index: number) => React.ReactNode;
}
```

#### TableColumn Interface

```typescript
interface TableColumn<T> {
    key: keyof T;
    header: string;
    width?: number;
    render?: (value: any, row: T, index: number) => React.ReactNode;
}
```

### Component Variants

#### Button Variants

```typescript
const buttonVariants = {
    variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
    },
};
```

#### Badge Variants

```typescript
const badgeVariants = {
    variant: {
        default: "bg-primary hover:bg-primary/80",
        secondary: "bg-secondary hover:bg-secondary/80",
        destructive: "bg-destructive hover:bg-destructive/80",
        outline: "text-foreground",
    },
};
```

### CSS Variables

#### Light Theme

```css
:root {
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
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent-foreground: 222.2 84% 4.9%;
}
```

#### Dark Theme

```css
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

---

## 🎯 Mejores Prácticas

### Performance

1. **Lazy Loading**: Carga componentes solo cuando se necesitan
2. **Memoización**: Usa React.memo para componentes que no cambian frecuentemente
3. **Virtualización**: Usa InfiniteTable para grandes conjuntos de datos
4. **Tree Shaking**: Importa solo los componentes que necesitas

### Accesibilidad

1. **Navegación por Teclado**: Todos los componentes soportan Tab, Enter, Escape
2. **ARIA Labels**: Etiquetas descriptivas para lectores de pantalla
3. **Contrastes**: Colores que cumplen con WCAG 2.1
4. **Semántica**: HTML semántico apropiado

### Mantenibilidad

1. **Componentes Pequeños**: Cada componente tiene una responsabilidad específica
2. **Props Consistentes**: Patrones de props similares entre componentes
3. **Documentación**: Comentarios JSDoc para APIs públicas
4. **Pruebas**: Ejemplos de uso incluidos

---

**Documentación creada para Schilling Widgets System v1.0.0**

Para más información, consulta el [README principal](../README.md) o los ejemplos en la carpeta `src/examples/`.
