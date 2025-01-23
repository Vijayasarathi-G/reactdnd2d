import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    assignedTasks: [],
    unassignedTasks: [
            {
                jobId: "IFL142035690026301",
                jobStatus: "CAP",
                orderType: "Install",
                timeSlot: "9AM-11AM",
                address: { street: "4102 West Arch St", city: "Tampa", state: "Florida" },
            },
            {
                jobId: "IFL142035690026302",
                jobStatus: "OPN",
                orderType: "Install",
                timeSlot: "11AM-1PM",
                address: { street: "4102 West Arch St", city: "Tampa", state: "Florida" },
            },
            {
                jobId: "IFL142035690026303",
                jobStatus: "CMP",
                orderType: "Install",
                timeSlot: "1PM-3PM",
                address: { street: "1234 East Main St", city: "Orlando", state: "Florida" },
            },
            {
                jobId: "IFL142035690026304",
                jobStatus: "ONS",
                orderType: "Repair",
                timeSlot: "3PM-5PM",
                address: { street: "5678 North Pine St", city: "Miami", state: "Florida" },
            },
            {
                jobId: "IFL142035690026305",
                jobStatus: "HLD",
                orderType: "Maintenance",
                timeSlot: "5PM-7PM",
                address: { street: "9101 South Palm Dr", city: "Tampa", state: "Florida" },
            },
            {
                jobId: "IFL142035690026306",
                jobStatus: "Slot Available",
                orderType: "Install",
                timeSlot: "9AM-11AM",
                address: { street: "1111 West Oak St", city: "Tampa", state: "Florida" },
            },
            {
                jobId: "IFL142035690026307",
                jobStatus: "CAN",
                orderType: "Repair",
                timeSlot: "11AM-1PM",
                address: { street: "2222 East Pine Ave", city: "Orlando", state: "Florida" },
            },
            {
                jobId: "IFL142035690026308",
                jobStatus: "REJ",
                orderType: "Maintenance",
                timeSlot: "1PM-3PM",
                address: { street: "3333 North Maple Ln", city: "Miami", state: "Florida" },
            },
            {
                jobId: "IFL142035690026309",
                jobStatus: "ASG",
                orderType: "Install",
                timeSlot: "3PM-5PM",
                address: { street: "4444 South Elm St", city: "Orlando", state: "Florida" },
            },
            {
                jobId: "IFL142035690026310",
                jobStatus: "INR",
                orderType: "Install",
                timeSlot: "5PM-7PM",
                address: { street: "5555 East Cedar Ave", city: "Miami", state: "Florida" },
            },
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
            const taskIndex = state.unassignedTasks.findIndex((task) => task.jobId === id);
            if (taskIndex !== -1 && !isSlotOccupied) {
                const [task] = state.unassignedTasks.splice(taskIndex, 1);
                state.assignedTasks.push({ ...task, user, time });
            }
        },
        unassignTask: (state, action) => {
            const { id } = action.payload;

            const taskIndex = state.assignedTasks.findIndex((task) => task.jobId === id);
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