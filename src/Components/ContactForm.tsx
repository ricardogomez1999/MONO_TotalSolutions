import { useForm } from "react-hook-form";
import { QuoteFormData, ServiceType } from "../types";
import ErrorMessage from "./ErrorMessage";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const serviceTypeOptions: ServiceType[] = [
  "select",
  "logistics",
  "commercial",
  "rental",
];

export default function ContactForm() {
  const { t } = useTranslation();
  const defaultValues: QuoteFormData = {
    name: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "select",
    message: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({ defaultValues });

  const handleEmail = (data: QuoteFormData) => {
    emailjs
      .send(
        import.meta.env.VITE_API_SERVICEID,
        import.meta.env.VITE_API_TEMPLATEID,
        data,
        import.meta.env.VITE_API_PUBLICID
      )
      .then(
        () => {
          toast.success(t<string>("form.toast.success"));
          reset(defaultValues);
        },
        () => {
          toast.error(t<string>("form.toast.error"));
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
              {t("form.fields.name")}
            </label>
            <input
              id="name"
              type="text"
              className=" w-full p-1 border border-gray-300 rounded"
              {...register("name", {
                required: t("form.errors.nameRequired"),
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div className=" md:w-1/2">
            <label htmlFor="lastname" className=" font-normal">
              {t("form.fields.lastname")}
            </label>
            <input
              id="lastname"
              type="text"
              className=" w-full p-1 border border-gray-300 rounded"
              {...register("lastname", {
                required: t("form.errors.lastnameRequired"),
              })}
            />
            {errors.lastname && (
              <ErrorMessage>{errors.lastname.message}</ErrorMessage>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className=" font-normal">
            {t("form.fields.email")}
          </label>
          <input
            id="email"
            type="email"
            className=" w-full p-1 border border-gray-300 rounded"
            {...register("email", {
              required: t("form.errors.emailRequired"),
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="phone" className=" font-normal">
            {t("form.fields.phone")}
          </label>
          <input
            id="phone"
            type="tel"
            className=" w-full p-1 border border-gray-300 rounded"
            {...register("phone", {
              required: t("form.errors.phoneRequired"),
            })}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </div>

        <div className=" md:flex gap-5">
          <div className=" md:w-1/2">
            <label htmlFor="company" className=" font-normal">
              {t("form.fields.company")}
            </label>
            <input
              id="company"
              type="text"
              className=" w-full p-1 border border-gray-300 rounded"
              {...register("company", {
                required: t("form.errors.companyRequired"),
              })}
            />
            {errors.company && (
              <ErrorMessage>{errors.company.message}</ErrorMessage>
            )}
          </div>
          <div className=" md:w-1/2">
            <label htmlFor="serviceType" className=" font-normal">
              {t("form.fields.serviceType.label")}
            </label>
            <select
              id="serviceType"
              className=" w-full p-1 bg-white border border-gray-300 rounded"
              defaultValue={defaultValues.serviceType}
              {...register("serviceType", {
                validate: (value) =>
                  value !== "select" || t("form.errors.serviceTypeRequired"),
              })}
            >
              {serviceTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {t(`form.fields.serviceType.options.${option}`)}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <ErrorMessage>{errors.serviceType.message}</ErrorMessage>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="message" className=" font-normal">
            {t("form.fields.message")}
          </label>
          <textarea
            id="message"
            className=" w-full p-1 border border-gray-300 rounded"
            {...register("message", {
              required: t("form.errors.messageRequired"),
            })}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </div>
      </div>
      <input
        type="submit"
        value={t("form.submit")}
        className="bg-primary hover:bg-secondary p-2 text-white cursor-pointer rounded w-fit"
      />
    </form>
  );
}
