import React from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineCreditCard,
  AiOutlineTag,
} from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";

const Wallet = () => {
  const person = {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  };

  return (
    <div className="bg-[#212121] min-h-screen px-8 py-4">
      <div className=" flex flex-col lg:flex-row mb-[5em]">
        <div className="inline-flex lg:mr-4 mb-[1em] lg:mb-0 items-center rounded-md font-medium border-2 border-solid border-Yellow-600 px-4 py-2 text-xl text-Yellow-600 hover:text-white hover:bg-Yellow-600 hover:shadow-[0_35px_60px_-15px_rgba(231, 193, 78, 0.9)]">
          <AiOutlinePlusSquare className="text-xl mr-1" />
          New Investment
        </div>
        <div className="inline-flex  items-center rounded-md font-medium border-2 border-solid border-Teal-600 px-4 py-2 text-xl text-Teal-600 hover:text-white hover:bg-[#23bab1] hover:shadow-[0_35px_60px_-15px_rgba(231, 193, 78, 0.9)]">
          <AiOutlinePlusSquare className="text-xl mr-1" />
          Make Withdrawal
        </div>
      </div>
      <div className="flex flex-col mb-[3em] lg:flex-row lg:justify-between ">
        <div className="bg-[#71717a] w-full lg:mr-4 flex items-center mb-4 rounded-md px-4 py-2">
          <RiShoppingBag3Line className="text-2xl mr-4 text-[#23bab1] " />
          <div className="flex flex-col text-[1.3em] font-normal">
            <span className="text-base">Total Investments</span>
            $100,000.00
          </div>
        </div>
        <div className="bg-[#71717a] w-full lg:mr-4 justify-between flex mb-4 rounded-md px-4 py-2">
          <div className="flex text-[1em] items-center font-normal">
            <AiOutlineTag className="text-2xl mr-4 text-[#23bab1] " />
            <div className="flex flex-col text-[1.3em] font-normal">
              <span className="text-base">Active Investments</span>0
            </div>
          </div>
          <div className="flex text-xs text-Red-600">100%</div>
        </div>
        <div className="bg-[#71717a] w-full  flex justify-between mb-4 rounded-md px-4 py-2">
          <div className="flex items-center text-[1em] font-normal">
            <AiOutlineCreditCard className="text-2xl mr-4 text-[#23bab1] " />
            <div className="flex flex-col text-[1.3em] font-normal">
              <span className="text-base">Investment Profits</span>
              $20,000.00
            </div>
          </div>
          <div className="flex text-xs text-Yellow-500">100%</div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-Gray-500">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-Gray-200">
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-Gray-900">
                            {person.name}
                          </div>
                          <div className="text-sm text-Gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-Gray-900">
                        {person.title}
                      </div>
                      <div className="text-sm text-Gray-500">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-Green-100 text-Green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-Gray-500">
                      {person.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-Indigo-600 hover:text-Indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
