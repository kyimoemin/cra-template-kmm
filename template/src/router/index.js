import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Protect } from "src/components/ui";
import { ROUTE_NAMES } from "src/constants/routeNames";

const Login = lazy(() => import("src/pages/login"));
const Home = lazy(() => import("src/pages/home"));
const Profile = lazy(() => import("src/pages/profile"));

export default function Router() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      index: true,
      element: <Navigate to={ROUTE_NAMES.HOME} replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/profile",
      element: (
        <Protect>
          <Profile />
        </Protect>
      ),
    },
  ]);
}
