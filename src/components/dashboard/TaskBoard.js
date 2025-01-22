import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper, Typography, Card, CardContent, Stack } from '@mui/material';
import DropZone from './DropZone';
import TaskSelector from './TaskSelector';
import  UserCard from './UserCard';

const timeSlots = ['9AM-11AM', '11AM-1PM', '1PM-3PM', '3PM-5PM', '5PM-7PM'];

const TaskBoard = () => {
    const users = useSelector((state) => state.users.users);
    const tasks = useSelector((state) => state.tasks.assignedTasks);

    return (
        <Paper sx={{ height: '100%', overflow: 'auto', padding: 2 }}>
            <Grid container spacing={2}>
                <Grid container item xs={12} alignItems="center">
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Users
                        </Typography>
                    </Grid>
                    {timeSlots.map((slot) => (
                        <Grid item xs={2} key={slot}>
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                align="center"
                                sx={{ borderBottom: '2px solid #ccc' }}
                            >
                                {slot}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {users.map((user) => (
                    <Grid container item xs={12} key={user.name} alignItems="center">
                        <Grid
                            item
                            xs={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRight: '1px solid #ccc',
                                minWidth: '150px',
                            }}
                        >
                           <UserCard user={user}></UserCard>
                        </Grid>
                        {timeSlots.map((slot) => (
                            <Grid
                                item
                                xs={2}
                                key={slot}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 1,
                                }}
                            >
                                <DropZone user={user} time={slot} />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
            {/*<TaskSelector tasks={tasks} />*/}
        </Paper>
    );
};

export default TaskBoard;