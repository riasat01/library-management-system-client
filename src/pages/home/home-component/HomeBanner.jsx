import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerCard from './BannerCard'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import useAxiosSecure from '../../../custom-hooks/useAxiosSecure';
import { useEffect } from 'react';

const HomeBanner = () => {
    const [bannerData, setBannerData] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/banner')
            .then(res => {
                // console.log(res?.data);
                setBannerData(res?.data);
            })
            .catch(error => console.log(error.message));
    }, [])


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
                        bannerData?.map((banner, i) => <SwiperSlide key={i}><BannerCard banner={banner}></BannerCard></SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default HomeBanner;