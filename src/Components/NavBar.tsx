import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import SocialMedia from "./SocialMedia";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import { images } from "../config/images";

export default function NavBar() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 150) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  });

  const options = {
    duration: 500,
    smooth: true,
  };

  const handleOnClick = () => {
    animateScroll.scrollToTop(options);
  };

  return (
    <nav
      className={
        header
          ? "bg-gradient-to-r from-primary/[.8] to-secondary/[.8] bg-opacity-50 flex justify-between items-center md:px-20 text-white sticky top-0 p-2 w-full "
          : "bg-gradient-to-r from-primary to-secondary flex justify-between items-center md:px-20 text-white sticky top-0 p-2 w-full "
      }
    >
      <a
        href="#"
        onClick={handleOnClick}
        className=" flex justify-center items-center"
      >
        <img src={images.logo.white} alt="logo" className=" w-14 md:w-24" />
        <h1 className=" text-sm font-bold">
          MONO <span className=" font-light">Total Solutions</span>
        </h1>
      </a>
      <NavLinks hidden={true} />
      <div className=" hidden md:flex items-center gap-4">
        <LanguageSelector />
        <SocialMedia />
      </div>

      <BurgerMenu />
    </nav>
  );
}
