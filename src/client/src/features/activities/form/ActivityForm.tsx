import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
    activity?: Activity
    closeForm: () => void
}

export default function ActivityForm({closeForm, activity}: Props) {
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
        <Typography variant='h5' gutterBottom>Create activity</Typography>
        <Box  component='form' sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <TextField label='Title' value={activity?.title}></TextField>
            <TextField label='Description' multiline rows={3} value={activity?.description}></TextField>
            <TextField label='Category' value={activity?.category}></TextField>
            <TextField label='Date' type="date" value={activity?.date}></TextField>
            <TextField label='City' value={activity?.city}></TextField>
            <TextField label='Venue' value={activity?.venue}></TextField>
            <Box>
                <Button color="inherit" onClick={closeForm}>Cancel</Button>
                <Button color='success' variant='contained'>Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}
