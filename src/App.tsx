import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import ServicePage from "./components/pages/Service";
import ContactPage from "./components/pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // Ensure i18n is imported
import "./App.css"; // Import global styles
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Partners from "./components/pages/Partners";
//
function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="h-screen w-full">
          <Router>
            <Toaster />
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/partners" element={<Partners />} />
            </Routes>
          </Router>
          <ScrollToTop />
        </div>
      </>
    );
  }
}

export default App;
