import React from "react";

const Doc = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-full flex flex-col justify-center items-center !py-10 !px-20 rounded leading-10">
          <h1 className="text-3xl">REDEFINΞ</h1>
          <p className="text-center">
            A demo "site" of how things work here. The products shown like MCP
            Server are comes from local api call using axios and the dashboard
            part are showing dummy data of how different charts works.
          </p>
          <p>
            The Dashboard are built with react-grid-layout, so you can drag from
            here to there.
          </p>
          <p>
            This is build on React and all the components connect with redux
            store and the api call with axios.
          </p>
        </div>
      </div>
    </>
  );
};

export default Doc;
