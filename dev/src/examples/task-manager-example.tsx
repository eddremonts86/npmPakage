import { useCallback, useState } from 'react';
import { Button } from '../../../src/components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../src/components/Card';
import {
  Task,
  TaskColumn,
  TaskManager,
  TaskStatus,
} from '../../../src/widgets/TaskManager';

// Import our new CSS-in-JS component
import { ButtonV2 } from '../../../src/components/ButtonV2';

// Sample tasks for the demo
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
];

const COLUMNS: TaskColumn[] = [
  { id: 'not-started', title: 'Not Started', color: '#6b7280' },
  { id: 'in-progress', title: 'In Progress', color: '#3b82f6' },
  { id: 'overdue', title: 'Overdue', color: '#ef4444' },
  { id: 'blocked', title: 'Blocked', color: '#f59e0b' },
];

function TaskManagerExample() {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);
  const [useNewSystem, setUseNewSystem] = useState(false);

  const handleTaskUpdate = useCallback((updatedTask: Task) => {
    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  }, []);

  const handleStatusChange = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      setTasks(prev =>
        prev.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    },
    []
  );

  return (
    <div className='p-6 max-w-7xl mx-auto space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>📋 Task Manager Widget Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex gap-2 mb-4 flex-wrap'>
            <Button
              variant='outline'
              onClick={() => setUseNewSystem(!useNewSystem)}
            >
              {useNewSystem
                ? 'Show Original Controls'
                : 'Show CSS-in-JS Controls'}
            </Button>

            {useNewSystem ? (
              <>
                <ButtonV2 variant='primary' size='sm'>
                  Add Task (CSS-in-JS)
                </ButtonV2>
                <ButtonV2 variant='outline' size='sm'>
                  Filter
                </ButtonV2>
                <ButtonV2 variant='ghost' size='sm'>
                  Export
                </ButtonV2>
              </>
            ) : (
              <>
                <Button size='sm'>Add Task (Original)</Button>
                <Button variant='outline' size='sm'>
                  Filter
                </Button>
                <Button variant='ghost' size='sm'>
                  Export
                </Button>
              </>
            )}
          </div>

          <div className='mb-4 p-4 bg-blue-50 rounded-lg'>
            <h4 className='font-semibold text-blue-900 mb-2'>
              {useNewSystem ? '✨ CSS-in-JS Controls' : '📋 Original Controls'}
            </h4>
            <p className='text-blue-800 text-sm'>
              {useNewSystem
                ? 'Action buttons use auto-contained CSS-in-JS styling system.'
                : 'Action buttons use original Tailwind-based styling system.'}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task Board</CardTitle>
        </CardHeader>
        <CardContent>
          <TaskManager
            tasks={tasks}
            columns={COLUMNS}
            onTaskUpdate={handleTaskUpdate}
            onStatusChange={handleStatusChange}
            className='min-h-[600px]'
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='text-center p-4 bg-blue-50 rounded-lg'>
              <div className='text-2xl font-bold text-blue-600'>
                {tasks.filter(t => t.status === 'In progress').length}
              </div>
              <div className='text-sm text-blue-800'>In Progress</div>
            </div>
            <div className='text-center p-4 bg-red-50 rounded-lg'>
              <div className='text-2xl font-bold text-red-600'>
                {tasks.filter(t => t.status === 'Overdue').length}
              </div>
              <div className='text-sm text-red-800'>Overdue</div>
            </div>
            <div className='text-center p-4 bg-gray-50 rounded-lg'>
              <div className='text-2xl font-bold text-gray-600'>
                {tasks.filter(t => t.status === 'Not started').length}
              </div>
              <div className='text-sm text-gray-800'>Not Started</div>
            </div>
            <div className='text-center p-4 bg-green-50 rounded-lg'>
              <div className='text-2xl font-bold text-green-600'>
                {Math.round(
                  tasks.reduce((acc, task) => acc + task.progress, 0) /
                    tasks.length
                )}
                %
              </div>
              <div className='text-sm text-green-800'>Avg Progress</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskManagerExample;
