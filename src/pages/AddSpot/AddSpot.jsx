
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";



const AddSpot = () => {
    const [errMsg, setErrMsg] = useState("");
    const [succMsg, setSuccMsg] = useState("");
    const {user} = useContext(AuthContext);

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
        const your_name = user.displayName;
        const your_email = user.email;
        const touristInfo = {image,tourists_spot_name,country_Name,average_cost,short_description,seasonality,travel_time,totalVisitorsPerYear,location,your_name,your_email}
        fetch(`http://localhost:5000/allspots`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristInfo)
        })
        .then(res => res.json())
        .then(touristInfo => console.log(touristInfo))

        setErrMsg("");
        setSuccMsg("");
        console.log(touristInfo);

        }

    return (
        <div>
            <Helmet>
                <title>Add New Spot - Best Tour</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Add Tourists Spot</h2>
                    <form onSubmit={formSubmitHandle} className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input name="image" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Image URL" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="tourists_spot_name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Tourists Spot Name" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="country_Name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Country Name" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="average_cost" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Average Cost" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <textarea name="short_description" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" id="" cols="10" rows="5" placeholder="Short Description" required></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="seasonality" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="seasonality" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="travel_time" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Travel Time" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="totalVisitorsPerYear" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Total Visitors Per Year" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="location" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Location" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="submit" className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Add Spot"/>
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

export default AddSpot;