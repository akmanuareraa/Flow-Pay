import React from "react";

function RegisterBusiness(props) {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-white text-xl font-medium">App Name</p>
        <input className="border-white border-4 rounded-full p-4 bg-black text-white text-xl w-96"></input>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-white text-xl font-medium">App Id</p>
        <input
          disabled
          value="APP898768"
          className="border-white border-4 rounded-full p-4 bg-black text-slate-400 text-xl w-96"
        ></input>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-white text-xl font-medium">Wallet</p>
        <input className="border-white border-4 rounded-full p-4 bg-black text-white text-xl w-96"></input>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-white text-xl font-medium">Rate</p>
        <input className="border-white border-4 rounded-full p-4 bg-black text-white text-xl w-96"></input>
      </div>
      <div class="flex flex-row justify-center">
        <div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              class="form-check-label inline-block text-white text-xl font-medium"
              for="flexRadioDefault1"
            >
              Payment / Sec
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              class="form-check-label inline-block text-white text-xl font-medium"
              for="flexRadioDefault2"
            >
              Payment / Min
            </label>
          </div>
        </div>
      </div>
      <button className="text-white text-xl font-extrabold p-6 border-2 border-white rounded-full hover:bg-white hover:text-black w-96 mt-5">
          Submit
        </button>
    </div>
  );
}

export default RegisterBusiness;
