import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
        return (
    <div className="w-full flex justify-center items-center z-50 bg-[#E3BFBF] pt-5">
        <div className="flex flex-col justify-center items-center gap-y-3 w-9/12">
            <div className="flex gap-x-[100px] flex-wrap justify-center items-center">
                <div className="flex gap-x-[100px] text-xl">
                    <div className="flex flex-col justify-center items-center">
                        <span><Link to="/about">About</Link></span>
                        <span><Link to="/menu">Menu</Link></span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span><Link to="/order">Order Now</Link></span>
                        <span><Link to="/contact">Contact Us</Link></span>
                    </div>
                </div>
                <div className="h-[100px] bg-gray-600 w-[2px]"></div>
                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <div className="text-xl">
                        Socials
                    </div>
                    <div className="flex gap-x-8">
                        <span className=" rounded-full p-4 bg-pink-300">
                            <Link target="_blank" to='https://www.instagram.com'>
                                <FaInstagram/>
                            </Link>
                        </span>
                        <span className=" rounded-full p-4 bg-pink-300">
                            <Link target="_blank" to='https://www.twitter.com'>
                                <FaTwitter/>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-3">
                <div>contact us</div>
                <div className="h-[10px] w-[2px] bg-gray-500"></div>
                <div>Terms and Conditions</div>
                <div className="h-[10px] w-[2px] bg-gray-500"></div>
                <div>Privacy Policy</div>
            </div>
        </div>
    </div> 
    );
}
 
export default Footer;