import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen relative flex flex-col py-10 bg-gradient-to-b from-black to-[#0B0D26]">
      <div className="flex w-full justify-between items-center mx-4 mx-auto ">
        <div className="image invisible md:visible md:w-1/2 h-[100vh] bg-[url('https://images.pexels.com/photos/4464438/pexels-photo-4464438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-center bg-cover bg-no-repeat"></div>
        <div className="box flex flex-col md:w-1/3 sm:w-3/5 w-full  justify-center px-10 py-8 mx-auto backdrop-blur-2xl bg-black rounded-xl">
          <div className=" mb-[2em] border-b-4 border-solid border-Blue-500 ">
            <h1 className="font-bold text-4xl text-white text-center mb-2 ">
              Log In
            </h1>
          </div>
          <div className=" flex flex-col border-b-2 border-Pink-300 mb-[1.5em]">
            <label htmlFor="email" className="text-white font-semibold mb-1">
              Email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email or username"
              className="bg-transparent text-xl py-2 px-3 outline-none text-white text-opacity-50 mb-4"
            />
          </div>
          <div className=" flex flex-col border-b-2 border-Pink-300 mb-[1.5em]">
            <label htmlFor="password" className="text-white font-semibold mb-1">
              Password:
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
              className="bg-transparent text-xl py-2 px-3 outline-none text-white text-opacity-50 mb-4"
            />
          </div>
          <div className="my-4 text-center bg-gradient-to-r from-Cyan-500 to-Blue-500 px-6 py-3 rounded-full">
            <button className="text-3xl text-white font-bold">Submit</button>
          </div>
          <div className="flex justify-center items-center text-white text-small font-semibold ">
            create an account? &nbsp;
            <a href="/login" className="text-[#328CF0] font-bold">
              sign up
            </a>
          </div>
        </div>
      </div>
      <div className="text-white ml-4 absolute bottom-0 font-semibold text-opacity-75">
        &copy; Copyright Capital Equity Funds, 2022.
      </div>
    </div>
  );
};

export default Login;
