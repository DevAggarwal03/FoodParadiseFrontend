import { useContext, useEffect, useState } from "react";
import OrderDishCard from "../components/OrderDishCard";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Order = () => {

    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(false)
    const {cart, setCart} = useContext(AppContext);
    const navigate = useNavigate();
    const {dishAdded, loggedIn} = useContext(AppContext);


    useEffect(() => {
        const fetchDishes = async () => {
            setLoading(true);
            try {
                
                const res = await fetch('/api/v1/home');
                const output = await res.json();
                setDishes(output.response);


            } catch (error) {
                console.log(`error while fetching data...: ${error}`)
            }
            setLoading(false);
        }

        fetchDishes()
    }, [dishAdded])



    return ( 
    <div className="w-full flex flex-col justify-center items-center remHeight mt-[30px] mb-[30px]">
        {
            loading ? (<div className="h-[70vh] flex justify-center items-center"><Spinner/></div>) :
            (
                <div className="w-full flex flex-col justify-center items-center gap-y-4">
                    {
                        loggedIn ? (<div className=" cursor-pointer flex justify-center items-center py-2 px-4 uppercase text-2xl rounded-md bg-[#ffa8a890]" onClick={() => {navigate('/cart')}}>Cart</div>) :
                        (<div className="text-2xl font-semibold">log In to add dishes to the cart</div>)
                    }
                    <div className="w-10/12 flex flex-wrap gap-x-10 gap-y-4 justify-center items-center">
                    {
                        dishes.map((dish) => {
                            return (
                                <OrderDishCard key={dish._id} cart = {cart} setCart = {setCart} dish={dish}/>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }
    </div> );
}
 
export default Order;