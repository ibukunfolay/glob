import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="top flex lg:min-h-full  flex-col bg-gradient-to-b from-black via-Gray-900 to-[#0B0D26] lg:flex-row lg:h-[70vh] lg:justify-between text-white py-10 px-4  justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-delay={800}
          className="social flex mb-[2em] flex-col justify-center  w-full lg:w-1/3  items-center text-center"
        >
          <h4 className="text-3xl my-4 font-bold text-center flex align-center">
            Social Media
          </h4>
          <div className="icons flex  mb-3">
            <a
              href="#"
              className="font-bold text-white border-2 border-solid rounded-full p-2 mx-2 text-2xl"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="font-bold text-white border-2 border-solid rounded-full p-2 mx-2 text-2xl"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="font-bold text-white border-2 border-solid rounded-full p-2 mx-2 text-2xl"
            >
              <BsTelegram />
            </a>
            <a
              href="#"
              className="font-bold text-white border-2 border-solid rounded-full p-2 mx-2 text-2xl"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={1400}
          className="Email flex flex-col mb-[2em] justify-center items-center w-full lg:w-1/3 "
        >
          <h2 className="my-6 font-bold text-center text-3xl">
            Subscribe to our news letter
          </h2>
          <div className="border-solid border-2 flex rounded-full text-white px-4 font-medium text-base lg:text-xl py-2 ">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="lg:mx-2  bg-transparent outline-none"
            />
            <button className=" bg-gradient-to-r from-Cyan-500 to-Blue-500 px-4 py-1 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={1800}
          className="quicklinks flex flex-col  items-center w-full lg:w-1/3 justify-center text-white"
        >
          <h2 className="text-3xl font-bold my-4">Quick Links</h2>
          <div className="links flex flex-wrap justify-center">
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Contact us
            </a>
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Loan
            </a>
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Investment Plan
            </a>
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Get Started
            </a>
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Get Started
            </a>
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Get Started
            </a>
            <a href="#" className="link font-small mx-2 mb-3 lg:text-xl">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="bottom flex font-small text-center flex-col lg:flex-row lg:justify-between min-h-fit bg-[#000] text-white justify-center items-center px-6 py-6">
        <div>&copy; Copyright GrandWealth 2022, All Rights Reserved</div>
        <div className="">
          <a href="#" className="mx-2">
            Terms & Conditions
          </a>
          <a href="#" className="mx-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
