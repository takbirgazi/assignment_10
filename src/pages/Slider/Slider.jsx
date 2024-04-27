import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { Navigation } from 'swiper/modules';

import { useLoaderData } from 'react-router-dom';

const Slider = () => {
    const spotImage = useLoaderData();
    return (
        <div className="">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {spotImage.map(card=><SwiperSlide key={card._id}><img key={card._id} src={card.image} /></SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Slider;
