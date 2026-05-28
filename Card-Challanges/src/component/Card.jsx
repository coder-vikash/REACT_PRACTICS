import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import { Button } from "./Button";
import { CiHeart } from "react-icons/ci";

export const Card = ({ name, role, likeCount, imgUrl }) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl mx-auto">
      {/* Top Part */}
      <div className="w-full h-36 md:h-40 bg-blue-400 relative flex justify-center">
        <div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full absolute 
            -bottom-12 overflow-hidden border-4 border-blue-400 p-1 bg-white"
        >
          <img
            className="w-full h-full object-cover rounded-full"
            src={imgUrl}
            alt="images is Loading..."
          />
        </div>
      </div>

      {/* Bottom Part */}
      <div className="flex flex-col items-center mt-16">
        <h1 className="font-bold text-lg md:text-xl">{name}</h1>
        <p className="text-gray-600 text-sm md:text-base">{role}</p>
      </div>

      {/* Social Icons */}
      <div className="flex flex-row gap-4 items-center justify-center pt-4 text-xl">
        <BsInstagram />
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center pt-6 gap-4">
        <Button title="Subscribe" />
        <Button title="Message" />
      </div>

      {/* Likes/Comments */}
      <div className="flex flex-wrap items-center gap-6 justify-center text-gray-700 pt-4">
        <div className="flex items-center gap-2">
          <CiHeart />
          <span>{likeCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <CiHeart />
          <span>{likeCount }</span>
        </div>
        <div className="flex items-center gap-2">
          <CiHeart />
          <span>60.5k</span>
        </div>
      </div>
    </div>
  );
};
