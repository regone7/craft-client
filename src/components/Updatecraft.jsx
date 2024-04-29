
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatecraft = () => {
    const [selectedOption, setSelectedOption] = useState('');
    // const [updt,setUpdt]= useState('')
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const loaderupdate=useLoaderData()
    console.log(loaderupdate)
    // const { id } = useParams()
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/craftss/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setUpdt(data)
    //         })
    // }, [id])

    // console.log(updt)
    const handelUpdate=(e)=>{
        e.preventDefault();
        const item_name = e.target.item_name.value;
        const subcategory_Name = selectedOption;
        const short_description = e.target.short_description.value;
        const photoURL = e.target.photoURL.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing_time = e.target.processing_time.value;
        const srock_status = e.target.srock_status.value;

        const upinfo={ item_name, subcategory_Name, short_description, photoURL, price, rating, customization, processing_time, srock_status }
        console.log(upinfo)
        // console.log(id)
        fetch(`http://localhost:5000/updatesinfo/${loaderupdate._id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upinfo)
        })
        .then(res => res.json())
        .then(data => {
             console.log(data)
             console.log("success")
             if(data.matchedCount>0){
                Swal.fire({
                    title: "Update!",
                    text: "Succesfully  Updated.",
                    icon: "success"
                  });
             }
            
        })
       
    }
    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 p-3 ">
                    <div className="card shrink-0 lg:w-[650px]  md:w-[450px] shadow-2xl ">
                        <h1 className="text-3xl text-center pt-5 font-bold text-sky-500">Update Craft Item!</h1>
                        <div className="card-body">
                            <form onSubmit={handelUpdate} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text"  placeholder="Write.." name="item_name" className="input input-bordered" required />
                                </div>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Subcategory Name</span>
                                    </label>

                                    <select className=" h-12 rounded-md"  value={selectedOption} onChange={handleChange} required>
                                        <option value="">Select option</option>
                                        <option value="Landscape_Painting">Landscape Painting</option>
                                        <option value="Portrait_Drawing">Portrait Drawing</option>
                                        <option value="Watercolour_Painting">Watercolour Painting</option>
                                        <option value="Oil_Painting">Oil Painting</option>
                                        <option value="Charcoal_Sketching">Charcoal Sketching</option>
                                        <option value="Cartoon_Drawing">Cartoon Drawing</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" placeholder="Write description"  name="short_description" className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" required />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="rating" name="rating" className="input input-bordered " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Customization</span>
                                        </label>
                                        <input type="text" placeholder="Yes/No" name="customization" className="input input-bordered" required />
                                    </div>

                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Processing time</span>
                                        </label>
                                        <input type="text" placeholder="Days" name="processing_time" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Stock Status</span>
                                        </label>
                                        <input type="text" placeholder="In stock/Made to Order" name="srock_status" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="form-control ">
                                    <input type="submit" value="Update" className="btn text-white bg-sky-400 mt-5 hover:bg-sky-600" />
                                </div>

                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Updatecraft;