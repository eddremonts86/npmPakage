import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from '@schilling-widgets';
import { useState } from 'react';

function TaskManagerSimple() {
  const [tasks, setTasks] = useState<string[]>(['Example task']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <CardTitle>Simple Task Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
            <Input
              placeholder='Add task...'
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              style={{ flex: 1 }}
            />
            <Button onClick={addTask}>Add</Button>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  padding: '0.5rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  marginBottom: '0.5rem',
                }}
              >
                {task}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskManagerSimple;
