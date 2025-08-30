import React from "react";

function Navbar() {
  return (
    <nav className="w-full h-14 bg-[#7f20be] text-white px-6 py-3 flex justify-between items-center shadow-md">
      
      <div className="text-xl font-bold tracking-wide">Websites.co.in</div>

    
      <div className="flex space-x-6">
        <button className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">About</button>
        <button className="hover:text-gray-300">Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
