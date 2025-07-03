import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage, Button, Card, CardContent, CardHeader, CardTitle, Checkbox, configureTheme, Tabs, TabsContent, TabsList, TabsTrigger, ThemeProvider, } from "../index";
export function ComprehensiveExample() {
    const [theme, setTheme] = React.useState("light");
    const [useTailwind, setUseTailwind] = React.useState(true);
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        configureTheme({ theme: newTheme });
    };
    const toggleStylingMode = () => {
        const newUseTailwind = !useTailwind;
        setUseTailwind(newUseTailwind);
        configureTheme({ useTailwind: newUseTailwind });
    };
    return (_jsx(ThemeProvider, { config: { theme, useTailwind }, children: _jsxs("div", { className: "p-6 max-w-4xl mx-auto space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Schilling Widgets System Demo" }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex gap-2 mb-4", children: [_jsxs(Button, { onClick: toggleTheme, children: ["Toggle Theme (", theme, ")"] }), _jsx(Button, { variant: "outline", onClick: toggleStylingMode, children: useTailwind
                                                ? "Switch to CSS-only"
                                                : "Switch to Tailwind" })] }), _jsxs("p", { className: "text-muted-foreground", children: ["This library works with or without Tailwind CSS. Current mode:", " ", _jsx("strong", { children: useTailwind ? "Tailwind" : "CSS-only" })] })] })] }), _jsxs(Tabs, { defaultValue: "buttons", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [_jsx(TabsTrigger, { value: "buttons", children: "Buttons" }), _jsx(TabsTrigger, { value: "cards", children: "Cards" }), _jsx(TabsTrigger, { value: "avatars", children: "Avatars" }), _jsx(TabsTrigger, { value: "forms", children: "Forms" })] }), _jsx(TabsContent, { value: "buttons", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Button Variants" }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Button, { variant: "default", children: "Default" }), _jsx(Button, { variant: "destructive", children: "Destructive" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "link", children: "Link" })] }), _jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "default", children: "Default" }), _jsx(Button, { size: "lg", children: "Large" })] })] })] }) }), _jsx(TabsContent, { value: "cards", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Card Example 1" }) }), _jsx(CardContent, { children: _jsx("p", { children: "This is a simple card with some content." }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Card Example 2" }) }), _jsx(CardContent, { children: _jsx("p", { children: "Another card with different content." }) })] })] }) }), _jsx(TabsContent, { value: "avatars", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Avatar Examples" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "flex gap-4 items-center", children: [_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: "https://api.dicebear.com/7.x/avataaars/svg?seed=john" }), _jsx(AvatarFallback, { children: "JD" })] }), _jsxs(Avatar, { children: [_jsx(AvatarImage, { src: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane" }), _jsx(AvatarFallback, { children: "JS" })] }), _jsx(Avatar, { children: _jsx(AvatarFallback, { children: "AB" }) })] }) })] }) }), _jsx(TabsContent, { value: "forms", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Form Elements" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "terms" }), _jsx("label", { htmlFor: "terms", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Accept terms and conditions" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "marketing" }), _jsx("label", { htmlFor: "marketing", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Send me marketing emails" })] })] }) })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Integration Guide" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-2", children: "With Tailwind CSS (recommended)" }), _jsx("pre", { className: "bg-muted p-4 rounded text-sm overflow-x-auto", children: `// In your tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@schilling-apps/schilling-widgets-system/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Your custom theme
    }
  }
};

// In your main CSS file
@tailwind base;
@tailwind components;
@tailwind utilities;` })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-2", children: "Without Tailwind CSS" }), _jsx("pre", { className: "bg-muted p-4 rounded text-sm overflow-x-auto", children: `// Configure the library to not use Tailwind
import { configureTheme } from '@schilling-apps/schilling-widgets-system';

configureTheme({ useTailwind: false });

// Import the CSS-only styles
import '@schilling-apps/schilling-widgets-system/dist/css-only.css';` })] })] }) })] })] }) }));
}
export default ComprehensiveExample;
