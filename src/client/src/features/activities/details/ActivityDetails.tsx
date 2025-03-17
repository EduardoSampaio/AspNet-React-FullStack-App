import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id);


    if (isLoadingActivity) return <Typography>...Loading</Typography>;

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component='img' src={`/images/categoryImages/${activity?.category}.jpg`}></CardMedia>
            <CardContent>
                <Typography variant='h5'>{activity?.title}</Typography>
                <Typography sx={{ color: 'text.secondary', md: 1 }}>{activity?.date}</Typography>
                <Typography variant='body2'>{activity?.description}</Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/manage/${activity?.id}`} color="primary">Edit</Button>
                <Button color="inherit" onClick={() => navigate('/activities')}>Cancel</Button>
            </CardActions>
        </Card>
    )
}
