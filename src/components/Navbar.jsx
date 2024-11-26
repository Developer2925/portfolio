import React from "react";
import logo from "../assets/portfolio/3.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="">
          <img src={logo} alt="" className="w-20" />
        </a>
      </div>

      {/* Socilas */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/om-dhakulkar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Developer2925"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/friemdsnookaybyeee/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/om.dhakulkar.56/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
