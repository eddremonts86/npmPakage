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
} from 'schilling-widgets-system';

// Example usage of the shared UI components
function ExampleApp() {
  return (
    <QueryProvider>
      <div className='p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 min-h-screen'>
        <Card className='shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'>
          <CardHeader className='bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg'>
            <CardTitle className='text-2xl font-bold'>
              Shared UI Components Example
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6 p-6'>
            <div className='flex flex-wrap gap-3'>
              <Button
                variant='default'
                className='bg-blue-500 hover:bg-blue-600'
              >
                Default Button
              </Button>
              <Button
                variant='outline'
                className='border-purple-300 text-purple-700 hover:bg-purple-50'
              >
                Outline Button
              </Button>
              <Button
                variant='secondary'
                className='bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
              >
                Secondary Button
              </Button>
              <Button
                variant='destructive'
                className='bg-red-500 hover:bg-red-600'
              >
                Destructive Button
              </Button>
            </div>

            <div className='space-y-3'>
              <Input
                placeholder='Enter some text...'
                className='border-purple-200 focus:border-purple-400 focus:ring-purple-200'
              />
              <Input
                placeholder='Another input field...'
                className='border-blue-200 focus:border-blue-400 focus:ring-blue-200'
              />
            </div>

            <div className='flex items-center gap-4'>
              <LoadingSpinner size='sm' />
              <LoadingSpinner size='md' />
              <LoadingSpinner size='lg' />
              <span className='text-gray-600 dark:text-gray-300'>
                Loading spinners in different sizes
              </span>
            </div>

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

  if (isLoading)
    return (
      <div className='flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
        <LoadingSpinner size='sm' />
        <span className='text-blue-700 dark:text-blue-300'>
          Loading users...
        </span>
      </div>
    );

  if (error)
    return (
      <div className='text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700'>
        <strong>Error:</strong> {error.message}
      </div>
    );

  return (
    <div className='space-y-3'>
      <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3'>
        API Data Example (JSONPlaceholder)
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto'>
        {data?.slice(0, 6).map(user => (
          <div
            key={user.id}
            className='p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-100 dark:border-purple-700 hover:shadow-md transition-shadow'
          >
            <div className='font-medium text-purple-800 dark:text-purple-200'>
              {user.name}
            </div>
            <div className='text-sm text-purple-600 dark:text-purple-300'>
              ID: {user.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExampleApp;
