import React from "react";
import { useState } from "react";
import { BiLockAlt } from "react-icons/bi";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="relative">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-Indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-Gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-Gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-Indigo-600 hover:text-Indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form
            className="mt-8 space-y-6 border border-solid backdrop-blur-3xl  py-[2em] rounded-lg shadow-default px-8 "
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="email"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-t-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                <input
                  id="confirm_password"
                  name="confirm_password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-b-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <label htmlFor="profile" className="sr-only">
                  Profile picture
                </label>
                <input
                  id="profile"
                  name="profile"
                  type="file"
                  required
                  className="appearance-none mb-4 shadow-inner rounded-md relative block w-full px-3 py-2 border border-Gray-300 placeholder-Gray-500 text-Gray-900 rounded-b-md focus:outline-none focus:ring-Indigo-500 focus:border-Indigo-500 focus:z-10 sm:text-sm"
                />
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
      <div className="text-black ml-4 absolute bottom-0 font-hairline text-sm text-opacity-75">
        &copy; Copyright Capital Equity Funds, 2022.
      </div>
    </div>
  );
};

export default Signup;
