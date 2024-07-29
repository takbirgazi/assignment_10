import { useLoaderData } from "react-router-dom";


const CountriesDetails = () => {
    const spotDetails = useLoaderData();
    console.log(spotDetails);
    return (
        <div className="w-10/12 mx-auto my-5 border rounded-xl">
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={spotDetails?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{spotDetails?.spot_name}</h2>
                    <p>{spotDetails?.country}</p>
                    <p>{spotDetails?.location}</p>
                    <p>{spotDetails?.spot_des}</p>
                    <p><span className="font-bold">Location:</span> {spotDetails?.location}</p>
                </div>
            </div>
        </div>
    );
};

export default CountriesDetails;