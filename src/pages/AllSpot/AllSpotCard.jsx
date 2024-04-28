import { Link } from "react-router-dom";

const AllSpotCard = ({cardInfo}) => {
    const {image,tourists_spot_name,country_Name,average_cost,short_description,seasonality,travel_time,totalVisitorsPerYear,location,your_name,your_email} = cardInfo;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                {/* <p>{spot_des}</p> */}
                <p><span className="font-bold">Location:</span> {location}</p>
                <div className="card-actions flex items-center justify-center">
                    <Link to={`/spots/s`} className="px-2 py-1 rounded bg-blue-500 text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllSpotCard;