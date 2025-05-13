import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Subhading from "../Shered/Subhading";
const Cetegory = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <Subhading subHading={"From 11:00am to 10:00pm"}
        hading={"ORDER ONLINE"}>
            
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
            <img src={slide1} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              Salads
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide2} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              shoup
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide3} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              pizza
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide4} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
             deseart
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide5} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              Salads
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              chiken
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide2} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
             shoup
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide3} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              Salads
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide4} alt="" />
            <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase text-center">
              desert
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cetegory;
