import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Navbar = () => {

    const {loggedIn} = useContext(AppContext)

    if(loggedIn){
        return (
            <div className="w-full flex justify-center items-center min-h-[60px] bg-[#E3BFBF]">
                <nav className="flex flex-wrap w-9/12 justify-between items-center">
                    <div className=" cursor-pointer font-serif text-3xl">Food Paradise</div>
                    <ul className="flex gap-x-4 flex-wrap text-xl items-center">
                        <li className='hover:text-[#853030]'><NavLink to={"/"}>Home</NavLink></li>
                        <li className=" hover:text-[#853030] "><NavLink to={"/about"}>About Us</NavLink></li>
                        <li className=" hover:text-[#853030] "><NavLink to={"/menu"}>Menu</NavLink></li>
                        <li className=" hover:text-[#853030] "><NavLink to={"/order"}>Order Now</NavLink></li>
                        <li className=" hover:text-[#853030] "><NavLink to={"/review"}>Review</NavLink></li>
                        <li className=" hover:text-[#853030] "><NavLink to={"/contact"}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>  
            
        )
    }
    else{
    return ( 
        <div className="w-full flex justify-center items-center min-h-[60px] bg-[#E3BFBF]">
            <nav className="flex flex-wrap w-9/12 justify-between items-center">
                <div className=" cursor-pointer font-serif text-3xl">Food Paradise</div>
                <ul className="flex gap-x-4 flex-wrap text-xl items-center">
                    <li className="hover:text-[#853030]"><NavLink to={"/"}>Home</NavLink></li>
                    <li className=" hover:text-[#853030] "><NavLink to={"/about"}>About Us</NavLink></li>
                    <li className=" hover:text-[#853030] "><NavLink to={"/menu"}>Menu</NavLink></li>
                    <li className=" hover:text-[#853030] "><NavLink to={"/order"}>Order Now</NavLink></li>
                    <li className=" hover:text-[#853030] "><NavLink to={"/review"}>Review</NavLink></li>
                    <li className=" hover:text-[#853030] "><NavLink to={"/contact"}>Contact Us</NavLink></li>
                    <li className="bg-[#FF7171] hover:bg-[#ff7171c3] hover:border-2 hover:border-white active:bg-[#ff717181] rounded-full px-3 py-1"><Link to={"/login"}>Log In</Link></li>
                    <li className="bg-[#FF7171] hover:bg-[#ff7171c3] hover:border-2 hover:border-white active:bg-[#ff717181] rounded-full px-3 py-1"><Link to={"/signup"}>Sign Up</Link></li>
                </ul>
            </nav>
        </div> 
        );
    }
}
 
export default Navbar;