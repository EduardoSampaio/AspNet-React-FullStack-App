import { Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function Counter() {
  const {countStore} = useStore();
  return (
    <Observer>
        {() => (
            <>
                <Typography variant="h4" gutterBottom>{countStore.title}</Typography>
                <Typography variant="h6">The count is: {countStore.count}</Typography>
            </>
        )}
    </Observer>
  )
}
 