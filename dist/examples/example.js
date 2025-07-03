import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, LoadingSpinner, QueryProvider, useApiQuery, } from "@schilling-apps/schilling-widgets-system";
// Example usage of the shared UI components
function ExampleApp() {
    return (_jsx(QueryProvider, { children: _jsx("div", { className: "p-4 space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Shared UI Components Example" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "default", children: "Default Button" }), _jsx(Button, { variant: "outline", children: "Outline Button" }), _jsx(Button, { variant: "secondary", children: "Secondary Button" })] }), _jsx(Input, { placeholder: "Enter some text..." }), _jsx(LoadingSpinner, { size: "md" }), _jsx(DataExample, {})] })] }) }) }));
}
// Example of using the data fetching hooks
function DataExample() {
    const { data, isLoading, error } = useApiQuery(["users"], "https://jsonplaceholder.typicode.com/users");
    if (isLoading)
        return _jsx(LoadingSpinner, { size: "sm" });
    if (error)
        return _jsxs("div", { className: "text-red-500", children: ["Error: ", error.message] });
    return (_jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-2", children: "Users from API:" }), _jsx("ul", { className: "space-y-1", children: data?.slice(0, 3).map((user) => (_jsx("li", { className: "text-sm", children: user.name }, user.id))) })] }));
}
export default ExampleApp;
