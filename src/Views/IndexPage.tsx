import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

export default function IndexPage() {
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
