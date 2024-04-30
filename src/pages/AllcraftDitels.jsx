import { useLoaderData } from "react-router-dom";
import { IoPricetagOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";


const AllcraftDitels = () => {
    const allditels = useLoaderData()
    const {  item_name, subcategory_Name, short_description, photoURL, price, rating, customization, processing_time, srock_status } = allditels;
    // console.log(allditels);

    return (
        <div>
            <div className='h-full'>
                <div className='md:my-7' >
                    <h1 className='font-bold text-center text-3xl mb-3 '>Details</h1>
                </div>
                <div>
                    <img src={photoURL} alt="" className=" hidden md:flex md:w-5/6  md:mx-auto  md:bg-gray-500 md:rounded-lg md:shadow-md md:-mb-12" />
                </div>
                <section>
                    <div className="bg-violet-200 md:h-[500px]">
                        <div className="container flex flex-col items-center px-4 py-9 pb-24 mx-auto text-center lg:pb-56 md:py-24 md:px-32 lg:px-32 text-gray-900">
                            <h1 className="text-2xl font-bold leading-none sm:text-2xl xl:max-w-3xl text-gray-900">{subcategory_Name}</h1>
                            <p className="mt-4 mb-2 text-lg sm:mb-3 md:mb-1 xl:max-w-3xl text-gray-900">{item_name}</p>
                            <p>{short_description}</p>
                            <div className='px-2 py-2 my-1 '>
                                <h1 className='font-bold text-purple-700  border-2 border-yellow-500 rounded-md px-2'>{srock_status}</h1>
                            </div>
                            <div className="flex items-center  space-x-1 my-1">
                                <IoPricetagOutline />
                                <h1 className="font-bold text-red-500"> <span className='font-bold text-black'>Price:</span> {price} </h1>
                            </div>
                            <div className="flex items-center  space-x-1 my-1">

                                <h1 className="font-semibold text-gray-500"><span className="text-black">Rating:</span> {rating}</h1>
                                <FaRegStar />
                            </div>
                            <div className="flex items-center  space-x-1 font-semibold my-1">

                                <h1 className="text-pink-500"><span className='font-semibold text-black'>Customization: </span>{customization}</h1>
                            </div>

                            <div className="flex items-center  space-x-1 font-semibold my-1">
                                <MdAccessTime />
                                <h1 className="font-bold" ><span className='font-semibold text-black'>Processing time: </span>{processing_time}</h1>
                            </div>


                            <div className="flex flex-wrap flex-col md:flex-row justify-center gap-1 md:my-3">
                                <p className=' p-1 px-3 '> Nmae: {allditels?.name }</p>
                                <p className=' rounded-md p-1 px-3'> Email: {allditels?.email}</p>

                            </div>
                        </div>
                    </div>
                    <img src={photoURL} alt="" className="w-5/6  mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-48 md:-mt-32 md:hidden" />
                </section>
            </div>

        </div>
    );
};

export default AllcraftDitels;