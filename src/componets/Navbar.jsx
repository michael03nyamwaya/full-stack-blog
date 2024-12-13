import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between p-5 h-[100px] ">
      {/* Logo Section */}
      <div className="w-1/3 flex items-center">
        <Link to="/" className="flex items-center">
          <img src="" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="font-bold text-lg md:text-xl lg:text-2xl">Logo</span>
        </Link>
      </div>

      {/* Search Bar Section */}
      <div className="hidden md:flex w-1/2 md:w-2/5 lg:w-1/3 items-center py-2 px-4 rounded-full bg-white shadow-lg border border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px" className="text-gray-500 mr-3">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
        </svg>
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full py-2 pl-2 pr-10 text-lg border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMobileMenu} 
          className="text-gray-500 text-2xl focus:outline-none"
        >
          ≡
        </button>
      </div>

      {/* Links Section (Desktop) */}
      <div className="hidden md:flex w-full md:w-2/5 items-center justify-end gap-10">
        <Link to="/" className="text-gray-800 hover:text-blue-500 text-sm md:text-base lg:text-lg">Homepage</Link>
        <Link to="/about" className="text-gray-800 hover:text-blue-500 text-sm md:text-base lg:text-lg">About</Link>
        <Link to="/contact" className="text-gray-800 hover:text-blue-500 text-sm md:text-base lg:text-lg">Contact</Link>
        
        <SignedOut>
          <Link
            to="/login"
            className="text-white bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 text-sm md:text-base lg:text-lg"
          >
            Login
          </Link>
        </SignedOut>
        
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Menu (Toggleable) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 right-0 bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          <Link to="/" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Homepage</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <SignedOut>
            <Link
              to="/login"
              className="text-white bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </SignedOut>
          
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </div>
  );
};

export default Navbar;
