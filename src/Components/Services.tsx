import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { services } from "../data";
import Card from "./Card";
import Tabs from "./ServicesTabs";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-6xl py-10">
      <h1 className=" text-primary font-light my-10 text-4xl text-center">
        {t("services.title")}{" "}
        <span className=" font-bold">{t("services.highlight")}</span>
      </h1>
      <div className=" hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-32 justify-center p-5">
        {services.map((service) => {
          const description = t<string[] | string>(service.descriptionKey, {
            returnObjects: true,
          });
          return (
            <Card
              key={service.id}
              title={t(service.titleKey)}
              img={service.img}
              imgAlt={t(service.imageAltKey)}
              description={
                Array.isArray(description) ? description : [description]
              }
            />
          );
        })}
      </div>
      <Tabs />
      <Link
        to="#contactUs"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        href="#"
        className="flex justify-center w-fit mx-auto bg-gradient-to-r from-darkBlue to-lightBlue p-3 my-5 text-white font-semibold rounded-lg"
      >
        {t("services.cta")}
      </Link>
    </div>
  );
}
