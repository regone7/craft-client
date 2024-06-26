
import { Link, useLoaderData } from 'react-router-dom';

const CategoriesArt = () => {
    const collss = useLoaderData()
    console.log(collss)
    // const { item_name, subcategory_Name, short_description, photoURL, price } = collections
    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-3 '>
                    {
                        collss.slice(0,6).map(coll => (
                            <div key={coll._id} className="card  bg-base-100 shadow-xl">
                                <div className="card-body card-actions justify-start">
                                    <h2 className='text-center lg:text-sm flex justify-start lg:-ml-5'>{coll.subcategory_Name}</h2>
                                    <p className='text-center'>{coll.item_name}</p>
                                </div>
                                <figure><img className='w-full h-[100px]' src={coll.photoURL} alt="" /></figure>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default CategoriesArt;