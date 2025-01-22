import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Stack } from '@mui/material';

const UsersList = () => {
    const users = useSelector((state) => state.users.users);

    return (
        <Stack spacing={2}>
            {users.map((user) => (
                <Card
                    key={user.name}
                    sx={{
                        borderLeft: `5px solid ${user.status === 'Available' ? 'green' : 'red'}`,
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <CardContent>
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography
                            variant="body2"
                            color={user.status === 'Available' ? 'green' : 'red'}
                            fontWeight="bold"
                        >
                            {user.status}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    );
};

export default UsersList;