import * as React from 'react';
import { ComponentType, Suspense, lazy, useState } from 'react';
import './App.css';

// Lazy load examples
const TestExample = lazy(() => import('./examples/test-example'));
const BasicExample = lazy(() => import('./examples/basic-example'));
const ComprehensiveExample = lazy(
  () => import('./examples/comprehensive-example')
);
const DialogExample = lazy(() => import('./examples/dialog-example'));
const TaskManagerExample = lazy(
  () => import('./examples/task-manager-example')
);
const TaskManagerSimple = lazy(() => import('./examples/task-manager-simple'));
const InfiniteTableExample = lazy(
  () => import('./examples/infinite-table-example')
);
const InfiniteTableTest = lazy(() => import('./examples/infinite-table-test'));

interface Example {
  id: string;
  name: string;
  description: string;
  component: React.LazyExoticComponent<ComponentType>;
  category: string;
}

const examples: Example[] = [
  {
    id: 'test',
    name: 'Test Example',
    description: 'Simple test to verify the environment is working',
    component: TestExample,
    category: 'Basic',
  },
  {
    id: 'basic',
    name: 'Basic Example',
    description: 'Basic usage of components with API integration',
    component: BasicExample,
    category: 'Basic',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Example',
    description: 'Complete showcase of all available components',
    component: ComprehensiveExample,
    category: 'Complete',
  },
  {
    id: 'dialog',
    name: 'Dialog Example',
    description: 'Dialog and modal interactions',
    component: DialogExample,
    category: 'UI',
  },
  {
    id: 'task-manager',
    name: 'Task Manager',
    description: 'Full-featured task management application',
    component: TaskManagerExample,
    category: 'Complex',
  },
  {
    id: 'task-manager-simple',
    name: 'Task Manager Simple',
    description: 'Simplified task management example',
    component: TaskManagerSimple,
    category: 'Complex',
  },
  {
    id: 'infinite-table',
    name: 'Infinite Table',
    description: 'Advanced table with infinite scrolling',
    component: InfiniteTableExample,
    category: 'Widgets',
  },
  {
    id: 'infinite-table-test',
    name: 'Table Test',
    description: 'Basic table functionality test',
    component: InfiniteTableTest,
    category: 'Widgets',
  },
];

function App() {
  const [selectedExample, setSelectedExample] = useState<string>('basic');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    ...Array.from(new Set(examples.map(ex => ex.category))),
  ];

  const filteredExamples =
    selectedCategory === 'All'
      ? examples
      : examples.filter(ex => ex.category === selectedCategory);

  const currentExample = examples.find(ex => ex.id === selectedExample);

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>🎨 Schilling Widgets Development Environment</h1>
        <p>
          Interactive showcase and testing environment for all widget components
        </p>
      </header>

      <div className='app-layout'>
        <nav className='sidebar'>
          <div className='category-filter'>
            <h3>Categories</h3>
            <div className='category-buttons'>
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className='examples-list'>
            <h3>Examples</h3>
            {filteredExamples.map(example => (
              <button
                key={example.id}
                className={`example-item ${selectedExample === example.id ? 'active' : ''}`}
                onClick={() => setSelectedExample(example.id)}
              >
                <h4>{example.name}</h4>
                <p>{example.description}</p>
                <span className='category-tag'>{example.category}</span>
              </button>
            ))}
          </div>
        </nav>

        <main className='main-content'>
          {currentExample && (
            <div className='example-container'>
              <div className='example-header'>
                <h2>{currentExample.name}</h2>
                <p>{currentExample.description}</p>
              </div>

              <div className='example-content'>
                <Suspense
                  fallback={
                    <div className='loading'>
                      <div className='spinner'></div>
                      <p>Loading example...</p>
                    </div>
                  }
                >
                  <currentExample.component />
                </Suspense>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
