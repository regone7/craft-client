import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext)
    const handelLogout = () => {
        signOutUser()
            .then(() => { 
                console.log("sign out")
             })
            .catch(error => {
                console.error(error);
            })
    }
    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-y-2 border-green-300  w-12 h-7 flex justify-center items-center text-sm' : 'font-bold w-12 h-7 flex justify-center items-center text-sm'}>Home</NavLink>
        <NavLink to='/addcraft' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-y-2 border-green-300  w-28 h-7 flex justify-center items-center text-sm' : 'font-bold w-28 h-7 flex justify-center items-center text-sm'}>Add Craft Item</NavLink>
        <NavLink to='/alladdcraft' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-y-2 border-green-300  w-36 h-7 flex justify-center items-center text-sm' : 'font-bold w-36 h-7 flex justify-center items-center text-sm'}>All Art & Craft Item</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 flex justify-center items-center">

                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-rose-500 via-green-300 to-green-500 text-transparent bg-clip-text -ml-7 md:-ml-3">Sketchbook</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? (<><div className="flex gap-3">
                            <div className="tooltip  z-[10] hover:tooltip-bottom " data-tip={user?.displayName || "Name Not Found"} >
                                <button className="btn btn-sm btn-circle"><img className="rounded-full w-full h-full" src={user?.photoURL || 'https://i.ibb.co/vwWq42z/pexels-pixabay-162137.jpg'} alt="" /></button>
                            </div>
                            <div><button onClick={handelLogout} className="btn btn-sm bg-lime-300 hover:bg-lime-500">Log out</button></div>
                        </div></>) : (<><div className="flex flex-col md:flex-row gap-1">
                            <Link to='/login'><button className="btn btn-sm bg-green-300 hover:bg-cyan-300 text-white w-20">Log In</button></Link>
                            <Link to='/register'> <button className="btn btn-sm bg-green-300 hover:bg-cyan-300 text-white w-20">Register</button></Link>

                        </div></>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;