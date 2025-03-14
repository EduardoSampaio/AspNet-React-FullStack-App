import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

import "./styles.css";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    const { activities, isPending } = useActivities();

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities!.find(x => x.id === id));
    }

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleOpenForm = (id?: string) => {
        setEditMode(true);
        if (id){
            setSelectedActivity(activities!.find(x => x.id === id));
        }
        else{
            handleCancelSelectActivity();
        }
        
    }

    const handleCloseForm = () => {
        setEditMode(false);
    }

    return (
        <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm}></NavBar>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                {!activities || isPending ? (
                    <Typography variant="h1">Loading...</Typography>
                ) : (
                    <ActivityDashboard
                        acitivities={activities}
                        selectActivity={handleSelectActivity}
                        cancelSelectActivity={handleCancelSelectActivity}
                        selectedActivity={selectedActivity}
                        editMode={editMode}
                        openForm={handleOpenForm}
                        closeForm={handleCloseForm}
                    />
                )}
            </Container>
        </Box>
    );
}

export default App;
