const FundWallet = () => {
  const num = {
    marginBottom: 4,
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="flex flex-col text-center px-[2em] py-[2em] bg-[#212121] mx-auto w-full lg:w-2/5">
      <h1 className="text-3xl font-bold ">Fund Wallet</h1>
      <h4 className="text-small font-medium my-[1em] ">
        Enter the amount you want to deposit
      </h4>
      <input
        type="text"
        placeholder="Enter the amount"
        className="p-2 bg-[#71717a] text-#fff outline-none"
      />
      <button
        type="submit"
        className="my-[2em] py-3 rounded-full bg-gradient-to-r from-Blue-500 to-Teal-400 font-semibold"
      >
        Submit
      </button>
    </div>
  );
};

export default FundWallet;
