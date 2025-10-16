import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className=" h-screen md:h-auto flex items-center container mx-auto md:py-16 p-5 transition-all">
      <div className="flex flex-col">
        <h1 className=" text-white/[.5] text-pretty text-5xl md:text-8xl uppercase font-bold">
          Making your day a little easier
        </h1>

        <a
          className="group flex flex-row w-36 md:w-44 text-sm md:text-lg  bg-gradient-to-r from-darkBlue to-lightBlue p-3 my-5 text-white font-semibold rounded-sm items-center gap-2 "
          href="https://wa.me/+528443500355"
          target="_blank"
          rel="noreferrer"
        >
          {t("hero.cta")}
          <ArrowRightIcon className=" w-5 group-hover:w-6 transition-all" />
        </a>
      </div>
    </div>
  );
}
