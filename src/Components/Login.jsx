import React from "react";
import { useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import auth from "../Routes/auth";
import { PostData } from "../Services/PostData";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const onSubmit = (data) => {
    PostData("users/login", data).then((result) => {
      let responseJSON = JSON.stringify(result);
      if (result.user) {
        auth.login(() => {
          localStorage.setItem("user", responseJSON);
          setTimeout(() => {
            history.push("/dashboard/home");
          }, 3000);
          toast("Login Successful!", {
            position: "top-right",
            type: "success",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
        console.log(result);
      } else {
        console.log(result);
        toast(`${result.message}`, {
          position: "top-right",
          type: "error",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="min-h-screen flex items-center bg-gradient-to-r from-Blue-500 to-Teal-500 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <a href="/">
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                alt="Workflow"
              />
            </a>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Sign in to your account
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-Indigo-600 hover:text-Indigo-500"
              >
                start your 14-day free trial
              </a>
            </p> */}
          </div>
          <form
            className="mt-8 space-y-6 border border-solid bg-white  py-[2em] rounded-lg shadow-default px-8 "
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  ref={register}
                  autoComplete="email"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                {errors.password && <p>{errors.password.message}</p>}
                <input
                  id="password"
                  name="password"
                  ref={register({
                    required: "Password Required",
                  })}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-Indigo-600 focus:ring-Indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/reset-password"
                  className="font-medium text-Blue-500 hover:text-Blue-700 "
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-gradient-to-r from-Cyan-500 to-Blue-500 hover:bg-gradient-to-r from-Blue-500 to-Cyan-500 focus:outline-none focus:shadow-xl "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <BiLockAlt
                    className="h-5 w-5 text-Indigo-500 group-hover:text-Indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div className="flex justify-center items-center text-black font-base text-sm ">
              Create an account? &nbsp;
              <a href="/signup" className="text-[#328CF0] font-semibold">
                sign up
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="text-white ml-4 absolute bottom-0 font-hairline text-sm text-opacity-75">
        &copy; Copyright Capital Equity Funds, 2022.
      </div>
    </div>
  );
};

export default Login;
