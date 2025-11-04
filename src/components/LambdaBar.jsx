import React from 'react'
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'

import lambdaBarData from '../data/lambdaBar.json'

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.borderRadius = 10;

const LambdaBar = () => {
  return (
    <>
      <div className="graph_cont">
        <Bar
          data={{
            labels: lambdaBarData.map((data) => data.year),
            datasets: [
              {
                label: "Yearly Invocations",
                data: lambdaBarData.map((data) => data.growth),
                backgroundColor: "#af97ff",
              },
              {
                label: "Cost",
                data: lambdaBarData.map((data) => data.cost),
                backgroundColor: "#f2ff97",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Metrics",
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default LambdaBar