import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full max-h-screen flex items-center select-none">
      <div className="w-full">
        <div className="w-full flex flex-col lg:flex-row items-center lg:h-[50vh] container mx-auto mt-[8%]">
          <div className="w-full lg:w-[100%] p-6 lg:p-12">
            <h1 className="md:text-[2vw] text-[5vw]  font-bold text-HeadingColor">
              {/* About Us */}
              {t("Aboutsect_aboutus")}
            </h1>
            <p className="md:text-[3.5vw] text-[4vw]  mb-[2%] w-full">
              {/* Providing Global Freight Forwarding Solutions */}
              {t("Aboutsect_Providing")}
            </p>
            <Link
              to="/"
              className="mt-2 p-2 sm:p-3 md:px-5 inline-block hover:scale-110 rounded-full border-2  border-black   md:text-[1vw] text-[2.5vw] font-semibold duration-300 ease-in-out"
            >
              {/* Learn More */}
              {t("Aboutsect_Learn")}
            </Link>
          </div>

          <div className="w-full lg:w-[100%] p-6 lg:p-12">
            <p className="md:text-[1.3vw] text-[3.5vw] mb-6 w-full">
              {/* Global freight forwarding solutions facilitate the seamless
              transportation of goods across international borders through a
              network of logistics services. These solutions include air, sea,
              and land freight, customs clearance, warehousing, and supply chain
              management. By leveraging industry expertise and technology,
              freight forwarders ensure efficient, cost-effective, and compliant
              shipping for businesses worldwide. */}
              {t("Aboutsect_Global")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
