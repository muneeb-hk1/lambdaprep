import React, {useState } from "react";

const Pop = () => {
  const [open, setOpen] = useState(true); // start as visible



  const handleClose = () => {
    setOpen(false); // hide the alert when clicked
  };

  return (
    <>
      {open && ( // show only if open is true
        <section className="pop_alert">
          <div className="container">
            <div className="row">
              <div className="col-md-12 flex justify-end">
                <button onClick={handleClose} className="border !py-1 !px-10">
                  Close
                </button>
              </div>
              <div className="col-md-12">
                <div className="pop_text">
                  <h2 className="border-b-2 border-green-500">Alert</h2>
                  <p>This site is a demo of how things work in react.</p>
                  <p>
                    The Products shown below are demo and comes from local api
                    call using axios and all components are connected with redux
                    store.
                  </p>
                  <p>
                    In Dashboard different charts are shown - Like Bar chart,
                    Doughnut chart and Line chart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Pop;
