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
} from '@schilling-widgets';

// Basic usage example of the shared UI components
function BasicExample() {
  return (
    <QueryProvider>
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Basic Components Example</CardTitle>
          </CardHeader>
          <CardContent
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant='default'>Default Button</Button>
              <Button variant='outline'>Outline Button</Button>
              <Button variant='secondary'>Secondary Button</Button>
            </div>

            <Input placeholder='Enter some text...' />

            <LoadingSpinner size='md' />

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
  >(['users'], 'https://jsonplaceholder.typicode.com/users');

  if (isLoading) return <LoadingSpinner size='sm' />;
  if (error)
    return <div style={{ color: '#ef4444' }}>Error: {error.message}</div>;

  return (
    <div>
      <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
        Users from API:
      </h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {data?.slice(0, 3).map(user => (
          <li key={user.id} style={{ fontSize: '0.875rem' }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasicExample;
