import { useState } from 'react';
import { Button } from '../../../src/components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../src/components/Card';

// Import our new CSS-in-JS component
import { ButtonV2 } from '../../../src/components/ButtonV2';

// Simplified task interface for demo
interface SimpleTask {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

const SAMPLE_TASKS: SimpleTask[] = [
  {
    id: '1',
    title: 'Complete project documentation',
    status: 'in-progress',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Fix authentication bug',
    status: 'todo',
    priority: 'high',
  },
  {
    id: '3',
    title: 'Design new UI components',
    status: 'todo',
    priority: 'medium',
  },
  {
    id: '4',
    title: 'Database optimization',
    status: 'done',
    priority: 'medium',
  },
  {
    id: '5',
    title: 'User testing preparation',
    status: 'in-progress',
    priority: 'low',
  },
];

function TaskManagerExample() {
  const [tasks, setTasks] = useState<SimpleTask[]>(SAMPLE_TASKS);
  const [useNewSystem, setUseNewSystem] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'todo':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'done':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const moveTask = (taskId: string, newStatus: SimpleTask['status']) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const addNewTask = () => {
    const newTask: SimpleTask = {
      id: Date.now().toString(),
      title: `New Task ${tasks.length + 1}`,
      status: 'todo',
      priority: 'medium',
    };
    setTasks(prev => [...prev, newTask]);
  };

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
                <ButtonV2 variant='primary' size='sm' onClick={addNewTask}>
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
                <Button size='sm' onClick={addNewTask}>
                  Add Task (Original)
                </Button>
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

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* To Do Column */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-gray-400 rounded-full'></div>
              To Do ({tasks.filter(t => t.status === 'todo').length})
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            {tasks
              .filter(task => task.status === 'todo')
              .map(task => (
                <div
                  key={task.id}
                  className='p-3 bg-white border rounded-lg shadow-sm'
                >
                  <h4 className='font-medium mb-2'>{task.title}</h4>
                  <div className='flex justify-between items-center'>
                    <span
                      className={`px-2 py-1 text-xs rounded border ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </span>
                    {useNewSystem ? (
                      <ButtonV2
                        variant='outline'
                        size='sm'
                        onClick={() => moveTask(task.id, 'in-progress')}
                      >
                        Start
                      </ButtonV2>
                    ) : (
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => moveTask(task.id, 'in-progress')}
                      >
                        Start
                      </Button>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        {/* In Progress Column */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
              In Progress (
              {tasks.filter(t => t.status === 'in-progress').length})
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            {tasks
              .filter(task => task.status === 'in-progress')
              .map(task => (
                <div
                  key={task.id}
                  className='p-3 bg-blue-50 border border-blue-200 rounded-lg'
                >
                  <h4 className='font-medium mb-2'>{task.title}</h4>
                  <div className='flex justify-between items-center'>
                    <span
                      className={`px-2 py-1 text-xs rounded border ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </span>
                    {useNewSystem ? (
                      <ButtonV2
                        variant='primary'
                        size='sm'
                        onClick={() => moveTask(task.id, 'done')}
                      >
                        Complete
                      </ButtonV2>
                    ) : (
                      <Button
                        size='sm'
                        onClick={() => moveTask(task.id, 'done')}
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Done Column */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              Done ({tasks.filter(t => t.status === 'done').length})
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            {tasks
              .filter(task => task.status === 'done')
              .map(task => (
                <div
                  key={task.id}
                  className='p-3 bg-green-50 border border-green-200 rounded-lg'
                >
                  <h4 className='font-medium mb-2 line-through text-gray-600'>
                    {task.title}
                  </h4>
                  <div className='flex justify-between items-center'>
                    <span
                      className={`px-2 py-1 text-xs rounded border ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </span>
                    {useNewSystem ? (
                      <ButtonV2
                        variant='ghost'
                        size='sm'
                        onClick={() => moveTask(task.id, 'todo')}
                      >
                        Reopen
                      </ButtonV2>
                    ) : (
                      <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => moveTask(task.id, 'todo')}
                      >
                        Reopen
                      </Button>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Task Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='text-center p-4 bg-blue-50 rounded-lg'>
              <div className='text-2xl font-bold text-blue-600'>
                {tasks.filter(t => t.status === 'in-progress').length}
              </div>
              <div className='text-sm text-blue-800'>In Progress</div>
            </div>
            <div className='text-center p-4 bg-gray-50 rounded-lg'>
              <div className='text-2xl font-bold text-gray-600'>
                {tasks.filter(t => t.status === 'todo').length}
              </div>
              <div className='text-sm text-gray-800'>To Do</div>
            </div>
            <div className='text-center p-4 bg-green-50 rounded-lg'>
              <div className='text-2xl font-bold text-green-600'>
                {tasks.filter(t => t.status === 'done').length}
              </div>
              <div className='text-sm text-green-800'>Completed</div>
            </div>
            <div className='text-center p-4 bg-purple-50 rounded-lg'>
              <div className='text-2xl font-bold text-purple-600'>
                {Math.round(
                  (tasks.filter(t => t.status === 'done').length /
                    tasks.length) *
                    100
                )}
                %
              </div>
              <div className='text-sm text-purple-800'>Completion Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskManagerExample;
