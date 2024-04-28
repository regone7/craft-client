import { Link, useLoaderData } from "react-router-dom";


const AllArtCraft = () => {
    const allcraft = useLoaderData()
    // console.log(allcraft)
    
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 ">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Subcategory Name</th>
                                    <th>Srock Status</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                allcraft.map((allcrafts,index)=>
                                    
                                <tr key={allcrafts._id}  >
                                    <th>{index+1}</th>
                                    <td>{allcrafts.name}</td>
                                    <td>{allcrafts.subcategory_Name}</td>
                                    <td>{allcrafts.srock_status}</td>
                                    <td><Link to={`/allcraftdtls/${allcrafts._id}`} ><button className="btn btn-sm hover:bg-lime-100">View Details</button></Link></td>
                                </tr>    

                                )
                            }
                                
                            </tbody>
                            
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllArtCraft;