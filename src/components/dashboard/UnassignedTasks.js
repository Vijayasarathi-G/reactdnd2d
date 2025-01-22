import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Typography, Box } from '@mui/material';
import TaskCard from './TaskCard';

const UnassignedTasks = () => {
    const unassignedTasks = useSelector((state) => state.tasks.unassignedTasks);

    return (
        <Box
            sx={{
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                height: '100%',
                overflowY: 'auto',
            }}
        >
            <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ marginBottom: 2 }}
            >
                Unassigned Tasks
            </Typography>
            <Stack spacing={2}>
                {unassignedTasks.length > 0 ? (
                    unassignedTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <Typography variant="body2" align="center" color="textSecondary">
                        No Unassigned Tasks
                    </Typography>
                )}
            </Stack>
        </Box>
    );
};

export default UnassignedTasks;