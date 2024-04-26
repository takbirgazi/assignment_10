import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";


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
                path:"/login",
                element: <LogIn></LogIn>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default routs;