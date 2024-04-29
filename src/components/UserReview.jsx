
import { Slide } from "react-awesome-reveal";

const UserReview = () => {
    return (
        <div>
            <div className="container mx-auto " >
                <section className="py-3 bg-gray-100 my-5 ">
                    <div className="container flex flex-col  items-center justify-center p-4 mx-auto sm:p-10">
                        <p className="p-2 text-3xl font-medium tracking-wider text-center uppercase mb-7">User Comment</p>

                        <div className="flex flex-row flex-wrap-reverse justify-center mt-10">
                            <div className="flex flex-col justify-center w-full px-4 mx-3 my-6 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                                <div className="flex-1 my-2">
                                    <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                    <Slide direction={'up'}>
                                        <p>One of the beautiful aspects of painting and drawing is the endless room for exploration and growth.</p>
                                    </Slide>

                                </div>

                            </div>
                            <div className="flex flex-col justify-center w-full px-4 mx-3 my-6 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                                <div className="flex-1 my-4">
                                    <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                    <Slide direction={'up'}>
                                        <p>As you practice and refine your skills, you'll discover new techniques, styles, and subjects that inspire you. </p>
                                    </Slide>
                                </div>

                            </div>

                            <div className="flex flex-col justify-center w-full px-4 mx-3 my-6 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                                <div className="flex-1 my-2">
                                    <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                    <Slide direction={'up'}>
                                        <p>When choosing painting and drawing tools, consider factors such as your budget, preferred medium, and intended use.</p>
                                    </Slide>

                                </div>

                            </div>
                            <div className="flex flex-col justify-center w-full px-4 mx-3 my-6 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                                <div className="flex-1 my-4">
                                    <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                    <Slide direction={'up'}>
                                        <p>When choosing painting and drawing tools, consider factors such as your budget, preferred medium, and intended use.</p>
                                    </Slide>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default UserReview;