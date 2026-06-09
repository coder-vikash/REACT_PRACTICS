import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="flex bg-green-400 items-center m-auto justify-center gap-6 text-xl font-bold p-5">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/contact"
        >
          Contact Us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/help"
        >
          Help Us
        </NavLink>
      </div>
    </div>
  );
};
