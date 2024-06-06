import React, { useState } from "react";
import image from '../assets/contactsPicture/contactPicture2.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";



const Contact = () => {

    const [formData, setFormData] = useState({name:"", emai:"", message:""})


    const changeHandeler = (event) => {
        setFormData(prev => (
            {
                ...prev,
                [event.target.id] : event.target.value
            }
        ))
    }

    const submitHandeler = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <div className="flex justify-center relative remHeightContact items-center overflow-hidden">
            <div className="flex justify-center h-full items-center w-full">
                <div className="absolute bottom-[-300px] left-0 z-[-1] rightPicContact"><img className="w-[1000px] h-full" src={image} alt="Food pic"/></div>
                <div className="flex w-full justify-center items-center">
                    <form className="w-5/12 flex flex-col justify-center items-center gap-y-5">
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <input className=" w-full h-[50px] hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold rounded-md placeholder:text-xl px-1 font-bold text-gray-500 text-2xl bg-[#D9D9D9]" id="name" name="name" type="text" placeholder="Name" onChange={changeHandeler}/>
                        </div>
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <input className=" w-full h-[50px] hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl px-1 rounded-md font-bold text-gray-500 text-2xl bg-[#D9D9D9]" id="email" name="email" type="email" placeholder="Email ID" onChange={changeHandeler}/>
                        </div>
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <textarea className=" w-full h-[100px] hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl px-1 rounded-md font-bold text-gray-500 text-2xl bg-[#D9D9D9]" id="message" name="message" type="text" placeholder="Message" onChange={changeHandeler}/>
                        </div>
                        <button className="home-btns py-2 px-4 text-xl border border-black hover:shadow-md hover:bg-[#d9d9d9af] uppercase rounded-md bg-[#D9D9D9] place-self-center" onClick={submitHandeler}>Submit</button>
                    </form>
                </div>
            </div>
            <div className="absolute w-10/12 bottom-[10px] py-3 gap-y-5 bg-[#ff6a6a98] flex flex-col justify-center items-center">
                <div className="text-3xl uppercase text-white font-bold">Social</div>
                <div className="flex w-8/12 justify-around items-center">
                    <div><Link to={'https://www.facebook.com'} target="_blank"><FaFacebook size={50} opacity={0.5}/></Link></div>
                    <div><Link to={'https://www.twitter.com'} target="_blank"><FaTwitter size={50} opacity={0.5}/></Link></div>
                    <div><Link to={'https://www.instagram.com'} target="_blank"><FaInstagram size={50} opacity={0.5}/></Link></div>
                </div>
            </div>
        </div> 
    );
}
 
export default Contact;