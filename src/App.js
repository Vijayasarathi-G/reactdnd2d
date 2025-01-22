import React from 'react';
import { Grid } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import UsersList from './components/dashboard/UsersList';
import TaskBoard from './components/dashboard/TaskBoard';
import UnassignedTasks from './components/dashboard/UnassignedTasks';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Toaster />
                <Grid container spacing={2} sx={{ height: '100vh', padding: 2 }}>
                   {/* <Grid item xs={12} sm={2}>
                        <UsersList />
                    </Grid>*/}
                    <Grid item xs={12} sm={10}>
                        <TaskBoard />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <UnassignedTasks />
                    </Grid>
                </Grid>
            </DndProvider>
        </Provider>
    );
};

export default App;