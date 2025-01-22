import React from 'react';
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {Box} from '@mui/material';
import TaskCard from './TaskCard';
import {assignTask, unassignTask} from '../../redux/tasksSlice';

const DropZone = ({user, time, isUnassigned = false}) => {
    const dispatch = useDispatch();
    const assignedTasks = useSelector((state) => state.tasks.assignedTasks, shallowEqual);
    const users = useSelector((state) => state.users.users);

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: (item) => {
            const {id, currentUser, currentTime} = item;

            const isUserNotAvailable = users.some((user1) => user1.name === user.name && user1.status === 'Not Available');
            if (isUserNotAvailable) {
                alert(`${user.name} is not available.`);
                return;
            }

            if (isUnassigned) {
                // Unassign task when dropped in the unassigned area
                if (currentUser && currentTime) {
                    dispatch(unassignTask({id}));
                }
                return;
            }

            // Prevent assigning a task to an occupied slot
            if (currentUser && currentTime) {
                // Reassigning from one user/timeslot to another
                dispatch(unassignTask({id}));
            }

            // Assign task to the new user and time
            dispatch(assignTask({id, user: user.name, time}));
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    // Find the task in the current slot (if any)
    const taskInSlot = assignedTasks.find(
        (task) => task.user === user.name && task.time === time
    );

    return (
        <Box
            ref={drop}
            sx={{
                height: '80px',
                width: '100%',
                backgroundColor: isOver ? 'lightblue' : 'white',
                border: isOver ? '2px dashed blue' : '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s, border 0.3s',
                borderRadius: '8px',
            }}
        >
            {user.status === 'Not Available' ? (
                <Box sx={{color: 'red'}}>User Not Available</Box>
            ) : isUnassigned ? (
                <Box sx={{color: '#aaa'}}>Drop here to unassign</Box>
            ) : taskInSlot ? (
                <TaskCard task={taskInSlot} isAssigned/>
            ) : (
                <Box sx={{color: '#aaa'}}>Slot Available</Box>
            )}
        </Box>
    );
};

export default DropZone;