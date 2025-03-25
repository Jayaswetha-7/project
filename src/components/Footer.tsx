import { footerLinks } from "./Data/ContactData";
import MobileFooterLinks from "./MobileFooterLinks";
import logo from "../assets/logo_png_.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {

  const mainMenuLink = [{
    link: "/",
    text: "Footer_mainMenu.Home",
  },
  {
    link: "/about",
    text: "Footer_mainMenu.About",
  },
  {
    link: "/service",
    text: "Footer_mainMenu.Services",
  },
  {
    link: "/contact",
    text: "Footer_mainMenu.Contact",
  },
  ];
  const {t}= useTranslation();

  return (
    <footer  className="bg-HeadingColor text-white flex-col select-none font-serif flex min-h-[40vh] px-[1%] pt-[3%] ">
      <div   className="footer md:flex justify-around items-center hidden gap-2 mb-[6vh]   container mx-auto">
        {/* service Section */}
        <div className=" border-l pl-2 h-[18vh]">
          <h1 className="mx-2 text-[2vw] font-medium">
            {/* Services */}
            {t("Footer_services")}

            </h1>
          <div className="flex  flex-wrap gap-2 text-left  mb-2 ">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className=" text-left hover:text-black hover:underline hover:underline-offset-4 cursor-pointer transition-colors duration-300 ease-in-out w-1/3 mx-2"
              >
                {t(item.text)}
              </Link>
            ))}
          </div>
        </div>

        {/* main menu Section */}
        <div className=" border-l pl-2 h-[18vh]">
          <h1 className="mx-2 text-[2vw] font-medium">
            {/* Menu */}
            {t("Footer_menu")}
            </h1>
          <div className="flex w-[40%] flex-wrap gap-2 text-left  mb-2 ">
            {mainMenuLink.map((item, index) => (
              <div
                key={index}
                className=" text-left hover:text-black  cursor-pointer hover:underline hover:underline-offset-4 transition-all duration-500 ease-in-out w-[32%] mx-2"
              >
                <Link to={item.link}>{t(item.text)}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className=" border-l pl-2  h-[18vh]">
          <h1 className="mx-2 text-[2vw] font-medium">
           {t("Footer_about")} {/* About Us */}
            </h1>
          <p dir="rtl" className=" mx-2  w-[80%] ">
            {t("Footer_global")}
            {/* Global freight forwarding solutions facilitate the seamless
            transportation of goods across international borders through a
            network of logistics services. */}
          </p>
        </div>
      </div>
      <MobileFooterLinks />
      <div className=" flex w-full flex-col  h-fit justify-center items-center mt-3">
        <div className="text-[5vw] font-serif text-center mx-auto ">
          <img
            className="h-[5rem]  mt-4   mb-[2vh] "
            src={logo}
            alt=""
          />
        </div>
        <p className="text-center text-[3vw] md:text-[1vw] mx-auto mb-4">
          &#169; 2025 FIFO.
          {t("Footer_rights")} {/* All rights reserved. Developed by */}
           {" "}
          <a href="https://www.taphubs.org/" target="_blank">
            Taphubs global
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
