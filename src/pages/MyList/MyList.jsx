import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import swal from 'sweetalert';



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

    const deleteHandler = (_id)=>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetch(`https://backend-assignment-10.vercel.app/allspot/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                    });
                }
              })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

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
                            <th className="text-black">Your Email</th>
                            <th className="text-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           myList.map((list, ind)=> <tr key={ind}>
                                <th>{ind+1}</th>
                                <th>{list.your_name}</th>
                                <td>{list.tourists_spot_name}</td>
                                <td>{list.country_Name}</td>
                                <td>{list.your_email}</td>
                                <td className="flex gap-2"><button className="px-2 py-1 rounded border">Update</button> <button className="px-2 py-1 rounded border" onClick={()=>deleteHandler(list._id)}>Delete</button></td>
                            </tr>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;