import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";


const AllSpot = () => {
    const spotInfo = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-xl text-center py-5">All Tourists Spot</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                  spotInfo.map(card => <AllSpotCard key={card._id} cardInfo={card}></AllSpotCard>)  
                }
            </div>
        </div>
    );
};

export default AllSpot;