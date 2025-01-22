import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    assignedTasks: [],
    unassignedTasks: [
        { id: 'task1', name: 'Task 1' },
        { id: 'task2', name: 'Task 2' },
        { id: 'task3', name: 'Task 3' },
    ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        assignTask: (state, action) => {
            const { id, user, time } = action.payload;

            const isSlotOccupied = state.assignedTasks.some((task) => task.user === user && task.time === time);
            if (isSlotOccupied) {
                alert(`Slot ${time} for ${user} is already occupied.`);
                return;
            }
            const taskIndex = state.unassignedTasks.findIndex((task) => task.id === id);
            if (taskIndex !== -1 && !isSlotOccupied) {
                const [task] = state.unassignedTasks.splice(taskIndex, 1);
                state.assignedTasks.push({ ...task, user, time });
            }
        },
        unassignTask: (state, action) => {
            const { id } = action.payload;

            const taskIndex = state.assignedTasks.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                const [task] = state.assignedTasks.splice(taskIndex, 1);
                delete task.user;
                delete task.time;
                state.unassignedTasks.push(task);
            }
        },
    },
});

export const { assignTask, unassignTask } = taskSlice.actions;
export default taskSlice.reducer;