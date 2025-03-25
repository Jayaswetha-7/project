import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// import desert_bg from "../../assets/desert_bg.webp";
import { testimonials } from "../Data/ContactData";

import { useTranslation } from "react-i18next";


const Testimonials = () => {

   const {t} = useTranslation();

  return (
    <div
      className="w-full relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        // backgroundImage: `url(${desert_bg})`,
        backgroundImage: `url('https://res.cloudinary.com/djjwvuixb/image/upload/t_Large Screen Size/v1740368919/desert_bg_s5u0mo.webp')`,
      }}
    >
      <div className="w-full absolute  h-full bg-black/10"></div>

      <div className="absolute flex flex-col items-center justify-center h-full w-full ">
        {/* heading */}
        <div className="sm:text-[3rem] text-[2rem] font-semibold font-montserrat text-white  ">
          {/* Our Client Says */}
          {t("Testimonials_Our")}
        </div>
        {/* card */}
        <div
          dir="ltr"
          className="flex flex-col items-center justify-center   gap-3 container md:w-[60%] w-[85%] sm:h-fit    p-3 rounded-2xl"
        >
          <Swiper
            className="w-full h-full  "
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                className=" flex flex-col  justify-center items-center  container w-[40%] sm:h-[9vw] h-[30vh]   mt-5 p-3 rounded-2xl text-white"
                key={index}
              >
                <img
                  src={testimonial.proimg}
                  alt="profile"
                  className="w-[60px] h-[60px] rounded-full  mx-auto"
                />
                <div className=" text-[2rem]  font-semibold text-center mt-2 sm:mt-5 ">
                  {testimonial.name}
                </div>
                <div className=" text-[1rem]  font-semibold text-center text-gray-300 ">
                  {testimonial.pos}
                </div>
                <div className="lg:text-[1.5rem] text-[1rem] text-center    mt-2 h-[20vh] text-pretty italic sm:mt-5">
                  {t(testimonial.review)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials