import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NavBar from "../pages/NavBar/NavBar";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";


const routs = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/user",
                element:<NavBar></NavBar>
            },
            {
                path:"/login",
                element: <LogIn></LogIn>
            }
        ]
    }
]);

export default routs;