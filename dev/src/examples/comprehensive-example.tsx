import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
} from '../../../src/index';

// Import our new CSS-in-JS component for comparison
import { ButtonV2 } from '../../../src/components/ButtonV2';

export function ComprehensiveExample() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [useNewSystem, setUseNewSystem] = React.useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSystem = () => {
    setUseNewSystem(!useNewSystem);
  };

  return (
    <ThemeProvider config={{ theme }}>
      <div className='max-w-4xl p-6 mx-auto space-y-6'>
        <Card>
          <CardHeader>
            <CardTitle>🎨 Schilling Widgets System - CSS-in-JS Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-wrap gap-2 mb-4'>
              <Button onClick={toggleTheme}>Toggle Theme ({theme})</Button>
              <Button variant='outline' onClick={toggleSystem}>
                {useNewSystem ? 'Show Original' : 'Show CSS-in-JS'}
              </Button>
            </div>

            <div className='p-4 mb-4 border border-blue-200 rounded-lg bg-blue-50'>
              <h4 className='mb-2 font-semibold text-blue-900'>
                🚀 CSS-in-JS Implementation Status
              </h4>
              <p className='text-sm text-blue-800'>
                {useNewSystem
                  ? '✨ Showing NEW CSS-in-JS components (auto-contained styles)'
                  : '📋 Showing ORIGINAL components (requires Tailwind CSS)'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue='buttons' className='w-full'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='buttons'>Buttons</TabsTrigger>
            <TabsTrigger value='cards'>Cards</TabsTrigger>
            <TabsTrigger value='avatars'>Avatars</TabsTrigger>
            <TabsTrigger value='forms'>Forms</TabsTrigger>
          </TabsList>

          <TabsContent value='buttons'>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                {useNewSystem ? (
                  <div className='space-y-6'>
                    <div>
                      <h4 className='mb-3 font-semibold text-green-700'>
                        ✨ NEW CSS-in-JS Buttons (Auto-contained)
                      </h4>
                      <div className='flex flex-wrap gap-2 p-4 rounded-lg bg-green-50'>
                        <ButtonV2 variant='primary'>Primary</ButtonV2>
                        <ButtonV2 variant='secondary'>Secondary</ButtonV2>
                        <ButtonV2 variant='outline'>Outline</ButtonV2>
                        <ButtonV2 variant='ghost'>Ghost</ButtonV2>
                        <ButtonV2 variant='destructive'>Destructive</ButtonV2>
                      </div>
                      <p className='mt-2 text-sm text-green-600'>
                        ✅ No external CSS needed • ✅ Styles auto-injected • ✅
                        Works like Material UI
                      </p>
                    </div>

                    <div>
                      <h4 className='mb-3 font-semibold'>
                        CSS-in-JS Button Sizes
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        <ButtonV2 variant='primary' size='sm'>
                          Small
                        </ButtonV2>
                        <ButtonV2 variant='primary' size='md'>
                          Medium
                        </ButtonV2>
                        <ButtonV2 variant='primary' size='lg'>
                          Large
                        </ButtonV2>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='space-y-6'>
                    <div>
                      <h4 className='mb-3 font-semibold text-orange-700'>
                        📋 ORIGINAL Buttons (Requires Tailwind)
                      </h4>
                      <div className='flex flex-wrap gap-2 p-4 rounded-lg bg-orange-50'>
                        <Button variant='default'>Default</Button>
                        <Button variant='secondary'>Secondary</Button>
                        <Button variant='outline'>Outline</Button>
                        <Button variant='ghost'>Ghost</Button>
                        <Button variant='destructive'>Destructive</Button>
                        <Button variant='link'>Link</Button>
                      </div>
                      <p className='mt-2 text-sm text-orange-600'>
                        ⚠️ Requires Tailwind CSS configuration • ⚠️ External
                        dependencies
                      </p>
                    </div>

                    <div>
                      <h4 className='mb-3 font-semibold'>
                        Original Button Sizes
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        <Button size='sm'>Small</Button>
                        <Button size='default'>Default</Button>
                        <Button size='lg'>Large</Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='cards'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle>Card Example 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is a simple card with some content.</p>
                  <div className='mt-4'>
                    {useNewSystem ? (
                      <ButtonV2 variant='primary' size='sm'>
                        CSS-in-JS Action
                      </ButtonV2>
                    ) : (
                      <Button size='sm'>Original Action</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Example 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Another card with different content.</p>
                  <div className='mt-4'>
                    {useNewSystem ? (
                      <ButtonV2 variant='outline' size='sm'>
                        CSS-in-JS Secondary
                      </ButtonV2>
                    ) : (
                      <Button variant='outline' size='sm'>
                        Original Secondary
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value='avatars'>
            <Card>
              <CardHeader>
                <CardTitle>Avatar Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage src='https://api.dicebear.com/7.x/avataaars/svg?seed=john' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src='https://api.dicebear.com/7.x/avataaars/svg?seed=jane' />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='forms'>
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms' />
                    <label htmlFor='terms' className='text-sm font-medium'>
                      Accept terms and conditions
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='marketing' />
                    <label htmlFor='marketing' className='text-sm font-medium'>
                      Send me marketing emails
                    </label>
                  </div>
                  <div className='mt-4'>
                    {useNewSystem ? (
                      <ButtonV2 variant='primary'>
                        Submit with CSS-in-JS
                      </ButtonV2>
                    ) : (
                      <Button>Submit Original</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>🎯 Integration Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 md:grid-cols-2'>
              <div className='p-4 border border-green-200 rounded-lg bg-green-50'>
                <h3 className='mb-2 font-semibold text-green-800'>
                  ✨ NEW CSS-in-JS Approach (Recommended)
                </h3>
                <pre className='p-3 overflow-x-auto text-sm bg-white border rounded'>
                  {`// Zero configuration needed!
npm install schilling-widgets-system

// Just import and use
import { Button } from 'schilling-widgets-system';

function App() {
  return <Button>Works!</Button>;
  // ✅ Styles auto-injected
  // ✅ No CSS imports needed
  // ✅ Like Material UI
}`}
                </pre>
              </div>

              <div className='p-4 border border-orange-200 rounded-lg bg-orange-50'>
                <h3 className='mb-2 font-semibold text-orange-800'>
                  📋 CURRENT Tailwind Approach
                </h3>
                <pre className='p-3 overflow-x-auto text-sm bg-white border rounded'>
                  {`// Requires configuration
npm install schilling-widgets-system
npm install tailwindcss

// tailwind.config.js setup needed
module.exports = {
  content: ["./src/**/*.{js,tsx}"],
  // ... more config
};

// CSS imports needed
@tailwind base;
@tailwind components;`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default ComprehensiveExample;
