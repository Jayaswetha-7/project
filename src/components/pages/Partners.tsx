import { useTranslation } from "react-i18next";
import { partners } from "../Data/PartnerData";
import Footer from "../Footer";

const backgroundUrl =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHUybzh1ZmdhNDF4cnNkMDI5dXhrNmp0YWlzcm1xN3o3MWo1bGR5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XHELJ878xvgVHeNvJv/giphy.gif";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen">
      <div
        className="h-[40vh] bg-no-repeat sm:bg-repeat md:bg-contain bg-center flex items-end"
        style={{
          backgroundImage: `url("${backgroundUrl}")`,
        }}
      >
        <div className="flex flex-col justify-end  h-full container mx-auto">
          <h1 className=" text-4xl md:text-5xl ms-5 font-semibold font-montserrat mb-5 text-white">
            Partners
          </h1>
        </div>
      </div>

      <div className=" mx-auto w-full flex flex-col md:flex-row  items-center min-h-fit space-x-0 mt-[3%] mb-[2vh] ">
        <div className="flex flex-col xl:w-[55%] w-full h-full  justify-center items-center space-y-5 p-5 mt-5">
          <h1 className="xl:text-[3rem] text-[2rem] leading-tight font-semibold md:w-[70%] w-full headingText">
            {" "}
            {t("Partners_page.join")}{" "}
          </h1>
          <p className="xl:text-[1.5rem] text-[1.2rem] md:w-[70%] w-full">
            {" "}
            {t("Partners_page.earn")}{" "}
          </p>
          <div className="flex   flex-row justify-start items-center  md:w-[70%] w-full gap-4 ">
            <button className="bg-blue-500 h-14 w-full md:w-[50%] md:text-[1.1rem] rounded-full transition duration-300 hover:border hover:border-black hover:bg-transparent text-white hover:text-black">
              {" "}
              {t("Partners_page.get_started")}{" "}
            </button>
            <button className="bg-gray-200 h-14 md:w-[30%] w-[70%] md:text-[1.1rem] rounded-full transition duration-300 hover:border hover:border-black hover:bg-transparent">
              {" "}
              {t("Partners_page.login")}{" "}
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="xl:w-[35%] w-full grid grid-cols-3 gap-5 p-5 ">
          {partners.map((partner) => (
            <img
              src={partner.images}
              alt=""
              className="object-cover rounded-2xl"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
