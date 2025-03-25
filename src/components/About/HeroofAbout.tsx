import React from "react";
import { GiShipBow } from "react-icons/gi";
import { FaLuggageCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const backgroundUrl =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHUybzh1ZmdhNDF4cnNkMDI5dXhrNmp0YWlzcm1xN3o3MWo1bGR5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XHELJ878xvgVHeNvJv/giphy.gif";

const HeroofAbout: React.FC = () => {
  const {t} =useTranslation();
  return (
    <div className="flex flex-col w-full">
      <div
        className="h-[40vh] bg-no-repeat sm:bg-repeat md:bg-contain bg-center flex items-end"
        style={{
          backgroundImage: `url("${backgroundUrl}")`,
        }}
      >
        <div className="flex flex-col justify-end  h-full container mx-auto">
          <h1 className=" text-4xl md:text-5xl ms-5 font-semibold font-montserrat mb-5 text-white">
            {/* About us */}
            {t("AboutHerosection_about")}
          </h1>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row  justify-center items-center">
        <div className="xl:w-[50%] w-full h-full flex justify-center items-center p-4 ">
          <img
            src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="flex-1"
            alt="About Us"
          />
        </div>
        <div className="xl:w-[50%] w-full flex-col  h-full flex container mx-auto p-[3%]  ">
          <h3 className=" md:text-[2.2rem] lg:text-[1.4rem] text-[2rem] font-mono text-HeadingColor w-full">
            {/* About us */}
            {t("AboutHerosection_about")}
          </h3>
          <p className="3xl:text-[3.7rem] xl:text-[2rem] lg:text-[2.8rem] text-[2.2rem]  w-full">
            {/* Delivering Efficiency One Mile at a Time */}
            {t("AboutHerosection_delivering")}
          </p>
          <p className="3xl:text-[1.4rem] lg:text-[1.2rem] text-[1.2rem] mt-[3%]">
            {/* The foundation of the business consists of services such as international freight forwarding 
          by air or ocean, contract logistics such as warehousing, and transportation such as trucking. 
          These services can act as standalone products or as part of our broader offering as a supply chain logistics provider. */}
            {t("AboutHerosection_foundation")}
          </p>
          <div className="flex sm:flex-col  mt-[10%] md:mt-[5%] mx-auto items-center gap-3 w-full">
            <div className="flex items-center  w-full space-x-5">
              <GiShipBow className="text-[3rem] " />
              <p className="font-bold md:text-[1.2rem] text-[1rem] ">
                {/* Real-time logistics */}
                {t("AboutHerosection_real")}
              </p>
            </div>
            <div className="flex items-center  w-full space-x-5">
              <FaLuggageCart className="text-[3rem]" />
              <p className="font-bold md:text-[1.2rem] text-[1rem] ">
                {/* On-point logistics */}
                {t("AboutHerosection_point")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroofAbout;
