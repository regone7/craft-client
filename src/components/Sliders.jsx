
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Sliders = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div >
                        <div className="hero w-full bg-cover md:h-[400px]  h-[250px]" style={{ backgroundImage: 'url(https://i.ibb.co/fGT4gV2/pexels-pok-rie-33563-1045850.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <p className="mb-5">A genre of art that focuses on depicting natural scenery, such as mountains, valleys, forests, rivers, and skies. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  >
                        <div className="hero w-full bg-cover md:h-[400px]  h-[250px]" style={{ backgroundImage: 'url(https://i.ibb.co/VBBH60Y/pexels-digitalbuggu-191295.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <p className="mb-5"> The art of capturing the likeness and personality of a person through a visual representation. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  >
                    <div className="hero w-full bg-cover md:h-[400px]  h-[250px]" style={{ backgroundImage: 'url(https://i.ibb.co/9G2qdBR/pexels-leeloothefirst-6487195.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <p className="mb-5">A versatile and expressive medium that involves using pigments suspended in water to create vibrant and translucent artworks. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  >
                    <div className="hero w-full bg-cover md:h-[400px]  h-[250px]" style={{ backgroundImage: 'url(https://i.ibb.co/F4dLDSJ/pexels-curiosophotography-288100.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <p className="mb-5"> A versatile and popular medium that involves mixing pigments with a drying oil, typically linseed oil, to create vibrant and long-lasting artworks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Sliders;