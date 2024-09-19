import { animateScroll } from "react-scroll";
import NavLinks from "./NavLinks";
import SocialMedia from "./SocialMedia";
import { InboxArrowDownIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  const options = {
    duration: 500,
    smooth: true,
  };

  const handleOnClick = () => {
    animateScroll.scrollToTop(options);
  };
  return (
    <footer className="bg-gray-800 bg-opacity-50 flex justify-between items-center md:px-20 text-white p-2 w-full flex-col h-full">
      <div className=" flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
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

        <a
          href="mailto:info@monots.com"
          className="gap-5 items-center p-4 
           group cursor-pointer justify-center transition-all"
        >
          <h2 className=" text-center group-hover:text-lightBlue">
            Tambien puedes mandarnos{" "}
          </h2>
          <h2 className=" text-center group-hover:text-lightBlue">
            un email dando click aqui!
          </h2>

          <InboxArrowDownIcon className=" text-white text-center flex w-full h-8 group-hover:text-lightBlue" />
        </a>
      </div>
      <p className=" my-10">All right reserved @{new Date().getFullYear()}</p>
    </footer>
  );
}
