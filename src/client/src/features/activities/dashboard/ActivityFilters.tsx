import { Event, FilterList } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

export default function ActivityFilters() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 3}}>
        <Paper sx={{p: 2, borderRadius: 3}}>
            <Box sx={{width: '100%', color: 'primary.main'}}>
                <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', mb: 2,  color: 'primary.main'}}>
                    <FilterList sx={{mr: 1}} />
                    Filters
                </Typography>
                <MenuList>
                    <MenuItem>
                        <ListItemText primary="All Events" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemText primary="I'm Going" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemText primary="I'm Hosting" />
                    </MenuItem>
                </MenuList>
            </Box>
        </Paper>
        <Box component={Paper} sx={{width: '100%', borderRadius: 3, p: 3}}>
            <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', mb: 2, color: 'primary.main'}}>
                <Event sx={{mr: 1}} />
                Select date
            </Typography>
            <Calendar />
        </Box>
    </Box>
  )
}
