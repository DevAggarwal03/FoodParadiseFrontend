import React from "react";

const dishCard = ({entry}) => {
    const dishId = entry[0]
    const dish = entry[1].dish;
    const dishPrice = entry[1].price;
    const qty = entry[1].qty;

    return ( 
    <div className="w-10/12 flex justify-center items-center">
        <div className="flex justify-right gap-x-2 hover:border-4 hover:rounded-r-[14px] hover:border-gray-500 items-center w-full hover:shadow-lg bg-[#D9D9D9]">
            <div className=" w-4/12">
                <img className="w-[300px] h-[180px] rounded-r-[14px]" src={dish.image} alt="food pic" />
            </div>
            <div className="flex pr-2 flex-col justify-center items-center gap-y-3 w-full text-2xl">
                <div className="flex flex-col justify-between w-full items-center">
                    <div className="flex justify-between items-center w-full">
                        <span>{dish.name}</span>
                        <span>Rs:{dish.price}</span>
                    </div>
                    <div className=" place-self-end">
                        Qty: {qty}
                    </div>
                </div>
                <div>{dish.description}</div>
            </div>
        </div>
    </div> );
}
 
export default dishCard;