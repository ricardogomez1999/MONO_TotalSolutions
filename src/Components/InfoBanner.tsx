import { Link } from "react-scroll";

export default function InfoBanner() {
  return (
    <div className=" md:w-1/2 text-white flex flex-col">
      <h1 className=" text-xl font-bold md:text-4xl text-center">
        Impulsa tu logística y cadena de suministro con MONO Total Solutions
      </h1>
      <h2 className=" text-lg md:text-2xl text-center">
        Recibe asesoría especializada en soluciones logísticas a medida.
      </h2>
      <Link
        to="#contactUs"
        spy={true}
        smooth={true}
        offset={150}
        duration={500}
        href="#"
        className="group w-36 md:w-44 text-sm md:text-lg  bg-gradient-to-r from-darkBlue to-lightBlue p-3 my-5 text-white font-semibold rounded-lg items-center gap-2 hover:arr mx-auto text-center"
      >
        Cotizar
      </Link>
    </div>
  );
}
