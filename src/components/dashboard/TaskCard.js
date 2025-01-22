import React from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ task, isAssigned = false }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'TASK',
        item: isAssigned
            ? { id: task.id, currentUser: task.user, currentTime: task.time }
            : { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <Card
            ref={drag}
            sx={{
                backgroundColor: '#f5f5f5',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'grab',
                width: '100%',
                height: '70%',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <CardContent>
                <Typography variant="body1" align="center">
                    {task.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TaskCard;