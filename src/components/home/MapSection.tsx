import { contactDetails, MapSource } from "../Data/ContactData";
import { useTranslation } from "react-i18next";

const MapSection = () => {
  const {t} =useTranslation();
  
  return (
    <div className="w-full relative">
      <iframe
        src={MapSource}
        width="100%"
        height="550px"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="md:w-[20%] w-[70%] absolute flex flex-col items-center justify-center gap-3 bg-white/80 rounded-lg h-[60%] md:left-[60%]  m-auto  inset-0 ">
        <h1 className=" text-[3rem] underline underline-offset-8 text-HeadingColor font-medium py-3">
          FIFO
        </h1>
        <div className=" flex flex-col gap-3 font-montserrat text-[0.8rem] ">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="flex justify-center gap-3  items-center "
            >
              <item.icon className="w-[1rem] h-[1rem]  text-HeadingColor" />
              <a
                href={item.href}
                target="_blank"
                className={`text-left  text-pretty  w-3/4 ${
                  item.className || ""
                }`}
              >
                {t(item.text)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapSection;
