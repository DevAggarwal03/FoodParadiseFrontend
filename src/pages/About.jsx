import image from '../assets/homePicture/backgroundPic.jpg'

const About = () => {
    return ( 
    <div className="w-full min-h-[90vh] flex text-gray-500 justify-center items-center mt-[35px] mb-[70px]">
        <div className="w-7/12 gap-y-6 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-y-3">
                <h1 className="uppercase text-[44px] text-[#FF6A6A]">About us</h1>
                <p className='text-3xl'>Established in 1986 and since then it has moved on to become the most preferred destination for Indian cuisines across the town. Within a short span “Restaurant” has spread its wings far and wide and today with more than 100 restaurants, “Restaurant” has established its presence in the Town through company owned restaurants and in various prominent towns of North India through franchise outlets. Having won numerous awards in the Hospitality industry in various categories over the years, “Restaurant” continues to delight its customers with its authentic Indian food cooked fresh many times a day.</p>
            </div>
            <div className="flex justify-between items-center gap-x-4 gap-y-5 mt-8 flex-wrap">
                <div className='flex justify-center items-center div-above-about-img'>
                    <img className='img-about h-[400px]' src={image} alt="image" />
                </div>
                <p className='w-5/12 about-text-center text-3xl'>“Restaurant” with not only it's reputation for culinary expertise but also it's cultural as well as it's historical reputation makes it one of the most visited restaurant in town,with over 100 restaurants we are packed all the time thanks to the wonderful chiefs and servants on board to full-fill all you needs
                </p>
            </div>
            <div className='flex justify-center items-center flex-col gap-y-5 mt-8'>
                <p className='text-3xl'>“Restaurant” is not only known for it's history and culture but also it's worker policy, with work force of over 1000+ workers/employees all over the courntry and to look at more of what we offer to the employees/workers click on this button to visit our Workers page for more clarification</p>
                <button className="home-btns py-2 px-4 text-3xl rounded-md bg-[#E3BFBF]">Employees Page</button>
            </div>
        </div>
    </div> );
}
 
export default About;