// import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Portfolio from "./components/Portfolio"
import Register from "./components/Register";
import UserDetails from "./components/UserDetails"

export const appRoutes=[
    {path:'/login',element: <Login/>},
    {path:'/register',element: <Register/>},
    {path:'/userdetails',element: <UserDetails/>},
    {path:'/portfolio/:uid',element: <Portfolio/>},
]