import { useTranslation } from "react-i18next";


const WeCanDo = () => {
const {t} =useTranslation();

  const stats = [
    { value: "000+", label: "WeCanDo_stats.cont.label"},//"Container Fleet" },
    { value: "000+", label: "WeCanDo_stats.happy.label"},//"Happy Customers" },
    { value: "00+", label: "WeCanDo_stats.vehicle.label"},//"Vehicle Fleet" },
    { value: "000+", label: "WeCanDo_stats.empl.label"}//"Employees" }
  ];

  return (
    <div
      
      className="bg-HeadingColor rgb(18 47 129) sm:h-[50vh] h-[30vh] flex flex-col gap-2 items-center justify-center w-screen"
      
      
    >
      <div className="text-white font-semibold">
        <h1 className="text-lg">
          {/* We can Do it */}
          {t("WeCanDo_we")}
          </h1>
      </div>
      <div className="text-white font-bold sm:text-[2vw] text-sm p-4 ">
        <h1>
          {/* Perfecting logistics to power seamless supply chains */}
          {t("WeCanDo_perfect")}
          </h1>
      </div>
      <div className="flex items-center justify-center md:gap-16 lg:gap-24  gap-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4"
          >
            <h1 dir="ltr" className="sm:text-[4vw] text-[1.3rem] font-bold text-white ">
              {item.value}
            </h1>
            <p className="text-white sm:text-[1vw] text-[2vw] ">{t(item.label)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeCanDo;
