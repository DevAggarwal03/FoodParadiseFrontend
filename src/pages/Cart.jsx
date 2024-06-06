import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import CartDishCard from "../components/CartDishCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate()

    const {cart, setCart} = useContext(AppContext)
    let total = 0;

    if(cart){
        Object.entries(cart).forEach((entry) => {
            total = total + (entry[1].qty * entry[1].dish.price)
        })
    }
    

    const goBack = () => {
        navigate(-1);
    }

    return ( 
        <div className="flex w-full flex-col gap-y-5 justify-center items-center my-[30px] remHeight">
            {
                cart ? (
                    <div className="w-10/12 flex justify-between items-center">
                    {
                        <div className="flex flex-col min-w-8/12 w-10/12 gap-y-3 justify-center items-center">
                        {
                            Object.entries(cart).map((entry, index) => {
                                console.log(entry[0])
                                return (
                                        <CartDishCard key={index} entry = {entry}/>
                                        )
                                    })
                        }
                        </div>
                    }
                    <div className=" flex self-end w-2/12 border-l pl-[4px] border-gray-400 justify-center items-center text-[44px]">
                        Total: {total}
                    </div>
                </div>) : 
                (
                    <div>
                        No dish added to cart
                    </div>
                )
            }
        <button onClick={goBack} className="text-2xl border border-gray-400 bg-[#ff6a6a76] py-2 px-1 rounded-lg cursor-pointer">Go Back</button>
        </div> 
    );
}
 
export default Cart;