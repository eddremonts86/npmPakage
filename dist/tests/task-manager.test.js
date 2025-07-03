import React from "react";
import { TaskManagerExample } from "../examples/task-manager-example";
import { TaskManager } from "../widgets/TaskManager";
// Mock tasks for testing
const mockTasks = [
    {
        id: "1",
        name: "Test Task",
        status: "In progress",
        reference: "TEST-001",
        phase: "Testing",
        expectedStart: "2024-01-01",
        expectedDue: "2024-01-15",
        assignee: "Test User",
        progress: 50,
        priority: "medium",
        description: "A test task",
    },
];
// Simple integration test - ensures components can be imported and created
function testTaskManagerIntegration() {
    try {
        // Test TaskManager component creation
        const taskManagerComponent = React.createElement(TaskManager, {
            tasks: mockTasks,
            height: 400,
            onTaskUpdate: (id, updates) => {
                console.log("Task update:", id, updates);
            },
        });
        // Test TaskManagerExample component creation
        const exampleComponent = React.createElement(TaskManagerExample);
        // Test TypeScript types
        const task = {
            id: "type-test",
            name: "Type Test Task",
            status: "Not started",
            reference: "TYPE-001",
            phase: "Testing",
            expectedStart: "2024-01-01",
            expectedDue: "2024-01-15",
            assignee: "Type Tester",
        };
        // Return true if all tests pass
        return (taskManagerComponent !== null &&
            exampleComponent !== null &&
            task.id === "type-test" &&
            task.status === "Not started");
    }
    catch (error) {
        console.error("TaskManager integration test failed:", error);
        return false;
    }
}
// Export for use in other tests
export { mockTasks, testTaskManagerIntegration };
