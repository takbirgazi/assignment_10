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
import AllSpotDetails from "../pages/AllSpot/AllSpotDetails";
import UpdateSpot from "../pages/MyList/UpdateSpot";
import CountriesDetails from "../pages/Countries/CountriesDetails";


const routs = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('https://backend-assignment-10.vercel.app/spots')
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
                element: <AllSpot></AllSpot>,
                loader: ()=> fetch('https://backend-assignment-10.vercel.app/allspots')
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
                loader: ({params})=> fetch(`https://backend-assignment-10.vercel.app/spots/${params.id}`)
            },
            {
                path:'/allspot/:id',
                element: <PrivateRoute><AllSpotDetails></AllSpotDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://backend-assignment-10.vercel.app/allspot/${params.id}`)
            },
            {
                path:'/mylist/:id',
                element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
                loader: ({params})=> fetch(`https://backend-assignment-10.vercel.app/allspot/${params.id}`)
            },
            {
                path:'/countries/:id',
                element: <CountriesDetails></CountriesDetails>,
                loader: ({params})=> fetch(`https://backend-assignment-10.vercel.app/allspot/${params.id}`)
            }
        ]
    }
]);

export default routs;