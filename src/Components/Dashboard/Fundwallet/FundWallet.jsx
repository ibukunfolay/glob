import { useForm } from "react-hook-form";
import { PostData } from "../../../Services/PostData";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FundWallet = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const user = localStorage.getItem("user");

  const onSubmit = (data) => {
    PostData("users/create-charge", data).then((result) => {
      if (result) {
        console.log(result);
        window.location.href = `${result.hosted_url}`;
        // history.push("/dashboard/home");
        toast("Redirecting!", {
          position: "top-right",
          type: "success",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setAlert("Failed");
        setError(`${result.message}`);
      }
    });
  };

  return (
    <div className="flex flex-col text-center px-[2em] py-[2em] bg-[#212121] mx-auto w-full lg:w-2/5">
      <h1 className="text-3xl font-bold ">Fund Wallet</h1>
      <ToastContainer />
      <h4 className="text-small font-medium my-[1em] ">
        Enter the amount you want to deposit
      </h4>
      <input
        type="text"
        name="Amount"
        ref={register}
        placeholder="Amount in USD"
        className="p-2 bg-[#71717a] text-#fff outline-none"
      />
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="my-[2em] py-3 rounded-full bg-gradient-to-r from-Blue-500 to-Teal-400 font-semibold"
      >
        Submit
      </button>
    </div>
  );
};

export default FundWallet;
