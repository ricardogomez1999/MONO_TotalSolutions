import AboutUs from "../Components/AboutUs";
import AllYouNeed from "../Components/AllYouNeed";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import InfoBanner from "../Components/InfoBanner";
import Services from "../Components/Services";

export default function IndexPage() {
  return (
    <>
      <section className=" bg-gray-100">
        <AllYouNeed />
      </section>
      <section id="#aboutUs">
        <AboutUs />
      </section>
      <section
        id="#infoBanner"
        className=" flex justify-center items-center h-96 bg-info-banner bg-cover bg-center my-10"
      >
        <InfoBanner />
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
