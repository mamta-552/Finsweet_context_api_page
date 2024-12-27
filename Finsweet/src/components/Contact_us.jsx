import React from "react";

const Contact_us = () => {
  return (
    <>
      <div className="max-w-[1280px] px-3 mx-auto">
        <div className="text-center lg:mt-[128px] md:mt-[90px] sm:mt-[60px] mt-[30px]">
          <p className="font_inter font-extrabold text-[16px] leading-[20px] tracking-[3px] text-[#232536]">
            Contact us
          </p>
          <p className="font_sen font-bold lg:text-[48px] md:text-[35px] text-[28px] lg:leading-[64px] tracking-[-2px] text-[#232536] mt-[12px]">
            Let’s Start a Conversation
          </p>
          <p className="font_inter font-normal text-[16px] leading-[28px] text-[#6D6E76] lg:w-[60%] mx-auto lg:mt-[24px] mt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>


        <div className="bg-[#592EA9] md:w-[768px]  mx-auto py-[48px] px-[64px] lg:mt-[64px] mt-[50px]">
          <div className="md:flex text-center ">
            <div className="md:me-[71px]">
              <p className="font_inter font-normal text-[14px] leading-[20px] text-[#FFFFFF] opacity-[60%]">
                Working hours
              </p>
              <p className="font_sen font-bold text-[20px] leading-[32px] text-[#FFFFFF] mt-[16px]">
                Monday To Friday
              </p>
              <p className="font_sen font-bold text-[20px] leading-[32px] text-[#FFFFFF]">
                9:00 AM to 8:00 PM
              </p>
              <p className="font_inter font-normal text-[16px] leading-[28px] text-[#FFFFFF] opacity-[60%]">
                Our Support Team is available 24/7
              </p>
            </div>

            <div className="mt-[30px] md:mt-0 text-center">
              <p className="font_inter font-normal text-[14px] leading-[20px] text-[#FFFFFF] opacity-[60%]">
                Contact Us
              </p>
              <p className="font_sen font-bold text-[20px] leading-[32px] text-[#FFFFFF] lg:mt-[16px] mt-[10px]">
                020 7993 2905
              </p>

              <p className="font_inter font-normal text-[16px] leading-[28px] text-[#FFFFFF] opacity-[60%]">
                hello@finsweet.com
              </p>
            </div>
          </div>
        </div>



        {/* input files */}
        <div className="text-center mt-[32px]">
          <input className="input_text lg:w-[61%] md:w-[80%] w-[100%] py-[24px] px-[24px] outline-none" type="text" name="" id="" placeholder="Full Name" />
          <input className="input_text  lg:w-[61%] md:w-[80%] w-[100%] py-[24px] px-[24px] mt-[16px] outline-none" type="email" name="" id="" placeholder="Your Email" />
          <input className="input_text  lg:w-[61%] md:w-[80%] w-[100%] py-[24px] px-[24px] mt-[16px] outline-none" type="text" name="" id="" placeholder="Query Related  " />
          <input className="input_text  lg:w-[61%] md:w-[80%] w-[100%] pt-[24px] pb-[70px] px-[24px] mt-[16px] outline-none" type="message" name="" id="" placeholder="Message" />

          <button className="font_sen font-bold text-[24px] leading-[32px] text-[#232536] lg:w-[61%] md:w-[80%] w-[100%] bg-[#FFD050] py-[16px] mt-[16px]">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
