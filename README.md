# Schilling Widgets System

Una librería completa de componentes UI para aplicaciones React con TypeScript, que funciona **con o sin Tailwind CSS**. Incluye todos los componentes esenciales de Shadcn UI, widgets avanzados y herramientas para gestión de datos con TanStack Query.

## 🚀 Características Principales

### 🎨 Sistema de Estilos Flexible

-   **Tailwind CSS**: Integración completa con configuración personalizada
-   **Modo CSS-only**: Funciona sin Tailwind CSS para máxima flexibilidad
-   **Configuración Runtime**: Cambio dinámico entre modos
-   **Soporte de Temas**: Modo claro/oscuro con colores personalizables

### 📦 Librería de Componentes Completa

-   **Componentes Básicos**: Button, Card, Input, Dialog, LoadingSpinner
-   **Componentes Avanzados**: Accordion, AlertDialog, Avatar, Badge, Checkbox, DropdownMenu, Select, Tabs, Tooltip
-   **Widgets Avanzados**: InfiniteTable, TaskManager con virtualización
-   **Shadcn UI Completo**: Conjunto completo de componentes accesibles y modernos

### 🛠️ Herramientas de Desarrollo

-   **TypeScript First**: Seguridad de tipos completa e IntelliSense
-   **TanStack Query**: Gestión eficiente de datos y estado
-   **Optimizado**: Tree-shaking y solo carga lo que necesitas
-   **Accesible**: Construido siguiendo mejores prácticas de accesibilidad

## 📦 Instalación

```bash
npm install @schilling-apps/schilling-widgets-system
```

### Dependencias Peer

Asegúrate de tener estas dependencias instaladas:

```bash
npm install react react-dom @tanstack/react-query lucide-react
```

## 🎯 Modos de Uso

### Con Tailwind CSS (Recomendado)

#### 1. Configurar Tailwind

Incluye los componentes de la librería en tu `tailwind.config.js`:

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

#### 2. Importar CSS de Tailwind

En tu archivo CSS principal:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variables de tema */
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

#### 3. Usar los Componentes

```tsx
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    TaskManager,
    ThemeProvider,
} from "@schilling-apps/schilling-widgets-system";

function MyApp() {
    return (
        <ThemeProvider>
            <Card>
                <CardHeader>
                    <CardTitle>Mi Aplicación</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button>Hacer Click</Button>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
```

### Sin Tailwind CSS

#### 1. Configurar Modo CSS-only

```tsx
import {
    configureTheme,
    ThemeProvider,
    Button,
    Card,
} from "@schilling-apps/schilling-widgets-system";

// Configurar en la raíz de tu aplicación
configureTheme({ useTailwind: false });

function App() {
    return (
        <ThemeProvider>
            <Card>
                <CardContent>
                    <Button>¡Funciona sin Tailwind!</Button>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
```

#### 2. Personalizar Estilos

```css
/* Puedes sobrescribir los estilos predefinidos */
.schilling-button {
    background-color: #your-color;
    border-radius: 8px;
    /* ... más estilos personalizados */
}

.schilling-card {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    /* ... más estilos personalizados */
}
```

## 🧩 Componentes Disponibles

### Componentes Básicos

#### Button

```tsx
import { Button } from "@schilling-apps/schilling-widgets-system";

<Button variant="default" size="md">
    Botón Principal
</Button>
<Button variant="outline" size="sm">
    Botón Secundario
</Button>
<Button variant="destructive" size="lg">
    Botón Peligroso
</Button>
```

**Variantes**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`

**Tamaños**: `sm`, `md`, `lg`

#### Card

```tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@schilling-apps/schilling-widgets-system";

<Card>
    <CardHeader>
        <CardTitle>Título de la Tarjeta</CardTitle>
        <CardDescription>Descripción opcional</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Contenido de la tarjeta</p>
    </CardContent>
    <CardFooter>
        <Button>Acción</Button>
    </CardFooter>
</Card>;
```

#### Input

```tsx
import { Input } from "@schilling-apps/schilling-widgets-system";

