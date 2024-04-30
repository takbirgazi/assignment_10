import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateSpot = () => {
    const currentSpot = useLoaderData();
    const [errMsg, setErrMsg] = useState("");
    const [succMsg, setSuccMsg] = useState("");

    const formSubmitHandle = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const average_cost = form.average_cost.value;
        const short_description = form.short_description.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const location = form.location.value;
        // const your_name = user.displayName;
        // const your_email = user.email;
        const touristInfo = {image,tourists_spot_name,country_Name,average_cost,short_description,seasonality,travel_time,totalVisitorsPerYear,location}

        fetch(`https://backend-assignment-10.vercel.app/allspot/${currentSpot._id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristInfo)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.matchedCount > 0){
                toast('Update Successfully');
            }
        })
        console.log(touristInfo);
        setErrMsg("");
        setSuccMsg("");
        }

    return (
        <div>
            <Helmet>
                <title>Update Spot - Best Tour</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Update Tourists Spot</h2>
                    <form onSubmit={formSubmitHandle} className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input name="image" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.image} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="tourists_spot_name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.tourists_spot_name} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="country_Name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.country_Name} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="average_cost" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.average_cost} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <textarea name="short_description" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" id="" cols="10" rows="5" defaultValue={currentSpot.short_description} required></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="seasonality" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.seasonality} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="travel_time" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.travel_time} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="totalVisitorsPerYear" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.totalVisitorsPerYear} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="location" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" defaultValue={currentSpot.location} required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="submit" className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Update Spot"/>
                        </div>
                        <div className="flex items-center justify-center">
                            {errMsg && <p>{errMsg}</p>}
                            {succMsg && <p>{succMsg}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateSpot;