import { AlertTriangle, Calendar, Clock, User } from 'lucide-react';
import { useCallback, useState } from 'react';
import {
  Badge,
  Button,
  Card,
  TaskManager,
  type Task,
  type TaskColumn,
  type TaskStatus,
} from 'schilling-widgets-system';

// Sample data matching the design requirements
const SAMPLE_TASKS: Task[] = [
  {
    id: '1',
    name: 'Complete project documentation',
    status: 'In progress',
    reference: 'DOC-001',
    phase: 'Documentation',
    expectedStart: '2024-01-15',
    expectedDue: '2024-01-30',
    assignee: 'John Doe',
    progress: 75,
    priority: 'high',
    description: 'Write comprehensive documentation for the new feature',
    tags: ['documentation', 'high-priority'],
  },
  {
    id: '2',
    name: 'Fix authentication bug',
    status: 'Overdue',
    reference: 'BUG-002',
    phase: 'Development',
    expectedStart: '2024-01-10',
    expectedDue: '2024-01-20',
    assignee: 'Jane Smith',
    progress: 25,
    priority: 'high',
    description: 'Critical authentication issue affecting users',
    tags: ['bug', 'authentication', 'critical'],
  },
  {
    id: '3',
    name: 'Design new UI components',
    status: 'Not started',
    reference: 'UI-003',
    phase: 'Design',
    expectedStart: '2024-02-01',
    expectedDue: '2024-02-15',
    assignee: 'Alice Johnson',
    progress: 0,
    priority: 'medium',
    description: 'Create new reusable UI components for the design system',
    tags: ['design', 'ui', 'components'],
  },
  {
    id: '4',
    name: 'Implement dark mode',
    status: 'Not started',
    reference: 'FEAT-004',
    phase: 'Development',
    expectedStart: '2024-01-05',
    expectedDue: '2024-01-25',
    assignee: 'Bob Wilson',
    progress: 100,
    priority: 'medium',
    description: 'Add dark mode support across the application',
    tags: ['feature', 'dark-mode', 'ui'],
  },
  {
    id: '5',
    name: 'Code review process optimization',
    status: 'In progress',
    reference: 'PROC-005',
    phase: 'Process',
    expectedStart: '2024-01-20',
    expectedDue: '2024-02-10',
    assignee: 'Carol Brown',
    progress: 45,
    priority: 'low',
    description: 'Improve the code review workflow and guidelines',
    tags: ['process', 'code-review', 'optimization'],
  },
];

