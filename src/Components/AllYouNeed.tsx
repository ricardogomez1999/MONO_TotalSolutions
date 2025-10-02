import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function AllYouNeed() {
  const { t } = useTranslation();

  const bulletTranslations = t<string[] | string>("allYouNeed.bullets", {
    returnObjects: true,
  });
  const bullets = Array.isArray(bulletTranslations)
    ? bulletTranslations
    : [bulletTranslations];
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <h1 className=" my-10 text-4xl font-bold text-center text-primary">
        {t("allYouNeed.title")}
      </h1>
      <div className=" flex flex-col md:flex-row p-5">
        <div className="h-96 bg-all-youneed bg-cover bg-center md:w-1/2 rounded-lg shadow-lg"></div>
        <div className=" md:w-1/2 p-5">
          <ul className="md:px-8 flex flex-col gap-5">
            {bullets.map((bullet: string) => (
              <li key={bullet} className=" flex gap-2 items-start ">
                <CheckBadgeIcon className="w-12 text-lightBlue" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
