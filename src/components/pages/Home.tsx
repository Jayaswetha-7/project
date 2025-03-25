// import Fourthsection from "../About/Fourthsection";
import CarouselCard from "../home/Carousalcard";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";


import NewsEvents from "../home/NewsEvents";

import WeCanDo from "../home/WeCanDo";

import { Link } from "react-router-dom";
import FleetManagementCard from "../home/FleetManagementCard";
import ServiceSection from "../home/ServiceSection";
import Affiliations from "../About/Affiliations";
import Testimonials from "../home/Testimonials";
import MapSection from "../home/MapSection";
import AboutSection from "../home/AboutSection";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className=" w-full overflow-hidden">
      <div className="relative w-full">
     
          <CarouselCard />
      
        <div className=" absolute inset-0 flex justify-center items-center bg-black bg-opacity-15 text-white">
          <div className="landing_text  w-full ml-[6%] px-4 md:px-8">
            <h1 className="md:text-[3.5vw] text-[7vw] font-montserrat font-bold ">
              {/* Innovative Solutions for */}
              {t("Home_Innovative")}
              <br />
              {/* All Your Logistics Needs */}
              {t("Home_All")}
            </h1>

            <Link
              to="/"
              className="mt-6 inline-block px-[7%] py-[3%] md:px-[3%] md:py-[1%] hover:scale-110 rounded-full border-2 border-transparent border-white hover:bg-transparent hover:text-white md:text-[1vw] text-[2.5vw] font-semibold duration-300 ease-in-out"
            >
              {/* get a quote */}
              {t("Home_Getquote")}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 ">
        <AboutSection />
      </div>
      <ServiceSection />
      <NewsEvents />
      <WeCanDo />
      <FleetManagementCard />
      <Affiliations />

      <Testimonials />

      {/* <Fifthsection /> */}

      <MapSection />
      <Footer />
    </div>
  );
};

export default Home;
