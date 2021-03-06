import React from "react";
import vid from "../Assets/vid.mp4";
import pic from "../Assets/pic.png";
import wave from "../Assets/wave.png";

const Header = () => {
  return (
    <div className="min-h-screen flex relative  w-full flex-col py-4 px-6 items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center py-10 mx-auto w-full text-white">
        <div className="text-center lg:text-left lg:w-1/2 w-3/4 mx-auto mb-[2em]">
          <h2
            data-aos="fade-right"
            data-aos-delay={250}
            className="text-white text-5xl mb-[.2em] font-bold"
          >
            Welcome to Capital Equity Funds
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay={400}
            className="text-white text-xl font-normal lg:text-2xl lg:w-4/5"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sit.
            Voluptas ut odio, ducimus omnis at molestias animi quisquam saepe
            eius perferendis dolorum quaerat veniam?
          </p>
        </div>
        <div className=" lg:w-1/2 w-full -mb-[2em]">
          <img className=" w-full" src={pic} alt="mine bitcoin" />
        </div>
      </div>
      <video
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          objectPosition: "center",
          objectFit: "cover",
        }}
        src={vid}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <img
        className="w-full absolute inset-x-0 bottom-0 h-16"
        src={wave}
        alt="wave"
      /> */}
    </div>
  );
};

export default Header;
