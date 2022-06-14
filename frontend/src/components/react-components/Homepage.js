import React from "react";

function Homepage(props) {
  return (
    // <div className="bg-slate-200 h-screen">
    <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col w-fit items-center self-center gap-4">
          <p className="text-8xl text-white mb-7">You're a</p>
        <button className="text-white text-3xl font-extrabold p-6 border-2 border-white rounded-full hover:bg-white hover:text-black">
          Business
        </button>
        <button className="text-white text-3xl font-extrabold p-6 border-2 border-white rounded-full hover:bg-white hover:text-black">
          Subscriber
        </button>
      </div>
    </div>
  );
}

export default Homepage;
