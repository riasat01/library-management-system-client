import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import h1 from '../../../assets/home-banner/home-b-1.jpg'
import h2 from '../../../assets/home-banner/home-b-2.jpg'
import h3 from '../../../assets/home-banner/home-b-3.jpg'
import BannerCard from './BannerCard'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomeBanner = () => {

    const banners = [h1, h2, h3];
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        banners.map((img, i) => <SwiperSlide key={i}><BannerCard img={img}></BannerCard></SwiperSlide>)
                    }
                    {/* <SwiperSlide>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(${photoURLs?.photo_2}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'cover'
                        }}
                            className="h-[80vh] flex justify-center items-center pt-16">
                            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">{titles?.title_2}</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(${photoURLs?.photo_3}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'cover'
                        }}
                            className="h-[80vh] flex justify-center items-center pt-16">
                            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">{titles?.title_3}</h1>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </>
        </div>
    );
};

export default HomeBanner;