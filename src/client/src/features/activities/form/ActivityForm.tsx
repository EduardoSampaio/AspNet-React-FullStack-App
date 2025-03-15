import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity?: Activity
    closeForm: () => void
}

export default function ActivityForm({closeForm, activity}: Props) {
  const {updateActivity, createActivity} = useActivities();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data:{[key: string]: FormDataEntryValue} ={};
    
    formData.forEach((value, key) => data[key] = value);
    if(activity) { 
        data["id"] = activity.id.toString();
        await updateActivity.mutateAsync(data as unknown as Activity);
        closeForm();
    }else{
        await createActivity.mutateAsync(data as unknown as Activity);
        closeForm();
    }

  }

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
        <Typography variant='h5' gutterBottom>Create activity</Typography>
        <Box  component='form' sx={{display: 'flex', flexDirection: 'column', gap: 3}} onSubmit={handleSubmit}>
            <TextField name="title" label='Title' defaultValue={activity?.title}></TextField>
            <TextField name="description" label='Description' multiline rows={3} defaultValue={activity?.description}></TextField>
            <TextField name="category" label='Category' defaultValue={activity?.category}></TextField>
            <TextField name="date" label='Date' type="date" defaultValue={activity?.date ? 
                new Date(activity.date).toISOString().split('T')[0] : 
                new Date().toISOString().split('T')[0]}></TextField>
            <TextField name="city" label='City' defaultValue={activity?.city}></TextField>
            <TextField name="venue" label='Venue' defaultValue={activity?.venue}></TextField>
            <Box>
                <Button color="inherit" onClick={closeForm}>Cancel</Button>
                <Button color='success' variant='contained' type="submit"
                 disabled={updateActivity.isPending || createActivity.isPending}>Submit</Button>
            </Box> 
        </Box>
    </Paper>
  )
}
