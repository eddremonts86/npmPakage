import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
} from '../../../src';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function TaskManagerExample() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build a widget library', completed: false },
    { id: 3, title: 'Write documentation', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}
          >
            <Input
              placeholder='Add a new task...'
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addTask()}
              style={{ flex: 1 }}
            />
            <Button onClick={addTask}>Add</Button>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            {tasks.map(task => (
              <div
                key={task.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  backgroundColor: task.completed ? '#f8fafc' : 'white',
                }}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#64748b' : '#1a202c',
                  }}
                >
                  {task.title}
                </span>
                <Button
                  variant='destructive'
                  size='sm'
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>

          {tasks.length === 0 && (
            <div
              style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}
            >
              No tasks yet. Add one above!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskManagerExample;
