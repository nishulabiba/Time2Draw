import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
const Navbar = () => {

    const { isDarkMode, toggleTheme, user, logOut } = useContext(AuthContext)
    const nav = <>
        <li><Link to="/">Home</Link></li>
        
        <li><a>Classes</a></li>
        {
            user? <li><a onClick={logOut}> Logout</a></li>: <li><Link to="/login">Login</Link></li>
        }
        <label className="flex cursor-pointer gap-2 mt-2 ms-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <input type="checkbox"  className="toggle theme-controller" checked={isDarkMode}
                onChange={toggleTheme} />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>


    </>
    return (
        <div className={`${isDarkMode? "bg-base-100": "bg-slate-100"} navbar`} >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl flex gap-0">
                    <img className="w-[150px] -mt-12" src="https://i.ibb.co/L53JZ7b/Time-to-draw-removebg-preview.png" alt="" />
                    <h3 className="font-serif text-2xl -mt-10 -ms-8">Time2Draw</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex lg:items-center">
                <ul className="menu menu-horizontal px-1">
                    {nav}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Enroll</a>
            </div>
        </div>
    );
};

export default Navbar;