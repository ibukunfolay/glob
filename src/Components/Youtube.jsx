import Vidlink from "./Vidlink";

const Youtube = () => {
  return (
    <div className=" bg-gradient-to-b from-black via-Gray-900 to-BlueGray-900 lg:min-h-[80vh] min-h-fif py-[4em] px-[2em] text-white font-bold">
      <div className="video flex flex-col lg:flex-row lg:items-center w-full">
        <div className="youtube lg:mr-10 mb-[2em] lg:w-1/2 lg:relative w-full">
          <Vidlink videoId="kW_y6JFCWsg" />
        </div>
        <div className="text-left">
          <h1 data-aos="fade-up" data-aos-delay={900} className="text-2xl my-4">
            Lorem, ipsum dolor.
          </h1>
          <p data-aos="fade-up" data-aos-delay={1200} className="font-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dicta quos quis est culpa sit.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay={1500}
            type="submit"
            className="my-6 px-10 py-2 rounded-full  bg-gradient-to-r from-Cyan-500 to-Blue-500"
          >
            Let's start
          </button>
        </div>
      </div>
      <div className="text-icons">
        <div className="text"></div>
        <div className="icons">
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
