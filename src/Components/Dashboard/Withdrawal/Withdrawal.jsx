import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Withdrawal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isHidden, setIsHidden] = useState(null);

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
    <div className="">
      <div
        onClick={handleOpen}
        className="inline-flex mb-[5em] items-center rounded-md font-medium border-2 border-solid border-Yellow-600 px-2 py-1 text-Yellow-600 hover:text-white hover:bg-Yellow-600 hover:shadow-[0_35px_60px_-15px_rgba(231, 193, 78, 0.9)]"
      >
        <AiOutlinePlusSquare className="text-xl mr-1" />
        Make Withdrawal
      </div>

      <div className="flex flex-col bg-[#212121] min-h-[50vh] px-8 py-4">
        <h1 className="text-2xl font-bold mb-[1em]">Withdrawal</h1>
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
            <div className="flex flex-col w-full  text-Teal-500 mx-1 mb-[0.5em]">
              <label
                htmlFor="withdrawal_mode"
                className="mb-[1em] text-center "
              >
                Select withdrawal mode
              </label>
              <select
                name="withdrawal_mode"
                required
                onChange={(e) => {
                  e.target.value === "cryptocurrency"
                    ? setIsHidden(1)
                    : e.target.value === "bank_account"
                    ? setIsHidden(2)
                    : "";
                }}
                className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                id="withdrawal_mode"
              >
                <option value="">--select-mode--</option>
                <option value="cryptocurrency">Cryptocurrency</option>
                <option value="bank_account">Bank Account</option>
              </select>
            </div>
            {isHidden === 1 ? (
              <div className="flex flex-col w-full  text-Teal-500 mx-1 mb-[0.5em]">
                <label htmlFor="FullName" className="mb-[1em] text-center ">
                  Bitcoin Withdrawal
                </label>
                <input
                  type="text"
                  placeholder="Enter Wallet Address"
                  required
                  className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                />
              </div>
            ) : isHidden === 2 ? (
              <div className="">
                <div className="mb-[2em] w-full text-Teal-500">
                  <span className="flex ml-2 text-xl font-semibold mb-[1em]">
                    Amount to Withdraw
                  </span>
                  <input
                    className="flex w-full bg-[#71717a]  outline-none rounded-md px-2 py-2 mx-2"
                    type="number"
                    name="amount"
                    id="amount"
                  />
                </div>
                <div className="flex flex-wrap w-full justify-between">
                  <div className="flex flex-col w-full lg:w-[48%]  text-Teal-500 mx-1 mb-[0.5em]">
                    <label htmlFor="FullName" className="mb-[1em] text-center ">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      placeholder="Bank Name"
                      required
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
                      required
                      className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                    />
                  </div>
                  <div className="flex flex-col w-full lg:w-[48%]  text-Teal-500 mx-1 mb-[0.5em]">
                    <label htmlFor="FullName" className="mb-[1em] text-center ">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                      name="date"
                      id="date"
                    />
                  </div>
                  <div className="flex flex-col w-full lg:w-[48%]  text-Teal-500 mx-1 mb-[0.5em]">
                    <label htmlFor="FullName" className="mb-[1em] text-center ">
                      Sex (Gender)
                    </label>
                    <select
                      name="gender"
                      required
                      className=" w-full px-2 py-2 bg-[#71717a]  outline-none rounded-md text-Teal-500 mx-1 mb-[0.5em]"
                      id="gender"
                    >
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  </div>
                </div>
                {/* <div className="flex items-center justify-center text-white ">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="mr-2 rounded-sm"
                  />
                  I agree to the&nbsp;
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-Teal-500 hover:text-Teal-600"
                  >
                    loan privacy policy
                  </a>
                </div> */}
              </div>
            ) : (
              ""
            )}
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
            onClick={handleClose}
            className="hover:bg-Teal-300 hover:text-Teal-600 text-Teal-600"
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Withdrawal;
