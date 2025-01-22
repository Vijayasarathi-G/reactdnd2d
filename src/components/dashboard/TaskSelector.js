import React from 'react';
import {useSelector} from 'react-redux';
import {Stack, Typography, Box} from '@mui/material';
import TaskCard from './TaskCard';

const TaskSelector = () => {
    const tasks = useSelector((state) => state.tasks.assignedTasks);

    return (
        <Box sx={{marginTop: 4}}>
            <Typography variant="h6" fontWeight="bold">
                Assigned Tasks
            </Typography>
            <Stack spacing={2} sx={{marginTop: 2}}>
                {tasks?.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))}
            </Stack>
        </Box>
    );
};

export default TaskSelector;