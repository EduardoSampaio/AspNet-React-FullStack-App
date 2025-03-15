import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectedActivity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void
}

export default function ActivityDetails({selectedActivity, cancelSelectActivity, openForm}: Props) {
  const {activities} = useActivities();
  const activity = activities?.find(a => a.id === selectedActivity.id);

  if(!activity) return <Typography>...Loading</Typography>;

  return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia component='img' src={`/images/categoryImages/${activity?.category}.jpg`}></CardMedia>
        <CardContent>
            <Typography variant='h5'>{activity?.title}</Typography>
            <Typography sx={{color: 'text.secondary', md: 1}}>{activity?.date}</Typography>
            <Typography variant='body2'>{activity?.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color="primary" onClick={() => openForm(activity!.id)}>Edit</Button>
            <Button color="inherit" onClick={cancelSelectActivity}>Cancel</Button>
        </CardActions>
    </Card>
  )
}
