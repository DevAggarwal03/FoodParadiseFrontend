import { useContext, useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Menu = () => {

    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dishAdded} = useContext(AppContext);
    const {loggedIn} = useContext(AppContext);


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

    const addDishPageChanger = () => {
        navigate('/addDish')
    }

    return ( 
    <div className="w-full flex justify-center items-center remHeightReview mt-[30px] mb-[30px]">
        {
            loading ? (<div className="h-[70vh] flex justify-center items-center"><Spinner/></div>) :
            (
                
                <div className="w-10/12 flex flex-col gap-y-6 justify-center items-center">
                    <div className="text-[44px] uppercase text-[#FF6A6A] opacity-80">Menu</div>
                    {
                        dishes.map((dish) => {
                            return(
                                <DishCard key={dish._id} dish={dish} />
                                )
                            }
                        )    
                    }
                    {
                        loggedIn ? (<span className="text-2xl border border-gray-400 bg-[#ff6a6a76] py-2 px-1 rounded-lg cursor-pointer" onClick={addDishPageChanger}>Add a Dish</span>)
                        : (
                            <span>Log In to add more dishes</span>
                        )
                    }
                    {/* <span className="text-2xl border border-gray-400 bg-[#ff6a6a76] py-2 px-1 rounded-lg cursor-pointer" onClick={addDishPageChanger}>Add a Dish</span> */}
                </div>
            )
        }
    </div> );
}
 
export default Menu;