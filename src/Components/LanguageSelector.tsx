import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

type LanguageSelectorProps = {
  variant?: "desktop" | "mobile";
};

const languages = [
  { code: "en", flag: "/flag-us.svg", labelKey: "language.english" },
  { code: "es", flag: "/flag-mx.svg", labelKey: "language.spanish" },
];

export default function LanguageSelector({ variant = "desktop" }: LanguageSelectorProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.language ?? "en").split("-")[0];
  const activeLanguage =
    languages.find((language) => language.code === currentLanguage) ?? languages[0];

  const buttonClasses =
    variant === "desktop"
      ? "inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white transition hover:bg-white/20"
      : "inline-flex w-full items-center justify-between gap-2 rounded-md border border-primary/30 bg-white px-3 py-2 text-sm font-semibold text-primary";

  const menuClasses =
    variant === "desktop"
      ? "absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white py-1 text-sm text-primary shadow-lg ring-1 ring-black/5 focus:outline-none"
      : "absolute left-0 mt-2 w-full origin-top-left rounded-md bg-white py-1 text-sm text-primary shadow-lg ring-1 ring-black/5 focus:outline-none";

  const itemClasses = "flex items-center gap-2 px-3 py-2 hover:bg-gray-100";

  return (
    <Menu as="div" className={`relative ${variant === "mobile" ? "w-full" : ""}`}>
      <Menu.Button
        aria-label={t("language.ariaLabel")}
        className={buttonClasses}
      >
        <span className="flex items-center gap-2">
          <img
            src={activeLanguage.flag}
            alt={`${t(activeLanguage.labelKey)} flag`}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span>{t(activeLanguage.labelKey)}</span>
        </span>
        <ChevronDownIcon className="h-4 w-4" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={menuClasses}>
          {languages.map((language) => (
            <Menu.Item key={language.code}>
              {({ active }) => (
                <button
                  type="button"
                  onClick={() => {
                    void i18n.changeLanguage(language.code);
                  }}
                  className={`${itemClasses} ${
                    language.code === activeLanguage.code || active
                      ? "bg-gray-100 font-semibold"
                      : "font-normal"
                  }`}
                >
                  <img
                    src={language.flag}
                    alt={`${t(language.labelKey)} flag`}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  <span>{t(language.labelKey)}</span>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
