import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from "./components/dashboard/Dashboard"

const App = () => {
    return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Toaster />
                <Dashboard></Dashboard>
            </DndProvider>
        </Provider>
    );
};

export default App;