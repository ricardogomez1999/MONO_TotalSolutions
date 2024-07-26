import { animateScroll } from "react-scroll";
import NavLinks from "./NavLinks";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  const options = {
    duration: 500,
    smooth: true,
  };

  const handleOnClick = () => {
    animateScroll.scrollToTop(options);
  };
  return (
    <footer className="bg-gray-800 bg-opacity-50 flex justify-between items-center md:px-20 text-white p-2 w-full flex-col h-44">
      <div className=" flex w-full justify-center md:justify-between items-center">
        <a
          href="#"
          onClick={handleOnClick}
          className=" flex justify-center items-center"
        >
          <img src="./whiteLogo.png" alt="logo" className=" w-14 md:w-24" />
          <h1 className=" text-sm font-bold">
            MONO <span className=" font-light">Total Solutions</span>
          </h1>
        </a>

        <div className=" hidden md:flex gap-5">
          <NavLinks hidden={true} />
          <SocialMedia />
        </div>
      </div>
      <p className=" my-10">All right reserved @{new Date().getFullYear()}</p>
    </footer>
  );
}
