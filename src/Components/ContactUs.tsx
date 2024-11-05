import { InboxArrowDownIcon } from "@heroicons/react/20/solid";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className=" md:w-3/4 mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
      <div className=" md:w-1/2 flex flex-col gap-5">
        <div className=" hidden md:block bg-contact-us h-96 rounded-lg bg-cover bg-center"></div>
      </div>

      <div className=" md:w-1/2">
        <h1 className=" text-2xl font-bold">
          <span className=" text-lightBlue">Llena el formulario </span> y
          nosotros nos pondremos en contacto contigo!
        </h1>
        <a
          href="mailto:info@monots.com"
          className=" flex gap-5 items-center p-4 hover:text-grayText cursor-pointer"
        >
          <h2>Tambien puedes mandarnos un email dando click aqui!</h2>

          <InboxArrowDownIcon className=" w-8 text-lightBlue " />
        </a>

        <div className=" bg-primary/10 rounded-lg h-full p-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
