import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const Slider = ({imagesArray}) => {

    const [imageIndex, setImageIndex] = useState(0);
    const pics = imagesArray.length;
    const prevIndex = imageIndex === 0 ? pics - 1 : imageIndex - 1;
    const nextIndex = imageIndex === pics-1 ? 0 : imageIndex + 1;


    const prevChangeHandeler = () => {
        setImageIndex(prev => {
            return (prevIndex)
        })
    }

    const nextChangeHandeler = () => {
        setImageIndex(prev => {
            return (nextIndex)
        })
    }

    return ( 
    <div className="flex items-center justify-between w-full mt-4">
        <div className="z-10" onClick={prevChangeHandeler}>
            <MdOutlineNavigateBefore size={44}/>
        </div>
        <div className="flex justify-center items-center relative ">
            <img className="w-[55vw] h-[60vh] absolute right-[42%] leftPic" src={imagesArray[prevIndex]} alt="food pic"/>
            <img className="w-[68vw] h-[75vh] z-10" src={imagesArray[imageIndex]} alt="food pic"/>
            <img className="w-[55vw] h-[60vh] absolute left-[42%] rightPic" src={imagesArray[nextIndex]} alt="food pic"/>
        </div>
        <div className="z-10" onClick={nextChangeHandeler}>
            <MdOutlineNavigateNext size={44}/>
        </div>
        {/* <div className="absolute bg-black top-4 w-[25vw] h-[30vh] opacity-40"></div>
        <div></div> */}
    </div> 
    );
}
 
export default Slider;