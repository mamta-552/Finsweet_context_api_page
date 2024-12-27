import React from "react";
import group from "../assets/Png/group.png"
import hand_img from "../assets/Png/hand_img.png"
import seeting from "../assets/Png/seeting.png"
import { maincontext } from "./Index";
const About_us = () => {
  const { Author_cards2 } = maincontext()
  return <>
    <div className="max-w-[1280px]  px-3 mx-auto">

      {/* About us */}
      <div className="flex flex-row flex-wrap items-center md:justify-around mt-[80px]">
        <div className="md:w-6/12 px-3 lg:ms-[70px]">
          <div className="md:bg-[white] xl:p-[64px] lg:p-[40px]">
            <p className="font_inter font-medium text-[16px] leading-[20px] tracking-[3px] text-[#232536]">
              ABOUT US
            </p>
            <p className="font_sen font-bold lg:text-[48px] md:text-[35px] text-[25px] lg:leading-[64px] tracking-[-2px] text-[#232536] mt-[16px]">
              We are a team of content writers who share their learnings
            </p>
          </div>
        </div>

        <div className="md:w-5/12 px-3 ">
          <p className="font_inter font-normal text-[16px] leading-[28px] text-[#4C4C4C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* image */}
      <div className="lg:translate-y-[-15%] z-[-10] relative mt-[30px] lg:mt-[0]">
        <img src={group} alt="" />
      </div>

      {/* Our mision */}
      <div className="bg-[#F4F0F8] lg:pt-[128px] lg:pe-[128px] lg:ps-[108px] lg:pb-[64px] md:p-[40px] py-[30px] px-[20px] lg:translate-y-[-15%] relative">
        <div className="flex flex-wrap flex-row">
          <div className="md:w-6/12 px-3">
            <p className="font_inter font-semibold text-[16px] leading-[20px] tracking-[3px] text-[#232536]">
              OUR MISION
            </p>
            <p className="font_sen font-bold lg:text-[28px] text-[24px] lg:leading-[40px] tracking-[-1px] text-[#232536] mt-[24px]">
              Creating valuable content for creatives all around the world
            </p>
            <p className="font_inter font-normal text-[16px] leading-[28px]  text-[#6D6E76] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="md:w-6/12 px-3">
            <p className="font_inter font-semibold text-[16px] leading-[20px] tracking-[3px] text-[#232536]">
              Our Vision
            </p>
            <p className="font_sen font-bold lg:text-[28px] text-[24px] lg:leading-[40px]tracking-[-1px] text-[#232536] mt-[24px]">
              A platform that empowers individuals to improve
            </p>
            <p className="font_inter font-normal text-[16px] leading-[28px]  text-[#6D6E76] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>


      {/* Our team of creatives */}

      <div className="flex flex-row flex-wrap lg:justify-between items-center lg:text-start justify-center text-center lg:mt-[100px] md:mt-[90px] mt-[50px]">
        <div className="lg:w-5/12 md:w-9/12 w-11/12 px-3 mt-">
          <div>
            <p className="font_sen font-bold lg:text-[36px] text-[28px] lg:leading-[48px] tracking-[-2px] text-[#232536]">
              Our team of creatives
            </p>
            <p className="font_sen  font-bold text-[24px] leading-[32px] text-[#232536] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="font_inter font-normal text-[16px] leading-[28px] text-[#232536] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>

        <div className="lg:w-6/12 px-3 mt-[40px] lg:mt-0">
          <img src={hand_img} alt="hand img" />
        </div>
      </div>



      <div className="flex lg:flex-row flex-col-reverse flex-wrap lg:justify-between items-center lg:text-start justify-center text-center lg:mt-[128px] md:mt-[90px] mt-[50px]">

        <div className="lg:w-6/12 px-3 mt-[40px] lg:mt-0">
          <img src={seeting} alt="hand img" />
        </div>
        <div className="lg:w-5/12 md:w-9/12 w-11/12 px-3 mt-">
          <div>
            <p className="font_sen font-bold lg:text-[36px] text-[28px] lg:leading-[48px] tracking-[-2px] text-[#232536]">
              Why we started this Blog
            </p>
            <p className="font_sen  font-bold text-[24px] leading-[32px] text-[#232536] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="font_inter font-normal text-[16px] leading-[28px] text-[#232536] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>


      </div>


      {/* List of Authors */}
      <div className="max-w-[1280px] px-3 mx-auto lg:mt-[128px] md:mt-[90px] mt-[50px]">
        <p className="font_sen font-bold text-[36px] leading-[48px] tracking-[-2px] text-[#232536] text-center">
          List of Authors
        </p>

        <div className="flex flex-wrap flex-row mt-[48px] justify-center">
          {Author_cards2.map((card, i) => (
            <div key={i} className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-11/12 px-3 cursor-pointer mt-[24px]">
              <div className="bg-[#F4F4F4] text-center py-[40px] hover:bg-[#FBF6EA] duration-500">
                <img className="mx-auto" src={card.img} alt="men img" />
                <p className="font_sen font-bold text-[28px] leading-[40px] tracking-[-1px] text-[#232536] mt-[20px]">
                  {card.heading}
                </p>
                <p className="font_inter font-normal  text-[14px] leading-[20px] text-[#6D6E76] ">
                  {card.peragraph}
                </p>
                <div className="flex items-center mt-[20px] justify-center">
                  <span className="me-[16px]">
                    <a target="_blank" href="https://www.facebook.com/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z" fill="#232536" />
                    </svg>
                    </a>
                  </span>

                  <span className="me-[16px]">
                    <a target="_blank" href="https://x.com/?lang=en">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.03344 15.4068C11.0697 15.4068 14.3722 10.0919 14.3722 5.48434C14.3722 5.33492 14.3691 5.18219 14.3628 5.03277C15.0052 4.53914 15.5597 3.9277 16 3.22719C15.4017 3.51003 14.7664 3.69475 14.1159 3.77504C14.8009 3.33883 15.3137 2.65356 15.5594 1.84627C14.915 2.252 14.2104 2.5382 13.4756 2.69262C12.9806 2.13371 12.326 1.76364 11.6131 1.63964C10.9003 1.51563 10.1688 1.6446 9.53183 2.00659C8.89486 2.36858 8.38787 2.94344 8.08923 3.64228C7.7906 4.34113 7.71695 5.12504 7.87969 5.87281C6.575 5.80325 5.29862 5.44314 4.13332 4.81584C2.96802 4.18853 1.9398 3.30804 1.11531 2.23143C0.696266 2.99907 0.568038 3.90743 0.756687 4.77192C0.945337 5.6364 1.43671 6.39213 2.13094 6.88551C1.60975 6.86793 1.09998 6.71883 0.64375 6.45055V6.49371C0.643283 7.29929 0.905399 8.08018 1.38554 8.70365C1.86568 9.32711 2.53422 9.75467 3.2775 9.91363C2.7947 10.054 2.28799 10.0744 1.79656 9.9734C2.0063 10.6662 2.41438 11.2721 2.96385 11.7067C3.51331 12.1412 4.17675 12.3826 4.86156 12.3972C3.69895 13.3676 2.26278 13.8939 0.784375 13.8914C0.522191 13.8909 0.260266 13.8739 0 13.8402C1.5019 14.864 3.24902 15.4077 5.03344 15.4068Z" fill="#232536" />
                      </svg>

                    </a>
                  </span>

                  <span className="me-[16px]">
                    <a target="_blank" href="https://www.instagram.com/accounts/login/">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1350_619)">
                          <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35937C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55937 14.4719 3.98437 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1312 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9062 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60312 1.49375 4.7625C1.52813 3.98125 1.65938 3.55937 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35937C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4437 0.046875 11.2969C0.084375 12.1469 0.221875 12.7312 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7312 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55937 15.9438 4.70625C15.9063 3.85625 15.7688 3.27187 15.5719 2.76562C15.375 2.23437 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="#232536" />
                          <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2687 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2687 3.89062 8 3.89062ZM8 10.6656C6.52812 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52812 5.33437 8 5.33437C9.47187 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47187 10.6656 8 10.6656Z" fill="#232536" />
                          <path d="M13.2313 3.72842C13.2313 4.25967 12.8 4.68779 12.2719 4.68779C11.7406 4.68779 11.3125 4.25654 11.3125 3.72842C11.3125 3.19717 11.7438 2.76904 12.2719 2.76904C12.8 2.76904 13.2313 3.20029 13.2313 3.72842Z" fill="#232536" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1350_619">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </a>
                  </span>

                  <span>
                    <a target="_blank" href="https://www.linkedin.com/feed/">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1350_624)">
                          <path d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z" fill="#232536" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1350_624">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
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






  </>;
};

export default About_us;
