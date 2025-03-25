import { useTranslation } from "react-i18next";
const Thirdsection = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full bg-white h-auto mt-[3%] flex flex-col justify-center items-center p-5">
      <p className="text-[1.5rem] lg:text-[1.5rem] font-semibold text-HeadingColor text-center">
        {/* Join Us Today */}
        {t("AboutThirdsect_join")}

      </p>
      <p className="text-[2rem] lg:text-[2.5rem] text-center">
        {/* Our Partners */}
        {t( "AboutThirdsect_partner")}
        </p>

      <p className="text-[1rem] md:text-[1.3rem] p-5 md:w-[80%] lg:w-[60%] w-full text-justify md:text-center">
        {/* At our company, we believe that partnerships are key to 
        delivering exceptional logistics solutions. We're proud to collaborate with 
        the several organizations to provide top-notch FIFO logistics services */}
      {t("AboutThirdsect_at")}
      </p>
    </div>
  );
};

export default Thirdsection;
