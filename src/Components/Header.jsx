import React from "react";
import vid from "../Assets/vid.mp4";
import pic from "../Assets/pic.png";
import wave from "../Assets/wave.png";

const Header = () => {
  return (
    <div className="min-h-screen flex relative w-full flex-col py-4 px-6 items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center py-4 pb-6 w-full text-white">
        <div className="text-center lg:text-left lg:w-1/2 w-full">
          <h2 className="text-white text-4xl font-bold">
            Welcome to Grandwealth
          </h2>
          <p className="text-white font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sit.
            Voluptas ut odio, ducimus omnis at molestias animi quisquam saepe
            eius perferendis dolorum quaerat veniam?
          </p>
        </div>
        <div className=" lg:w-1/2 w-full">
          <img className="lg:w-3/4 w-full" src={pic} alt="mine bitcoin" />
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
      />
      <img
        className="w-full absolute inset-x-0 bottom-0 h-16"
        src={wave}
        alt="wave"
      />
    </div>
  );
};

export default Header;
