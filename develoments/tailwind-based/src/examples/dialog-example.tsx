import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'schilling-widgets-system';

function DialogExample() {
  return (
    <div className='p-6 space-y-4'>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
        Dialog Example
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant='outline'
              className='w-full border-purple-300 text-purple-700 hover:bg-purple-50'
            >
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent className='bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-700'>
            <DialogHeader>
              <DialogTitle className='text-purple-800 dark:text-purple-200'>
                Are you sure?
              </DialogTitle>
              <DialogDescription className='text-gray-600 dark:text-gray-300'>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant='outline'
                className='border-gray-300 text-gray-700 hover:bg-gray-50'
              >
                Cancel
              </Button>
              <Button
                variant='destructive'
                className='bg-red-500 hover:bg-red-600'
              >
                Delete Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button className='w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'>
              Success Dialog
            </Button>
          </DialogTrigger>
          <DialogContent className='bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 border border-green-200 dark:border-green-700'>
            <DialogHeader>
              <DialogTitle className='text-green-800 dark:text-green-200'>
                Success!
              </DialogTitle>
              <DialogDescription className='text-green-600 dark:text-green-300'>
                Your action has been completed successfully. Everything is
                working as expected.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button className='bg-green-500 hover:bg-green-600 text-white'>
                Continue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default DialogExample;
