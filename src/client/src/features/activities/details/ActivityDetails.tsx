import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia component='img' src={`/images/categoryImages/${activity.category}.jpg`}></CardMedia>
        <CardContent>
            <Typography variant='h5'>{activity.title}</Typography>
            <Typography sx={{color: 'text.secondary', md: 1}}>{activity.date}</Typography>
            <Typography variant='body2'>{activity.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color="primary" onClick={() => openForm(activity.id)}>Edit</Button>
            <Button color="inherit" onClick={cancelSelectActivity}>Cancel</Button>
        </CardActions>
    </Card>
  )
}
