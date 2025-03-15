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

    const hadleSubmit = (activity: Activity) => {
        if(activity.id) {
            setActivities(acitivities.map(x => x.id === activity.id ? activity : x));
            //axios.put(`https://localhost:5001/api/activities/${activity.id}`, activity);
        } else {
            //axios.post("https://localhost:5001/api/activities", activity);
            const newActivity = {...activity, id: acitivities.length.toString()}
            setSelectedActivity(newActivity);
            setActivities([...acitivities, newActivity]);
        }
        setEditMode(false);
    }

    const handleDelete = (id: string) => {
        setActivities(acitivities.filter(x => x.id !== id));
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
                    submitForm={hadleSubmit}
                    deleteActivity={handleDelete}
                />
            </Container>
        </Box>
    );
}

export default App;
