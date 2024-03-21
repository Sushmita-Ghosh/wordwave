import logo from "../assets/talk.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer flex flex-col md:flex-row justify-center md:justify-between gap-10 py-10 mt-10 items-center bg-gray-950">
      <div className="left-section w-full md:py-10 px-5 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold text-white  hover:text-orange-500 transition-all duration-300 ease-in-out">
            Word Wave
          </h1>
        </div>
        <p className="text-white">Copyright © 2022 | All rights reserved</p>
      </div>

      {/* links */}
      <div className="middle-section w-full md:py-10 px-5 flex flex-col justify-center items-center">
        <p className="text-white hover:text-orange-500 transition-all duration-300 ease-in-out">
          About Us
        </p>
        <p className="text-white  hover:text-orange-500 transition-all duration-300 ease-in-out">
          Privacy Policy
        </p>
        <p className="text-white  hover:text-orange-500 transition-all duration-300 ease-in-out">
          Terms & Conditions
        </p>
      </div>

      {/* icon links */}
      <div className="right-section w-full md:py-10 px-5 flex flex-row justify-center items-center gap-2 md:gap-5">
        <div className="p-3 rounded-full border border-gray-700 hover:bg-orange-500 transition-all duration-300 ease-in-out">
          <FaLinkedin className="w-6 h-6 text-gray-50 hover:text-white transition-all duration-300 ease-in-out" />
        </div>
        <div className="p-3 rounded-full border border-gray-700 hover:bg-orange-500 transition-all duration-300 ease-in-out">
          <FaFacebook className="w-6 h-6 text-gray-50 hover:text-white transition-all duration-300 ease-in-out" />
        </div>
        <div className="p-3 rounded-full border border-gray-700 hover:bg-orange-500 transition-all duration-300 ease-in-out">
          <FaGithub className="w-6 h-6 text-gray-50 hover:text-white transition-all duration-300 ease-in-out" />
        </div>
        <div className="p-3 rounded-full border border-gray-700 hover:bg-orange-500 transition-all duration-300 ease-in-out">
          <FaTwitter className="w-6 h-6 text-gray-50 hover:text-white transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
