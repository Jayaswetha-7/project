import { useTranslation } from "react-i18next";


import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FleetCards } from "../Data/FleetManagement";




const FleetManagementCard = () => {
  const {t}=useTranslation();
  return (
    <div className="w-full ">
      <div className="w-full h-full flex flex-col items-center justify-center py-[6%]">
        <h1 className="lg:text-[2.5vw] text-[9vw] sm:text-[3vw] font-bold text-center mb-[3%] text-HeadingColor">
          {/* Fleet Management System */}
          {t("FleetMngmtCard_fleet")}
        </h1>


        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FleetCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center group justify-center hover:bg-white bg-gray-50 rounded-xl hover:scale-105 hover:shadow-xl p-[8%]  transition-all duration-300 ease-in-out mx-4 md:mx-0
               h-auto "
            >
              {
                <card.icon className="lg:w-[30%] lg:h-[30%] w-[20%] h-[25%] mb-4 text-HeadingColor/90" />
              }

              <h1 className="lg:text-[1.3vw] sm:text-[2vw] text-[6vw] font-semibold text-center text-HeadingColor">
                {t(card.title)}
              </h1>
              <p className="mt-4 lg:text-[1vw] sm:text-[1.3vw] text-[4vw] text-center text-gray-500">
                {t(card.description)}
              </p>
              <div className="flex items-center justify-center mt-4   rounded-full h-[5vh] w-[5vh]  text-gray-800 group-hover:border-gray-800 group-hover:bg-gray-800 group-hover:text-white transition duration-500 ease-in-out">
                <MdKeyboardDoubleArrowRight className="text-2xl " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetManagementCard;
