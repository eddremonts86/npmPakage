import { Card, CardContent, CardHeader, CardTitle } from '@schilling-widgets';
import {
  InfiniteTable,
  TableColumn,
} from '@schilling-widgets/widgets/InfiniteTable';

interface TestData {
  id: number;
  name: string;
  value: string;
}

const testData: TestData[] = [
  { id: 1, name: 'Test 1', value: 'Value 1' },
  { id: 2, name: 'Test 2', value: 'Value 2' },
  { id: 3, name: 'Test 3', value: 'Value 3' },
];

const columns: TableColumn<TestData>[] = [
  { key: 'id', header: 'ID', width: 80, sortable: true },
  { key: 'name', header: 'Name', width: 200, sortable: true },
  { key: 'value', header: 'Value', width: 200 },
];

function InfiniteTableTest() {
  return (
    <div style={{ padding: '2rem' }}>
      <Card>
        <CardHeader>
          <CardTitle>Table Test</CardTitle>
        </CardHeader>
        <CardContent>
          <InfiniteTable
            columns={columns}
            data={testData}
            height={300}
            itemHeight={40}
            loading={false}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default InfiniteTableTest;
