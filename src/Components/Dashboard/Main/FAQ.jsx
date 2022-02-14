import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export default function FAQ() {
  const user = localStorage.getItem("user");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const id = user._id;
    PostData(`users/bank-info/${id}`, data).then(() => {
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
      toast("Successful!", {
        position: "top-right",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // console.log(result);
      // toast(`${result.message}`, {
      //   position: "top-right",
      //   type: "error",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    });
  };

  const faqs = [
    {
      icon: "Bank Name",
      text: `${user.bankName ? user.bankName : "Null"}`,
    },
    {
      icon: "Account Name",
      text: `${user.accountName ? user.accountName : "Null"}`,
    },
    {
      icon: "Account Number",
      text: `${user.accountNumber ? user.accountNumber : "Null"}`,
    },
  ];

  return (
    <Section>
      <ToastContainer />
      <div className="title">
        <h2>Bank Information</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq, i) => {
          return (
            <div className="faq" key={i}>
              <div className="info">
                <h4>{faq.icon}</h4>
                <h4>{faq.text}</h4>
              </div>
              <button
                className="flex items-center hover:text-Teal-500"
                onClick={handleOpen}
              >
                <span className="font-medium text-md">Edit</span>
                <IoIosArrowForward />
              </button>
            </div>
          );
        })}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" rounded-md"
      >
        <DialogTitle
          className="bg-[#212121] text-Teal-500 text-center font-semibold "
          id="alert-dialog-title"
        >
          Make Withdrawal
        </DialogTitle>
        <DialogContent className="bg-[#212121]">
          <div className="flex flex-col w-full items-center">
            <div className="">
              <div className="flex flex-wrap w-full justify-between">
                <div className="flex flex-col w-full lg:w-[48%]  text-Teal-500 mx-1 mb-[0.5em]">
                  <label htmlFor="FullName" className="mb-[1em] text-center ">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    ref={register}
                    name="bankName"
                    className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-[48%]  text-Teal-500 mx-1 mb-[0.5em]">
                  <label htmlFor="FullName" className="mb-[1em] text-center ">
                    Account Name
                  </label>
                  <input
                    type="text"
                    placeholder="Account Number"
                    ref={register}
                    name="accountName"
                    className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-[48%]  text-Teal-500 mx-1 mb-[0.5em]">
                  <label htmlFor="FullName" className="mb-[1em] text-center ">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Account Number"
                    ref={register}
                    name="accountNumber"
                    className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="bg-[#212121]">
          <Button
            onClick={handleClose}
            className="hover:bg-Teal-300 hover:text-Teal-600 text-Teal-600"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="hover:bg-Teal-300 hover:text-Teal-600 text-Teal-600"
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #23bab1;
      // font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
