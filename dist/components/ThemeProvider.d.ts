import { ReactNode } from "react";
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
export declare function useTheme(): ThemeContextType;
interface ThemeProviderProps {
    children: ReactNode;
    config?: ThemeConfig;
}
export declare function ThemeProvider({ children, config: initialConfig, }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function configureTheme(config: ThemeConfig): void;
export type { ThemeConfig };
//# sourceMappingURL=ThemeProvider.d.ts.map