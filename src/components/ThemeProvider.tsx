import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { setUseTailwind } from "../utils/cn";

interface ThemeConfig {
    useTailwind?: boolean;
    theme?: "light" | "dark";
    colors?: {
        primary?: string;
        secondary?: string;
        destructive?: string;
        background?: string;
        foreground?: string;
        card?: string;
        border?: string;
        input?: string;
        ring?: string;
        muted?: string;
        accent?: string;
        popover?: string;
        radius?: string;
    };
}

interface ThemeContextType {
    config: ThemeConfig;
    setConfig: (config: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
    config?: ThemeConfig;
}

export function ThemeProvider({
    children,
    config: initialConfig = {},
}: ThemeProviderProps) {
    const [config, setConfigState] = useState<ThemeConfig>({
        useTailwind: true,
        theme: "light",
        ...initialConfig,
    });

    const setConfig = (newConfig: ThemeConfig) => {
        setConfigState((prev) => ({ ...prev, ...newConfig }));
    };

    useEffect(() => {
        // Set global Tailwind usage
        if (config.useTailwind !== undefined) {
            setUseTailwind(config.useTailwind);
        }

        // Auto-inject CSS when not using Tailwind
        if (!config.useTailwind && typeof window !== "undefined") {
            // Check if styles are already loaded
            if (!document.querySelector("style[data-schilling-widgets]")) {
                // Create a style element with the CSS
                const styleElement = document.createElement("style");
                styleElement.setAttribute("data-schilling-widgets", "true");

                // Inject the CSS content directly
                styleElement.textContent = `
                    :root {
                        --background: 0 0% 100%;
                        --foreground: 222.2 84% 4.9%;
                        --card: 0 0% 100%;
                        --card-foreground: 222.2 84% 4.9%;
                        --primary: 222.2 47.4% 11.2%;
                        --primary-foreground: 210 40% 98%;
                        --secondary: 210 40% 96%;
                        --secondary-foreground: 222.2 47.4% 11.2%;
                        --muted: 210 40% 96%;
                        --muted-foreground: 215.4 16.3% 46.9%;
                        --accent: 210 40% 96%;
                        --accent-foreground: 222.2 47.4% 11.2%;
                        --destructive: 0 84.2% 60.2%;
                        --destructive-foreground: 210 40% 98%;
                        --border: 214.3 31.8% 91.4%;
                        --input: 214.3 31.8% 91.4%;
                        --ring: 222.2 84% 4.9%;
                        --radius: 0.5rem;
                    }

                    .schilling-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0.375rem;
                        font-size: 0.875rem;
                        font-weight: 500;
                        transition: colors 0.2s;
                        outline: 2px solid transparent;
                        outline-offset: 2px;
                        border: none;
                        cursor: pointer;
                        white-space: nowrap;
                    }

                    .schilling-button:focus-visible {
                        outline: 2px solid hsl(var(--ring));
                        outline-offset: 2px;
                    }

                    .schilling-button:disabled {
                        pointer-events: none;
                        opacity: 0.5;
                    }

                    .schilling-button--primary {
                        background-color: hsl(var(--primary));
                        color: hsl(var(--primary-foreground));
                    }

                    .schilling-button--primary:hover {
                        background-color: hsl(var(--primary) / 0.9);
                    }

                    .schilling-button--secondary {
                        background-color: hsl(var(--secondary));
                        color: hsl(var(--secondary-foreground));
                    }

                    .schilling-button--secondary:hover {
                        background-color: hsl(var(--secondary) / 0.8);
                    }

                    .schilling-button--destructive {
                        background-color: hsl(var(--destructive));
                        color: hsl(var(--destructive-foreground));
                    }

                    .schilling-button--destructive:hover {
                        background-color: hsl(var(--destructive) / 0.9);
                    }

                    .schilling-button--outline {
                        border: 1px solid hsl(var(--input));
                        background-color: hsl(var(--background));
                    }

                    .schilling-button--outline:hover {
                        background-color: hsl(var(--accent));
                        color: hsl(var(--accent-foreground));
                    }

                    .schilling-button--ghost:hover {
                        background-color: hsl(var(--accent));
                        color: hsl(var(--accent-foreground));
                    }

                    .schilling-button--link {
                        color: hsl(var(--primary));
                        text-decoration: underline;
                        text-underline-offset: 4px;
                    }

                    .schilling-button--default {
                        height: 2.5rem;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                    }

                    .schilling-button--sm {
                        height: 2.25rem;
                        padding-left: 0.75rem;
                        padding-right: 0.75rem;
                    }

                    .schilling-button--lg {
                        height: 2.75rem;
                        padding-left: 2rem;
                        padding-right: 2rem;
                    }

                    .schilling-button--icon {
                        height: 2.5rem;
                        width: 2.5rem;
                    }
                `;

                document.head.appendChild(styleElement);
            }
        }

        // Apply theme
        if (config.theme) {
            const root = document.documentElement;
            if (config.theme === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
        }

        // Apply custom colors
        if (config.colors) {
            const root = document.documentElement;
            Object.entries(config.colors).forEach(([key, value]) => {
                if (value) {
                    root.style.setProperty(`--${key}`, value);
                }
            });
        }
    }, [config]);

    const contextValue = useMemo(() => ({ config, setConfig }), [config]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook to configure the theme externally
export function configureTheme(config: ThemeConfig) {
    if (config.useTailwind !== undefined) {
        setUseTailwind(config.useTailwind);
    }

    if (config.theme) {
        const root = document.documentElement;
        if (config.theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }

    if (config.colors) {
        const root = document.documentElement;
        Object.entries(config.colors).forEach(([key, value]) => {
            if (value) {
                root.style.setProperty(`--${key}`, value);
            }
        });
    }
}

export type { ThemeConfig };
