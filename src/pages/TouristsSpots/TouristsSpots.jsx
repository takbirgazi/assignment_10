import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";

const TouristsSpots = () => {
    const spots = useLoaderData()
    return (
        <div className="">
            <h2 className="text-center font-bold text-4xl">Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5">
                {spots.map(card=><TouristCard key={card._id} cardInfo={card}></TouristCard>)}
            </div>
        </div>
    );
};

export default TouristsSpots;