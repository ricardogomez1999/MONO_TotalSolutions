import { useTranslation } from "react-i18next";
import { useImagesHook } from "../hooks/useImages";

export default function AboutUs() {
  const { t } = useTranslation();
  const images = useImagesHook();

  return (
    <div className=" p-5 md:bg-about-us bg-cover bg-center flex justify-end md:w-3/4 mx-auto my-10 md:rounded-lg md:shadow-lg">
      <div className=" lg:h-96 flex flex-col md:flex-row-reverse justify-around items-center gap-3">
        <div className="p-4 mt-8 h-full md:w-1/2 md:bg-gray-100 md:bg-opacity-70 rounded-lg ">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            {t("aboutUs.title")}{" "}
            <span className=" font-normal">{t("aboutUs.titleHighlight")}</span>
          </h1>
          <h2 className=" text-lg md:text-xl font-semibold text-primary">
            {t("aboutUs.subtitle")}
          </h2>
          <p className=" text-sm md:text-md text-secondary">
            {t("aboutUs.description")}
          </p>
          <br />
          <p className=" text-sm md:text-md text-secondary">
            {t("aboutUs.description2")}
          </p>
          <br />
          <p className=" text-sm md:text-md text-secondary">
            {t("aboutUs.description3")}
          </p>
        </div>
        <img
          className=" h-full md:w-1/2 object-contain"
          src={images.aboutUs.main}
          alt="about us image"
        />
      </div>
    </div>
  );
}
