import React, {useState} from "react";
import UsersList from "./UsersList";
import TaskBoard from './TaskBoard';
import UnassignedTasks from './UnassignedTasks';
import TaskBoardFilters from './TaskBoardFilters';
import { Grid } from '@mui/material';

const Dashboard = () => {
    
    return (
        <Grid container spacing={2} sx={{ height: '100vh', padding: 2 }}>
            <Grid item xs={12} sm={10}>
                <TaskBoardFilters />
                <TaskBoard />
            </Grid>
            <Grid item xs={12} sm={2}>
                <UnassignedTasks />
            </Grid>
        </Grid>
    )
}

export default Dashboard;