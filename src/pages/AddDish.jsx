import React, { useContext, useState } from "react";
import image from '../assets/addDishPicture/addDishPic.jpg'
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Contact = () => {

    const [formData, setFormData] = useState({name:"", price:"", description:"", image:""})
    const [loading, setLoading] = useState(false);
    const {setDishAdded} = useContext(AppContext)
    const navigate = useNavigate()


    const changeHandeler = (event) => {
        const {id, type, name, value} = event.target;
        setFormData(prev => (
            {
                ...prev,
                [event.target.id] : type === 'file' ? (event.target.files[0]) : (value)
            }
        ))
    }

    const submitHandeler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formDataObject = new FormData();
            formDataObject.append('name', formData.name);
            formDataObject.append('price', formData.price);
            formDataObject.append('description', formData.description);
            formDataObject.append('file', formData.image);
    
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/addDish`, formDataObject, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            
            });
            setDishAdded(prev => !prev)
            setLoading(false);
            navigate('/menu')

        } catch (error) {
            console.log(`error while adding the dish`);
        }
    }

    return (
        <div className="flex flex-col justify-center relative remHeightContact items-center overflow-hidden">
            {
                loading ? (<div className="text-2xl font-bold">Adding dish to the menu...</div>) : (<div className="text-2xl font-bold">Add a dish</div>)
            }
            <div className="flex justify-center h-full items-center w-full">
                <div className="absolute bottom-[-300px] right-0 z-[-1] leftPicAddDish"><img className="w-[1000px] h-full" src={image} alt="Food pic"/></div>
                <div className="flex w-full justify-center items-center">
                    <form className="w-5/12 flex flex-col justify-center items-center gap-y-5">
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <input className=" w-full h-[50px] hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold rounded-md placeholder:text-xl px-1 font-bold text-gray-500 text-2xl bg-[#D9D9D9]" id="name" name="name" type="text" placeholder="Name" onChange={changeHandeler}/>
                        </div>
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <input className=" w-full h-[50px] hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold rounded-md placeholder:text-xl px-1 font-bold text-gray-500 text-2xl bg-[#D9D9D9]" id="price" name="price" type="number" placeholder="Price" onChange={changeHandeler}/>
                        </div>
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <input className=" w-full hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl px-1 rounded-md font-bold text-gray-500 text-2xl bg-[#D9D9D9]" 
                            id="image" 
                            name="image" 
                            type="file"
                            onChange={changeHandeler}/>
                        </div>
                        <div className="flex w-full flex-col justify-center items-center border border-black rounded-md gap-y-2">
                            <textarea className=" w-full min-h-[100px] max-h-[200px] hover:shadow-lg placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl px-1 rounded-md font-bold text-gray-500 text-2xl bg-[#D9D9D9]" id="description" name="description" type="text" placeholder="Description" onChange={changeHandeler}/>
                        </div>
                        <button className="home-btns py-2 px-4 text-xl border border-black hover:shadow-md hover:bg-[#d9d9d9af] uppercase rounded-md bg-[#D9D9D9] place-self-center" onClick={submitHandeler}>Submit</button>
                    </form>
                </div>
            </div>
            
        </div> 
    );
}
 
export default Contact;