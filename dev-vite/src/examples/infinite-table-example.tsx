import { Card, CardContent, CardHeader, CardTitle } from '@schilling-widgets';
import {
  InfiniteTable,
  TableColumn,
} from '@schilling-widgets/widgets/InfiniteTable';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

function InfiniteTableExample() {
  const [users] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      company: { name: 'Acme Corp' },
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      company: { name: 'Tech Inc' },
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      company: { name: 'Dev Studio' },
    },
  ]);

  const columns: TableColumn<User>[] = [
    { key: 'id', header: 'ID', width: 80, sortable: true },
    { key: 'name', header: 'Name', width: 200, sortable: true },
    { key: 'email', header: 'Email', width: 250, sortable: true },
    {
      key: 'company',
      header: 'Company',
      width: 200,
      sortable: true,
      render: value => (value as User['company']).name,
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <Card>
        <CardHeader>
          <CardTitle>Infinite Table Example</CardTitle>
        </CardHeader>
        <CardContent>
          <InfiniteTable
            columns={columns}
            data={users}
            height={400}
            itemHeight={60}
            loading={false}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default InfiniteTableExample;
