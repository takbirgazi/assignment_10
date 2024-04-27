import { useContext, useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
    const {user, logOut}= useContext(AuthContext);
    const navigate = useNavigate()
    const logOutHndlr = ()=>{
        logOut()
        .then(()=> {
            navigate('/')
        })
        .catch(err=> console.err(err))
    }
    const links = 
                 <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allspot">All Tourists Spot</NavLink></li>
                    {
                        user ? 
                        <>
                            <li><NavLink to="/addspot">Add Tourists Spot</NavLink></li>
                            <li><NavLink to="/mylist">My List</NavLink></li>
                            <button onClick={logOutHndlr} className="p-2">Log Out</button>
                        </>
                        :
                        <>
                            <li><NavLink to="/login">Log In</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </>
                    }
                 </>;
    const [night, setNight] = useState(false);

    const theameHndler = ()=>{
        setNight(!night);
    }

    return (
        <div className="bg-base-100 border-b">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Best Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    {user && <div className="border rounded-full w-10 h-10 flex items-center justify-center"><img className="rounded-full" src={user?.photoURL} /></div>}
                    <button onClick={theameHndler} className="border p-2 rounded-full text-xl"> {night ? <IoIosMoon /> : <IoIosSunny />}  </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;