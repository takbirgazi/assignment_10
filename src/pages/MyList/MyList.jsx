import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyList = () => {
    const {user}  = useContext(AuthContext);
    const [myList, setMylist] = useState([]);
    useEffect(()=>{
        fetch(`https://backend-assignment-10.vercel.app/allspots/${user?.email}`)
        .then(res=> res.json())
        .then(data =>{
            setMylist(data);
        })
    },[user]);
    console.log(myList);
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-xl text-center py-5">My List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="border-b-2 border-black">
                        <tr>
                            <th className="text-black">S/L</th>
                            <th className="text-black">Your Name</th>
                            <th className="text-black">Spot Name</th>
                            <th className="text-black">Country</th>
                            <th className="text-black">Location</th>
                            <th className="text-black">Your Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           myList.map((list, ind)=> <tr key={ind}>
                                <th>{ind+1}</th>
                                <th>{list.your_name}</th>
                                <td>{list.tourists_spot_name}</td>
                                <td>{list.country_Name}</td>
                                <td>{list.location}</td>
                                <td>{list.your_email}</td>
                            </tr>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;