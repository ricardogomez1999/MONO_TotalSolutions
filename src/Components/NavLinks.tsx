import { Link } from "react-scroll";

type NavLinksProps = {
  hidden: boolean;
};

export default function NavLinks({ hidden }: NavLinksProps) {
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
          Nosotros
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
          Servicios
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
          Contacto
        </Link>
      </li>
    </ul>
  );
}
