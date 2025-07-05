import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  LoadingSpinner,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@schilling-widgets';
import { useState } from 'react';

function ComprehensiveExample() {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
          }}
        >
          Comprehensive Component Showcase
        </h1>
        <p style={{ color: '#64748b' }}>
          Complete demonstration of all available components in the Schilling
          Widgets System
        </p>
      </div>

      <Tabs defaultValue='buttons'>
        <TabsList style={{ marginBottom: '2rem' }}>
          <TabsTrigger value='buttons'>Buttons & Inputs</TabsTrigger>
          <TabsTrigger value='display'>Display</TabsTrigger>
          <TabsTrigger value='feedback'>Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value='buttons'>
          <div
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <Button>Default</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='destructive'>Destructive</Button>
                  <Button variant='outline'>Outline</Button>
                  <Button variant='ghost'>Ghost</Button>
                  <Button variant='link'>Link</Button>
                </div>
                <div
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}
                >
                  <Button size='sm'>Small</Button>
                  <Button>Default</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inputs & Forms</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                      }}
                    >
                      Text Input
                    </label>
                    <Input
                      placeholder='Enter text...'
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                      }}
                    >
                      Email Input
                    </label>
                    <Input type='email' placeholder='your@email.com' />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={checked =>
                        setIsChecked(checked === true)
                      }
                    />
                    <label style={{ fontWeight: '500' }}>
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='display'>
          <div
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <Avatar>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='Avatar'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar style={{ width: '3rem', height: '3rem' }}>
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
                >
                  <Badge>Default</Badge>
                  <Badge variant='secondary'>Secondary</Badge>
                  <Badge variant='destructive'>Destructive</Badge>
                  <Badge variant='outline'>Outline</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='feedback'>
          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <LoadingSpinner />
                <LoadingSpinner style={{ width: '2rem', height: '2rem' }} />
                <LoadingSpinner style={{ width: '3rem', height: '3rem' }} />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button disabled>
                  <LoadingSpinner
                    style={{
                      width: '1rem',
                      height: '1rem',
                      marginRight: '0.5rem',
                    }}
                  />
                  Loading...
                </Button>
                <Button variant='outline' disabled>
                  <LoadingSpinner
                    style={{
                      width: '1rem',
                      height: '1rem',
                      marginRight: '0.5rem',
                    }}
                  />
                  Processing...
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ComprehensiveExample;
