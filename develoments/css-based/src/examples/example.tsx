import { Button, Card } from 'schilling-widgets-system';

function Example() {
  return (
    <div className='p-6 space-y-6 bg-background min-h-screen'>
      <div className="mb-6">
        <h1 className='text-2xl font-bold text-foreground mb-2'>
          Basic Example
        </h1>
        <p className="text-muted-foreground">
          Simple component showcase.
        </p>
      </div>

      <Card className="p-6 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Welcome</h2>
        <p className="text-muted-foreground mb-4">
          This is a basic example of the schilling widgets system.
        </p>
        <Button>Get Started</Button>
      </Card>
    </div>
  );
}

export default Example;
