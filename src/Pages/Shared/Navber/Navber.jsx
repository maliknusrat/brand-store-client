import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUser,  } from "react-icons/bi";
import { FaUserMinus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import img1 from "../../../assets/logo-removebg-preview.png"

const Navber = () => {

    const { user, logOut  } = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
        })
    }
    
    console.log(user);

    const navlinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Home</NavLink></li>
        <li><NavLink to='/addproducts' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Add Products</NavLink></li>
        <li><NavLink to='/branddetails' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Brand Details</NavLink></li>
        <li><NavLink to='/updateProduct' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Available Products</NavLink></li>
    </>

    const cart = <>
        <NavLink to='/mycart' className={({ isActive }) => isActive ? "text-red-600 underline  hidden lg:block" : ''}><AiOutlineShoppingCart className="py-2 text-red-600 text-5xl"></AiOutlineShoppingCart></NavLink>
    </>

    const login = <>
     {user ? <div className="flex flex-col md:flex-row items-center gap-2 "> {user.displayName} <FaUserMinus onClick={logoutHandler} className="text-red-600 text-3xl hover:text-slate-800"></FaUserMinus> </div> : <NavLink to='/logIn' className={({ isActive }) => isActive ? "text-red-600 underline" : ''}> <BiSolidUser  className="p-2 text-red-600 text-5xl"></BiSolidUser></NavLink>}
     
    </>



    return (
        <div className="max-w-6xl  mx-auto">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                            {cart}                         
                        </ul>
                        
                    </div>
                    <img src={img1} alt="" />
                    {/* <a className="normal-case font-black text-3xl">Foodies</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navlinks}
                        
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                {cart}
                {login}
                
                </div>
            </div>
        </div>
    );
};

export default Navber;