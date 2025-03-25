import React from "react";
import afflogo from "../../assets/AffiliationLogo.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const partners = [
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
  { name: "Apple", logo: afflogo },
];

const Affiliations: React.FC = () => {
  return (
    <div className="w-screen bg-white h-[15%] overflow-hidden flex  items-center whitespace-nowrap m-5 md:py-5">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={"20px"}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 }, // 2 slides on mobile screens
          768: { slidesPerView: 4 }, // 4 slides on tablets and larger screens
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <img src={partner.logo} className="mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Affiliations;
