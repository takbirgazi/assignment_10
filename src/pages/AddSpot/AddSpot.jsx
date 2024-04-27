
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddSpot = () => {
    const [errMsg, setErrMsg] = useState("");
    const [succMsg, setSuccMsg] = useState("");

    const formSubmitHandle = event =>{
        event.preventDefault();
        const image = event.target.name.value;
        const tourists_spot_name = event.tourists_spot_name.value;
        const country_Name = event.country_Name.value;
        const user = {image,tourists_spot_name,country_Name}
        setErrMsg("");
        setSuccMsg("");
        console.log(user);

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
                            <input name="tourists_spot_name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your Email" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="country_Name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Country Name" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="average_cost" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Average Cost" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="short_description" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Short Description" required/>
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
                            <input name="user_email" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="User Email" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="user_name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="User Name" required/>
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