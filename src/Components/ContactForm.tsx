import { useForm } from "react-hook-form";
import { QuoteFormData } from "../types";
import ErrorMessage from "./ErrorMessage";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { serviceTypes } from "../data";

export default function ContactForm() {
  const initialValues: QuoteFormData = {
    name: "",
    lastname: "",
    company: "",
    email: "",
    phone: null,
    serviceType: "Selecciona",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleEmail = (data: QuoteFormData) => {
    console.log(data);
    emailjs
      .send(
        import.meta.env.VITE_API_SERVICEID,
        import.meta.env.VITE_API_TEMPLATEID,
        data,
        import.meta.env.VITE_API_PUBLICID
      )
      .then(
        () => {
          toast.success(`Message sent successfully`);
          reset();
        },
        (error) => {
          toast.error(`Message not send, try again ${error}`);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(handleEmail)}
      className=" space-y-3 flex flex-col p-8 text-primary"
      noValidate
    >
      <div className=" flex flex-col gap-2">
        <div className=" md:flex gap-5">
          <div className=" md:w-1/2">
            <label htmlFor="name" className=" font-normal">
              Nombre*
            </label>
            <input
              id="name"
              type="text"
              className=" w-full p-1 border border-gray-300 rounded"
              {...register("name", {
                required: "El nombre es obligatorio",
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div className=" md:w-1/2">
            <label htmlFor="lastname" className=" font-normal">
              Apellido*
            </label>
            <input
              id="lastname"
              type="text"
              className=" w-full p-1 border border-gray-300 rounded"
              {...register("lastname", {
                required: "El apellido es obligatorio",
              })}
            />
            {errors.lastname && (
              <ErrorMessage>{errors.lastname.message}</ErrorMessage>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className=" font-normal">
            Correo empresarial*
          </label>
          <input
            id="email"
            type="text"
            className=" w-full p-1 border border-gray-300 rounded"
            {...register("email", {
              required: "El correo es obligatorio",
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="phone" className=" font-normal">
            Telefono*
          </label>
          <input
            id="phone"
            type="text"
            className=" w-full p-1 border border-gray-300 rounded"
            {...register("phone", {
              required: "El telefono es obligatorio",
            })}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </div>

        <div className=" md:flex gap-5">
          <div className=" md:w-1/2">
            <label htmlFor="company" className=" font-normal">
              Empresa*
            </label>
            <input
              id="company"
              type="text"
              className=" w-full p-1 border border-gray-300 rounded"
              {...register("company", {
                required: "La compañia es obligatorio",
              })}
            />
            {errors.company && (
              <ErrorMessage>{errors.company.message}</ErrorMessage>
            )}
          </div>
          <div className=" md:w-1/2">
            <label htmlFor="serviceType" className=" font-normal">
              Tipo de servicio*
            </label>
            <select
              name="serviceType"
              id=""
              className=" w-full p-1 bg-white border border-gray-300 rounded"
              defaultValue={initialValues.serviceType}
              onChange={() => {}}
            >
              {serviceTypes.map((item) => (
                <option key={item.id}>{item.content}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <input
        type="submit"
        value="Enviar"
        className="bg-primary hover:bg-secondary p-2 text-white cursor-pointer rounded w-fit"
      />
    </form>
  );
}
