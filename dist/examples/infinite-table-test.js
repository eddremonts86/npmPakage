import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InfiniteTable } from "../widgets/InfiniteTable";
const testData = [
    { id: 1, name: "Test 1", value: "Value 1" },
    { id: 2, name: "Test 2", value: "Value 2" },
    { id: 3, name: "Test 3", value: "Value 3" },
];
const columns = [
    { key: "id", header: "ID", width: 80, sortable: true },
    { key: "name", header: "Name", width: 200, sortable: true },
    { key: "value", header: "Value", width: 200 },
];
export function InfiniteTableTest() {
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { children: "InfiniteTable Test" }), _jsx(InfiniteTable, { columns: columns, data: testData, height: 300, itemHeight: 40, loading: false })] }));
}
export default InfiniteTableTest;
