import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Logo = 'https://res.cloudinary.com/dal1rjdwl/image/upload/v1740143116/logo_txu2ni.png'

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto px-4  sm:px-6 lg:px-0 max-w-screen-2xl">
        <div className="flex justify-between items-center">
        
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-primary flex items-center"
            >
              <img src={Logo} alt="Bike Store" className="h-12 my-4 w-auto mr-2 border border-primary shadow-xl rounded-full" />
              BikeStore
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg "
              >
                Home
              </Link>
              <Link
                to="/bikes"
                className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg "
              >
                Bikes
              </Link>
              <Link
                to="/about"
                className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg "
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg "
              >
                Contact
              </Link>
            </div>
         

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-1 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1 bg-primary text-white rounded-xl hover:bg-secondary transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/bikes"
              className="text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Bikes
            </Link>
            <Link
              to="/about"
              className="text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="w-full text-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
