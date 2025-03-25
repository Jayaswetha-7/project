import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../Data/ServiceData";
import { useTranslation } from "react-i18next";
import Footer from "../Footer";

const backgroundUrl =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHUybzh1ZmdhNDF4cnNkMDI5dXhrNmp0YWlzcm1xN3o3MWo1bGR5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XHELJ878xvgVHeNvJv/giphy.gif";

const Service = () => {
  //location
  const { t } = useTranslation();
  const location = useLocation();
  const sectionHash = location.hash.replace("#", "") as keyof typeof services;
  console.log(sectionHash);
  const validSections = Object.keys(services);
  const [selectedService, setSelectedService] = useState<keyof typeof services>(
    validSections.includes(sectionHash) ? sectionHash : "air_freight"
  );
  console.log(selectedService);
  console.log("renderd Comp");
  useEffect(() => {
    console.log(`sectionHash : ${sectionHash}`);
    console.log(`validSections : ${validSections}`);
    console.log(`selectedService : ${selectedService}`);
    console.log(location.pathname);

    const hash = location.hash.replace("#", "");
    console.log("hash", hash);
    if (validSections.includes(hash)) {
      setSelectedService(hash);
      console.log("inside ofd f");
    }
  }, [location.hash]);

  // Handle clicking a service
  const handleServiceClick = (section: keyof typeof services) => {
    setSelectedService(section);
    window.location.hash = `#${section}`;
  };

  return (
    <div className="flex flex-col w-screen">
      {/* top section */}
      <div
        className="h-[40vh] bg-no-repeat sm:bg-repeat md:bg-contain bg-center flex items-end"
        style={{
          backgroundImage: `url("${backgroundUrl}")`,
        }}
      >
        <div className="flex flex-col justify-end  h-full container mx-auto mb-5">
          <h1 className=" text-4xl md:text-5xl ms-5 font-semibold font-montserrat  text-white">
            {/* Our Services */}
            {t("Servicepg_Our")}
          </h1>
          {/* <h2 className="mb-5">home/service</h2> spafor brudcrumps */}
        </div>
      </div>
      {/* below that */}
      <div className="container flex flex-col md:flex-row gap-8 mx-auto mt-[5vh]">
        {/* Left Side: Service List */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 h-fit">
          <h2 className="text-xl font-semibold mb-4">
            {/* See All Services */}
            {t("Servicepg_See")}
          </h2>
          <ul className="space-y-2">
            {Object.entries(services).map(([key, section]) => (
              <li
                onClick={() => handleServiceClick(`${key}`)}
                className={`p-2 cursor-pointer hover:bg-gray-200 rounded ${
                  selectedService === key
                    ? "bg-HeadingColor text-white hover:bg-black/80 "
                    : ""
                }`}
              >
                {t(section.name)}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Service Content */}
        <div className="w-full md:w-2/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              {/* {services[selectedService].name} */}
              {t(services[selectedService].name)}
            </h2>
            <hr className="border-t border-HeadingColor mb-4" />
            <img
              src={services[selectedService].image}
              alt={selectedService}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              {t(services[selectedService].description) ||
                "Description not available."}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
