import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Global configuration for styling mode
let useTailwind = true;
export function setUseTailwind(value) {
    useTailwind = value;
}
export function getUseTailwind() {
    return useTailwind;
}
export function cn(...inputs) {
    if (useTailwind) {
        return twMerge(clsx(inputs));
    }
    return clsx(inputs);
}
// CSS class mapping for non-Tailwind mode
export const cssClassMap = {
    // Button variants
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50": "schilling-button",
    "bg-primary text-primary-foreground hover:bg-primary/90": "schilling-button--primary",
    "bg-secondary text-secondary-foreground hover:bg-secondary/80": "schilling-button--secondary",
    "bg-destructive text-destructive-foreground hover:bg-destructive/90": "schilling-button--destructive",
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground": "schilling-button--outline",
    "hover:bg-accent hover:text-accent-foreground": "schilling-button--ghost",
    "text-primary underline-offset-4 hover:underline": "schilling-button--link",
    "h-10 px-4 py-2": "schilling-button--md",
    "h-9 rounded-md px-3": "schilling-button--sm",
    "h-11 rounded-md px-8": "schilling-button--lg",
    "h-10 w-10": "schilling-button--icon",
    // Card variants
    "rounded-lg border bg-card text-card-foreground shadow-sm": "schilling-card",
    "flex flex-col space-y-1.5 p-6": "schilling-card-header",
    "text-2xl font-semibold leading-none tracking-tight": "schilling-card-title",
    "p-6 pt-0": "schilling-card-content",
    "flex items-center p-6 pt-0": "schilling-card-footer",
    // Input variants
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50": "schilling-input",
    // Dialog variants
    "fixed inset-0 z-50 bg-black/80 flex items-center justify-center": "schilling-dialog-overlay",
    "grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg": "schilling-dialog-content",
    "flex flex-col space-y-1.5 text-center sm:text-left": "schilling-dialog-header",
    "text-lg font-semibold leading-none tracking-tight": "schilling-dialog-title",
    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none": "schilling-dialog-close",
    // Common utilities
    flex: "schilling-flex",
    "flex-col": "schilling-flex-col",
    "items-center": "schilling-items-center",
    "justify-center": "schilling-justify-center",
    "gap-2": "schilling-gap-2",
    "gap-4": "schilling-gap-4",
    "p-4": "schilling-p-4",
    "p-6": "schilling-p-6",
    "text-sm": "schilling-text-sm",
    "text-center": "schilling-text-center",
    "w-full": "schilling-w-full",
    "h-full": "schilling-h-full",
    "min-h-screen": "schilling-min-h-screen",
};
export function mapClasses(classes) {
    if (useTailwind) {
        return classes;
    }
    // Map Tailwind classes to CSS-only classes
    let result = classes;
    Object.entries(cssClassMap).forEach(([tailwindClass, cssClass]) => {
        result = result.replace(new RegExp(tailwindClass, "g"), cssClass);
    });
    return result;
}
