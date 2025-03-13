import { useEffect, useState } from "react";
import "./styles.css";
import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
    const [acitivities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity |  undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios
            .get<Activity[]>("https://localhost:5001/api/activities")
            .then((response) => setActivities(response.data));

        return () => {};
    }, []);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(acitivities.find(x => x.id === id));
    }

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleOpenForm = (id?: string) => {
        if(id) setSelectedActivity(acitivities.find(x => x.id === id));
        else handleCancelSelectActivity();
        setEditMode(true);
    }

    const handleCloseForm = () => {
        setEditMode(false);
    }

    return (
        <Box sx={{bgcolor: '#eeeeee'}}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm}></NavBar>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <ActivityDashboard
                    acitivities={acitivities}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    selectedActivity={selectedActivity}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleCloseForm}
                />
            </Container>
        </Box>
    );
}

export default App;
