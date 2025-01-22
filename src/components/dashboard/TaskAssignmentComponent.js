// File: TaskAssignmentComponent.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignTask } from "./tasksSlice";

const TaskAssignmentComponent = ({ task, user, timeSlot }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    const handleAssignTask = () => {
        const userStatus = users.find((u) => u.name === user)?.status;

        // Prevent assignment if user is "Not Available"
        if (userStatus === "Not Available") {
            alert(`${user} is not available for task assignment.`);
            return;
        }

        dispatch(assignTask({ taskId: task.id, user, timeSlot, userStatus }));
    };

    return (
        <button onClick={handleAssignTask}>
            Assign Task to {user} ({timeSlot})
        </button>
    );
};

export default TaskAssignmentComponent;
