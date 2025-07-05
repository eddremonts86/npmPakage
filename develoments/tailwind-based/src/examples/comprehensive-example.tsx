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
  configureTheme,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'schilling-widgets-system';

export function ComprehensiveExample() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    configureTheme({ theme: newTheme });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-6'>
      <div className='max-w-6xl mx-auto space-y-8'>
        <Card className='shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'>
          <CardHeader className='text-center pb-2'>
            <CardTitle className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
              Schilling Widgets System Demo - Tailwind Mode
            </CardTitle>
            <p className='text-gray-600 dark:text-gray-300 mt-2'>
              Enhanced with Tailwind CSS for beautiful styling
            </p>
          </CardHeader>
          <CardContent>
            <div className='flex justify-center gap-4 mb-8'>
              <Button
                onClick={toggleTheme}
                className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
              >
                Toggle Theme ({theme})
              </Button>
              <Button
                variant='outline'
                className='border-purple-200 text-purple-700 hover:bg-purple-50'
              >
                Tailwind Mode Active
              </Button>
            </div>

            <Tabs defaultValue='basic' className='w-full'>
              <TabsList className='grid w-full grid-cols-3 mb-8'>
                <TabsTrigger value='basic'>Basic Components</TabsTrigger>
                <TabsTrigger value='forms'>Form Components</TabsTrigger>
                <TabsTrigger value='layout'>Layout Components</TabsTrigger>
              </TabsList>

              <TabsContent value='basic' className='space-y-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                  <Card className='shadow-lg hover:shadow-xl transition-shadow border-purple-100'>
                    <CardHeader>
                      <CardTitle className='text-purple-700 dark:text-purple-300'>
                        Buttons
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='flex flex-wrap gap-3'>
                        <Button className='bg-purple-600 hover:bg-purple-700'>
                          Primary
                        </Button>
                        <Button
                          variant='secondary'
                          className='bg-blue-100 text-blue-800 hover:bg-blue-200'
                        >
                          Secondary
                        </Button>
                        <Button
                          variant='outline'
                          className='border-purple-300 text-purple-700 hover:bg-purple-50'
                        >
                          Outline
                        </Button>
                        <Button
                          variant='ghost'
                          className='text-purple-600 hover:text-purple-800 hover:bg-purple-50'
                        >
                          Ghost
                        </Button>
                        <Button
                          variant='destructive'
                          className='bg-red-500 hover:bg-red-600'
                        >
                          Destructive
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='shadow-lg hover:shadow-xl transition-shadow border-blue-100'>
                    <CardHeader>
                      <CardTitle className='text-blue-700 dark:text-blue-300'>
                        Avatar
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='flex gap-4'>
                        <Avatar className='ring-4 ring-purple-200'>
                          <AvatarImage src='https://github.com/shadcn.png' />
                          <AvatarFallback className='bg-purple-100 text-purple-800'>
                            CN
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className='ring-4 ring-blue-200'>
                          <AvatarFallback className='bg-blue-100 text-blue-800'>
                            JD
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value='forms' className='space-y-6'>
                <Card className='shadow-lg border-green-100'>
                  <CardHeader>
                    <CardTitle className='text-green-700 dark:text-green-300'>
                      Form Elements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-6'>
                      <div className='flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                        <Checkbox
                          id='terms'
                          className='data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600'
                        />
                        <label
                          htmlFor='terms'
                          className='text-green-800 dark:text-green-200 font-medium'
                        >
                          Accept terms and conditions
                        </label>
                      </div>
                      <div className='flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                        <Checkbox
                          id='newsletter'
                          className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
                        />
                        <label
                          htmlFor='newsletter'
                          className='text-blue-800 dark:text-blue-200 font-medium'
                        >
                          Subscribe to newsletter
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value='layout' className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <Card className='shadow-lg hover:shadow-xl transition-all hover:scale-105 border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50'>
                    <CardHeader>
                      <CardTitle className='text-pink-700 dark:text-pink-300'>
                        Card 1
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-pink-600 dark:text-pink-200'>
                        Beautiful Tailwind styling with gradients and
                        animations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='shadow-lg hover:shadow-xl transition-all hover:scale-105 border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50'>
                    <CardHeader>
                      <CardTitle className='text-indigo-700 dark:text-indigo-300'>
                        Card 2
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-indigo-600 dark:text-indigo-200'>
                        Custom Tailwind configuration with enhanced colors.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='shadow-lg hover:shadow-xl transition-all hover:scale-105 border-cyan-100 bg-gradient-to-br from-cyan-50 to-teal-50'>
                    <CardHeader>
                      <CardTitle className='text-cyan-700 dark:text-cyan-300'>
                        Card 3
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-cyan-600 dark:text-cyan-200'>
                        Responsive design with modern styling patterns.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ComprehensiveExample;
