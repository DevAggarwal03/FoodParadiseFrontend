import React, { useContext } from "react";
import image1 from '../assets/homePicture/1.jpg'
import image2 from '../assets/homePicture/2.jpg'
import image3 from '../assets/homePicture/3.jpg'
import image4 from '../assets/homePicture/4.jpg'
import image5 from '../assets/homePicture/5.jpg'
import Slider from "../components/Slider";
import image6 from '../assets/homePicture/6.jpg'
import image7 from '../assets/homePicture/7.jpg'
import image8 from '../assets/homePicture/8.jpg'
import { Link } from "react-router-dom";



const Home = () => {
    const imagesArray = [image1, image2, image3, image4, image5]

    return ( <div>
        <Slider imagesArray={imagesArray}/>


        <div className="relative w-full h-[600px] mt-[300px] flex justify-center items-center mb-[200px]">
            <div className="absolute top-0">
                <img className="w-full h-[300px] topPic" src={image6} alt=""/>
            </div>
            <div className="flex min-h-[350px] w-8/12 bg-white juce z-10 justify-center items-center gap-y-3 gap-x-8 flex-wrap py-7 ">
                <div className=" flex flex-col w-5/12 justify-center gap-y-2 items-center">
                    <h1 className="text-[44px] home-menu-heading">Delicacies</h1>
                    <p className="text-3xl text-center home-menu-text">welcome to “Restaurant”, here you will find a wide variety of delicious as well as healthy food from all over India along with specialities of other nations, check out our menu now.....</p>
                    <button className="home-btns py-2 px-4 text-3xl rounded-md bg-[#E3BFBF]"><Link to='/menu'>Menu</Link></button>
                </div>
                <div className="rounded-full">
                    <img className="fries-image rounded-full w-[350px] h-[350px]" src={image8} alt="image"/> 
                </div>
            </div>
            <div className="absolute bottom-0">
                <img className="w-full h-[300px] bottomPic" src={image7} alt=""/>
            </div>
        </div>


        <div className="w-full flex flex-col justify-center items-center gap-y-7 mb-[100px] home-about-us">
            <h1 className="text-[44px] home-about-us-heading">
                Know About Us
            </h1>
            <p className=" w-4/12 text-3xl text-center home-about-us-text">“Restaurant” with not only it’s reputation for culinary expertise but also it’s cultural as well as it’s historical reputation makes it one of the most visited restaurant in town....</p>
            <button className="home-btns py-2 px-4 text-3xl rounded-md bg-[#E3BFBF]"><Link>About Us</Link></button>
        </div>
    </div> );
}
 
export default Home;