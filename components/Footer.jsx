import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; 2023 TechShop All rights reserved!</p>
      <p className="icons">
        <Link href="https://linkedin.com/in/shahanawaz-pathan">
          <a target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
        </Link>
        <Link href="https://github.com/Shahanawazgit">
          <a target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub />
          </a>
        </Link>
        <Link href="https://shahanawaz-portfolio.vercel.app">
          <a target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
