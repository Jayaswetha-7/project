import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import propic1 from "../../assets/profilepic.webp";
export const contactDetails = [
  {
    icon: FaLocationDot,
    text: "MapSec_contactdet.map.contact_text",//"King Abdulaziz International Port, Dammam",
    href: "https://maps.app.goo.gl/5WAHwNKMMuvsa6jJ9", // Google Maps link
  },
  {
    icon: MdEmail,
    text: "MapSec_contactdet.mail.text",//"operations@fifoim.com",
    href: "mailto:operations@fifoim.com",
    className: "break-all",
  },
  {
    icon: FaPhoneAlt,
    text: "MapSec_contactdet.phone.text",//"+966536299334",
    href: "tel:+966536299334",
  },
  {
    icon: IoLogoWhatsapp,
    text: "MapSec_contactdet.whatsapp.text",//"+966540461090",
    href: "https://wa.me/966540461090", // WhatsApp link
  },
];
export const MapSource =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57151.930498619135!2d50.12196154140212!3d26.45586896082723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49f0857039190d%3A0xae77a48b70954456!2sKing%20Abdul%20Aziz%20Seaport%2C%20Dammam%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1740025237869!5m2!1sen!2sin";

export const footerLinks = [
  {
    link: "/service#ocean_freight",
    text: "Footer_footerLinks.ocean", //"Ocean Freight",
  },
  {
    link: "/service#air_freight",
    text: "Footer_footerLinks.air", //"Air Freight",
  },
  {
    link: "/service#road_rail_freight",
    text: "Footer_footerLinks.transportation",
  },
  {
    link: "/service#warehouse",
    text: "Footer_footerLinks.warehousing", //"Warehousing",
  },

  {
    link: "/service#end_to_end_tracking",
    text: "Footer_footerLinks.supply", //"Supply Chain Solutions",
  },
  {
    link: "/service#customs_clearance",
    text: "Footer_footerLinks.custom", //"Custom Clearance",
  },
];

 export const testimonials = [
   {
     proimg: propic1,
     name: "SwiftRoute ",
     pos: "CEO",
     review:
       "Testimonials_testimonials.SwiftRoute.review",//"“ FIFO Logistics has been a game-changer for our business. We're in the e-commerce industry, and fast, reliable shipping is crucial. ”",
   },
   {
     proimg: propic1,
     name: "GlobalFlow",
     pos: "CTO",
     review:
      "Testimonials_testimonials.GlobalFlow.review",// "“ As a small business owner, I was looking for a logistics partner who would understand my unique needs. FIFO Logistics has provided exceptional personalized service. ”",
   },
   {
     proimg: propic1,
     name: "Ascend",
     pos: "CFO",
     review:
     "Testimonials_testimonials.Ascend.review",// "“ We were struggling to find a logistics company that offered competitive pricing without sacrificing quality of service. FIFO Logistics has been a game-changer in that regard.  ”",
   },
 ];
