import { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  configureTheme,
  InfiniteTable,
  type TableColumn,
} from 'schilling-widgets-system';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function InfiniteTableExample() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState<'users' | 'posts'>('users');
  const [useTailwind, setUseTailwind] = useState(true);

  // Fetch users from JSONPlaceholder API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        setPosts(data.slice(0, 50)); // Limit to 50 posts for demo
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Toggle Tailwind usage
  const toggleTailwind = () => {
    const newUseTailwind = !useTailwind;
    setUseTailwind(newUseTailwind);
    configureTheme({ useTailwind: newUseTailwind });
  };

  // User columns configuration
  const userColumns: TableColumn<User>[] = [
    {
      key: 'avatar' as keyof User,
      header: 'Avatar',
      width: 80,
      render: (_, user: User) => (
        <Avatar className='ring-2 ring-blue-200'>
          <AvatarImage
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
          />
          <AvatarFallback className='font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400'>
            {user.name
              .split(' ')
              .map((n: string) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      ),
    },
    {
      key: 'name',
      header: 'Name',
      width: 200,
      render: (_, user: User) => (
        <div className='font-semibold text-gray-900 dark:text-gray-100'>
          {user.name}
        </div>
      ),
    },
    {
      key: 'username',
      header: 'Username',
      width: 150,
      render: (_, user: User) => (
        <div className='font-medium text-blue-600 dark:text-blue-400'>
          @{user.username}
        </div>
      ),
    },
    {
      key: 'email',
      header: 'Email',
      width: 250,
      render: (_, user: User) => (
        <div className='text-purple-600 dark:text-purple-400'>{user.email}</div>
      ),
    },
    {
      key: 'phone',
      header: 'Phone',
      width: 150,
      render: (_, user: User) => (
        <div className='text-green-600 dark:text-green-400'>{user.phone}</div>
      ),
    },
    {
      key: 'website',
      header: 'Website',
      width: 200,
      render: (_, user: User) => (
        <a
          href={`https://${user.website}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'
        >
          {user.website}
        </a>
      ),
    },
    {
      key: 'company',
      header: 'Company',
      width: 250,
      render: (_, user: User) => (
        <div className='space-y-1'>
          <div className='font-medium text-gray-900 dark:text-gray-100'>
            {user.company.name}
          </div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            {user.company.catchPhrase}
          </div>
        </div>
      ),
    },
  ];

  // Post columns configuration
  const postColumns: TableColumn<Post>[] = [
    {
      key: 'id',
      header: 'ID',
      width: 80,
      render: (_, post: Post) => (
        <div className='px-2 py-1 font-mono text-center text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-200'>
          {post.id}
        </div>
      ),
    },
    {
      key: 'userId',
      header: 'User ID',
      width: 100,
      render: (_, post: Post) => (
        <div className='font-medium text-center text-purple-600 dark:text-purple-400'>
          {post.userId}
        </div>
      ),
    },
    {
      key: 'title',
      header: 'Title',
      width: 300,
      render: (_, post: Post) => (
        <div className='font-semibold text-gray-900 dark:text-gray-100 line-clamp-2'>
          {post.title}
        </div>
      ),
    },
    {
      key: 'body',
      header: 'Content',
      width: 400,
      render: (_, post: Post) => (
        <div className='text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
          {post.body}
        </div>
      ),
    },
  ];

  return (
    <div className='min-h-screen p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900'>
      <div className='mx-auto space-y-6 max-w-7xl'>
        <Card className='border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm'>
          <CardHeader className='text-white rounded-t-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500'>
            <CardTitle className='flex items-center justify-between text-2xl font-bold'>
              <span>InfiniteTable Example - Tailwind Enhanced</span>
              <div className='flex gap-2'>
                <Button
                  onClick={toggleTailwind}
                  variant='outline'
                  className='text-white bg-white/20 border-white/30 hover:bg-white/30'
                >
                  {useTailwind ? 'Disable' : 'Enable'} Tailwind
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className='p-6'>
            <div className='flex gap-3 mb-6'>
              <Button
                onClick={() => setCurrentView('users')}
                variant={currentView === 'users' ? 'default' : 'outline'}
                className={
                  currentView === 'users'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    : 'border-blue-300 text-blue-700 hover:bg-blue-50'
                }
              >
                Users Table ({users.length})
              </Button>
              <Button
                onClick={() => setCurrentView('posts')}
                variant={currentView === 'posts' ? 'default' : 'outline'}
                className={
                  currentView === 'posts'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
                    : 'border-purple-300 text-purple-700 hover:bg-purple-50'
                }
              >
                Posts Table ({posts.length})
              </Button>
            </div>

            <div className='overflow-hidden border border-gray-200 rounded-lg shadow-lg dark:border-gray-700'>
              {currentView === 'users' ? (
                <InfiniteTable
                  data={users}
                  columns={userColumns}
                  height={500}
                  loading={loading}
                  className='bg-white dark:bg-gray-800'
                />
              ) : (
                <InfiniteTable
                  data={posts}
                  columns={postColumns}
                  height={500}
                  loading={false}
                  className='bg-white dark:bg-gray-800'
                />
              )}
            </div>

            <div className='grid grid-cols-1 gap-4 mt-6 md:grid-cols-2'>
              <div className='p-4 border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 dark:border-blue-700'>
                <h3 className='mb-2 font-semibold text-blue-800 dark:text-blue-200'>
                  Features Demonstrated
                </h3>
                <ul className='space-y-1 text-sm text-blue-700 dark:text-blue-300'>
                  <li>• Virtual scrolling for performance</li>
                  <li>• Custom column rendering</li>
                  <li>• Responsive design</li>
                  <li>• Dark mode support</li>
                </ul>
              </div>
              <div className='p-4 border border-purple-200 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 dark:border-purple-700'>
                <h3 className='mb-2 font-semibold text-purple-800 dark:text-purple-200'>
                  Data Sources
                </h3>
                <ul className='space-y-1 text-sm text-purple-700 dark:text-purple-300'>
                  <li>• JSONPlaceholder API</li>
                  <li>• Real-time data fetching</li>
                  <li>• Avatar generation</li>
                  <li>• Error handling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
