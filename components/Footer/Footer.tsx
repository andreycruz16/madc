// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 bottom-0 w-full bg-gray-600 text-white p-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-center text-sm">
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
