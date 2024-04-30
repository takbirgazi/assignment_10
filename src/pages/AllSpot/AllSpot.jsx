import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import { useState } from "react";


const AllSpot = () => {
    const spotInfo = useLoaderData();
    const [allSpot, setAllSpot] = useState(spotInfo);
    const [value, setValue] = useState(true);
    
      const assendingOrder = (allSpot) => {
        setValue(!value);
        if(value){
            const data = allSpot.sort((a,b) => (b.average_cost - a.average_cost))
            setAllSpot(data);
        }else{
            const data = allSpot.sort((a,b) => (a.average_cost - b.average_cost))
            setAllSpot(data);
        }
    };
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-xl text-center py-5">All Tourists Spot</h2>
            <div className="flex items-center justify-center py-5">
            <select onChange={()=>assendingOrder(allSpot)} className="select select-accent w-full max-w-xs">
                <option value="disabled" disabled selected>Ascending or Descending</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                  allSpot.map(card => <AllSpotCard key={card._id} cardInfo={card}></AllSpotCard>)  
                }
            </div>
        </div>
    );
};

export default AllSpot;