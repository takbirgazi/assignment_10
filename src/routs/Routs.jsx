import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NavBar from "../pages/NavBar/NavBar";
import Home from "../pages/Home/Home";


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
        ]
    }
]);

export default routs;