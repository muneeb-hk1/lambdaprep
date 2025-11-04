import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const pie_color_config = {
  back: ["red", "blue", "green"],
  hover: ["darkred", "darkblue", "darkgreen"],
  border: ["lightcoral", "lightblue", "lightgreen"],
};

const pie_color_fit = {
  backgroundColor : pie_color_config.back,
  hoverBackgroundColor : pie_color_config.hover,
  borderColor: pie_color_config.border,
  circumference: 350,
  rotation:20,       
  borderRadius:5
}

const Mychart = () => {   
  return (
    <>
      <div className="chart_cont">
        {/* <div className="dataCard revenueCard">           
          <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                },
                {
                  label: "Cost",
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: "#FF3030",
                  borderColor: "#FF3030",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                line: {
                  tension: 0.4,
                },
              },
              plugins: {
                title: {
                  text: "Monthly Revenue & Cost",
                  display: true,
                  color: "black",
                  font: { size: 20, weight: "bold" },
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const index = context.dataIndex;
                      const revenue = context.dataset.data[index];
                      const date = revenueData[index].date || "N/A";
                      return `Revenue: ${revenue} (Date: ${date})`;
                    },
                  },
                },
              },
            }}
          />
        </div> */}

        {/* <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",   
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "green",
                ],
                borderRadius: 5,
              },
              {
                label: "Loss",
                data: sourceData.map((data) => data.value - 20),
                backgroundColor: "gray",
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div> */}

        <div className="dataCard categoryCard">
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  ...pie_color_fit,
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
                {
                  ...pie_color_fit,
                  label:"Loss",
                  data:sourceData.map((data)=> data.value -10)
                }
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  text: "Revenue Sources",
                },
                hoverBackgroundColor: "green",
              },
              animation: {
                animateRotate: true,
                animateScale: true,
                duration: 4000, // custom speed
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Mychart;