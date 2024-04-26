import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-y-2 border-green-300  w-12 h-9 flex justify-center items-center' : 'font-bold w-12 h-9 flex justify-center items-center'}>Home</NavLink>
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
                    <a className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-rose-500 via-green-300 to-green-500 text-transparent bg-clip-text">Sketchbook</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex flex-col md:flex-row gap-1">
                        <button className="btn btn-sm bg-green-300 hover:bg-cyan-300 text-white">Log In</button>
                        <button className="btn btn-sm bg-green-300 hover:bg-cyan-300 text-white">Register</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;