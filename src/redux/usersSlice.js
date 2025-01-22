// File: usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { name: "Alice", status: "Available" },
        { name: "Bob", status: "Not Available" },
        { name: "Charlie", status: "Available" },
    ],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeUserStatus: (state, action) => {
            const { userName, status } = action.payload;

            const userIndex = state.users.findIndex((user) => user.name === userName);
            if (userIndex !== -1) {
                state.users[userIndex].status = status;
            }
        },
    },
});

export const { changeUserStatus } = usersSlice.actions;
export default usersSlice.reducer;
