import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const MyartCraft = () => {
    // const mycraft = useLoaderData()
    // console.log(mycraft)
    const {user}= useContext(AuthContext)
    console.log(user?.email)
    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
    },[user])
    return (
        <div className="md:p-5">
            {/* <div className="grid grid-cols-1  lg:grid-cols-2 gap-3 p-5 lg:p-3 ">

                {
                    mycraft.map(myct =>

                        <div key={myct._id} className="card card-side bg-base-100 shadow-xl">
                            <figure><img className="h-full " src={myct.photoURL} alt="" /></figure>
                            <div className="card-body md:h-80 lg:h-96 ">
                                <h2 className="card-title">{myct.item_name}</h2>
                                <p>Price: {myct.price}</p>
                                <p>Rating: {myct.rating}</p>
                                <p>customization: {myct.customization}</p>
                                <p>Stock Status: {myct.srock_status}</p>

                                <div className="flex flex-col md:flex-row gap-2">
                                    <button className="btn btn-sm btn-primary">Watch</button>
                                    <button className="btn btn-sm btn-primary">Watch</button>
                                </div>

                            </div>
                        </div>

                    )
                }
            </div> */}

        </div>
    );
};

export default MyartCraft;