import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

export default function EnglishPage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  return (
    <>
      <section id="#aboutUs">
        <AboutUs />
      </section>

      <section id="#services">
        <Services />
      </section>

      <section id="#contactUs" className=" bg-gray-200 p-5 md:p-20">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}
