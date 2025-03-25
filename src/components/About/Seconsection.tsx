import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbWorldCheck } from "react-icons/tb";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Secondsection: React.FC = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col w-full h-full md:bg-white bg-HeadingColor md:text-black">
      <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-5 space-y-10 p-5">
        <div className="flex flex-col w-full lg:w-[60%] justify-center md:p-[3%] p-[5%] hover:scale-105 duration-300 ease-in-out space-y-6">
          <p className="text-[2rem] mb-[3%]">
            {/* Why Choose Us */}
            {t("AboutSecondsection_why")}
            </p>
          <p className="md:text-[1.2rem] text-[1rem]">
          {/* If you rely on air freight for your business, rely on Fifo for cost-effective, smooth delivery of your cargo via our air freight forwarding services. Thanks to our strategic alliances around the globe, 
          you have the flexibility to choose from a range of air freight service options tailored to your precise needs, complete with end-to-end visibility. */}
          {t("AboutSecondsection_if")}
          </p>
          <button className="p-3 mt-5 w-[50%] rounded-md border-2 border-black hover:bg-transparent hover:text-HeadingColor duration-300 ease-in-out">
            {/* Read More */}
            {t("AboutSecondsection_read")}
          </button>
        </div>

        <div className="flex md:bg-HeadingColor bg-white md:text-white rounded-md md:p-[3%] p-[5%] flex-col w-full lg:w-[60%] justify-center hover:scale-105 duration-300 ease-in-out">
          <p className="text-[2rem] mb-[3%]">
            {/* Our Vision */}
            {t("AboutSecondsection_Vision")}
            </p>
          <p className="md:text-[1.2rem] text-[1rem]">
            {/* Fifo is a global supply chain logistics company that provides ocean and air freight forwarding, warehousing, distribution services, and supply chain management – a
            seamlessly connected suite of supply chain solutions that delivers superior value, reliability, and expertise.  */}
          {t("AboutSecondsection_global")}
          </p>
        </div>

        <div className="flex md:bg-HeadingColor bg-white md:text-white rounded-md md:p-[3%] p-[5%] flex-col w-full lg:w-[60%] h-auto justify-center hover:scale-105 duration-300 ease-in-out">
          <p className="text-[2rem] mb-[3%]">
            {/* Our Mission */}
            {t("AboutSecondsection_Mission")}
            </p>
          <p className="md:text-[1.2rem] text-[1rem]">
          {/* The mission of our company,  To provide fast, secure, and cost-effective transportation and supply chain services, ensuring timely delivery and customer satisfaction. */}
            {t("AboutSecondsection_mission")}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row mt-[5%] bg-white p-5 space-y-5 lg:space-y-0">
        <div className="lg:w-[50%] w-full flex flex-col lg:flex-row">
          <div className="w-full md:h-96 lg:w-[40%] overflow-hidden bg-cover bg-no-repeat hidden md:block">
            <img
              className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
              src="https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg"
              alt="Service"
            />
          </div>
          <div className="w-full lg:w-[60%] bg-gray-800 flex flex-col items-center justify-center p-5">
            <TbWorldCheck className="lg:w-[20%] w-[25%] md:w-[15%] h-auto text-white text-center" />
            <p className="text-[1.8rem] lg:text-[2.5rem] font-semibold text-white text-center">
              {/* Need Our Service */}
              {t("AboutSecondsection_Need")}
            </p>
            <div className="flex items-center justify-center w-full mt-5 space-x-2 hover:scale-105 duration-300 ease-in-out">
              <Link to="/" className="text-white font-bold text-[1.3rem]">
                {/* Contact with Us */}
                {t( "AboutSecondsection_contact")}
              </Link>
              <FaArrowRightLong className="text-white w-auto" />
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] w-full flex flex-col lg:flex-row">
          <div className="w-full md:h-96 lg:w-[40%] overflow-hidden bg-cover bg-no-repeat hidden md:block">
            <img
              className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
              src="https://images.pexels.com/photos/26224666/pexels-photo-26224666.jpeg"
              alt="Service"
            />
          </div>
          <div className="w-full lg:w-[60%] bg-HeadingColor flex flex-col items-center justify-center p-5">
            <FaPersonCircleCheck className="lg:w-[20%] w-[25%] md:w-[15%] h-auto text-white text-center" />
            <p className="text-[1.8rem] lg:text-[2.5rem] font-semibold text-white text-center">
              {/* Discuss With Agents */}
              {t( "AboutSecondsection_discus")}
            </p>
            <div className="flex items-center justify-center w-full mt-5 space-x-2  hover:scale-105 duration-300 ease-in-out">
              <Link to="/" className="text-white font-bold text-[1.3rem]">
                
                {t( "AboutSecondsection_contact")}
              </Link>
              <FaArrowRightLong className="text-white w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
