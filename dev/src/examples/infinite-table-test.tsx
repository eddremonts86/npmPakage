import { InfiniteTable, TableColumn } from '../../../src/widgets/InfiniteTable';

interface TestData {
  id: number;
  name: string;
  value: string;
}

const testData: TestData[] = [
  { id: 1, name: 'Test 1', value: 'Value 1' },
  { id: 2, name: 'Test 2', value: 'Value 2' },
  { id: 3, name: 'Test 3', value: 'Value 3' },
  { id: 4, name: 'Test 4', value: 'Value 4' },
  { id: 5, name: 'Test 5', value: 'Value 5' },
];

const columns: TableColumn<TestData>[] = [
  { key: 'id', header: 'ID', width: 80, sortable: true },
  { key: 'name', header: 'Name', width: 200, sortable: true },
  { key: 'value', header: 'Value', width: 200 },
];

export function InfiniteTableTest() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>InfiniteTable Basic Test</h1>
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
