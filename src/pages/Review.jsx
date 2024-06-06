import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ReviewCard from "../components/ReviewCard";


const Review = () => {

    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({name:"", comment:""})
    const [submitClicked, setSubmitClicked] = useState(false);

    const fetchReview = async() => {
        try {
            setLoading(true);
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/reviews`);
            const output = await res.json();
            setReviews(output.response);
            setLoading(false);
        } catch (error) {
            console.log(`error while fetching reviews: ${error}`)
        }
    }

    const changeHandeler = (e) => {
        setFormData(prev => {
            return (
                {
                    ...prev,
                    [e.target.id]: e.target.value,
                }
            )
        })
    }

    const submitHandeler = async(e) => {
        e.preventDefault();

        if(!formData){
            return;
        }

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/addReview`, {
            method: "POST",

            body: JSON.stringify({
                name: formData.name,
                comment: formData.comment,
            }),

            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })

        setSubmitClicked(prev => !prev);

    }

    useEffect(() => {
        fetchReview()
    }, [submitClicked])


    return ( <div className="w-full justify-center items-center remHeightReview mt-[60px]">
        {
            loading ? (<div className="h-[70vh] flex justify-center items-center"><Spinner/></div>) : 
            ( 
                
                <div className="w-full remHeightReview flex flex-col justify-between gap-y-[100px] items-center">
                    <div className="w-10/12 gap-x-10 gap-y-[50px] flex flex-wrap justify-center items-center">
                    {
                        reviews.map((review, index) => {
                            return(
                                <ReviewCard key={index}  review={review}/>
                            )
                        })
                    }
                    </div>
                    <div className="w-10/12 justify-center items-center">
                        <div className="w-11/12 m-auto text-2xl flex flex-col justify-center items-center gap-y-4 py-1 hover:shadow-xl hover:border-gray-400 border border-gray-300 shadow-md">
                            <div className=" font-bold text-[#ff7171eb] uppercase">Add a Review</div>
                            <div className="flex w-full justify-center items-center gap-y-4 flex-col">
                                <div className="flex w-6/12 justify-between items-center">   
                                    <label className="text-xl" htmlFor="name">Name:</label>
                                    <input className="w-9/12 px-1 rounded-sm font-bold text-white bg-[#ff717190]" id="name" name="name" type="text" onChange={changeHandeler}/>
                                </div>
                                <div className="flex w-6/12 justify-between itmes-center">
                                    <label className="text-xl" htmlFor="Comment">Comment:</label>
                                    <textarea className="w-9/12 px-1 rounded-sm  text-white bg-[#ff717190]" id="comment" name="comment" type="text" onChange={changeHandeler}/>
                                </div>

                                <button className="home-btns py-2 px-4 text-xl uppercase rounded-md bg-[#ff717190] place-self-center" onClick={submitHandeler}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div> );
}
 
export default Review;