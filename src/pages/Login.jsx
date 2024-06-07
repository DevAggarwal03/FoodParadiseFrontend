import { useContext, useState } from "react";
import image from '../assets/signupPicture/signupPic.jpg'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Login = () => {

    const [passwordMatched, setPasswordMatched] = useState(true)
    const navigate = useNavigate();
    const {setToken} = useContext(AppContext);
    const expiresIn = new Date(Date.now() + 7);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cPassword: ''
    })


    const changeHandeler = (e) => {
        setFormData(prev => {
            return (
                {
                    ...prev,
                    [e.target.id] : e.target.value,
                }
            )
        })
    }


    const submitHandeler = async (e) => {
        e.preventDefault();

        if(formData.password !== formData.cPassword){
            setPasswordMatched(false);
            console.log('password not matched')
            return 
        }
        else{
            try {
                const request = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/login`, 
                    {
                        email: formData.email,
                        password: formData.password.toString()
                    }
                )
                
                setToken(request.data.token);
                navigate("/")
            } catch (error) {
                console.log(`error while logging in try again later: ${error}`)
            }
        }
    }

    return ( 
        <div className="w-full flex justify-center signup-top-div items-center">
        <div className="flex justify-between signup-top-div items-center w-full gap-x-9">
            <div className="signup-div-before-text flex flex-col gap-y-5 justify-between ml-[100px] w-4/12">
                <div className="text-3xl signup-text text-gray-400">Sign Up to enjoy all the delicacies to your hearts content </div>
                <form className="flex flex-col justify-center items-start text-xl gap-y-6">
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="email">Email</label>
                        <input
                        className=" w-full h-[50px] px-1 rounded-sm font-bold text-white bg-[#ff717190]"
                        type='email'
                        onChange={changeHandeler}
                        id="email"
                        name="email"
                        ></input>
                    </div>

                    <div className="sign-up-pass-div flex justify-between items-center gap-x-5 flex-wrap">
                        <div className="flex flex-col justify-center items-start w-5/12">
                            <label htmlFor="password">Password</label>
                            <input
                            className=" w-full h-[50px] px-1 rounded-sm font-bold text-white bg-[#ff717190]"
                            type='password'
                            onChange={changeHandeler}
                            id="password"
                            name="password"
                            ></input>
                            <div></div>
                        </div>

                        <div className="flex flex-col justify-center items-start w-5/12">
                            <label htmlFor="cPassword">Confirm Password</label>
                            <input
                            className=" w-full h-[50px] px-1 rounded-sm font-bold text-white bg-[#ff717190]"
                            type='password'
                            onChange={changeHandeler}
                            id="cPassword"
                            name="cPassword"
                            ></input>
                        </div>
                    </div>

                    <button className="home-btns py-2 px-4 text-xl uppercase rounded-md bg-[#ff717190] place-self-center" onClick={submitHandeler}>Submit</button>
                </form>
            </div>
            <div className="signup-image-div w-6/12 signup-top-div flex justify-center overflow-hidden">
                <img src={image} alt="image"/>
            </div>
        </div>
    </div> );
}
 
export default Login;