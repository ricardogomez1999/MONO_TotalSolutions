import { InboxArrowDownIcon } from "@heroicons/react/20/solid";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className=" md:w-3/4 mx-auto gap-10 justify-center items-center">
      <div className=" flex flex-col w-full items-center">
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
      </div>

      <div className=" flex md:h-[500px]">
        <div className="w-1/2 h-full md:flex flex-col gap-5 hidden">
          <img
            className=" rounded-s-xl shadow-2xl h-full w-full"
            src="/contactUs.webp"
            alt="contact us image"
          />
        </div>

        <div className=" md:w-1/2">
          <div className=" bg-primary/10 md:rounded-e-xl h-full p-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
