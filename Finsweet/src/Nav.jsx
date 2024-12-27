import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import finsweet_logo from "../src/assets/Png/finsweet_logo.Png";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(prev => {
      document.body.style.overflow = prev ? 'auto' : 'hidden';
      return !prev;
    });
  };
  return (
    <>
      <div>
        {toggleNav && (
          <div className="fixed inset-0 bg-black opacity-60 backdrop-blur-3xl z-10"></div>
        )}
        <div className="bg-[#232536] py-[12px]">
          <div className=" max-w-[1280px] px-3 mx-auto ">
            <div className="flex items-center justify-between">
              <div>
                <img className="cursor-pointer" src={finsweet_logo} alt="logo" />
              </div>
              <div className={`max-lg:fixed max-lg:h-screen max-lg:w-[50%] max-md:w-[100%] top-0 flex  max-lg:flex items-center justify-center max-lg:flex-col z-10 lg:bg-transparent bg-[#232536] text-[white] text-[bl ack] duration-700  ${!toggleNav ? "-left-full" : "left-0"}`}>
                <NavLink className="lg:mr-6 mb-[30px] lg:mb-0" to="/">
                  Home
                </NavLink>
                <NavLink className="lg:mr-6 mb-[30px] lg:mb-0" to="/Blog">
                  Blog
                </NavLink>
                <NavLink className="lg:mr-6 mb-[30px] lg:mb-0" to="/About_us">
                  About
                </NavLink>
                <NavLink className="lg:mr-8 mb-[30px] lg:mb-0" to="/Contact_us">
                  Contact
                </NavLink>
                <button className="font-sans font-bold text-[18px] leading-[24px]  nav_subscribe_btn px-[48px] py-[16px] text-[#232536]  duration-500 ">
                  Subscribe
                </button>

              </div>



              <div onClick={handleToggleNav} class="flex justify-end  lg:hidden z-10 cursor-pointer">
                <div style={{ transform: toggleNav ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                  <span style={{
                    transform: toggleNav ? "rotate(-5deg) translate(10px, 5px)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }} className="block w-8 h-[3px] bg-white  mb-[6px]"></span>
                  <span style={{
                    opacity: toggleNav ? 0 : 1,
                    transition: "opacity 0.3s",
                  }} className="block w-8 h-[3px] bg-white  mb-[6px]"></span>
                  <span style={{
                    transform: toggleNav ? "rotate(-80deg) translate(14px, 8px)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }} className="block w-8 h-[3px] bg-white "></span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
