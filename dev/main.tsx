import React, { Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

// Import available components from source (with types)
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  LoadingSpinner,
  QueryProvider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
} from '../src/index';

// Lazy load examples
const ComprehensiveExample = React.lazy(
  () => import('./src/examples/comprehensive-example')
);
const DialogExample = React.lazy(() => import('./src/examples/dialog-example'));
const TaskManagerExample = React.lazy(
  () => import('./src/examples/task-manager-example')
);
const TaskManagerSimple = React.lazy(
  () => import('./src/examples/task-manager-simple')
);
const BasicExample = React.lazy(() => import('./src/examples/basic-example'));
const InfiniteTableExample = React.lazy(
  () => import('./src/examples/infinite-table-example')
);
const InfiniteTableTest = React.lazy(
  () => import('./src/examples/infinite-table-test')
);

// Import dev environment styles
import './styles.css';

function DevApp() {
  const [currentSection, setCurrentSection] = useState('components');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sections = {
    components: <ComponentExamples />,
    comprehensive: (
      <Suspense fallback={<LoadingSpinner />}>
        <ComprehensiveExample />
      </Suspense>
    ),
    dialog: (
      <Suspense fallback={<LoadingSpinner />}>
        <DialogExample />
      </Suspense>
    ),
    'task-manager': (
      <Suspense fallback={<LoadingSpinner />}>
        <TaskManagerExample />
      </Suspense>
    ),
    'task-manager-simple': (
      <Suspense fallback={<LoadingSpinner />}>
        <TaskManagerSimple />
      </Suspense>
    ),
    basic: (
      <Suspense fallback={<LoadingSpinner />}>
        <BasicExample />
      </Suspense>
    ),
    'infinite-table': (
      <Suspense fallback={<LoadingSpinner />}>
        <InfiniteTableExample />
      </Suspense>
    ),
    'infinite-table-test': (
      <Suspense fallback={<LoadingSpinner />}>
        <InfiniteTableTest />
      </Suspense>
    ),
  };

  const navigationItems = [
    { id: 'components', label: '🧩 Component Gallery', category: 'Basic' },
    { id: 'basic', label: '📦 Basic Example', category: 'Examples' },
    {
      id: 'comprehensive',
      label: '🔄 Comprehensive Example',
      category: 'Examples',
    },
    { id: 'dialog', label: '💬 Dialog Example', category: 'Examples' },
    { id: 'task-manager', label: '📋 Task Manager', category: 'Complex' },
    {
      id: 'task-manager-simple',
      label: '📝 Task Manager Simple',
      category: 'Complex',
    },
    { id: 'infinite-table', label: '📊 Infinite Table', category: 'Widgets' },
    { id: 'infinite-table-test', label: '🧪 Table Test', category: 'Widgets' },
  ];

  const categories = [...new Set(navigationItems.map(item => item.category))];

  return (
    <QueryProvider>
      <ThemeProvider config={{ theme }}>
        <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
          <div className='flex'>
            {/* Sidebar */}
            <div className='fixed top-0 left-0 w-64 h-screen overflow-y-auto border-r border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700'>
              <div className='p-4'>
                <h3 className='mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Schilling Widgets
                </h3>

                <nav className='space-y-4'>
                  {categories.map(category => (
                    <div key={category}>
                      <h4 className='mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                        {category}
                      </h4>
                      <div className='space-y-1'>
                        {navigationItems
                          .filter(item => item.category === category)
                          .map(item => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                currentSection === item.id
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }`}
                              onClick={() => setCurrentSection(item.id)}
                            >
                              {item.label}
                            </a>
                          ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className='flex-1 p-8 ml-64'>
              <div className='max-w-6xl mx-auto'>
                <div className='flex items-center justify-between mb-8'>
                  <div>
                    <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
                      Schilling Widgets Development
                    </h1>
                    <p className='text-gray-600 dark:text-gray-400 mt-1'>
                      Interactive development environment for testing components
                    </p>
                  </div>
                  <Button onClick={toggleTheme} variant='outline'>
                    {theme === 'light' ? '🌙' : '☀️'} Toggle Theme
                  </Button>
                </div>

                <div className='p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                  {sections[currentSection as keyof typeof sections] ||
                    sections.components}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}

// Component Gallery (previous individual component examples combined)
function ComponentExamples() {
  return (
    <div className='space-y-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Component Gallery</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Interactive showcase of all available components in the Schilling
          Widgets System.
        </p>
      </div>

      <Tabs defaultValue='buttons' className='w-full'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='buttons'>Buttons</TabsTrigger>
          <TabsTrigger value='inputs'>Inputs</TabsTrigger>
          <TabsTrigger value='display'>Display</TabsTrigger>
          <TabsTrigger value='feedback'>Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value='buttons' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='mb-2 text-lg font-semibold'>Variants</h3>
                <div className='flex flex-wrap gap-2'>
                  <Button>Default</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='destructive'>Destructive</Button>
                  <Button variant='outline'>Outline</Button>
                  <Button variant='ghost'>Ghost</Button>
                  <Button variant='link'>Link</Button>
                </div>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>Sizes</h3>
                <div className='flex items-end gap-2'>
                  <Button size='sm'>Small</Button>
                  <Button>Default</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>States</h3>
                <div className='flex gap-2'>
                  <Button disabled>Disabled</Button>
                  <Button>
                    <LoadingSpinner className='w-4 h-4 mr-2' />
                    Loading
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='inputs' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Input Components</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='max-w-md space-y-4'>
                <div>
                  <label
                    htmlFor='basic-input'
                    className='block mb-1 text-sm font-medium'
                  >
                    Basic Input
                  </label>
                  <Input id='basic-input' placeholder='Enter text...' />
                </div>

                <div>
                  <label
                    htmlFor='email-input'
                    className='block mb-1 text-sm font-medium'
                  >
                    Email Input
                  </label>
                  <Input
                    id='email-input'
                    type='email'
                    placeholder='Enter email...'
                  />
                </div>

                <div className='flex items-center space-x-2'>
                  <Checkbox id='checkbox1' />
                  <label htmlFor='checkbox1' className='text-sm font-medium'>
                    Accept terms and conditions
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='display' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Display Components</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='mb-2 text-lg font-semibold'>Avatars</h3>
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className='w-12 h-12'>
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>Badges</h3>
                <div className='flex flex-wrap gap-2'>
                  <Badge>Default</Badge>
                  <Badge variant='secondary'>Secondary</Badge>
                  <Badge variant='destructive'>Destructive</Badge>
                  <Badge variant='outline'>Outline</Badge>
                </div>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>Cards</h3>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This is a simple card with header and content.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='mb-4'>This card has some actions.</p>
                      <div className='flex gap-2'>
                        <Button size='sm'>Action</Button>
                        <Button variant='outline' size='sm'>
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='feedback' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Feedback Components</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='mb-2 text-lg font-semibold'>Loading Spinners</h3>
                <div className='flex items-center gap-4'>
                  <LoadingSpinner />
                  <LoadingSpinner className='w-8 h-8' />
                  <LoadingSpinner className='w-12 h-12' />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Initialize the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<DevApp />);
}
