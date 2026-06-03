import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
export const Navbar = () => {
  const [MobileView, setMobileview] = useState(false);
  return (
    <div className="flex justify-between gap-3 bg-green-400 p-[2rem]">
      <h1 className="text-2xl font-bold">Logo</h1>

      <div className="flex gap-4 font-bold text-xl items-center hidden md:flex gap-6 ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact Us</a>
        <a href="">Service</a>
      </div>
      <div className="flex gap-4 items-center justify-center text-2xl cursor-pointer">
        <span>🛒</span>
        <span>🛒</span>
        <AiOutlineMenuUnfold
          onClick={() => {
            setMobileview(!MobileView);
          }}
          className="md:hidden gap-4 text-3xl"
        />
      </div>
      <div
        className={`absolute h-screen w-[20rem] bg-red-500 top-0 left-0 md:hidden flex flex-col gap-6 items-center py-[5rem]  text-xl font-bold shadow-lg ${MobileView ? "translate-x-0" : "-translate-x-[100%]"} transition-all duration-350`}
      >
        <button
          onClick={() => {
            setMobileview(false);
          }}
          className="absolute bg-black text-white text-xl right-4 top-4 cursor-pointer rounded-full px-3 py-1 hover:bg-gray-800 transition"
        >
          ❌
        </button>
        <a
          href=""
          className="w-full text-center py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Home
        </a>
        <a
          href=""
          className="w-full text-center py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          About
        </a>
        <a
          href=""
          className="w-full text-center py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Contact Us
        </a>
        <a
          href=""
          className="w-full text-center py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Service
        </a>
      </div>
    </div>
  );
};