// Custom columns configuration for enhanced Tailwind styling
const ENHANCED_COLUMNS: TaskColumn[] = [
  {
    key: 'name',
    header: 'Task Name',
    width: 300,
    render: (task: Task) => (
      <div className='space-y-2'>
        <div className='font-semibold text-gray-900 dark:text-gray-100 text-sm'>
          {task.name}
        </div>
        <div className='text-xs text-gray-500 dark:text-gray-400'>
          {task.reference}
        </div>
        {task.tags && (
          <div className='flex flex-wrap gap-1'>
            {task.tags.slice(0, 2).map(tag => (
              <Badge
                key={tag}
                variant='secondary'
                className='text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    width: 120,
    render: (task: Task) => {
      const statusConfig = {
        'Not started': {
          color:
            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
          icon: Clock,
        },
        'In progress': {
          color:
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
          icon: Clock,
        },
        Completed: {
          color:
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
          icon: Calendar,
        },
        Overdue: {
          color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
          icon: AlertTriangle,
        },
      };

      const config = statusConfig[task.status as keyof typeof statusConfig];
      const Icon = config?.icon || Clock;

      return (
        <div
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${config?.color || 'bg-gray-100 text-gray-800'}`}
        >
          <Icon size={12} />
          {task.status}
        </div>
      );
    },
  },
  {
    key: 'assignee',
    header: 'Assignee',
    width: 150,
    render: (task: Task) => (
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold'>
          {task.assignee
            .split(' ')
            .map(n => n[0])
            .join('')}
        </div>
        <div className='text-sm text-gray-700 dark:text-gray-300'>
          {task.assignee}
        </div>
      </div>
    ),
  },
  {
    key: 'progress',
    header: 'Progress',
    width: 150,
    render: (task: Task) => {
      const progress = task.progress ?? 0;

      const getProgressColor = (progress: number) => {
        if (progress >= 100)
          return 'bg-gradient-to-r from-green-400 to-green-500';
        if (progress >= 75) return 'bg-gradient-to-r from-blue-400 to-blue-500';
        if (progress >= 50)
          return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
        return 'bg-gradient-to-r from-red-400 to-red-500';
      };

      return (
        <div className='space-y-1'>
          <div className='flex justify-between text-xs'>
            <span className='text-gray-600 dark:text-gray-400'>Progress</span>
            <span className='font-medium text-gray-900 dark:text-gray-100'>
              {progress}%
            </span>
          </div>
          <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(progress)}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      );
    },
  },
  {
    key: 'priority',
    header: 'Priority',
    width: 100,
    render: (task: Task) => {
      const priorityConfig = {
        low: {
          color:
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
          label: 'Low',
        },
        medium: {
          color:
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
          label: 'Med',
        },
        high: {
          color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
          label: 'High',
        },
      };

      const config =
        priorityConfig[task.priority as keyof typeof priorityConfig];

      return (
        <div
          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${config?.color || 'bg-gray-100 text-gray-800'}`}
        >
          {config?.label || task.priority}
        </div>
      );
    },
  },
  {
    key: 'expectedDue',
    header: 'Due Date',
    width: 120,
    render: (task: Task) => {
      const dueDate = new Date(task.expectedDue);
      const isOverdue = dueDate < new Date() && task.status !== 'Not started';

      return (
        <div
          className={`text-xs ${isOverdue ? 'text-red-600 dark:text-red-400 font-medium' : 'text-gray-600 dark:text-gray-400'}`}
        >
          <div className='flex items-center gap-1'>
            <Calendar size={12} />
            {dueDate.toLocaleDateString()}
          </div>
        </div>
      );
    },
  },
];

export function TaskManagerExample() {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

  const handleTaskUpdate = useCallback(
    (taskId: string, updates: Partial<Task>) => {
      setTasks(prev =>
        prev.map(task => (task.id === taskId ? { ...task, ...updates } : task))
      );
    },
    []
  );

  const handleTaskDelete = useCallback((taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }, []);

  const handleBulkStatusUpdate = useCallback((status: TaskStatus) => {
    // Para demo, actualizar las primeras 2 tareas
    setTasks(prev =>
      prev.map((task, index) => (index < 2 ? { ...task, status } : task))
    );
  }, []);

  const addSampleTask = () => {
    const newTask: Task = {
      id: `task-${Date.now()}`,
      name: `New Task ${tasks.length + 1}`,
      status: 'Not started',
      reference: `NEW-${String(tasks.length + 1).padStart(3, '0')}`,
      phase: 'Planning',
      expectedStart: new Date().toISOString().split('T')[0],
      expectedDue: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      assignee: 'New User',
      progress: 0,
      priority: 'medium',
      description: 'A newly created task for demonstration',
      tags: ['new', 'demo'],
    };

    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-6'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <Card className='shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm'>
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-t-lg'>
            <div className='flex items-center justify-between'>
              <div>
                <h1 className='text-3xl font-bold mb-2'>TaskManager Example</h1>
                <p className='text-indigo-100'>
                  Enhanced with beautiful Tailwind styling
                </p>
              </div>
              <div className='flex gap-3'>
                <Button
                  onClick={addSampleTask}
                  className='bg-white/20 border border-white/30 text-white hover:bg-white/30'
                >
                  Add Task
                </Button>
              </div>
            </div>
          </div>

          <div className='p-6'>
            <div className='mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
              <div className='flex items-center justify-between'>
                <span className='text-blue-800 dark:text-blue-200 font-medium'>
                  Bulk Actions Demo (affects first 2 tasks)
                </span>
                <div className='flex gap-2'>
                  <Button
                    size='sm'
                    onClick={() => handleBulkStatusUpdate('In progress')}
                    className='bg-blue-500 hover:bg-blue-600 text-white'
                  >
                    Mark In Progress
                  </Button>
                  <Button
                    size='sm'
                    onClick={() => handleBulkStatusUpdate('Not started')}
                    className='bg-green-500 hover:bg-green-600 text-white'
                  >
                    Mark Complete
                  </Button>
                </div>
              </div>
            </div>

            <div className='rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700'>
              <TaskManager
                tasks={tasks}
                columns={ENHANCED_COLUMNS}
                height={600}
                enableInlineEdit={true}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
                className='bg-white dark:bg-gray-800'
              />
            </div>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700'>
                <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2'>
                  <User size={16} />
                  Task Management
                </h3>
                <ul className='text-sm text-blue-700 dark:text-blue-300 space-y-1'>
                  <li>• Inline editing</li>
                  <li>• Bulk operations</li>
                  <li>• Custom columns</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>

              <div className='bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700'>
                <h3 className='font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2'>
                  <Calendar size={16} />
                  Enhanced Features
                </h3>
                <ul className='text-sm text-purple-700 dark:text-purple-300 space-y-1'>
                  <li>• Priority indicators</li>
                  <li>• Status badges</li>
                  <li>• Due date tracking</li>
                  <li>• Avatar generation</li>
                </ul>
              </div>

              <div className='bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700'>
                <h3 className='font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2'>
                  <AlertTriangle size={16} />
                  Visual Enhancements
                </h3>
                <ul className='text-sm text-green-700 dark:text-green-300 space-y-1'>
                  <li>• Gradient progress bars</li>
                  <li>• Beautiful badges</li>
                  <li>• Responsive design</li>
                  <li>• Dark mode support</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
