import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/menu/guides.jpeg";
import slide2 from "../../../assets/menu/guides-2.jpeg";
import slide3 from "../../../assets//menu/guides-3.jpeg";
import slide4 from "../../../assets/menu/guides-4.jpeg";
import slide5 from "../../../assets/menu/guids.jpg";
import slide6 from "../../../assets/menu/rice-photo.jpeg";
import slide7 from "../../../assets/menu/g2.jpg";
import slide8 from "../../../assets/menu/guides.jpeg";
import slide9 from "../../../assets/menu/guides-banner.jpeg";
import Subhading from "../Shered/Subhading";
const FarmingGuids = () => {
  return (
    <div className="bg-gradient-to-r from-[#780206] to-[#061161] py-10">
       <div className="max-w-6xl mx-auto">
         <Subhading subHading={"Bangladesh Agriculture"}
        hading={"Farming Guides"}>
            
        </Subhading>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide1} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
              Potato Plant
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide2} alt="" />
            <h2 className="absolute bg-black/30  bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
              Vegetables
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide3} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
              Rice plant
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide4} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
           Vegetables
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide5} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
           Watering the tree
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide6} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
         Vegetables
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide7} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
              Vegetables
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide8} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
             Vegetables
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[300px] object-cover" src={slide9} alt="" />
            <h2 className="absolute bg-black/30 bottom-5 left-1/2 transform -translate-x-1/2 text-xl font-black text-white uppercase text-center">
            Vegetables
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
       </div>
    </div>
  );
};

export default FarmingGuids;
