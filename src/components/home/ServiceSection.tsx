import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import bgvideo from "../../assets/truckVideo.webm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const ServiceSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      link: "/service#air_freight",
      title: "ServiceSection_services.air.title", // "Air Freight",
      description: "ServiceSection_services.air.desc",
      // "Expedited global shipping with priority handling for time-sensitive cargo",
    },
    {
      link: "/service#ocean_freight",
      title: "ServiceSection_services.ocean.title", // "Ocean Freight",
      description: "ServiceSection_services.ocean.desc",
      // "Cost-effective solutions for large-volume shipments via FCL & LCL services",
    },
    {
      link: "/service#road_rail_freight",
      title: "ServiceSection_services.road.title", // "Road & Rail Freight",
      description: "ServiceSection_services.road.desc",
      // "Secure and flexible inland transportation to ensure last-mile connectivity",
    },
    {
      link: "/service#customs_clearance",
      title: "ServiceSection_services.customs.title", // "Customs Clearance",
      description: "ServiceSection_services.customs.desc",
      // "Expert handling of import/export documentation and regulatory compliance",
    },
    {
      link: "/service#warehouse",
      title: "ServiceSection_services.warehouse.title", // "Warehouse",
      description: "ServiceSection_services.warehouse.desc",
      // "Strategically located facilities for optimized storage and fulfillment",
    },
    {
      link: "/service#end_to_end_tracking",
      title: "ServiceSection_services.end.title", // "End-to-End Tracking",
      description: "ServiceSection_services.end.desc",
      // "Real-time shipment visibility with digital tracking solutions",
    },
  ];
  return (
    <div className="relative w-full md:h-[100vh] flex items-center justify-center text-white overflow-hidden mt-4 sm:mt-20">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/djjwvuixb/video/upload/v1740368952/truckVideo_iq2i6y.webm"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Service Content */}
      <div className="relative z-10 text-center w-full p-5 h-full flex flex-col select-none items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">
          {/* Our Services */}
          {t("Servicesection_Our")}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-10 md:gap-y-0 gap-y-3 w-[80vw] items-center h-[90%] 2xl:h-[70%] container mx-auto">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="flex flex-col  justify-between items-center group md:w-1/4 md:h-[40%] lg:h-[35%]    hover:bg-white/70 bg-gray-50/10 rounded-xl hover:scale-105 hover:shadow-xl p-5  transition-all duration-300 ease-in-out   "
            >
              <h1 className="text-[1.3rem] flex-1 font-semibold text-center group-hover:text-HeadingColor">
                {t(service.title)}
              </h1>
              <p className="mt-4 2xl:mt-2 text-[0.8rem] 2xl:text-[1.2rem]  text-center flex-1 text-white group-hover:text-black">
                {t(service.description)}
              </p>
              <MdKeyboardDoubleArrowRight className="2xl:text-2xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
