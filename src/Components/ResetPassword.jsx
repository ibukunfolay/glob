import React from "react";
import { useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import auth from "../Routes/auth";
import { PostData } from "../Services/PostData";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    PostData("users/change-password/:id", data).then((result) => {
      let responseJSON = JSON.stringify(result);
      if (responseJSON.user) {
        console.log(result);
        setTimeout(() => {
          toast("Password reset Successful!", {
            position: "top-right",
            type: "success",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }, 5000);
        history.push("/login");
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
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Reset Password
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
                <label htmlFor="oldPassword" className="sr-only">
                  Old Password
                </label>
                {errors.oldPassword && <p>{errors.oldPassword.message}</p>}
                <input
                  id="oldPassword"
                  name="oldPassword"
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
                  placeholder="Old Password"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="sr-only">
                  New Password
                </label>
                {errors.newPassword && <p>{errors.newPassword.message}</p>}
                <input
                  id="newPassword"
                  name="newPassword"
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
                  placeholder="New Password"
                />
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
                Reset Password
              </button>
            </div>
            <div className="flex justify-center items-center text-black font-base text-sm ">
              Already have an account? &nbsp;
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

export default ResetPassword;
