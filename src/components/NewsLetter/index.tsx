import React from "react";

const NewsLetter = () => {
  return (
    <div className="p-6">
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-gray-800 text-center">Subscribe Our News Letter</h2>
        <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son add.
        </p>
        <div className="flex items-stretch mt-12 w-96">
          <input
            className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-2 w-4/6 border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Your Email"
          />
          <button className="rounded-l-none hover:bg-[#e31d27] bg-[#c71922] rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bd171f]">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
