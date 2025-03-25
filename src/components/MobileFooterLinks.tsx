import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";
const footerLinks = [
  "Footer_footerLinks.ocean",//"Ocean Freight",
  "Footer_footerLinks.air",//"Air Freight",
  "Footer_footerLinks.transportation",//"Transportation",
  "Footer_footerLinks.warehousing",//"Warehousing",
  "Footer_footerLinks.project",//"Project Cargo",
  "Footer_footerLinks.container",//"Container ",
  "Footer_footerLinks.supply",//"Supply Chain ",
  "Footer_footerLinks.custom",//"Custom Clearance",
];

const mainMenu = ["Footer_mainMenu.Home",//"Home",
   "Footer_mainMenu.About",//"About", 
   "Footer_mainMenu.Services",//"Services", 
   "Footer_mainMenu.Contact"]
   //"Contact"];

const MobileFooterLinks = () => {
  const {t} =useTranslation();
  return (
    <div className="md:hidden flex font-serif">
      {" "}
      <Accordion
        type="single"
        collapsible
        className="w-[90vw] mx-auto my-2 h-full gap-2 p-2"
      >
        <AccordionItem value="item-1" className="border-b border-white">
          <AccordionTrigger className="flex  w-full justify-between gap-2 items-center group py-2">
            {/* Menu */}
            {t("Footer_menu")}
            <FaArrowRight className="group-hover:rotate-90  transition-all duration-300" />
          </AccordionTrigger>
          <AccordionContent className="border-b border-white p-3 ">
            <ul className="flex justify-between gap-2 text-left font-light text-gray-200/80  mb-2">
              {mainMenu.map((item, index) => (
                <li key={index} className=" text-left w-[45%] cursor-pointer ">
                  {t(item)}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-white">
          <AccordionTrigger className="flex  w-full justify-between gap-2 items-center group py-2">
            {/* Service */}
            {t("Footer_services")}
            <FaArrowRight className="group-focus:rotate-90  transition-all duration-300" />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-wrap gap-2 text-left font-light text-gray-200/80  mb-2 justify-between ">
              {footerLinks.map((item, index) => (
                <li key={index} className=" text-left cursor-pointer w-[45%] ">
                  {t(item)}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-white">
          <AccordionTrigger className="flex  w-full justify-between gap-2 items-center group py-2">
            {/* About us */}
            {t("Footer_about")}
            <FaArrowRight className="group-focus:rotate-90 active:rotate-90 transition-all duration-300" />
          </AccordionTrigger>
          <AccordionContent>
            {/* Yes. It's animated by default, but you can disable it if you prefer. */}
              {t("Footer_yes")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b border-white">
          <AccordionTrigger className="flex  w-full justify-between gap-2 items-center group py-2">
            {/* Contact us */}
            {t("Footer_Contactus")}
            <FaArrowRight className="group-focus:rotate-90 active:rotate-90 transition-all duration-300" />
          </AccordionTrigger>
          <AccordionContent>
            {/* Yes. It's animated by default, but you can disable it if you prefer. */}
            {t("Footer_yes")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileFooterLinks;
