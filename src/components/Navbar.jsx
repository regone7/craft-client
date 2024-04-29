import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// {/* <NavLink to={`/myartcraft/${user?.email}`} className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-y-2 border-green-300  w-28 h-7 flex justify-center items-center text-sm' : 'font-bold w-28 h-7 flex justify-center items-center text-sm'}>My Art & Craft</NavLink> */}

const Navbar = () => {
    const [theme,setTheme] = useState('light')
    const handelToggle=(e)=>{
        if(e.target.checked){
            setTheme('synthwave')
        }else {
            setTheme('light')
          }

    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])


    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelLogout = () => {
        signOutUser()
            .then(() => {
                console.log("sign out")
                toast.success("Succesfully logout")
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-2 border-green-300  w-12 h-7 flex justify-center items-center text-sm' : 'font-bold w-12 h-7 flex justify-center items-center text-sm'}>Home</NavLink>
        <NavLink to='/addcraft' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-2 border-green-300  w-28 h-7 flex justify-center items-center text-sm' : 'font-bold w-28 h-7 flex justify-center items-center text-sm'}>Add Craft Item</NavLink>
        <NavLink to='/alladdcraft' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-2 border-green-300  w-36 h-7 flex justify-center items-center text-sm' : 'font-bold w-36 h-7 flex justify-center items-center text-sm'}>All Art & Craft Item</NavLink>
        <NavLink to='/myartcraft ' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-2 border-green-300  w-28 h-7 flex justify-center items-center text-sm' : 'font-bold w-28 h-7 flex justify-center items-center text-sm'}>My Art & Craft</NavLink>
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
                    <label className="swap swap-rotate">

                        
                        <input onChange={handelToggle} type="checkbox" className="theme-controller"  />

                        
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                       
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

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
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;