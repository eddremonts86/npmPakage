import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState, } from "react";
import { setUseTailwind } from "../utils/cn";
const ThemeContext = createContext(undefined);
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
export function ThemeProvider({ children, config: initialConfig = {}, }) {
    const [config, setConfigState] = useState({
        useTailwind: true,
        theme: "light",
        ...initialConfig,
    });
    const setConfig = (newConfig) => {
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
            }
            else {
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
    return (_jsx(ThemeContext.Provider, { value: contextValue, children: children }));
}
// Hook to configure the theme externally
export function configureTheme(config) {
    if (config.useTailwind !== undefined) {
        setUseTailwind(config.useTailwind);
    }
    if (config.theme) {
        const root = document.documentElement;
        if (config.theme === "dark") {
            root.classList.add("dark");
        }
        else {
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
