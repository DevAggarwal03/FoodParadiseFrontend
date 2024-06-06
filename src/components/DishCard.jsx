const DishCard = ({dish}) => {
    return (
    <div className="w-full flex justify-center items-center bg-[#D9D9D9]">
        <div className="w-full flex justify-center items-center">
            <div>
                <img className="w-[360px] h-[200px] rounded-r-[30px]" src={dish.image} alt="food pic"/>
            </div>
            <div className="w-full flex flex-col px-5 gap-y-10">
                <div className="w-full flex justify-between items-center gap-x-7">
                    <div className="text-3xl">
                        {dish.name}
                    </div>
                    <div className="text-3xl">
                    Rs {dish.price}
                    </div>
                </div>
                <div className="">
                    <p className="text-2xl">{dish.description}</p>
                </div>
            </div>
        </div>
    </div> );
}
 
export default DishCard;