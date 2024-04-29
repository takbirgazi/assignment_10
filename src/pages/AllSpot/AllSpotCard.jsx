import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const AllSpotCard = ({cardInfo}) => {
    const {_id,image,tourists_spot_name,average_cost,seasonality,travel_time,totalVisitorsPerYear} = cardInfo;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p><span className="font-bold">Average Cost:</span> ${average_cost}</p>
                <p><span className="font-bold">Total Visitors Per Year:</span> {totalVisitorsPerYear}</p>
                <p><span className="font-bold">Travel Time:</span> {travel_time}</p>
                <p><span className="font-bold">Seasonality:</span> {seasonality}</p>
                <div className="card-actions flex">
                    <Link to={`/allspot/${_id}`} className="px-2 py-1 rounded bg-blue-500 text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllSpotCard;

AllSpotCard.propTypes = {
    cardInfo: PropTypes.object,
}