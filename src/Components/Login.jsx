import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex justify-between items-center mx-auto bg-gradient-to-br from-black via-Gray-800 to-[#0B0D26]">
      <div className="image invisible md:visible md:w-1/2 h-[100vh] bg-[url('https://images.pexels.com/photos/4464438/pexels-photo-4464438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-center bg-cover bg-no-repeat"></div>
      <div className="box flex flex-col md:w-1/3 sm:w-3/5 w-full  justify-center px-10  py-8 mx-auto backdrop-blur-2xl">
        <div className=" mb-[2em] border-b-4 border-solid border-Blue-500 ">
          <h1 className="font-bold text-4xl text-white text-center mb-2 ">
            Log In
          </h1>
        </div>
        <div className="border-b-2 border-Pink-300 mb-[1.5em]">
          <input
            type="text"
            placeholder="Enter Email or username"
            className="bg-transparent text-xl py-2 px-3 outline-none text-white text-opacity-50 mb-4"
          />
        </div>
        <div className="border-b-2 border-Pink-300 mb-[1.5em]">
          <input
            type="text"
            placeholder="Enter Password"
            className="bg-transparent text-xl py-2 px-3 outline-none text-white text-opacity-50 mb-4"
          />
        </div>
        <div className="my-4 text-center bg-gradient-to-r from-Cyan-500 to-Blue-500 px-6 py-3 rounded-full">
          <button className="text-3xl text-white font-bold">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
