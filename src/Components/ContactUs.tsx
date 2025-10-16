import { InboxArrowDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className=" md:w-3/4 mx-auto gap-10 justify-center items-center">
      <div className=" flex md:h-[500px]">
        <div className="w-1/2 flex flex-col items-center justify-around bg-lightBlue md:rounded-s-xl">
          <h1 className=" text-2xl font-bold text-center">
            <span className=" text-white">
              {t("contactSection.titleHighlight")}
            </span>{" "}
            {t("contactSection.titleSuffix")}
          </h1>
          <a
            href="mailto:info@monots.com"
            className=" flex gap-5 items-center p-4 hover:text-grayText cursor-pointer"
            rel="noreferrer"
          >
            <div>
              <h2>{t("contactSection.emailLine1")}</h2>
              <h2>{t("contactSection.emailLine2")}</h2>
            </div>

            <InboxArrowDownIcon className=" w-8 text-lightBlue " />
          </a>
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
