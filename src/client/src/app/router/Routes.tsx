import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import HomePage from "../../features/activities/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailsPage from "../../features/activities/details/ActivityDetailsPage";
import Counter from "../../features/counter/Counter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "activities",
                element: <ActivityDashboard />
            },
            {
                path: "createActivity",
                element: <ActivityForm  key="create"/>
            },
            {
                path: "activities/:id",
                element: <ActivityDetailsPage />
            },
            {
                path: "manage/:id",
                element: <ActivityForm />
            },
            {
                path: "counter",
                element: <Counter />
            }
        ]
    },

]);