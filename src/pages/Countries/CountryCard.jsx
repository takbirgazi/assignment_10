import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const CountryCard = ({cardInfo}) => {
    const {_id,country,image,spot_des } = cardInfo;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country}</h2>
                <p>{spot_des}</p>
                <div className="card-actions">
                <Link to={`/countries/${_id}`} className="px-2 py-1 rounded-lg border">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;

CountryCard.propTypes = {
    cardInfo: PropTypes.object,
}