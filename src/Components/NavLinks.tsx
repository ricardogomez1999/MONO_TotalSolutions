import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

type NavLinksProps = {
  hidden: boolean;
};

export default function NavLinks({ hidden }: NavLinksProps) {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null; // or a loading spinner
  }
  return (
    <ul
      className={
        hidden
          ? "hidden md:flex gap-8"
          : "text-center flex flex-col gap-4 my-5 text-lg"
      }
    >
      <li>
        <Link
          to="#aboutUs"
          spy={true}
          smooth={true}
          offset={hidden ? -150 : -40}
          duration={500}
          href="#"
        >
          {t("navigation.about")}
        </Link>
      </li>
      <li>
        <Link
          to="#services"
          spy={true}
          smooth={true}
          offset={hidden ? -150 : 0}
          duration={500}
          href="#"
        >
          {t("navigation.services")}
        </Link>
      </li>
      <li>
        <Link
          to="#contactUs"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#"
        >
          {t("navigation.contact")}
        </Link>
      </li>
    </ul>
  );
}
