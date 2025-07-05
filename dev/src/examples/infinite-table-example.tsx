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
} from '../../../src';
import { InfiniteTable, TableColumn } from '../../../src/widgets/InfiniteTable';

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
          <span className='font-medium'>{String(value)}</span>
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
      render: value => (value as User['company']).name,
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
          href={`https://${String(value)}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:underline'
        >
          {String(value)}
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
        <div className='font-medium truncate' title={String(value)}>
          {String(value)}
        </div>
      ),
    },
    {
      key: 'body',
      header: 'Content',
      width: 400,
      render: value => (
        <div
          className='text-sm text-muted-foreground truncate'
          title={String(value)}
        >
          {String(value)}
        </div>
      ),
    },
  ];

  return (
    <div className='container mx-auto p-4 space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>InfiniteTable Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex gap-2'>
              <Button
                onClick={() => setCurrentView('users')}
                variant={currentView === 'users' ? 'default' : 'outline'}
              >
                Users Table
              </Button>
              <Button
                onClick={handlePostsView}
                variant={currentView === 'posts' ? 'default' : 'outline'}
              >
                Posts Table
              </Button>
            </div>

            {currentView === 'users' && (
              <div>
                <h3 className='text-lg font-semibold mb-4'>Users Data</h3>
                <InfiniteTable
                  columns={userColumns}
                  data={users}
                  height={500}
                  itemHeight={60}
                  loading={loading}
                />
              </div>
            )}

            {currentView === 'posts' && (
              <div>
                <h3 className='text-lg font-semibold mb-4'>Posts Data</h3>
                <InfiniteTable
                  columns={postColumns}
                  data={posts}
                  height={500}
                  itemHeight={80}
                  loading={loading}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfiniteTableExample;
