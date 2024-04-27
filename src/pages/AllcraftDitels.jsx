import { useLoaderData } from "react-router-dom";


const AllcraftDitels = () => {
    const allditels=useLoaderData()
    
    return (
        <div>
            <p>{allditels.item_name}</p>
            
        </div>
    );
};

export default AllcraftDitels;