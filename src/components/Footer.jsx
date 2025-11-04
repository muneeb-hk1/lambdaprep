import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 p-20 border-t-blue-400 border-t-4">
        <div className="container flex md:flex-row sm:flex-col">
          <div className="w-4/12 p-10">
            <h4 className="text-2xl font-bold text-black">About us</h4>
            <p>
              Kane AI is a smart automation platform that enhances productivity
              using machine learning. It streamlines workflows, improves
              decision-making, and integrates seamlessly across tools. Designed
              for speed and efficiency, Kane AI makes intelligent automation
              effortless.
            </p>
            <a href="components/dashboard" className="buy_now mt-10">
              Ready to Grow
            </a>
          </div>

          <div className="w-8/12 flex flex-wrap ">
            <div className="w-6/12  lg:w-3/12 p-10">
              <h4 className="text-2xl font-bold text-black">Useful Links</h4>
              <ul className="foot_list mt-10">
                <li>About</li>
                <li>Kane AI</li>
                <li>Embeded</li>
                <li>HyperExecute</li>
              </ul>
            </div>

            <div className="w-6/12 lg:w-3/12 p-10">
              <h4 className="text-2xl font-bold text-black">Bar Comp</h4>
              <ul className="foot_list mt-10">
                <li>SuperCharge</li>
                <li>Automation</li>
                <li>HyperFold</li>
                <li>LameCharge</li>
                <li>Envito Corp</li>
              </ul>
            </div>

            <div className="w-6/12 lg:w-3/12 p-10">
              <h4 className="text-2xl font-bold text-black">Digital Corp</h4>
              <ul className="foot_list mt-10">
                <li>Default Automation</li>
                <li>Keepo Vite</li>
                <li>Henro Execute</li>
              </ul>
            </div>

            <div className="w-6/12 lg:w-3/12 p-10">
              <h4 className="text-2xl font-bold text-black">Fino Chart</h4>
              <ul className="foot_list mt-10">
                <li>Zip Line</li>
                <li>Ja Code</li>
                <li>Test Mate</li>
                <li>Vino Test Mate</li>
                <li>Cofflame</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
