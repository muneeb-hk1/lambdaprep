import React, { useState } from "react";

const Pop = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <>
          <div className="overlay" onClick={() => setOpen(false)}></div>
          <section className="pop_alert">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="pop_text leading-loose">
                    <h2 className="border-b-2 border-green-500 text-3xl !mb-3">
                      Alert
                    </h2>
                    <p>
                      The Products shown below are demo and comes from local api
                      call using axios and all components are connected with{" "}
                      <b>redux store</b>.
                    </p>
                    <p>
                      In <b>Dashboard</b> different charts are shown - Like{" "}
                      <b>Bar chart</b>, <b>Doughnut chart</b> and{" "}
                      <b>Line chart</b>.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 flex justify-end">
                  <button
                    onClick={handleClose}
                    className="border close_popUp !py-3 !px-10 !mt-4 !text-white bg-blue cursor-pointer hover:bg-transparent hover:text-black"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Pop;
