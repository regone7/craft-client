import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const MyartCraft = () => {
    // const mycraft = useLoaderData()
    // console.log(mycraft)
    const { user } = useContext(AuthContext)
    const [emsearch, setEmsearch] = useState([])
    // console.log(user?.email)
    const [users, setUsers] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/crafts/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEmsearch(data);
            })
    }, [user?.email, users])


    const handelDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Succesfully  deleted.",
                                icon: "success"
                            });
                            //   const remaining = users.filter(user=>user._id !==_id)
                            //   setUsers(remaining)
                            setUsers(!users)
                        }

                    })
            }
        });
    }

    return (
        <div className="md:p-5">
            <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-3 p-5 lg:p-3 ">

                {
                    emsearch.map(myct => 

                        <div key={myct._id} className="card h-[400px]  bg-base-100 shadow-xl">
                            <figure><img src={myct.photoURL} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> {myct.item_name} </h2>
                                <p>Price: {myct.price}</p>
                                <p>Rating: {myct.rating}</p>
                                <p>customization: {myct.customization}</p>
                                <p>Stock Status: {myct.srock_status}</p>
                                <div className="card-actions justify-end">
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Link to={`/updatecrfts/${myct._id}`} ><button className="btn btn-sm bg-green-200 text-black hover:bg-green-400 ">Update</button></Link>
                                        <button onClick={() => handelDelete(myct._id)} className="btn btn-sm text-black bg-red-200 hover:bg-red-400 ">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>   

                    )
                }
            </div>

        </div>
    );
};

export default MyartCraft;