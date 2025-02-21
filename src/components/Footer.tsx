
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & About */}
          <div>
            <h2 className="text-2xl font-bold">Bike Store</h2>
            <p className="text-gray-400 mt-2">
              Your one-stop shop for premium quality bikes and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">Shop</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 mt-2">📍 Dhaka, Bangladesh</p>
            <p className="text-gray-400">📞 +880 1234-567890</p>
            <p className="text-gray-400">✉ info@bikestore.com</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} Bike Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
