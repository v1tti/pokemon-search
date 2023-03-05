import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../ui/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen></HomeScreen>,
  },
]);
