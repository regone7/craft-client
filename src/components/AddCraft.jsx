

const AddCraft = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 p-3 ">
                    <div className="card shrink-0 lg:w-[650px]  md:w-[450px] shadow-2xl ">
                        <h1 className="text-3xl text-center pt-5 font-bold text-sky-500">Add Craft Item!</h1>
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text" placeholder="Example: Painting and Drawing" name="item_name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subcategory Name</span>
                                    </label>
                                    <input type="text" placeholder="Text" name="subcategory_Name" className="input input-bordered" required />
                                    <small className="text-gray-400" >Example: Landscape Painting/Portrait Drawing/Watercolour Painting/Oil Painting/Charcoal Sketching/Cartoon Drawing </small>
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
                                        <input type="text" placeholder="rating" name="item_name" className="input input-bordered " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Customization</span>
                                        </label>
                                        <input type="text" placeholder="Yes/No" name="item_name" className="input input-bordered" required />
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
                                        <input type="text" placeholder="In stock/Made to Order" name="price" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="form-control ">
                                    <input type="submit" value="Add" className="btn text-white bg-sky-400 mt-5 hover:bg-sky-600" />
                                </div>

                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddCraft;