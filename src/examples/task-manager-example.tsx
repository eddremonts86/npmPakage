import { AlertTriangle, Calendar, Clock, User } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import {
  Task,
  TaskColumn,
  TaskManager,
  TaskStatus,
} from '../widgets/TaskManager';

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
    description: 'Create new UI components for the dashboard',
    tags: ['design', 'ui', 'components'],
  },
  {
    id: '4',
    name: 'Database optimization',
    status: 'Blocked',
    reference: 'DB-004',
    phase: 'Backend',
    expectedStart: '2024-01-25',
    expectedDue: '2024-02-10',
    assignee: 'Bob Wilson',
    progress: 50,
    priority: 'medium',
    description: 'Optimize database queries for better performance',
    tags: ['database', 'optimization', 'performance'],
  },
  {
    id: '5',
    name: 'User testing preparation',
    status: 'On hold',
    reference: 'TEST-005',
    phase: 'Testing',
    expectedStart: '2024-02-05',
    expectedDue: '2024-02-20',
    assignee: 'Carol Davis',
    progress: 10,
    priority: 'low',
    description: 'Prepare materials and setup for user testing sessions',
    tags: ['testing', 'user-research'],
  },
  {
    id: '6',
    name: 'API integration',
    status: 'In progress',
    reference: 'API-006',
    phase: 'Development',
    expectedStart: '2024-01-20',
    expectedDue: '2024-02-05',
    assignee: 'David Miller',
    progress: 60,
    priority: 'high',
    description: 'Integrate third-party API for payment processing',
    tags: ['api', 'integration', 'payments'],
  },
  {
    id: '7',
    name: 'Mobile app testing',
    status: 'Not started',
    reference: 'MOB-007',
    phase: 'Testing',
    expectedStart: '2024-02-10',
    expectedDue: '2024-02-25',
    assignee: 'Emma Brown',
    progress: 0,
    priority: 'medium',
    description: 'Test mobile app on various devices and platforms',
    tags: ['mobile', 'testing', 'qa'],
  },
  {
    id: '8',
    name: 'Security audit',
    status: 'In progress',
    reference: 'SEC-008',
    phase: 'Security',
    expectedStart: '2024-01-30',
    expectedDue: '2024-02-15',
    assignee: 'Frank Garcia',
    progress: 30,
    priority: 'high',
    description: 'Conduct comprehensive security audit',
    tags: ['security', 'audit', 'compliance'],
  },
];

