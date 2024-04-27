import { useLoaderData } from "react-router-dom";


const SingleTouristCard = () => {
    const singleData =  useLoaderData();
    console.log(singleData)
    return (
        <div className="w-10/12 mx-auto my-5 border rounded-xl">
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={singleData.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{singleData.spot_name}</h2>
                    <p>{singleData.spot_des}</p>
                    <p><span className="font-bold">Location:</span> {singleData.location}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTouristCard;