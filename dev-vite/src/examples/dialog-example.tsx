import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@schilling-widgets';
import { useState } from 'react';

function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <Card>
        <CardHeader>
          <CardTitle>Dialog Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example Dialog</DialogTitle>
                </DialogHeader>
                <div style={{ padding: '1rem 0' }}>
                  <p>This is an example dialog content.</p>
                  <div
                    style={{
                      marginTop: '1rem',
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    <Button onClick={() => setOpen(false)}>Close</Button>
                    <Button variant='outline' onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button variant='outline'>Another Action</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DialogExample;