<Input
    type="text"
    placeholder="Ingresa tu texto"
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>;
```

### Componentes Avanzados

#### Accordion

```tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@schilling-apps/schilling-widgets-system";

<Accordion
    type="single"
    collapsible
>
    <AccordionItem value="item-1">
        <AccordionTrigger>¿Qué es Schilling Widgets?</AccordionTrigger>
        <AccordionContent>
            Una librería completa de componentes UI para React.
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
} from "@schilling-apps/schilling-widgets-system";

<Tabs defaultValue="tab1">
    <TabsList>
        <TabsTrigger value="tab1">Pestaña 1</TabsTrigger>
        <TabsTrigger value="tab2">Pestaña 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
        <p>Contenido de la pestaña 1</p>
    </TabsContent>
    <TabsContent value="tab2">
        <p>Contenido de la pestaña 2</p>
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
} from "@schilling-apps/schilling-widgets-system";

<TooltipProvider>
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="outline">Hover aquí</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Información adicional</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>;
```

## 🎛️ Widgets Avanzados

### TaskManager

Un widget completo para gestión de tareas con funcionalidades avanzadas:

```tsx
import { TaskManager, Task } from "@schilling-apps/schilling-widgets-system";

const tasks: Task[] = [
    {
        id: "task-1",
        name: "Implementar autenticación",
        status: "In progress",
        reference: "REF-001",
        phase: "Development",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "John Doe",
        priority: "high",
        description: "Implementar sistema de autenticación JWT",
        progress: 75,
        tags: ["auth", "security"],
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
                console.log("Tarea actualizada:", id, updates);
            }}
            onTaskDelete={(id) => {
                console.log("Tarea eliminada:", id);
            }}
            onRefresh={() => {
                console.log("Refrescar datos");
            }}
        />
    );
}
```

#### Características del TaskManager

-   **🚀 Rendimiento**: Virtualización con react-window para grandes volúmenes de datos
-   **📊 Funcionalidades**: Ordenación, filtrado, paginación, columnas personalizables
-   **✏️ Edición**: Edición inline, menús de acción, callbacks completos
-   **🎨 UI/UX**: Tooltips, estados visuales, diseño responsivo, theming
-   **♿ Accesibilidad**: Navegación por teclado, ARIA labels, HTML semántico

#### Props del TaskManager

| Prop                    | Tipo           | Requerido | Default         | Descripción                 |
| ----------------------- | -------------- | --------- | --------------- | --------------------------- |
| `tasks`                 | `Task[]`       | ✅        | -               | Array de tareas a mostrar   |
| `columns`               | `TaskColumn[]` | ❌        | DEFAULT_COLUMNS | Configuración de columnas   |
| `loading`               | `boolean`      | ❌        | `false`         | Estado de carga             |
| `height`                | `number`       | ❌        | `600`           | Altura del componente       |
| `enableInlineEdit`      | `boolean`      | ❌        | `true`          | Habilitar edición inline    |
| `enableRealTimeUpdates` | `boolean`      | ❌        | `false`         | Actualizaciones automáticas |
| `pageSize`              | `number`       | ❌        | `50`            | Elementos por página        |
| `onTaskUpdate`          | `function`     | ❌        | -               | Callback actualizar tarea   |
| `onTaskDelete`          | `function`     | ❌        | -               | Callback eliminar tarea     |
| `onRefresh`             | `function`     | ❌        | -               | Callback refrescar datos    |

#### Interfaz Task

```typescript
interface Task {
    id: string; // Identificador único
    name: string; // Nombre de la tarea
    status: TaskStatus; // Estado actual
    reference: string; // Referencia/código
    phase: string; // Fase del proyecto
    expectedStart: string; // Fecha inicio esperada (ISO)
    expectedDue: string; // Fecha fin esperada (ISO)
    assignee: string; // Persona asignada
    progress?: number; // Progreso (0-100)
    priority?: "low" | "medium" | "high";
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

### InfiniteTable

Tabla virtualizada para grandes conjuntos de datos:

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

## 🔧 Gestión de Datos

### QueryProvider

Proveedor de TanStack Query con configuración optimizada:

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

### Hooks de API

```tsx
import {
    useApiQuery,
    useApiMutation,
} from "@schilling-apps/schilling-widgets-system";

// Para consultas GET
function UserList() {
    const { data, loading, error } = useApiQuery<User[]>({
        queryKey: ["users"],
        url: "https://api.example.com/users",
    });

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data?.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

// Para mutaciones POST/PUT/DELETE
function CreateUser() {
    const { mutate, loading } = useApiMutation<User>({
        url: "https://api.example.com/users",
        method: "POST",
        onSuccess: (data) => {
            console.log("Usuario creado:", data);
        },
    });

    const handleSubmit = (userData: Partial<User>) => {
        mutate(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formulario */}
            <Button
                type="submit"
                disabled={loading}
            >
                {loading ? "Creando..." : "Crear Usuario"}
            </Button>
        </form>
    );
}
```

## 🎨 Personalización de Temas

### Configuración de Tema

```tsx
import {
    configureTheme,
    ThemeProvider,
} from "@schilling-apps/schilling-widgets-system";

// Configuración global
configureTheme({
    useTailwind: true,
    theme: "dark",
    customColors: {
        primary: "hsl(210 100% 50%)",
        secondary: "hsl(210 50% 90%)",
    },
});

// Uso con contexto
function App() {
    return (
        <ThemeProvider defaultTheme="dark">
            <MyApplication />
        </ThemeProvider>
    );
}
```

### Hook de Tema

```tsx
import { useTheme } from "@schilling-apps/schilling-widgets-system";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
        </Button>
    );
}
```

## 📖 Ejemplos Completos

### Ejemplo Básico

```tsx
import React from "react";
import {
    ThemeProvider,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Button,
    Input,
    QueryProvider,
} from "@schilling-apps/schilling-widgets-system";

function App() {
    return (
        <QueryProvider>
            <ThemeProvider defaultTheme="light">
                <div className="container mx-auto p-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Mi Aplicación</CardTitle>
                            <CardDescription>
                                Construida con Schilling Widgets System
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input placeholder="Ingresa tu nombre" />
                            <Button>Enviar</Button>
                        </CardContent>
                    </Card>
                </div>
            </ThemeProvider>
        </QueryProvider>
    );
}

export default App;
```

### Ejemplo con TaskManager

```tsx
import React, { useState, useCallback } from "react";
import {
    TaskManager,
    Task,
    TaskStatus,
} from "@schilling-apps/schilling-widgets-system";

const SAMPLE_TASKS: Task[] = [
    {
        id: "1",
        name: "Implementar autenticación",
        status: "In progress",
        reference: "AUTH-001",
        phase: "Development",
        expectedStart: "2025-01-01",
        expectedDue: "2025-01-15",
        assignee: "John Doe",
        priority: "high",
        progress: 75,
        description: "Implementar sistema de autenticación JWT",
        tags: ["auth", "security"],
    },
    {
        id: "2",
        name: "Diseñar interfaz de usuario",
        status: "Not started",
        reference: "UI-002",
        phase: "Design",
        expectedStart: "2025-01-10",
        expectedDue: "2025-01-20",
        assignee: "Jane Smith",
        priority: "medium",
        progress: 0,
        description: "Crear mockups y prototipos",
        tags: ["ui", "design"],
    },
];

function TaskManagerDemo() {
    const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

    const handleTaskUpdate = useCallback(
        (taskId: string, updates: Partial<Task>) => {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, ...updates } : task
                )
            );
        },
        []
    );

    const handleTaskDelete = useCallback((taskId: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Gestor de Tareas</h1>
            <TaskManager
                tasks={tasks}
                height={600}
                enableInlineEdit={true}
                enableRealTimeUpdates={true}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
                onRefresh={() => console.log("Refrescar datos")}
            />
        </div>
    );
}

export default TaskManagerDemo;
```

## 🔨 Desarrollo y Construcción

### Scripts Disponibles

```bash
# Construir el paquete
npm run build

# Desarrollo con watch mode
npm run dev

# Preparar para publicación
npm run prepublishOnly
```

### Estructura del Proyecto

```
schilling-widgets-system/
├── src/
│   ├── components/          # Componentes UI básicos
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
│   ├── widgets/            # Widgets avanzados
│   │   ├── InfiniteTable.tsx
│   │   └── TaskManager.tsx
│   ├── hooks/              # Hooks personalizados
│   │   ├── QueryProvider.tsx
│   │   └── useApi.ts
│   ├── utils/              # Utilidades
│   │   └── cn.ts
│   ├── styles/             # Estilos
│   │   ├── globals.css
│   │   ├── css-only.css
│   │   └── index.ts
│   ├── examples/           # Ejemplos de uso
│   │   ├── comprehensive-example.tsx
│   │   ├── infinite-table-example.tsx
│   │   └── task-manager-example.tsx
│   └── index.ts           # Exportaciones principales
├── dist/                  # Archivos compilados
│   ├── index.cjs.js
│   ├── index.esm.js
│   ├── index.d.ts
│   └── styles.css
├── docs/                  # Documentación adicional
├── package.json
├── tsconfig.json
├── rollup.config.js
├── tailwind.config.js
└── README.md
```

## 🤝 Contribución

### Agregar Nuevos Componentes

1. **Instalar dependencias requeridas**

```bash
npm install @radix-ui/react-[component-name]
```

2. **Crear archivo de componente**

```tsx
// src/components/NewComponent.tsx
import React from "react";
import { cn } from "../utils/cn";

interface NewComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("schilling-new-component", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NewComponent.displayName = "NewComponent";
```

3. **Exportar componente**

```tsx
// src/index.ts
export { NewComponent } from "./components/NewComponent";
export type { NewComponentProps } from "./components/NewComponent";
```

4. **Construir paquete**

```bash
npm run build
```

### Componentes Radix UI Disponibles

-   **Dialog**: `@radix-ui/react-dialog`
-   **Select**: `@radix-ui/react-select`
-   **Checkbox**: `@radix-ui/react-checkbox`
-   **Switch**: `@radix-ui/react-switch`
-   **AlertDialog**: `@radix-ui/react-alert-dialog`
-   **DropdownMenu**: `@radix-ui/react-dropdown-menu`
-   **Tabs**: `@radix-ui/react-tabs`
-   **Tooltip**: `@radix-ui/react-tooltip`
-   **Popover**: `@radix-ui/react-popover`
-   **Accordion**: `@radix-ui/react-accordion`

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles.

## 🆘 Soporte

Para reportar problemas o solicitar características:

1. Crea un issue en el repositorio
2. Incluye ejemplos de código cuando sea posible
3. Especifica la versión del paquete que estás usando
4. Describe el comportamiento esperado vs. el actual

## 🔄 Changelog

### v1.0.0

-   ✅ Implementación inicial con todos los componentes básicos
-   ✅ Soporte para Tailwind CSS y CSS-only
-   ✅ Widget TaskManager con funcionalidades avanzadas
-   ✅ Widget InfiniteTable con virtualización
-   ✅ Sistema de temas completo
-   ✅ Integración con TanStack Query
-   ✅ Documentación completa y ejemplos

## 📚 Recursos Adicionales

### Documentación de Dependencias

-   [React](https://reactjs.org/docs)
-   [TypeScript](https://www.typescriptlang.org/docs)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [TanStack Query](https://tanstack.com/query/latest)
-   [Radix UI](https://www.radix-ui.com/docs)
-   [Lucide Icons](https://lucide.dev/icons)

### Ejemplos de Proyectos

Los ejemplos incluidos en el paquete muestran:

-   **Comprehensive Example**: Uso de todos los componentes
-   **TaskManager Example**: Implementación completa del widget de tareas
-   **InfiniteTable Example**: Tabla con datos de API pública

---

**Desarrollado por Schilling Apps** - Una solución completa para tus aplicaciones React.
