import React from "react";
import study_men from "../assets/Png/study_men.png"
import phone from "../assets/Png/phone.png"
import startup from "../assets/Png/startup.png"
import economy from "../assets/Png/economy.png"
import techonology from "../assets/Png/techonology.png"
import { maincontext } from "./Index";

const Blog = () => {
  const { Posts } = maincontext()
  return (
    <>
      {/* herosection */}
      <div className="bg-[#F4F0F8] lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="max-w-[1280px]  px-9 mx-auto">
          <div className="flex flex-row flex-wrap lg:justify-between justify-center">
            <div className="lg:w-6/12 px-3 md:w-10/12 text-center lg:text-start">
              <p className="font_inter font-medium text-[16px] leading-[20px] tracking-[3px] text-[#232536]">
                Featured Post
              </p>
              <p className="font_sen font-bold lg:text-[36px] md:text-[30px] text-[25px] lg:leading-[48px] tracking-[-2px] text-[#232536] mt-[20px]">
                Step-by-step guide to choosing great font pairs
              </p>
              <p className="font_inter font-medium text-[14px] leading-[20px] text-[#4C4C4C] mt-[16px]">
                By <span className="text-[#805EBD]">John Doe </span>  l   May 23, 2022
              </p>
              <p className="font_inter font-normal text-[16px] leading-[28px] text-[#6D6E76] mt-[16px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className="text-[#232 536] font_sen font-bold text-[18px] leading-[24px] lg:mt-[32px] mt-[25px] bg-[#FFD050] py-[16px] px-[48px] ">
                Read More
              </button>
            </div>
            <div className="lg:w-5/12 px-3 md:w-8/12 mt-[40px] lg:mt-[0]">
              <img className="w-full" src={study_men} alt="men img" />
            </div>
          </div>
        </div>
      </div>


      {/* All posts */}

      <div className="max-w-[1280px]  px-3 mx-auto lg:mt-[64px] mt-[40px]">
        <p className="font_sen font-bold text-center lg:text-start text-[48px] leading-[64px] tracking-[-2px] text-[#232536]">
          All posts
        </p>
        <div>
          {Posts.map((card, i) => {
            return (
              (
                <div key={i} >
                  <div className="lg:flex   text-center lg:text-start items-center lg:mt-[64px] mt-[40px]">
                    <img className="lg:me-[32px] mx-auto" src={card.img} alt="girl_img " />
                    <div className="mt-[30px] lg:mt-[0]">
                      <p className="font_inter font-semibold text-[16px] leading-[20px] tracking-[3px] text-[#592EA9]">
                        {card.text}
                      </p>
                      <p className="font_sen font-bold lg:text-[36px] sm:text-[28px] text-[24px] lg:leading-[48px] tracking-[-2px] text-[#232536] mt-[20px]">
                        {card.heading}
                      </p>
                      <p className="font_inter font-normal text-[16px] lg:leading-[28px] text-[#6D6E76] mt-[16px]">
                        {card.par}
                      </p>
                    </div>
                  </div>
                </div>

              )
            )
          })}
        </div>


        {/* All Categories */}
        <div className="max-w-[1280px]  px-3 mx-auto lg:mt-[64px] mt-[40px]">
          <p className="font_sen font-bold lg:text-[36px] text-[28px]  lg:leading-[36px] tracking-[-2px] text-[#232536]">
            All Categories
          </p>



          <div className="flex flex-row flex-wrap mt-[48px] justify-center lg:justify-start">
            <div className="lg:w-3/12 px-3 md:w-4/12 sm:w-6/12 w-11/12">
              <div className="xl:p-[32px] p-[28px] border_1px hover:bg-[#FFD050] duration-500 cursor-pointer">
                <img src={phone} alt="phone img" />
                <p className="font_sen font-bold text-[28px] mt-[16px]">
                  Business
                </p>
                <p className="font_inter font-normal text-[16px] leading-[28px] mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>


            <div className="lg:w-3/12 px-3 md:w-4/12 sm:w-6/12 w-11/12 mt-[24px] sm:mt-[0]">
              <div className="xl:p-[32px] p-[28px] border_1px hover:bg-[#FFD050] duration-500 cursor-pointer">
                <img src={startup} alt="phone img" />
                <p className="font_sen font-bold text-[28px] mt-[16px]">
                  Startup
                </p>
                <p className="font_inter font-normal text-[16px] leading-[28px] mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>

            <div className="lg:w-3/12 px-3 md:w-4/12 mt-[24px] md:mt-[0] sm:w-6/12 w-11/12">
              <div className="xl:p-[32px] p-[28px] border_1px hover:bg-[#FFD050] duration-500 cursor-pointer">
                <img src={economy} alt="phone img" />
                <p className="font_sen font-bold text-[28px] mt-[16px]">
                  Economy
                </p>
                <p className="font_inter font-normal text-[16px] leading-[28px] mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>

            <div className="lg:w-3/12 px-3 md:w-4/12 mt-[24px] lg:mt-[0] sm:w-6/12 w-11/12">
              <div className="xl:p-[32px] p-[28px] border_1px hover:bg-[#FFD050] duration-500 cursor-pointer">
                <img src={techonology} alt="phone img" />
                <p className="font_sen font-bold text-[28px] mt-[16px]">
                  Technology
                </p>
                <p className="font_inter font-normal text-[16px] leading-[28px] mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* join team */}
        <div className="max-w-[1280px]  px-9 mx-auto lg:mt-[128px] md:mt-[90px] mt-[40px]">
          <p className="font_sen font-bold lg:text-[36px] md:text-[27px] text-[24px] lg:w-[440px] text-center m-auto leading-[48px] tracking-[-2px] text-[#232536]">
            Join our team to be a part of our story
          </p>
          <p className="font_inter font-normal lg:text-[16px] lg:leading-[28px] lg:mt-[16px] mt-[10px] text-[#6D6E76] lg:w-[400px] text-center m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <div className=" text-center lg:mt-[32px] mt-[20px]">
            <button className="font_sen font-bold text-[18px] leading-[24px] text-[#232536] bg-[#FFD050] py-[16px] px-[48px] ">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
