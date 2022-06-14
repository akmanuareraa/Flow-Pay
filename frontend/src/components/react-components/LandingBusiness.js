import React from "react";

function LandingBusiness(props) {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row justify-center">
          <p className="text-white text-2xl font-medium">
            Business ID / Password
          </p>
        </div>
        <input className="border-white border-4 rounded-full p-4 bg-black text-white text-2xl"></input>
        <input className="border-white border-4 rounded-full p-4 bg-black text-white text-2xl mb-4"></input>
        <button className=" w-80 text-white text-2xl font-extrabold p-6 border-2 border-white rounded-full hover:bg-white hover:text-black">
          Sign In
        </button>
        <button className="w-80 text-white text-2xl font-extrabold p-6 border-0 border-white rounded-full bg-slate-400 hover:bg-slate-600 hover:text-white">
          Register a Business
        </button>
      </div>
    </div>
  );
}

export default LandingBusiness;
