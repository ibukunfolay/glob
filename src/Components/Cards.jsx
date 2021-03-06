import React from "react";
import pic1 from "../Assets/add-photo.png";
import pic2 from "../Assets/encrypted.png";
import pic3 from "../Assets/invest.png";
import pic4 from "../Assets/money-withdrawal.png";

const Cards = () => {
  return (
    <div className="flex flex-col px-10 lg:flex-row lg:justify-between py-10 w-full">
      <div className="text my-4 flex flex-col mb-20 lg:flex-col lg:w-2/5 w-full text-center justify-center md:align-center">
        <h1
          data-aos="fade-up"
          data-aos-delay={400}
          className="text-4xl font-bold mb-8"
        >
          Start Building Wealth In 5 Minutes
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay={400}
          className="text-base font-small"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          accusantium expedita at obcaecati impedit maxime.
        </p>
      </div>
      <div className="cards lg:w-3/5 flex flex-wrap justify-center w-full">
        <div
          data-aos="fade-up"
          data-aos-delay={600}
          className="card inset-x-2 mb-10 shadow-2xl flex-col text-left lg:mx-2  lg:mr-3  lg:px-5 px-5 py-6 h-auto lg:w-[20em] w-full"
        >
          <img src={pic1} alt="" className="h-8 w-9 " />
          <h3 className="text-2xl font-bold text-Gray-700 text-opacity-100 my-3">
            Create Account
          </h3>
          <p className="text-base font-semibold text-Gray-700 text-opacity-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            amet alias suscipit placeat cumque odio qui quibusdam quis expedita
            nam?
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={1300}
          className="card inset-x-2 mb-10 shadow-2xl flex-col text-left lg:mx-2  lg:mr-3  lg:px-5 px-5 py-6 h-auto lg:w-[20em] w-full "
        >
          <img src={pic2} alt="" className="h-8 w-9 " />
          <h3 className="text-2xl font-bold text-Gray-700 text-opacity-100 my-3">
            Save & Get your money working
          </h3>
          <p className="text-base font-semibold text-Gray-700 text-opacity-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            amet alias suscipit placeat cumque odio qui quibusdam quis expedita
            nam?
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={900}
          className="card inset-x-2 mb-10 shadow-2xl flex-col text-left  lg:mx-2  lg:mr-3  lg:px-5 px-5 py-6 h-auto lg:w-[20em] w-full"
        >
          <img src={pic3} alt="" className="h-8 w-9 " />
          <h3 className="text-2xl font-bold text-Gray-700 text-opacity-100 my-3">
            Invest & Loan
          </h3>
          <p className="text-base font-semibold text-Gray-700 text-opacity-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            amet alias suscipit placeat cumque odio qui quibusdam quis expedita
            nam?
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={1800}
          className="card inset-x-2 mb-10 shadow-2xl flex-col text-left  lg:mx-2  lg:mr-3  lg:px-5 px-5 py-6 h-auto lg:w-[20em] w-full"
        >
          <img src={pic4} alt="" className="h-8 w-9 " />
          <h3 className="text-2xl font-bold text-Gray-700 text-opacity-100 my-3">
            Withdraw
          </h3>
          <p className="text-base font-semibold text-Gray-700 text-opacity-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            amet alias suscipit placeat cumque odio qui quibusdam quis expedita
            nam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
