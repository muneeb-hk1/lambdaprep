import { useState, useEffect } from "react";
import hero_img from "../public/img/hero-1.png";
import Product from "./components/Product";
import Server from "./components/Server";
import Pop from "./components/Pop";

const Home = () => {
  const [inputvalue, setInputvalue] = useState("");
  const formhandler = () => {
    inputvalue ? alert(`Value ${inputvalue}`) : null;
  };
  const [shownpop, setShownpop] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShownpop(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="main_cont bg-blue">
        <div className="w-full container">
          <div className="h-[92dvh] flex flex-col justify-center">
            <h1 className="text-[45px] font-medium md:text-[100px] leading-tight text-gray-300">
              <span className="text-white">Humanity</span> <br /> created
              intelligence — and lost exclusivity.
            </h1>
            <p className="text-[18px] hidden">
              REDEFINΞ is the universal mobile companion to your desktop CRM.{" "}
              <br />
              Capture more leads, follow up unfairly, and sync it all to
            </p>
            <div className="mt-20 hidden">
              <h3 className="text-[18px]">Get Started</h3>
              <div className="relative w-[55%] mt-10">
                <form onClick={formhandler}>
                  <input
                    type="number"
                    placeholder="Enter your number"
                    className="relative w-full"
                    required
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e.target.value)}
                  />
                  <button>
                    <i className="fa-solid fa-chevron-right bg-blue-400 p-18 rounded-full block text-white absolute right-2 top-1/2 -translate-y-1/2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="h-screen w-[40%] !md:flex md:justify-center md:items-end hidden md:!mt-6">
            <img src={hero_img} className="h-[85%]" />
          </div>
        </div>
      </section>
      <Product />
      <Server />
      {shownpop && (
        <>
          <Pop />
        </>
      )}
    </>
  );
};

export default Home;
