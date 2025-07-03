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
