import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const OrderDishCard = ({dish, cart, setCart}) => {
    const [qty, setQty] = useState(0);
    const {loggedIn} = useContext(AppContext)

    useEffect(() => {
        if(qty > 0 && loggedIn){
        setCart(prev => {
            return(
                {
                    ...prev,
                    [dish._id] : {dish, qty},
                        
                }   
            )
            })
        }
     }, [qty])

    const decreaseHandeler = () => {
        if(qty > 0){
            setQty(prev => prev-1)
        }
    }

    const increaseHandeler = () => {
        setQty(prev => prev+1)
    }


    return ( 
    <div className="flex justify-center items-center bg-[#D9D9D9] pb-2">
        <div className="flex flex-col gap-y-2 justify-center items-center">
            <div>
                <img className="w-[400px] h-[300px]" src={dish.image} alt='food pic'/>
            </div>
            <div className="flex justify-between text-2xl w-full items-center">
                <div>{dish.name}</div>
                <div>Rs{dish.price}</div>
            </div>
            <div className="text-xl">{dish.description}</div>
            <div className="flex justify-center items-center gap-x-5 text-3xl bg-[#ffa8a890] px-3 py-2">
                <span onClick={decreaseHandeler} className=" cursor-pointer pr-3 border-gray-500 border-r-2">-</span>
                {qty}
                <span onClick={increaseHandeler} className=" cursor-pointer pl-3 border-gray-500 border-l-2">+</span>
            </div>
        </div>
    </div> );
}
 
export default OrderDishCard;