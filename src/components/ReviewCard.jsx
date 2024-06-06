import React from "react";
import { CgProfile } from "react-icons/cg";


const ReviewCard = ({review}) => {
    return ( 
    <div className="w-[540px] h-[190px] ease-in-out transition-[4s] flex flex-col justify-center items-center gap-y-10 hover:shadow-md hover:border-4 hover:w-[560px] hover:h-[210px] border-2 border-pink-300 relative">
            <div className=" absolute top-[-30px] rounded-full bg-[#FF8D8D]"><CgProfile size={60}/></div>
            <div className="text-3xl">{review.name}</div>
            <div className="text-xl">{review.comment}</div>
        </div>
     );
}
 
export default ReviewCard;