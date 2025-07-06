import { Card, Button } from 'schilling-widgets-system';

function InfiniteTableExample() {
  return (
    <div className='p-6 space-y-6 bg-background min-h-screen'>
      <div className="mb-6">
        <h1 className='text-2xl font-bold text-foreground mb-2'>
          Infinite Table Example
        </h1>
        <p className="text-muted-foreground">
          Infinite scrolling table component (widget temporarily disabled).
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Infinite Table Widget</h2>
        <p className="text-muted-foreground mb-4">
          This widget provides infinite scrolling capabilities for large datasets.
        </p>
        <Button>Load Sample Data</Button>
      </Card>
    </div>
  );
}

export default InfiniteTableExample;
