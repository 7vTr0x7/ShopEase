import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  bg-gray-100 text-black text-xl font-semibold text-center py-6">
      <p>&copy; 2024 ShopEase. All rights reserved.</p>
      <div className="text-3xl mt-3 gap-8 flex justify-center">
        <Link to="https://github.com/7vTr0x7">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/salmanshaikh-/">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
