import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-14 object-contain"
            src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-red-600 transition ${
                isActive ? "text-red-600" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `hover:text-red-600 transition ${
                isActive ? "text-red-600" : "text-gray-700"
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-red-600 transition ${
                isActive ? "text-red-600" : "text-gray-700"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-red-600 transition ${
                isActive ? "text-red-600" : "text-gray-700"
              }`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `hover:text-red-400 transition ${
                isActive ? "text-red-600" : "text-gray-700"
              }`
            }
          >
            Help
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-semibold bg-green-400">
          <Menu to="/" title={"Home"} onClick={() => setIsOpen(false)}></Menu>
          <Menu
            to="/product"
            title={"product"}
            onClick={() => setIsOpen(false)}
          ></Menu>
          <Menu
            to="/about"
            title={"about"}
            onClick={() => setIsOpen(false)}
          ></Menu>
          <Menu
            to="/contact"
            title={"contact"}
            onClick={() => setIsOpen(false)}
          ></Menu>
          <Menu
            to="/help"
            title={"help"}
            onClick={() => setIsOpen(false)}
          ></Menu>
        </div>
      )}
    </nav>
  );
};

const Menu = ({ to, title, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => (isActive ? "text-[tomato] font-bold" : "")}
    >
      {title}
    </NavLink>
  );
};

export default Menu;
