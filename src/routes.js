import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/profile/:username", element: <Profile /> },
  { path: "/sign-up", element: <SignUp /> },
];

export default routes;
