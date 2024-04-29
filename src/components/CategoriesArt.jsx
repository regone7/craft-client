
import { useLoaderData } from 'react-router-dom';

const CategoriesArt = () => {
    const collections = useLoaderData()
    // console.log(collections)
    // const { item_name, subcategory_Name, short_description, photoURL, price } = collections
    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-3 '>
                    {
                        collections.slice(0, 6).map(coll => (
                            <div className="card  bg-base-100 shadow-xl">
                                <div className="card-body card-actions justify-start">
                                    <h2 className='text-center lg:text-sm flex justify-start'>{coll.subcategory_Name}</h2>
                                    <p className='text-center'>Price: {coll.price}</p>
                                </div>
                                <figure><img src={coll.photoURL} alt="" /></figure>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default CategoriesArt;