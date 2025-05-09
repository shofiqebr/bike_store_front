// | Purpose       | Tailwind Class   | Color Suggestion        | Notes                                         |
// | ------------- | ---------------- | ----------------------- | --------------------------------------------- |
// | **Primary**   | `bg-primary`     | `#2563EB` (blue-600)    | Energetic, reliable, bold                     |
// | **Secondary** | `bg-secondary`   | `#F59E0B` (amber-500)   | Attention-grabbing, for buttons or highlights |
// | **Accent**    | `bg-accent`      | `#10B981` (emerald-500) | Positive actions, hover states, badges        |
// | **Neutral**   | `bg-neutral`     | `#F3F4F6` (gray-100)    | Backgrounds, light areas                      |
// | **Text**      | `text-primary`   | `#1F2937` (gray-800)    | Readable dark text                            |
// | **Error**     | `text-error`     | `#DC2626` (red-600)     | Error messages or alerts                      |
// | **Border**    | `border-primary` | Same as `#2563EB`       | Keep consistency                              |


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/features/hooks";
import { RootState } from "../redux/features/store";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Logo = 'https://res.cloudinary.com/dal1rjdwl/image/upload/v1740143116/logo_txu2ni.png';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-screen-2xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <img
              src={Logo}
              alt="Bike Store"
              className="h-12 my-4 w-auto mr-2 border border-primary shadow-xl rounded-full"
            />
            BikeStore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ">
            <Link to="/" className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg">
              Home
            </Link>
            <Link to="/allProducts" className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg">
              All Products
            </Link>
          {/* Categories with Mega Menu */}
<div className="relative group ">
  <div className="">

  <Link
    to="/category"
    className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-[6px] px-4 mb- rounded-lg"
  >
    Categories
  </Link>
  </div>

  {/* Mega Menu */}
  <div className="absolute hidden group-hover:flex left-0 top-[30px] w-[600px] bg-white shadow-xl border mt- z-50 p-6 rounded-lg justify-between">
    <div>
      <h4 className="font-bold text-primary mb-2">Mountain Bikes</h4>
      <ul className="space-y-1 text-sm text-gray-700">
        <li><Link to="/category/mountain/hardtail">Hardtail</Link></li>
        <li><Link to="/category/mountain/full-suspension">Full Suspension</Link></li>
        <li><Link to="/category/mountain/downhill">Downhill</Link></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-primary mb-2">Electric Bikes</h4>
      <ul className="space-y-1 text-sm text-gray-700">
        <li><Link to="/category/electric/commuter">Commuter</Link></li>
        <li><Link to="/category/electric/mountain">Electric Mountain</Link></li>
        <li><Link to="/category/electric/cargo">Cargo</Link></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-primary mb-2">Road Bikes</h4>
      <ul className="space-y-1 text-sm text-gray-700">
        <li><Link to="/category/road/race">Race</Link></li>
        <li><Link to="/category/road/endurance">Endurance</Link></li>
        <li><Link to="/category/road/gravel">Gravel</Link></li>
      </ul>
    </div>
  </div>
</div>

            <Link to="/offers" className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg">
              Offers
            </Link>
            <Link to="/blog" className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg">
              Blog
            </Link>
            <Link to="/about" className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg">
              About
            </Link>
            <Link to="/contact" className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg">
              Contact
            </Link>
            <Link
                to={user?.role === "admin" ? "/admin-dashboard" : "/dashboardCustomer"}
                className="hover:text-white hover:bg-primary text-primary bg-white font-bold transition-colors border border-primary py-1 px-4 rounded-lg "
              >
                Dashboard
              </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            {user ? (
              <div
                onClick={handleLogout}
                className="px-4 py-1 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                Login
              </Link>
            )}
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/allProducts" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">All Products</Link>
            <Link to="/categories" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">Categories</Link>
            <Link to="/offers" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">Offers</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">Blog</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-primary transition-colors">Contact</Link>

            {user ? (
              <div
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
              >
                Login
              </Link>
            )}
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
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
