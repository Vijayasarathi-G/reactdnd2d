import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Stack, Typography, Box } from '@mui/material';
import UnAssignedTask from './UnAssignedTask';

const UnassignedTasks = () => {
    const unassignedTasks = useSelector((state) => state.tasks.unassignedTasks);
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        setTasks(unassignedTasks);
    }, [unassignedTasks]);
    
    const filterTasks = searchText => {
        setSearchTerm(searchText);
        // Filter tasks based on the search term
        const filteredTasks = unassignedTasks.filter((task) =>
            task.jobId.toLowerCase().includes(searchText.toLowerCase())
        );
        setTasks(filteredTasks);
    }
    
    return (
        <Box
            sx={{
                padding: 0,
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
                <input
                    type="text"
                    placeholder="Search by Job ID"
                    value={searchTerm}
                    onChange={(e) => filterTasks(e.target.value)}
                    style={{
                        marginBottom: "10px",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        width: "80%",
                        marginLeft: "5%"
                    }}
                />
                <div style={{maxHeight: '500px'}}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <UnAssignedTask key={task.jobId} task={task} />
                    ))
                ) : (
                    <Typography variant="body2" align="center" color="textSecondary">
                        No Unassigned Tasks
                    </Typography>
                )}
                </div>
            </Stack>
        </Box>
    );
};

export default UnassignedTasks;