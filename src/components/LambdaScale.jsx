import React from 'react'
import {Chart as ChartJS, defaults } from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

import lambdaScaleData from "../data/lambdaScale.json"
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

defaults.elements.line.borderWidth = 4;

const colors = {
  back: ["#f2ff97", "#97ffef", "#979eff", "#e397ff", "#ff97bf"],
  hover: ["green", "blue", "coral", "pink", "gray"],
  border: ["#af97ff"],
};

const colorConfig = {
   backgroundColor: colors.back,
    hoverBackgroundColor: colors.hover,
   borderColor: colors.border,
}

const LambdaScale = () => {
  return (
    <>
      <div className="graph_cont">
        <Line
          data={{
            labels: lambdaScaleData.map((data) => data.year),
            datasets: [
              {
                ...colorConfig,
                label: " Scale",
                data: lambdaScaleData.map((data) => data.growth),
              },
              {
                ...colorConfig,
                label: "Cost",
                data: lambdaScaleData.map((data) => data.cost),
                tension: 0.2,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: " Scale",
              },
              tooltip: {
                enabled: true,
                backgroundColor: "#af97ff",
                borderWidth: 1,
                borderColor: "#af97ff",
                bodyColor: "white",
                cornerRadius: 10,
                usePointStyle: true,
                
              },
            },
            elements: {
              line: {
                tension: 0.3,
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default LambdaScale