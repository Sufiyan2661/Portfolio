import React from "react";
import { FaLinkedin,  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/Logo.jpg"



const Navbar = () => {

 

  return (
    <nav className="flex items-center mb-10 justify-between px-4 py-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="size-10 rounded-full" alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
       <a href="https://www.linkedin.com/in/mohd-sufiyan-317193248" target="_blank" >
       <FaLinkedin className="text-cyan-800" />
       </a>
       <a href="https://github.com/Sufiyan2661" target="_blank">
       <FaGithub className='text-white'/></a>
       <a href="https://x.com/MohdSufiya6467" target="_blank">
       <FaSquareXTwitter className='text-white'/>
       </a>
        </div>

    </nav>
  );
};

export default Navbar;
