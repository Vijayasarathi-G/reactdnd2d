import React from 'react';
import {useDrag} from 'react-dnd';
import {Card, CardContent, Typography} from '@mui/material';
import "../../css/TaskCard.css";
import "../../css/StatusStyles.css"; // Shared styles for statuses
import {getStatusClass} from "../../utils/utils";

const TaskCard = ({task, isAssigned = false}) => {
    const {jobId, jobStatus, orderType, timeSlot, address} = task;
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'TASK',
        item: isAssigned
            ? {id: jobId, currentUser: task.user, currentTime: task.time}
            : {id: jobId},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag}
             className={`task-card card ${isDragging ? "dragging" : ""}`}
             style={{
                 border: "1px solid #ddd",
                 borderRadius: "8px",
                 padding: "10px",
                 marginBottom: "10px",
                 backgroundColor: "#fff",
                 opacity: isDragging ? 0.5 : 1,
                 cursor: "grab",
             }}
        >
            <p>
                <strong>{jobId}</strong>
            </p>
            <div className={`job-status`}>
                <span className={`chip ${getStatusClass(jobStatus)}`}>
                    <span className="chip-content"><strong>{jobStatus}</strong></span>
                </span>
            </div>
            <p>
                <strong>{address.city}</strong>, <strong>{address.state}</strong>
            </p>

        </div>
    );
};

export default TaskCard;