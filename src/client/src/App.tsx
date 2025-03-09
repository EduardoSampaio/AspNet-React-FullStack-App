import { useEffect, useState } from "react";
import "./App.css";
import { List, ListItem, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const [acitivities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities")
      .then(response => setActivities(response.data));

    return () => {};
  }, []);

  return (
    <>
      <Typography variant="h3">
        Reativities
      </Typography>
      <List>
        {acitivities.map((activity) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
