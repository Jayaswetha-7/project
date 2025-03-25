import { useTranslation } from "react-i18next";
const NewsEvents = () => {
  const {t} =useTranslation();
  const EventData = [
    {
      date: "NewsEvents_EventData.day1.date",//"June 14 ,2025",
      description: "NewsEvents_EventData.day1.desc",//"Our new office in Kuwait is now open for business",
      image:
        "https://images.pexels.com/photos/30758553/pexels-photo-30758553/free-photo-of-modern-skyscrapers-under-clear-blue-sky-in-kuwait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      date: "NewsEvents_EventData.day2.date",//"January 24 ,2025",
      description: "NewsEvents_EventData.day2.desc",//"Sofia Joined our team as a new marketing manager",
      image:
        "https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div
      className={`flex md:flex-row flex-col md:h-[70vh] h-fit w-[full] items-center justify-center bg-cover bg-center bg-opacity-35 bg-gray-300`}
    >
      {/* writing */}
      <div className="landing_text md:w-[50vw] text-center md:text-left w-full  p-10 font-montserrat">
        <h1 className="sm:text-[2vw] md:text-[2vw] text-[3vw]">
          {/* News & Events */}
          {t("NewsEvents_news")}
        </h1>
        <h2 className=" text-[6vw] md:text-[3vw]  font-bold ">
          {/* Latest */}
          {t("NewsEvents_Latest")}{" "}
          <span className="text-HeadingColor ">
            {/* Industry */}
            {t("NewsEvents_industry")}
            <br />
            {/* Insights from */}
            {t("NewsEvents_insight")}
          </span>{" "}
          FIFO
        </h2>
        <h3 className="md:text-[1vw] text-sm text-pretty mt-2 leading-relaxed ">
          {/* Discover expert insights on global shipping, trade compliance, and
          innovative strategies to streamline your logistics operations
          worldwide. */}
          {t("NewsEvents_discover")}
        </h3>
      </div>
      {/* images */}
      <div className="flex md:w-[50vw]  gap-2 items-center justify-center md:h-[60vh]">
        <div className="flex flex-col md:flex-row h-full p-4">
          {EventData.map((data, index) => (
            <div
              className="flex flex-col  items-center justify-center"
              key={index}
            >
              <img
                className="md:h-[60%] md:w-[80%] object-cover  "
                src={data.image}
                alt=""
              />
              <h1 className="text-lg font-medium font-montserrat">
                {t(data.date)}
              </h1>
              <p className="text-pretty text-center font-light font-montserrat  w-[70%]">
                {t(data.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
