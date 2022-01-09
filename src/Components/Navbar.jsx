import content from "../content";

const Navbar = () => {
  return (
    <div className="flex w-full bg-transparent text-white items-center justify-between px-6 py-4">
      <h1 className="text-3xl">{content.nav.logo}</h1>
      <div className="hidden md:flex">
        {content.nav.links.map((link, index) => {
          return <span className=" text-xl mx-4">{link.text}</span>;
        })}
      </div>
      <div className="hidden md:flex">
        {content.nav.auth.map((button, index) => {
          return (
            <a
              className="border-solid border-2 gradient-to-r from-indigo-500 to-blue-500 mx-2 px-5 py-2 rounded-full"
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
