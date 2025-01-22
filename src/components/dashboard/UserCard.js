import React from "react"
import { Grid, Paper, Typography, Card, CardContent, Stack } from '@mui/material';

const UserCard = ({user}) => {
    return (
        <Card
            key={user.name}
            style={{minWidth: 'inherit'}}
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
    )
}

export default UserCard;