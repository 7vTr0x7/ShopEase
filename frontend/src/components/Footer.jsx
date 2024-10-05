import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-gray-100 text-black text-xl font-semibold text-center py-6">
      <p>&copy; 2024 ShopEase. All rights reserved.</p>
      <div className="text-3xl mt-3 gap-8 flex justify-center">
        <FaGithub />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
