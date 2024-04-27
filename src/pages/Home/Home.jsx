import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import Slider from "../Slider/Slider";
import TouristsSpots from "../TouristsSpots/TouristsSpots";
import Countries from "../Countries/Countries";

const Home = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Home - Best Tour</title>
            </Helmet>
            <Fade>
            <Slider></Slider>
             <div className="w-11/12 mx-auto">
                <TouristsSpots></TouristsSpots>
                <Countries></Countries>
             </div>
            </Fade>
        </div>
    );
};

export default Home;