import React from "react";

export default function Error() {
  return (
    <div className="bg-indigo-500 h-screen flex justify-center items-center">
      <div className="w-[50%] flex flex-col">
        <h1 className="text-white text-3xl text-center p-20 ">
          Kya search krdiya...
        </h1>
        <a href="/" className="text-white text-center underline">
          Go Home
        </a>
      </div>
      <img
        src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?semt=ais_hybrid&w=740&q=80"
        className="w-[50%] p-10 h-full"
        alt=""
      />
    </div>
  );
}
