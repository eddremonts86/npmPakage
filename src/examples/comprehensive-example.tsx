import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Checkbox,
    configureTheme,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    ThemeProvider,
} from "../index";

export function ComprehensiveExample() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");
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

    return (
        <ThemeProvider config={{ theme, useTailwind }}>
            <div className="p-6 max-w-4xl mx-auto space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Schilling Widgets System Demo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2 mb-4">
                            <Button onClick={toggleTheme}>
                                Toggle Theme ({theme})
                            </Button>
                            <Button
                                variant="outline"
                                onClick={toggleStylingMode}
                            >
                                {useTailwind
                                    ? "Switch to CSS-only"
                                    : "Switch to Tailwind"}
                            </Button>
                        </div>

                        <p className="text-muted-foreground">
                            This library works with or without Tailwind CSS.
                            Current mode:{" "}
                            <strong>
                                {useTailwind ? "Tailwind" : "CSS-only"}
                            </strong>
                        </p>
                    </CardContent>
                </Card>

                <Tabs
                    defaultValue="buttons"
                    className="w-full"
                >
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="buttons">Buttons</TabsTrigger>
                        <TabsTrigger value="cards">Cards</TabsTrigger>
                        <TabsTrigger value="avatars">Avatars</TabsTrigger>
                        <TabsTrigger value="forms">Forms</TabsTrigger>
                    </TabsList>

                    <TabsContent value="buttons">
                        <Card>
                            <CardHeader>
                                <CardTitle>Button Variants</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="default">Default</Button>
                                    <Button variant="destructive">
                                        Destructive
                                    </Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="secondary">
                                        Secondary
                                    </Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Button size="sm">Small</Button>
                                    <Button size="default">Default</Button>
                                    <Button size="lg">Large</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="cards">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Example 1</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        This is a simple card with some content.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Example 2</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Another card with different content.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="avatars">
                        <Card>
                            <CardHeader>
                                <CardTitle>Avatar Examples</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4 items-center">
                                    <Avatar>
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=john" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=jane" />
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarFallback>AB</AvatarFallback>
                                    </Avatar>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="forms">
                        <Card>
                            <CardHeader>
                                <CardTitle>Form Elements</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Accept terms and conditions
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="marketing" />
                                        <label
                                            htmlFor="marketing"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Send me marketing emails
                                        </label>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Card>
                    <CardHeader>
                        <CardTitle>Integration Guide</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">
                                    With Tailwind CSS (recommended)
                                </h3>
                                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                                    {`// In your tailwind.config.js
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
@tailwind utilities;`}
                                </pre>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">
                                    Without Tailwind CSS
                                </h3>
                                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                                    {`// Configure the library to not use Tailwind
import { configureTheme } from '@schilling-apps/schilling-widgets-system';

configureTheme({ useTailwind: false });

// Import the CSS-only styles
import '@schilling-apps/schilling-widgets-system/dist/css-only.css';`}
                                </pre>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider>
    );
}

export default ComprehensiveExample;
