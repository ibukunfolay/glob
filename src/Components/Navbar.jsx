import { useEffect, useState } from "react";
import content from "../content";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div
      navScroll={navScroll}
      className={`flex w-full fixed z-20 ${
        navScroll ? "bg-Gray-900" : ""
      } text-white items-center justify-between px-6 py-4`}
    >
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-Cyan-500 to-Blue-500">
        {content.nav.logo}
      </h1>
      <div className="hidden lg:flex lg:-mr-[25em]">
        {content.nav.links.map((link, index) => {
          return (
            <span className=" text-small font-medium mx-4">{link.text}</span>
          );
        })}
      </div>
      <div className="hidden md:flex">
        {content.nav.auth.map((button, index) => {
          return (
            <a
              className="border-solid text-small font-medium border-2 gradient-to-r from-indigo-500 to-blue-500 mx-2 px-5 py-1 rounded-full"
              href={button.to}
            >
              {button.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
