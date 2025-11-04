import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import lambdaGrowthData from "../data/lambdaGrowth.json";

// Global defaults
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font = { size: 20 };
defaults.plugins.title.color = "black";
defaults.plugins.circumference = 200;

const colors = {
  back: ["#f2ff97", "#97ffef", "#979eff", "#e397ff", "#ff97bf"],
  hover: ["green", "blue", "coral", "pink", "gray"],
  border: "lightgray",
};

const colorConfig = {
  backgroundColor: colors.back,
  hoverBackgroundColor: colors.hover,
  borderColor: colors.border,
};

const LambdaGrowth = () => {
  return (
    <div className="graph_cont">
      <Doughnut
        data={{
          labels: lambdaGrowthData.map((data) => data.label),
          datasets: [
            {
              ...colorConfig,
              label: " Growth",
              data: lambdaGrowthData.map((data) => data.value),
            },
          ],
        }}
        options={{
          cutout:'0%',
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: " Growth",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  const value = context.parsed || 0;
                  return `${label}: ${value}%`;
                },
              },
              backgroundColor: "lightgreen",
            },
          },
        }}
      />
    </div>
  );
};

export default LambdaGrowth;
