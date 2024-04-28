import { Link, useLoaderData } from "react-router-dom";
import Sliders from "../components/Sliders";

const Home = () => {
    const craftsix = useLoaderData()
    console.log(craftsix)
    return (
        <div>
            <div >
                <Sliders></Sliders>
            </div>
            <div className="container mx-auto">
                <h1 className="text-3xl text-center font-bold mt-5 mb-3">Craft Items</h1>
                <div >
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3 p-5 lg:p-3  ">

                        {
                            craftsix.slice(0, 6).map(myctsix =>

                                <div key={myctsix._id} className="card card-side bg-base-100 shadow-xl md:h-[300px]">
                                    <figure><img className="h-1/2 w-full " src={myctsix.photoURL} alt="" /></figure>
                                    <div className="card-body md:h-80 lg:h-[300px] ">
                                        <h2 className="card-title">{myctsix.item_name}</h2>
                                        <p>Price: {myctsix.price}</p>
                                        <p>Rating: {myctsix.rating}</p>
                                        <p>customization: {myctsix.customization}</p>
                                        <p>Stock Status: {myctsix.srock_status}</p>

                                        <div className="flex flex-col md:flex-row gap-2">
                                            <Link to={`/allcraftdtls/${myctsix._id}`} ><button className="btn btn-sm border-2 border-green-300 hover:bg-rose-300 hover:text-white">View Details</button></Link>
                                        </div>

                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;