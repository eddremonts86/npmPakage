import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { configureTheme } from "../components/ThemeProvider";
import { InfiniteTable } from "../widgets/InfiniteTable";
export function InfiniteTableExample() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentView, setCurrentView] = useState("users");
    const [useTailwind, setUseTailwind] = useState(true);
    // Fetch users from JSONPlaceholder API
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            }
            catch (error) {
                console.error("Error fetching users:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    // Fetch posts from JSONPlaceholder API
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        }
        catch (error) {
            console.error("Error fetching posts:", error);
        }
        finally {
            setLoading(false);
        }
    };
    // Switch to posts view and fetch posts
    const handlePostsView = () => {
        setCurrentView("posts");
        if (posts.length === 0) {
            fetchPosts();
        }
    };
    // Toggle between Tailwind and CSS-only mode
    const toggleStylingMode = () => {
        const newUseTailwind = !useTailwind;
        setUseTailwind(newUseTailwind);
        configureTheme({ useTailwind: newUseTailwind });
    };
    const userColumns = [
        {
            key: "id",
            header: "ID",
            width: 80,
            sortable: true,
        },
        {
            key: "name",
            header: "Name",
            width: 200,
            sortable: true,
            render: (value, row) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Avatar, { className: "h-8 w-8", children: [_jsx(AvatarImage, { src: `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.username}` }), _jsx(AvatarFallback, { children: row.name.charAt(0) })] }), _jsx("span", { className: "font-medium", children: value })] })),
        },
        {
            key: "email",
            header: "Email",
            width: 250,
            sortable: true,
        },
        {
            key: "company",
            header: "Company",
            width: 200,
            sortable: true,
            render: (value) => value.name,
        },
        {
            key: "phone",
            header: "Phone",
            width: 150,
        },
        {
            key: "website",
            header: "Website",
            width: 150,
            render: (value) => (_jsx("a", { href: `https://${value}`, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: value })),
        },
    ];
    const postColumns = [
        {
            key: "id",
            header: "ID",
            width: 80,
            sortable: true,
        },
        {
            key: "userId",
            header: "User ID",
            width: 100,
            sortable: true,
        },
        {
            key: "title",
            header: "Title",
            width: 300,
            sortable: true,
            render: (value) => (_jsx("div", { className: "font-medium line-clamp-2", title: value, children: value })),
        },
        {
            key: "body",
            header: "Body",
            width: 400,
            render: (value) => (_jsx("div", { className: "text-sm text-muted-foreground line-clamp-3", title: value, children: value })),
        },
    ];
    return (_jsxs("div", { className: "p-6 max-w-7xl mx-auto", children: [_jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Infinite Table Demo" }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex gap-2 mb-4", children: [_jsxs(Button, { variant: currentView === "users" ? "default" : "outline", onClick: () => setCurrentView("users"), children: ["Users (", users.length, ")"] }), _jsxs(Button, { variant: currentView === "posts" ? "default" : "outline", onClick: handlePostsView, children: ["Posts (", posts.length, ")"] }), _jsx(Button, { variant: "outline", onClick: toggleStylingMode, className: "ml-auto", children: useTailwind
                                            ? "Switch to CSS-only"
                                            : "Switch to Tailwind" })] }), currentView === "users" && (_jsx(InfiniteTable, { columns: userColumns, data: users, loading: loading, height: 500, itemHeight: 60, className: "border-2" })), currentView === "posts" && (_jsx(InfiniteTable, { columns: postColumns, data: posts, loading: loading, height: 500, itemHeight: 80, className: "border-2" }))] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Features" }) }), _jsx(CardContent, { children: _jsxs("ul", { className: "space-y-2 text-sm", children: [_jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Virtualized scrolling" }), " - Handles large datasets efficiently"] }), _jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Sortable columns" }), " - Click column headers to sort"] }), _jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Custom rendering" }), " - Render custom components in cells"] }), _jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Flexible styling" }), " - Works with or without Tailwind CSS"] }), _jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Responsive design" }), " - Adapts to different screen sizes"] }), _jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Public API integration" }), " - Fetches data from JSONPlaceholder"] })] }) })] })] }));
}
export default InfiniteTableExample;
