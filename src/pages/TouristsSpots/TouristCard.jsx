import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const TouristCard = ({cardInfo}) => {
    const {_id,image,location,spot_name} = cardInfo;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{spot_name}</h2>
                {/* <p>{spot_des}</p> */}
                <p><span className="font-bold">Location:</span> {location}</p>
                <div className="card-actions flex items-center justify-center">
                    <Link to={`/spots/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TouristCard;

TouristCard.propTypes = {
    cardInfo: PropTypes.object,
}