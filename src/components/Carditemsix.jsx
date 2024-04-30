// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Carditemsix = () => {
    const craftsix = useLoaderData()
    console.log(craftsix)
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 p-3   ">

                {
                    craftsix.slice(0,6).map(myctsix =>(
                        <div key={myctsix._id} className="card  bg-base-100 shadow-xl image-full">
                            <figure><img src={myctsix.photoURL} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{myctsix.item_name}</h2>
                                <p>Price: {myctsix.price}</p>
                                <p>Rating: {myctsix.rating}</p>
                                <p>customization: {myctsix.customization}</p>
                                <p>Stock Status: {myctsix.srock_status}</p>

                                <div className="card-actions justify-end">
                                    <Link to={`/allcraftdtls/${myctsix._id}`} ><button className="btn btn-sm border-2 border-green-300 hover:bg-rose-300 hover:text-white">View Details</button></Link>
                                </div>
                            </div>
                        </div>)

                    )
                }
            </div>
        </div>
    );
};

export default Carditemsix;