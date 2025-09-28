import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className=" p-5 md:bg-about-us bg-cover bg-center flex justify-end md:w-3/4 mx-auto my-10 md:rounded-lg md:shadow-lg">
      <div className=" md:h-96 flex flex-col md:flex-row-reverse justify-around items-center">
        <div className="p-4 md:pe-36 mt-8 md:w-1/2 md:bg-gray-100 md:bg-opacity-70 rounded-lg md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            {t("aboutUs.title")} <span className=" font-normal">{t("aboutUs.titleHighlight")}</span>
          </h1>
          <h2 className=" text-lg md:text-xl font-semibold text-primary">
            {t("aboutUs.subtitle")}
          </h2>
          <p className=" text-sm md:text-md text-secondary">
            {t("aboutUs.description")}
          </p>
        </div>
        <img className="md:h-80" src="./AboutUs.jpeg" alt="about us image" />
      </div>
    </div>
  );
}