// Custom columns for different views
const CUSTOM_COLUMNS: TaskColumn[] = [
  {
    key: 'name',
    header: 'Task Name',
    width: 300,
    sortable: true,
    filterable: true,
    sticky: true,
    render: (value, task) => (
      <div className='flex items-center gap-2'>
        {task.priority === 'high' && (
          <AlertTriangle className='h-4 w-4 text-red-500' />
        )}
        <span className='font-medium truncate' title={value}>
          {value}
        </span>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    width: 120,
    sortable: true,
    filterable: true,
    render: (value: TaskStatus) => (
      <Badge variant='secondary' className='text-xs'>
        {value}
      </Badge>
    ),
  },
  {
    key: 'assignee',
    header: 'Assignee',
    width: 150,
    sortable: true,
    filterable: true,
    render: value => (
      <div className='flex items-center gap-2'>
        <User className='h-4 w-4 text-gray-500' />
        <span className='text-sm'>{value}</span>
      </div>
    ),
  },
  {
    key: 'expectedDue',
    header: 'Due Date',
    width: 120,
    sortable: true,
    render: value => (
      <div className='flex items-center gap-2'>
        <Calendar className='h-4 w-4 text-gray-500' />
        <span className='text-sm'>{new Date(value).toLocaleDateString()}</span>
      </div>
    ),
  },
  {
    key: 'progress',
    header: 'Progress',
    width: 100,
    sortable: true,
    render: value => (
      <div className='flex items-center gap-2'>
        <div className='w-12 bg-gray-200 rounded-full h-2'>
          <div
            className='bg-blue-500 h-2 rounded-full'
            style={{ width: `${value || 0}%` }}
          />
        </div>
        <span className='text-xs text-gray-600'>{value || 0}%</span>
      </div>
    ),
  },
];

export const TaskManagerExample: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);
  const [loading, setLoading] = useState(false);
  const [useCustomColumns, setUseCustomColumns] = useState(false);

  // Handle task updates
  const handleTaskUpdate = useCallback(
    (taskId: string, updates: Partial<Task>) => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, ...updates } : task
        )
      );
      console.log('Task updated:', taskId, updates);
    },
    []
  );

  // Handle task deletion
  const handleTaskDelete = useCallback((taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    console.log('Task deleted:', taskId);
  }, []);

  // Handle refresh
  const handleRefresh = useCallback(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log('Tasks refreshed');
    }, 1000);
  }, []);

  // Handle opening task manager
  const handleOpenTaskManager = useCallback(() => {
    console.log('Opening task manager...');
    // This would typically open a modal or navigate to a full-screen view
  }, []);

  // Add a new task
  const addSampleTask = useCallback(() => {
    const newTask: Task = {
      id: Date.now().toString(),
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
      description: 'A new task added dynamically',
      tags: ['new', 'sample'],
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, [tasks.length]);

  return (
    <div className='p-6 max-w-full mx-auto space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>
            TaskManager Component Demo
          </h1>
          <p className='text-gray-600 mt-1'>
            Comprehensive example showcasing all TaskManager features
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setUseCustomColumns(!useCustomColumns)}
          >
            {useCustomColumns ? 'Default View' : 'Custom View'}
          </Button>
          <Button variant='outline' size='sm' onClick={addSampleTask}>
            Add Task
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card className='p-4'>
          <div className='text-2xl font-bold text-green-600'>
            {tasks.filter(t => t.status === 'In progress').length}
          </div>
          <div className='text-sm text-gray-600'>In Progress</div>
        </Card>
        <Card className='p-4'>
          <div className='text-2xl font-bold text-red-600'>
            {tasks.filter(t => t.status === 'Overdue').length}
          </div>
          <div className='text-sm text-gray-600'>Overdue</div>
        </Card>
        <Card className='p-4'>
          <div className='text-2xl font-bold text-orange-600'>
            {tasks.filter(t => t.status === 'Blocked').length}
          </div>
          <div className='text-sm text-gray-600'>Blocked</div>
        </Card>
        <Card className='p-4'>
          <div className='text-2xl font-bold text-blue-600'>{tasks.length}</div>
          <div className='text-sm text-gray-600'>Total Tasks</div>
        </Card>
      </div>

      {/* TaskManager Component */}
      <Card className='p-6'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Task Management</h2>
            <div className='flex items-center gap-2'>
              <Clock className='h-4 w-4 text-gray-500' />
              <span className='text-sm text-gray-600'>
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>

          <TaskManager
            tasks={tasks}
            columns={useCustomColumns ? CUSTOM_COLUMNS : undefined}
            loading={loading}
            height={500}
            className='border rounded-lg'
            enableInlineEdit={true}
            enableRealTimeUpdates={true}
            pageSize={10}
            onTaskUpdate={handleTaskUpdate}
            onTaskDelete={handleTaskDelete}
            onRefresh={handleRefresh}
            onOpenTaskManager={handleOpenTaskManager}
          />
        </div>
      </Card>

      {/* Feature Showcase */}
      <Card className='p-6'>
        <h2 className='text-lg font-semibold mb-4'>Features Demonstrated</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <h3 className='font-medium'>Core Features</h3>
            <ul className='text-sm text-gray-600 space-y-1'>
              <li>• Virtualized scrolling for performance</li>
              <li>• Sortable columns (click headers)</li>
              <li>• Advanced filtering with search</li>
              <li>• Inline editing capabilities</li>
              <li>• Responsive design</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h3 className='font-medium'>Advanced Features</h3>
            <ul className='text-sm text-gray-600 space-y-1'>
              <li>• Real-time updates simulation</li>
              <li>• Action menus with tooltips</li>
              <li>• Keyboard navigation (Tab, Enter)</li>
              <li>• Custom column rendering</li>
              <li>• Accessibility support</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Instructions */}
      <Card className='p-6'>
        <h2 className='text-lg font-semibold mb-4'>Try These Features</h2>
        <div className='space-y-3 text-sm'>
          <div className='flex items-start gap-2'>
            <Badge variant='outline' className='text-xs'>
              1
            </Badge>
            <div>
              <strong>Sorting:</strong> Click on any column header to sort.
              Click again to reverse the sort order.
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Badge variant='outline' className='text-xs'>
              2
            </Badge>
            <div>
              <strong>Filtering:</strong> Use the search box to filter tasks by
              name. Use the status and assignee filters for specific criteria.
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Badge variant='outline' className='text-xs'>
              3
            </Badge>
            <div>
              <strong>Inline Editing:</strong> Click on task names to edit them
              directly. Press Enter to save or Escape to cancel.
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Badge variant='outline' className='text-xs'>
              4
            </Badge>
            <div>
              <strong>Actions:</strong> Click the three-dot menu on any row to
              see available actions (Edit, Delete, etc.).
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Badge variant='outline' className='text-xs'>
              5
            </Badge>
            <div>
              <strong>Keyboard Navigation:</strong> Use Tab to navigate between
              interactive elements, Enter to activate, and Escape to close
              dialogs.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskManagerExample;
