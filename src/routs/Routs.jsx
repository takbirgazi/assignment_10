import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import AllSpot from "../pages/AllSpot/AllSpot";
import AddSpot from "../pages/AddSpot/AddSpot";
import MyList from "../pages/MyList/MyList";
import SingleTouristCard from "../pages/TouristsSpots/SingleTouristCard";
import PrivateRoute from './PrivateRoute';


const routs = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/spots`)
            },
            {
                path:"/login",
                element: <LogIn></LogIn>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/allspot",
                element: <AllSpot></AllSpot>
            },
            {
                path:"/addspot",
                element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
            },
            {
                path:"/mylist",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path:'/spots/:id',
                element: <SingleTouristCard></SingleTouristCard>,
                loader: ({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
            }
        ]
    }
]);

export default routs;