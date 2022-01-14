import React from "react";
import content from "../content";

const Mobilemenu = () => {
  return (
    <div className="flex lg:hidden flex-col text-white py-6 justify-center items-center">
      <div className="">
        {content.nav.links.map((link, index) => {
          return (
            <span className="flex flex-col text-center text-small font-medium mb-4">
              {link.text}
            </span>
          );
        })}
      </div>
      <div className="flex sm:flex-col ">
        {content.nav.auth.map((button, index) => {
          return (
            <a
              className="border-solid text-small font-medium border-2 bg-gradient-to-r from-indigo-500 to-blue-500 mx-2 px-5 py-1 rounded-full"
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

export default Mobilemenu;
