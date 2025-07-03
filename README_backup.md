# Schilling Widgets System

Una librería completa de componentes UI para aplicaciones React con TypeScript, que funciona **con o sin Tailwind CSS**. Incluye todos los componentes esenciales de Shadcn UI, widgets avanzados y herramientas para gestión de datos con TanStack Query.

## 🚀 Características Principales

### 🎨 **Sistema de Estilos Flexible**

- **Tailwind CSS**: Integración completa con configuración personalizada
- **Modo CSS-only**: Funciona sin Tailwind CSS para máxima flexibilidad
- **Configuración Runtime**: Cambio dinámico entre modos
- **Soporte de Temas**: Modo claro/oscuro con colores personalizables

### 📦 **Librería de Componentes Completa**

- **Componentes Básicos**: Button, Card, Input, Dialog, LoadingSpinner
- **Componentes Avanzados**: Accordion, AlertDialog, Avatar, Badge, Checkbox, DropdownMenu, Select, Tabs, Tooltip
- **Widgets Avanzados**: InfiniteTable, TaskManager con virtualización
- **Shadcn UI Completo**: Conjunto completo de componentes accesibles y modernos

### 🛠️ **Herramientas de Desarrollo**

- **TypeScript First**: Seguridad de tipos completa e IntelliSense
- **TanStack Query**: Gestión eficiente de datos y estado
- **Optimizado**: Tree-shaking y solo carga lo que necesitas
- **Accesible**: Construido siguiendo mejores prácticas de accesibilidad

## 📦 Instalación

```bash
npm install @schilling-apps/schilling-widgets-system
```

### Dependencias Peer

Asegúrate de tener estas dependencias instaladas:

```bash
npm install react react-dom @tanstack/react-query lucide-react
```

## � Modos de Uso

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
```

2. **Import Tailwind CSS** in your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. **Use the components** in your React application:

```tsx
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hello World</CardTitle>
            </CardHeader>
            <CardContent>
                <Button>Click me</Button>
            </CardContent>
        </Card>
    );
}
```

### Without Tailwind CSS

1. **Configure the library** to use CSS-only mode:

```tsx
import { configureTheme } from "@schilling-apps/schilling-widgets-system";

// Configure at the root of your app
configureTheme({ useTailwind: false });
```

2. **Import the CSS-only styles**:

```tsx
import "@schilling-apps/schilling-widgets-system/dist/css-only.css";
```

3. **Use the components** normally (they'll use the CSS-only styles):

```tsx
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hello World</CardTitle>
            </CardHeader>
            <CardContent>
                <Button>Click me</Button>
            </CardContent>
        </Card>
    );
}
```

## 🧩 Components

### Basic Components

-   **Button**: Various styles and sizes
-   **Card**: Container with header, content, and footer
-   **Input**: Form input with validation states
-   **Dialog**: Modal dialogs with customizable content
-   **LoadingSpinner**: Loading indicators

### Advanced Components

-   **Accordion**: Collapsible content panels
-   **AlertDialog**: Confirmation dialogs
-   **Avatar**: User profile pictures with fallbacks
-   **Checkbox**: Form checkboxes
-   **Tabs**: Tabbed navigation
-   **Tooltip**: Hover information

### Widgets

-   **InfiniteTable**: Virtualized table for large datasets with sorting, custom rendering, and infinite scrolling

Add the package to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                // ... other colors
            },
        },
    },
    plugins: [],
};
```

## Components

### Button

```tsx
import { Button } from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return (
        <Button
            variant="default"
            size="md"
        >
            Click me
        </Button>
    );
}
```

Available variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
Available sizes: `default`, `sm`, `lg`, `icon`

### Card

```tsx
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card content goes here</p>
            </CardContent>
        </Card>
    );
}
```

### Input

```tsx
import { Input } from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return (
        <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-sm"
        />
    );
}
```

### Loading Spinner

```tsx
import { LoadingSpinner } from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    return <LoadingSpinner size="md" />;
}
```

## Data Fetching Hooks

### useApiQuery

```tsx
import { useApiQuery } from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    const { data, isLoading, error } = useApiQuery<User[]>(
        ["users"],
        "https://api.example.com/users"
    );

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data?.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}
```

### useApiMutation

```tsx
import {
    useApiMutation,
    fetchApi,
} from "@schilling-apps/schilling-widgets-system";

function MyComponent() {
    const createUser = useApiMutation(
        (userData: CreateUserData) =>
            fetchApi<User>("https://api.example.com/users", {
                method: "POST",
                body: JSON.stringify(userData),
            }),
        {
            onSuccess: (data) => {
                console.log("User created:", data);
            },
            invalidateQueries: [["users"]],
        }
    );

    const handleSubmit = (userData: CreateUserData) => {
        createUser.mutate(userData);
    };

    return (
        <Button
            onClick={() => handleSubmit({ name: "John Doe" })}
            disabled={createUser.isPending}
        >
            {createUser.isPending ? "Creating..." : "Create User"}
        </Button>
    );
}
```

## Utilities

### cn (Class Name Utility)

```tsx
import { cn } from "@schilling-apps/schilling-widgets-system";

const className = cn("base-class", condition && "conditional-class", {
    "object-class": condition,
});
```

### Custom Query Client

```tsx
import {
    createQueryClient,
    QueryProvider,
} from "@schilling-apps/schilling-widgets-system";

const queryClient = createQueryClient();

function App() {
    return <QueryProvider client={queryClient}>{/* Your app */}</QueryProvider>;
}
```

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
