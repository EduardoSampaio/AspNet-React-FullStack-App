import { Box, Button, Paper, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect } from "react";
import { activitySchema, ActivitySchema } from "../../../lib/schemas/activitySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../../app/shared/components/TextInput";
import SelectInput from "../../../app/shared/components/SelectInput";
import { categoryOptions } from "./categoryOptions";
import DateTimeInput from "../../../app/shared/components/DateTimeInput";
import LocationInput from "../../../app/shared/components/LocationInput";

export default function ActivityForm() {
    const { handleSubmit, reset, control } = useForm<ActivitySchema>({
        mode: 'onTouched',
        resolver: zodResolver(activitySchema)
    })
    const { id } = useParams();
    const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);
    const navigate = useNavigate();

    useEffect(() => {
        if (activity) {
            reset({
               ...activity,
               location: {
                   city: activity.city,
                   venue: activity.venue,
                   latitude: activity.latitude,
                   longitude: activity.longitude
               }
            });
        }

    }, [activity, reset])

    const onSubmit = async (data: FieldValues) => {
        console.log(data);
        const { location, ...rest } = data;
        const flattenedData = { ...rest, ...location };
        try {
            if (activity) {
                updateActivity.mutate({...activity, ...flattenedData}, {
                    onSuccess: () => navigate(`/activities/${activity.id}`)
                })
            } else {
                createActivity.mutate(flattenedData, {
                    onSuccess: (id) => navigate(`/activities/${id}`)
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    
    if (isLoadingActivity) return <Typography>...Loading</Typography>;

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant='h5' gutterBottom>Create activity</Typography>
            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 3 }} onSubmit={handleSubmit(onSubmit)}>
                <TextInput label='Title' name="title" control={control}></TextInput>
                <TextInput label='description' name="description" control={control}></TextInput>
                <Box display={'flex'} gap={3}>
                    <DateTimeInput label='date' name="date" control={control}></DateTimeInput>
                    <SelectInput items={categoryOptions} label='category' name="category" control={control}></SelectInput>
                </Box>
                <LocationInput control={control} label="Enter the localtion" name="location"></LocationInput>
                <Box>
                    <Button color="inherit" onClick={() => navigate('/activities')}>Cancel</Button>
                    <Button color='success' variant='contained' type="submit"
                        disabled={updateActivity.isPending || createActivity.isPending}>Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}
