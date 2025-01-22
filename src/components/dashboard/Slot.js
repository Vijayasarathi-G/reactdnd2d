import React from "react";
import {useDrop} from "react-dnd";
import {TaskCard} from "./TaskCard";

export const Slot = ({user, time, tasks, onDrops}) => {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "TASK",
        drop: item => onDrops(item.id, user, time),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    const task = tasks.find(task => task.user === user && task.time === time);

    return (
        <div
            ref={drop} className={`slot ${isOver ? "hover" : ""}`}
        >
            {task ? <TaskCard task={task}/> : <div>Slot not available</div>}
        </div>
    );
};