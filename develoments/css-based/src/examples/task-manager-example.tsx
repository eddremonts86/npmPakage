import { Card, Button } from 'schilling-widgets-system';

function TaskManagerExample() {
  return (
    <div className='p-6 space-y-6 bg-background min-h-screen'>
      <div className="mb-6">
        <h1 className='text-2xl font-bold text-foreground mb-2'>
          Task Manager Example
        </h1>
        <p className="text-muted-foreground">
          Complete task management system (widget temporarily disabled).
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Task Manager Widget</h2>
        <p className="text-muted-foreground mb-4">
          This widget provides a complete task management interface with priority levels and status tracking.
        </p>
        <div className="flex gap-2">
          <Button>Add Task</Button>
          <Button variant="outline">View All Tasks</Button>
        </div>
      </Card>
    </div>
  );
}

export default TaskManagerExample;
