import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Strips = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [75, 40, 10, 20, 25, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="flex lg:flex-row flex-col px-[2em] lg:px-[4em] py-[3em] lg:items-center lg:justify-between">
      <div className="doughnut flex flex-col items-center mb-[3em]">
        <h1 className="text-center flex font-bold text-2xl mb-[1em]">
          Lorem ipsum dolor.
        </h1>
        <Doughnut data={data} className="doughnut" options={options} />
      </div>
      <div className="strips flex flex-col ">
        <div
          data-aos="fade-up"
          data-aos-delay={800}
          className="strip text-1xl font-medium bg-white shadow-xl mb-2 z-10 w-full py-5 px-4 border-l-4 border-Red-300 text-opacity-25"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          culpa.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={1200}
          className="strip text-1xl font-medium bg-white shadow-xl mb-2 z-10 w-full py-5 px-4 border-l-4 border-Cyan-300 text-opacity-25"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          culpa.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={1600}
          className="strip text-1xl font-medium bg-white shadow-xl mb-2 z-10 w-full py-5 px-4 border-l-4 border-Yellow-300 text-opacity-25"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          culpa.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={2000}
          className="strip text-1xl font-medium bg-white shadow-xl mb-2 z-10 w-full py-5 px-4 border-l-4 border-Pink-300 text-opacity-25"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          culpa.
        </div>
      </div>
    </div>
  );
};

export default Strips;
