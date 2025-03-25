import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import Footer from "../Footer";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { Client, Databases, ID } from "appwrite";
import emailjs from "emailjs-com";

const client = new Client();
client
  // .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your Appwrite project ID

const databases = new Databases(client);

const backgroundUrl =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHUybzh1ZmdhNDF4cnNkMDI5dXhrNmp0YWlzcm1xN3o3MWo1bGR5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XHELJ878xvgVHeNvJv/giphy.gif";
const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: <CiLocationOn className="text-2xl" />,
      title: "Contactpg_contactdet.loc.title", //"Address",
      content: "Contactpg_contactdet.loc.content", //"King Abdulaziz International Port, Dammam",
    },
    {
      icon: <MdOutlinePhoneInTalk className="text-2xl" />,
      title: "Contactpg_contactdet.phone.title", 
      content: "Contactpg_contactdet.phone.content", 
      dir: "ltr",
    },
    {
      icon: <TfiEmail className="text-2xl" />,
      title: "Contactpg_contactdet.email.title", //"Send us email",
      content: "Contactpg_contactdet.email.content", //"contact@example.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log("inside confgtg")  / You can add form validation here if needed
    console.log(formData);
    try {
      // Store data in Appwrite database
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID, // Replace with your Database ID
        import.meta.env.VITE_APPWRITE_COLLECTION_ID, // Replace with your Collection ID
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      console.log("Message saved:", response);

      //  Send email  using EmailJS
      const emailResponse = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //  your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID //  your EmailJS user ID
      );
      console.log("Email sent:", emailResponse);

      toast.success("Message sent successfully!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#4CAF50",
          color: "#fff",
        },
      });
      // Reset form   (e.target as HTMLFormElement).reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving message:", error);
      toast.error("Failed to send message.");
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[40vh] bg-no-repeat sm:bg-repeat md:bg-contain bg-center flex items-end"
        style={{
          backgroundImage: `url("${backgroundUrl}")`,
        }}
      >
        <div className="container mx-auto mb-5">
          <h1 className="text-4xl md:text-5xl ms-5 font-montserrat font-semibold text-white">
            {/* Contact Us */}
            {t("Contactpg_ContactUs")}
          </h1>
        </div>
      </div>

      {/* Contact Information & Map Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8 content-center mx-auto  md:pl-[10%]">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-4"
              >
                {info.icon}
                <div>
                  <h2 className="text-lg font-semibold">{t(info.title)}</h2>
                  <p dir={info.dir} className="text-gray-600">
                    {t(info.content)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="md:w-1/2 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.9999999999995!2d50.123456789!3d26.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e1234567890abcdef%3A0x1234567890abcdef!2sKing%20Abdul%20Aziz%20Seaport!5e0!3m2!1sen!2ssa!4v1234567890"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {/* Leave Your Message */}
            {t("Contactpg_h1")}
          </h2>
          <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("Contactpg_contact.name")} //"Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("Contactpg_contact.email")} //"Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("Contactpg_contact.phone")} //"Phone No."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea
                placeholder={t("Contactpg_contact.message")} //"Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mx-auto block"
            >
              {/* Send Message */}
              {t("Contactpg_Send")}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
