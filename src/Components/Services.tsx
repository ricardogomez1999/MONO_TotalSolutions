import { Link } from "react-scroll";
import { services } from "../data";
import Card from "./Card";
import Tabs from "./ServicesTabs";

export default function Services() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <h1 className=" text-primary font-light my-10 text-4xl text-center">
        Nuestros Servicios <span className=" font-bold">Principales</span>
      </h1>
      <div className=" hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-32 justify-center p-5">
        {services.map((service) => (
          <Card
            key={service.name}
            title={service.name}
            img={service.img}
            description={service.description}
          />
        ))}
      </div>
      <Tabs />
      <Link
        to="#contactUs"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        href="#"
        className="flex justify-center w-24 mx-auto bg-gradient-to-r from-darkBlue to-lightBlue p-3 my-5 text-white font-semibold rounded-lg"
      >
        Cotizar
      </Link>
    </div>
  );
}
