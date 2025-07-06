import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./hooks/useTheme";

// Import examples
import ComprehensiveExample from "./examples/comprehensive-example";
import DialogExample from "./examples/dialog-example";
import Example from "./examples/example";
import InfiniteTableExample from "./examples/infinite-table-example";
import TaskManagerExample from "./examples/task-manager-example";

const examples = [
    {
        id: "comprehensive",
        name: "Comprehensive Example",
        component: ComprehensiveExample,
    },
    { id: "dialog", name: "Dialog Example", component: DialogExample },
    { id: "basic", name: "Basic Example", component: Example },
    {
        id: "infinite-table",
        name: "Infinite Table",
        component: InfiniteTableExample,
    },
    { id: "task-manager", name: "Task Manager", component: TaskManagerExample },
];

function App() {
    const [activeExample, setActiveExample] = useState("comprehensive");
    const { theme, toggleTheme } = useTheme();

    const ActiveComponent =
        examples.find((ex) => ex.id === activeExample)?.component ||
        ComprehensiveExample;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-background">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-foreground">
                        Schilling Widgets - Tailwind Based
                    </h1>
                    <button
                        onClick={toggleTheme}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                        {theme === "light" ? (
                            <Moon className="h-4 w-4" />
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </button>
                </div>
            </header>

            {/* Navigation */}
            <nav className="border-b bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-1">
                        {examples.map((example) => (
                            <button
                                key={example.id}
                                onClick={() => setActiveExample(example.id)}
                                className={`px-4 py-2 text-sm font-medium transition-colors ${
                                    activeExample === example.id
                                        ? "border-b-2 border-primary text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {example.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main>
                <ActiveComponent />
            </main>
        </div>
    );
}

export default App;
