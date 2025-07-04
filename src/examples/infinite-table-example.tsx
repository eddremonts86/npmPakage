import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/Avatar';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { configureTheme } from '../components/ThemeProvider';
import { InfiniteTable, TableColumn } from '../widgets/InfiniteTable';

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
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Switch to posts view and fetch posts
  const handlePostsView = () => {
    setCurrentView('posts');
    if (posts.length === 0) {
      fetchPosts();
    }
  };

  // Toggle between Tailwind and CSS-only mode
  const toggleStylingMode = () => {
    const newUseTailwind = !useTailwind;
    setUseTailwind(newUseTailwind);
    configureTheme({ useTailwind: newUseTailwind });
  };

  const userColumns: TableColumn<User>[] = [
    {
      key: 'id',
      header: 'ID',
      width: 80,
      sortable: true,
    },
    {
      key: 'name',
      header: 'Name',
      width: 200,
      sortable: true,
      render: (value, row) => (
        <div className='flex items-center gap-2'>
          <Avatar className='h-8 w-8'>
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.username}`}
            />
            <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className='font-medium'>{value}</span>
        </div>
      ),
    },
    {
      key: 'email',
      header: 'Email',
      width: 250,
      sortable: true,
    },
    {
      key: 'company',
      header: 'Company',
      width: 200,
      sortable: true,
      render: value => value.name,
    },
    {
      key: 'phone',
      header: 'Phone',
      width: 150,
    },
    {
      key: 'website',
      header: 'Website',
      width: 150,
      render: value => (
        <a
          href={`https://${value}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:underline'
        >
          {value}
        </a>
      ),
    },
  ];

  const postColumns: TableColumn<Post>[] = [
    {
      key: 'id',
      header: 'ID',
      width: 80,
      sortable: true,
    },
    {
      key: 'userId',
      header: 'User ID',
      width: 100,
      sortable: true,
    },
    {
      key: 'title',
      header: 'Title',
      width: 300,
      sortable: true,
      render: value => (
        <div className='font-medium line-clamp-2' title={value}>
          {value}
        </div>
      ),
    },
    {
      key: 'body',
      header: 'Body',
      width: 400,
      render: value => (
        <div
          className='text-sm text-muted-foreground line-clamp-3'
          title={value}
        >
          {value}
        </div>
      ),
    },
  ];

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Infinite Table Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex gap-2 mb-4'>
            <Button
              variant={currentView === 'users' ? 'default' : 'outline'}
              onClick={() => setCurrentView('users')}
            >
              Users ({users.length})
            </Button>
            <Button
              variant={currentView === 'posts' ? 'default' : 'outline'}
              onClick={handlePostsView}
            >
              Posts ({posts.length})
            </Button>
            <Button
              variant='outline'
              onClick={toggleStylingMode}
              className='ml-auto'
            >
              {useTailwind ? 'Switch to CSS-only' : 'Switch to Tailwind'}
            </Button>
          </div>

          {currentView === 'users' && (
            <InfiniteTable
              columns={userColumns}
              data={users}
              loading={loading}
              height={500}
              itemHeight={60}
              className='border-2'
            />
          )}

          {currentView === 'posts' && (
            <InfiniteTable
              columns={postColumns}
              data={posts}
              loading={loading}
              height={500}
              itemHeight={80}
              className='border-2'
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2 text-sm'>
            <li>
              • <strong>Virtualized scrolling</strong> - Handles large datasets
              efficiently
            </li>
            <li>
              • <strong>Sortable columns</strong> - Click column headers to sort
            </li>
            <li>
              • <strong>Custom rendering</strong> - Render custom components in
              cells
            </li>
            <li>
              • <strong>Flexible styling</strong> - Works with or without
              Tailwind CSS
            </li>
            <li>
              • <strong>Responsive design</strong> - Adapts to different screen
              sizes
            </li>
            <li>
              • <strong>Public API integration</strong> - Fetches data from
              JSONPlaceholder
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfiniteTableExample;
