import React from "react";
import "../../css/UnAssignedTask.css";
import "../../css/StatusStyles.css"; // Shared styles for statuses
import { getStatusClass } from "../../utils/utils"; // Optimized status class helper
import { useDrag } from 'react-dnd';

const UnAssignedTask = ({ task, isAssigned = false }) => {
    const { jobId, jobStatus, orderType, timeSlot, address } = task;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'TASK',
        item: isAssigned
            ? { id: task.jobId, currentUser: task.user, currentTime: task.time }
            : { id: task.jobId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    
    return (
        <div ref={drag}
             className={`unassigned-task-card card ${isDragging ? "dragging" : ""}`}
             style={{
                 border: "1px solid #ddd",
                 borderRadius: "8px",
                 padding: "10px",
                 marginBottom: "10px",
                 backgroundColor: "#fff",
                 opacity: isDragging ? 0.5 : 1,
                 cursor: "grab",
             }}>
            <p>Job ID: <strong>{jobId}</strong></p>
            <p className={`job-status`}>
                Job Status:
                <span className={`chip ${getStatusClass(jobStatus)}`}>
                    <span className="chip-content"><strong>{jobStatus}</strong></span>
                </span>
            </p>
            <p>Order Type: <strong>{orderType}</strong></p>
            <p>Access Window: <strong>{timeSlot}</strong></p>
            <p>Address: <strong>{address.street}</strong>, <strong>{address.city}</strong>, <strong>{address.state}</strong></p>
        </div>
    );
};

export default UnAssignedTask;
