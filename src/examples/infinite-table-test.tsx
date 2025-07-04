import { InfiniteTable, TableColumn } from '../widgets/InfiniteTable';

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

export function InfiniteTableTest() {
  return (
    <div className='p-4'>
      <h1>InfiniteTable Test</h1>
      <InfiniteTable
        columns={columns}
        data={testData}
        height={300}
        itemHeight={40}
        loading={false}
      />
    </div>
  );
}

export default InfiniteTableTest;
