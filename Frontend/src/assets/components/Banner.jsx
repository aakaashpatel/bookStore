import React from "react";
import book from "../../../public/book.webp";

const Banner = () => {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto  md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-1 md:order-2 md:w-1/2 mt-9 md:mt-32 space-y-9">
          <div>
            <h1 className="text-3xl font-semibold text-gray-500">
              Hello, Welcome here to learn something
              <span className="text-pink-600"> new everyday!!!</span>
            </h1>
          </div>
          <div>
            <h2 className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              doloremque natus asperiores tenetur est ipsam, sunt voluptatum
              similique et officiis mollitia porro quia quisquam deserunt
              facilis alias.
            </h2>
          </div>
          <div>
            <label className=" p-2 border rounded flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none"
                placeholder="Email"
              />
            </label>
            <button className="btn  bg-pink-600 text-white mt-5 hover:bg-black">
              Click
            </button>
          </div>
        </div>
        <div className="w-full order-2 md:w-1/2 mt-2 md:mt-20 ">
          <img src={book} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
