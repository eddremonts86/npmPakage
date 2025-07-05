import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../src/index';

// Import our new CSS-in-JS component
import { ButtonV2 } from '../../../src/components/ButtonV2';

function DialogExample() {
  const [useNewSystem, setUseNewSystem] = React.useState(false);

  return (
    <div className='p-6 max-w-2xl mx-auto space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>🗣️ Dialog Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex gap-2 mb-4'>
            <Button
              variant='outline'
              onClick={() => setUseNewSystem(!useNewSystem)}
            >
              {useNewSystem ? 'Show Original' : 'Show CSS-in-JS'}
            </Button>
          </div>

          <div className='space-y-4'>
            <Dialog>
              <DialogTrigger asChild>
                {useNewSystem ? (
                  <ButtonV2 variant='outline'>Open Dialog (CSS-in-JS)</ButtonV2>
                ) : (
                  <Button variant='outline'>Open Dialog (Original)</Button>
                )}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  {useNewSystem ? (
                    <>
                      <ButtonV2 variant='outline'>Cancel</ButtonV2>
                      <ButtonV2 variant='destructive'>Delete Account</ButtonV2>
                    </>
                  ) : (
                    <>
                      <Button variant='outline'>Cancel</Button>
                      <Button variant='destructive'>Delete Account</Button>
                    </>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                {useNewSystem ? (
                  <ButtonV2 variant='primary'>Info Dialog</ButtonV2>
                ) : (
                  <Button>Info Dialog</Button>
                )}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Information</DialogTitle>
                  <DialogDescription>
                    This is an informational dialog demonstrating the dialog
                    component with our {useNewSystem ? 'CSS-in-JS' : 'original'}{' '}
                    button system.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  {useNewSystem ? (
                    <ButtonV2 variant='primary'>Got it</ButtonV2>
                  ) : (
                    <Button>Got it</Button>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
            <h4 className='font-semibold text-blue-900 mb-2'>
              {useNewSystem ? '✨ CSS-in-JS System' : '📋 Original System'}
            </h4>
            <p className='text-blue-800 text-sm'>
              {useNewSystem
                ? 'Dialog content uses auto-contained CSS-in-JS buttons with no external dependencies.'
                : 'Dialog content uses original buttons that require Tailwind CSS configuration.'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DialogExample;
