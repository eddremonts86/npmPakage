import { useState } from 'react';
import { Button, QueryProvider, ThemeProvider } from 'schilling-widgets-system';
import './App.css';
import DialogExample from './examples/dialog-example';
import ExampleApp from './examples/example';
import { InfiniteTableExample } from './examples/infinite-table-example';
import { TaskManagerExample } from './examples/task-manager-example';

type ExampleKey = 'dialog' | 'basic' | 'table' | 'taskmanager';

const examples = {
  basic: { title: 'Basic Components', component: ExampleApp },
  dialog: { title: 'Dialog Example', component: DialogExample },
  table: { title: 'Infinite Table', component: InfiniteTableExample },
  taskmanager: { title: 'Task Manager', component: TaskManagerExample },
};

function App() {
  const [currentExample, setCurrentExample] = useState<ExampleKey>('basic');
  const CurrentComponent = examples[currentExample].component;

  return (
    <QueryProvider>
      <ThemeProvider>
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
          <header className='bg-white dark:bg-gray-800 shadow-lg border-b'>
            <div className='max-w-7xl mx-auto px-4 py-6'>
              <h1 className='text-3xl font-bold text-indigo-600 dark:text-indigo-400'>
                Schilling Widgets System - Tailwind Mode
              </h1>
              <p className='mt-2 text-gray-600 dark:text-gray-300'>
                Testing components with Tailwind CSS and custom styling
              </p>

              <div className='mt-4 flex flex-wrap gap-2'>
                {Object.entries(examples).map(([key, { title }]) => (
                  <Button
                    key={key}
                    onClick={() => setCurrentExample(key as ExampleKey)}
                    variant={currentExample === key ? 'default' : 'outline'}
                    size='sm'
                    className='text-sm'
                  >
                    {title}
                  </Button>
                ))}
              </div>
            </div>
          </header>

          <main className='max-w-7xl mx-auto px-4 py-8'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6'>
              <div className='mb-4'>
                <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                  {examples[currentExample].title}
                </h2>
              </div>
              <CurrentComponent />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
