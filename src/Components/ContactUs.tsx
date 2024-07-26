import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className=" md:w-3/4 mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
      <div className=" md:w-1/2 flex flex-col gap-5">
        <h1 className=" font-bold text-3xl md:text-4xl">
          <span className=" text-lightBlue font-bold">Cotiza tu carga</span> con
          MONO Total Solutions
        </h1>
        <h2 className=" text-grayText text-lg">
          Estás a un solo paso de transformar tus operaciones logísticas con
          tecnología de punta.
        </h2>
        <div className=" hidden md:block bg-contact-us h-96 rounded-lg bg-cover bg-center"></div>
      </div>

      <div className=" md:w-1/2 bg-primary/10 rounded-lg h-full">
        <ContactForm />
      </div>
    </div>
  );
}
