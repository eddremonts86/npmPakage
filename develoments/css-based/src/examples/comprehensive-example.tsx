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
} from "schilling-widgets-system";

export function ComprehensiveExample() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        configureTheme({ theme: newTheme });
    };

    return (
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Schilling Widgets System Demo - CSS Only Mode
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="controls">
                        <Button onClick={toggleTheme}>
                            Toggle Theme ({theme})
                        </Button>
                        <Button variant="outline">CSS-Only Mode Active</Button>
                    </div>

                    <Tabs defaultValue="basic">
                        <TabsList>
                            <TabsTrigger value="basic">
                                Basic Components
                            </TabsTrigger>
                            <TabsTrigger value="forms">
                                Form Components
                            </TabsTrigger>
                            <TabsTrigger value="layout">
                                Layout Components
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="basic">
                            <div className="grid">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Buttons</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="button-group">
                                            <Button>Primary</Button>
                                            <Button variant="secondary">
                                                Secondary
                                            </Button>
                                            <Button variant="outline">
                                                Outline
                                            </Button>
                                            <Button variant="ghost">
                                                Ghost
                                            </Button>
                                            <Button variant="destructive">
                                                Destructive
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Avatar</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="avatar-group">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                            <Avatar>
                                                <AvatarFallback>
                                                    JD
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="forms">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Form Elements</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <Checkbox id="terms" />
                                            <label htmlFor="terms">
                                                Accept terms and conditions
                                            </label>
                                        </div>
                                        <div className="form-row">
                                            <Checkbox id="newsletter" />
                                            <label htmlFor="newsletter">
                                                Subscribe to newsletter
                                            </label>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="layout">
                            <div className="grid layout-grid">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Card 1</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            This is a sample card using CSS-only
                                            styling.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Card 2</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            No Tailwind CSS required for these
                                            components.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Card 3</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            Global CSS variables provide
                                            consistent theming.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}

export default ComprehensiveExample;
