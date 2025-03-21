import { Box, Button, ButtonGroup, List, ListItemText, Paper, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
    const { countStore } = useStore();
    return (
        <Box display='flex' justifyContent='space-between'>
            <Box>
                <Typography variant="h4" gutterBottom>{countStore.title}</Typography>
                <Typography variant="h6">The count is: {countStore.count}</Typography>

                <ButtonGroup sx={{ mt: 3 }}>
                    <Button onClick={() => countStore.increment()} variant="contained" color="error">Increment</Button>
                    <Button onClick={() => countStore.decrement()} variant="contained" color="success">Decrement</Button>
                </ButtonGroup>
            </Box>
            <Paper sx={{width: '40%', p:4}}>
                <Typography variant="h5">Counter events ({countStore.eventCount})</Typography>
                <List>
                    {countStore.events.map((event, index) => (
                        <ListItemText key={index}>{event}</ListItemText>)
                    )}
                </List>
            </Paper>
        </Box>
    )
})

export default Counter;