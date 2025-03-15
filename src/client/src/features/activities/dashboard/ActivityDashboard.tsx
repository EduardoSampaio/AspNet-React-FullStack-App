import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    acitivities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity: Activity | undefined;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
};

export default function ActivityDashboard(props: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={props.acitivities} 
                    selectActivity={props.selectActivity}
                />
            </Grid2>
            <Grid2 size={5}> 
                {props.selectedActivity && <ActivityDetails 
                selectedActivity={props.selectedActivity} 
                cancelSelectActivity={props.cancelSelectActivity}
                openForm={props.openForm}
                />}
                {props.editMode && <ActivityForm  activity={props.selectedActivity}  closeForm={props.closeForm} />}
            </Grid2>
        </Grid2>
    );
}
