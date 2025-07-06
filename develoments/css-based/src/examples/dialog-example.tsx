import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "schilling-widgets-system";

function DialogExample() {
    return (
        <div className="p-6 space-y-6 bg-background min-h-screen">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    Dialog Example
                </h1>
                <p className="text-muted-foreground">
                    Simple dialog examples exactly like the shadcn/ui reference.
                </p>
            </div>

            <div className="space-y-4">
                {/* Basic Dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="destructive">
                                Delete Account
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Another Dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Settings Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Settings</DialogTitle>
                            <DialogDescription>
                                Manage your account settings and preferences.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default DialogExample;
