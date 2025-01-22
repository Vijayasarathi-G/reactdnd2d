import React, {useState} from "react";
import {Slot} from "./Slot";
import {UsersList} from "./UsersList";
import {UnassignedTasks} from "./UnassignedTasks";

const users = [{name: 'User 1', status: "Available"},
    {name: 'User 2', status: "Not Available"},
    {name: 'User 3', status: "Available"}
    ];
const timeSlots = ['9-11 AM', '11-1 PM', '1-3 PM', '3-5 PM', '5-7 PM',]

export const Dashboard = () => {

    const [tasks, setTasks] = useState([
        {id: 1, name: "Task A", user: "User 1", time: ["9-11 AM"]},
        {id: 2, name: "Task B", user: "User 2", time: ["1-3 PM", "3-5 PM"]},
        {id: 3, name: "Task C", user: null, time: null},
    ]);

    const handleDrop = (taskId, newUser, newTime) => {
        const targetUser = users.find(user => user.name === newUser);

        if(targetUser.status === "Not Available") {
            alert(`${newUser} is not available at ${newTime}`);
            return;
        }

        const userTasks =  tasks.filter(task => task.user === newUser);
        const isTimeConflict = userTasks.some(task => task.time.some(t => newTime.includes(t)));

        if(isTimeConflict) {
            alert(`${newUser} already has a task at this time: ${newTime}`);
            return;
        }
        setTasks(prevTasks =>
            prevTasks.map((task) =>
                task.id === taskId ? {
                    ...task, user: newUser, time: newTime
                } : task)
        )
    }

    return (
        <div className="taskboard-layout">
            <div className="dashboard">
                <div className="header">
                    {timeSlots?.map(slot => (<div key={slot}>{slot}</div>))}
                </div>

            {users?.map((user) => (
                <div key={user} className="row">
                    {/*<div className="user">{user}</div>*/}
                    {timeSlots?.map(time => (
                        <Slot
                            key={time}
                            user={user}
                            time={time}
                            tasks={tasks}
                            onDrops={handleDrop}
                        />
                    ))}
                </div>
            ))}
        </div>

            <UnassignedTasks tasks={tasks} />
        </div>
    )
}
