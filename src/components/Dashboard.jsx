import React from 'react'
import Mychart from "./Mychart"
import LambdaScale from "./LambdaScale";
import LambdaGrowth from "./LambdaGrowth";
import LambdaBar from "./LambdaBar";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const layouts = {
    lg:[
      {i:"1", x:0, y:0, w:2, h:1},
      {i:"2", x:2, y:0, w:1, h:1},
      {i:"3", x:0, y:0, w:3, h:1}
    ]
  }

  const breakpoints = {lg:1200, md:767}
  const cols = {lg:3, md:1}

  const chartCSS = {
    backgroundImage: "linear-gradient(45deg, #00bd7e, #979eff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "10px",
  };

  const chartCSS_1 = {
        backgroundImage:"linear-gradient(217deg, rgb(189 0 142 / 50%), rgb(138 142 199))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "10px",
  };

  return (
    <div className="dash-container">
      <ResponsiveGridLayout
        layouts={layouts}
        cols={cols}
        breakpoints={breakpoints}
        rowHeight={320}
      >
        <div key="1" style={{ ...chartCSS }}>
          <LambdaScale />
        </div>
        <div key="2" style={{ ...chartCSS_1 }}>
          <LambdaGrowth />
        </div>
        <div key="3" style={{ ...chartCSS }}>
          <LambdaBar />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default Dashboard