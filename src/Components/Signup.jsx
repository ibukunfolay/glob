import React from "react";
import { useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { PostData } from "../Services/PostData";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../Routes/auth";

const Signup = () => {
  const { register, handleSubmit, errors, getValues } = useForm();
  let history = useHistory();

  const onSubmit = (data) => {
    PostData("users/register", data).then((result) => {
      let responseJSON = result;
      if (responseJSON.user) {
        auth.login(() => {
          setTimeout(() => {
            history.push("/login");
          }, 3000);
          console.log(responseJSON);
          toast("Signup Successful!", {
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
      } else {
        console.log("error");
      }
    });
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="min-h-full bg-gradient-to-r from-Blue-500 to-Teal-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <a href="/">
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                alt="Workflow"
              />
            </a>
            <h2 className="mt-6 text-white text-center text-3xl font-extrabold ">
              Create your account
            </h2>
            {/* <p className="mt-2 text-center text-sm text-Gray-600">
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
            className="mt-8 space-y-6 bg-white border border-solid backdrop-blur-3xl  py-[2em] rounded-lg shadow-default px-8 "
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                {errors.email && <p>{errors.email.message}</p>}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  ref={register({
                    required: "Enter Valid Email",
                  })}
                  autoComplete="email"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-t-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                {errors.username && <p>{errors.username.message}</p>}
                <input
                  id="username"
                  name="username"
                  type="text"
                  ref={register({
                    required: "Enter your username",
                  })}
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-t-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                {errors.fullName && <p>{errors.email.message}</p>}
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  ref={register({
                    required: "Enter your Full name",
                  })}
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-t-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                {errors.phone && <p>{errors.phone.message}</p>}
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  ref={register({
                    required: "Enter your mobile number",
                  })}
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-t-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
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
                    minLength: {
                      value: 8,
                      message: "Too short",
                    },
                  })}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-b-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm_password" className="sr-only">
                  confirm Password
                </label>
                {errors.confirm_password && (
                  <p>{errors.confirm_password.message}</p>
                )}
                <input
                  id="confirm_password"
                  name="confirm_password"
                  ref={register({
                    required: "Password Required",
                    validate: {
                      passwordEqual: (value) =>
                        value === getValues().password ||
                        "Passwords do not Match!",
                    },
                  })}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-b-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <label htmlFor="gender" className="sr-only">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  ref={register}
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-b-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-Indigo-600 focus:ring-Indigo-500 border-Gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-Gray-900"
                >
                  Remember me
                </label>
              </div>

              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-Indigo-600 hover:text-Indigo-500"
                >
                  Forgot your password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-gradient-to-r from-Cyan-500 to-Blue-500 hover:bg-gradient-to-r from-Blue-500 to-Cyan-500 focus:outline-none focus:shadow-xl"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <BiLockAlt
                    className="h-5 w-5 text-Indigo-500 group-hover:text-Indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center text-black font-base text-sm ">
              already have an account? &nbsp;
              <a href="/login" className="text-[#328CF0] font-semibold">
                sign in
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

export default Signup;
