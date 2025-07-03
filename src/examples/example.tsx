import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
    LoadingSpinner,
    QueryProvider,
    useApiQuery,
} from "@schilling-apps/schilling-widgets-system";

// Example usage of the shared UI components
function ExampleApp() {
    return (
        <QueryProvider>
            <div className="p-4 space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Shared UI Components Example</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-2">
                            <Button variant="default">Default Button</Button>
                            <Button variant="outline">Outline Button</Button>
                            <Button variant="secondary">
                                Secondary Button
                            </Button>
                        </div>

                        <Input placeholder="Enter some text..." />

                        <LoadingSpinner size="md" />

                        <DataExample />
                    </CardContent>
                </Card>
            </div>
        </QueryProvider>
    );
}

// Example of using the data fetching hooks
function DataExample() {
    const { data, isLoading, error } = useApiQuery<
        { name: string; id: number }[]
    >(["users"], "https://jsonplaceholder.typicode.com/users");

    if (isLoading) return <LoadingSpinner size="sm" />;
    if (error)
        return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div>
            <h3 className="font-semibold mb-2">Users from API:</h3>
            <ul className="space-y-1">
                {data?.slice(0, 3).map((user) => (
                    <li
                        key={user.id}
                        className="text-sm"
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExampleApp;
