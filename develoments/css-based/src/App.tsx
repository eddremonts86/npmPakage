import { QueryProvider, ThemeProvider } from "schilling-widgets-system";
import "./App.css";
import ComprehensiveExample from "./examples/comprehensive-example.tsx";

function App() {
    return (
        <QueryProvider>
            <ThemeProvider>
                <div className="app">
                    <header className="app-header">
                        <h1>Schilling Widgets System - CSS-Only Mode</h1>
                        <p>
                            Testing components without Tailwind CSS, using
                            global CSS styles
                        </p>
                    </header>

                    <main className="app-main">
                        <ComprehensiveExample />
                    </main>
                </div>
            </ThemeProvider>
        </QueryProvider>
    );
}

export default App;
