import Subhading from "../../Shered/Subhading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import quite from '../../../../assets/home/quote-left-solid.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";


const Testomonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <Subhading
        subHading={"What out clients say"}
        hading={"TESTIMONIALS"}
      ></Subhading>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly></Rating>
             <img className="w-[50px] mt-5" src={quite} alt="" />
              <p className="my-5 text-center">{review.details}</p>
              <h2 className="text-2xl font-black text-orange-400">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testomonial;
