import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-red-300 py-5">
      <header className="max-w-[60rem] flex items-center justify-between text-2xl text-black/80 m-auto px-4">
        {/* Brand */}
        <h1 className="font-bold">Brand</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-xl items-center">
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integration</a>
          <a href="">Learn More</a>
          <a href="">About Us</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-green-400 rounded-lg px-4 py-2 cursor-pointer">
          Join Us
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden bg-green-400 rounded-lg px-3 py-2 ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 text-lg bg-red-200 p-4 mt-2 rounded-lg">
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integration</a>
          <a href="">Learn More</a>
          <a href="">About Us</a>
        </nav>
      )}
    </div>
  );
};
