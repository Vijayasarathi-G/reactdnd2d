import React, { useState } from "react";
import {
    Grid,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
} from "@mui/material";

const TaskBoardFilters = ({ onFiltersChange, onAddMember }) => {
    const [vendor, setVendor] = useState("");
    const [market, setMarket] = useState("");
    const [manager, setManager] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilterChange = () => {
        onFiltersChange({ vendor, market, manager, appointmentDate, searchTerm });
    };

    return (
        <div style={{ marginBottom: "2rem" }}>
            <Typography variant="h6" gutterBottom>
                Filters and Search
            </Typography>

            {/* Filters Section */}
            <Grid container spacing={3} alignItems="center" marginBottom={2} style={{display: "flex", justifyContent: "space-between"}}>
                <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="vendor-select-label">Vendor</InputLabel>
                        <Select
                            labelId="vendor-select-label"
                            value={vendor}
                            onChange={(e) => {
                                setVendor(e.target.value);
                                handleFilterChange();
                            }}
                        >
                            <MenuItem value="">Select Vendor</MenuItem>
                            <MenuItem value="Vendor 1">Vendor 1</MenuItem>
                            <MenuItem value="Vendor 2">Vendor 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="market-select-label">Market</InputLabel>
                        <Select
                            labelId="market-select-label"
                            value={market}
                            onChange={(e) => {
                                setMarket(e.target.value);
                                handleFilterChange();
                            }}
                        >
                            <MenuItem value="">Select Market</MenuItem>
                            <MenuItem value="Market 1">Market 1</MenuItem>
                            <MenuItem value="Market 2">Market 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="manager-select-label">Manager</InputLabel>
                        <Select
                            labelId="manager-select-label"
                            value={manager}
                            onChange={(e) => {
                                setManager(e.target.value);
                                handleFilterChange();
                            }}
                        >
                            <MenuItem value="">Select Manager</MenuItem>
                            <MenuItem value="Manager 1">Manager 1</MenuItem>
                            <MenuItem value="Manager 2">Manager 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Appointment Date"
                        InputLabelProps={{ shrink: true }}
                        value={appointmentDate}
                        onChange={(e) => {
                            setAppointmentDate(e.target.value);
                            handleFilterChange();
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onAddMember}
                    >
                        Add Member
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default TaskBoardFilters;
