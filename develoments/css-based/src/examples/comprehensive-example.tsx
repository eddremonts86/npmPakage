import {
  Button,
  Card,
  Badge,
  Input,
  Select,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'schilling-widgets-system';

function ComprehensiveExample() {
  return (
    <div className='p-6 space-y-6 bg-background min-h-screen'>
      <div className="mb-6">
        <h1 className='text-2xl font-bold text-foreground mb-2'>
          Comprehensive Components Example
        </h1>
        <p className="text-muted-foreground">
          All components exactly like the shadcn/ui reference.
        </p>
      </div>

      {/* Buttons Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </Card>

      {/* Badges Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Card>

      {/* Form Elements */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Form Elements</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium mb-2 block">Name</label>
            <Input placeholder="Enter your name" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Country</label>
            <Select>
              <option>Select a country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </Select>
          </div>
        </div>
      </Card>

      {/* Tabs Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Tabs</h2>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4">
            <p className="text-muted-foreground">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="password" className="mt-4">
            <p className="text-muted-foreground">Change your password here.</p>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <p className="text-muted-foreground">Manage your settings here.</p>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

export default ComprehensiveExample;
