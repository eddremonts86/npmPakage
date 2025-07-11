import { useState } from 'react';
import {
  Button,
  Badge,
  Input,
  Select,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components';

function ComprehensiveExample() {
  const [activeTab, setActiveTab] = useState('account');

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
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold text-foreground'>Buttons</h2>
        <div className='flex flex-wrap gap-2'>
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Badges Section */}
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold text-foreground'>Badges</h2>
        <div className='flex flex-wrap gap-2'>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      {/* Form Elements Section */}
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold text-foreground'>Form Elements</h2>

        <div className='space-y-4 max-w-md'>
          <div>
            <label className='text-sm font-medium text-foreground mb-2 block'>Name</label>
            <Input placeholder="Enter your name" />
          </div>

          <div>
            <label className='text-sm font-medium text-foreground mb-2 block'>Country</label>
            <Select
              placeholder="Select a country"
              options={[
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'uk', label: 'United Kingdom' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold text-foreground'>Tabs</h2>
        <Tabs className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="account"
              isActive={activeTab === 'account'}
              onClick={() => setActiveTab('account')}
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              isActive={activeTab === 'password'}
              onClick={() => setActiveTab('password')}
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              isActive={activeTab === 'settings'}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" isActive={activeTab === 'account'}>
            <p className="text-sm text-muted-foreground">
              Make changes to your account here.
            </p>
          </TabsContent>
          <TabsContent value="password" isActive={activeTab === 'password'}>
            <p className="text-sm text-muted-foreground">
              Change your password here.
            </p>
          </TabsContent>
          <TabsContent value="settings" isActive={activeTab === 'settings'}>
            <p className="text-sm text-muted-foreground">
              Manage your settings here.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ComprehensiveExample;
