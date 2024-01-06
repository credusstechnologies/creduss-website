"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeroImg from "../public/icons/hero-img.png";
import Button from "./Button";

const Hero = ({
  textContents,
  heroBg,
  bgPosition,
  bgSize,
  linearGradient,
  showHeroImg,
  showSearchField,
}) => {
  return (
    <section
      style={{
        background: `${linearGradient}, url(${heroBg}) no-repeat ${bgPosition}/${bgSize}`,
      }}
      className={`hero flex items-center h-screen relative md:px-20 px-[15.5px] pt-32`}>
      <section className=" md:max-w-[740px] w-full ">
        <div className="text-white uppercase text-3xl font-bold leading-[38px]">
          <h1 className="text-7xl break-words md:text-[90px] font-bold leading-[90px]">
            {textContents.mainCaption}
          </h1>
          <h2>
            {textContents.subCaption.split(" ").map((item, i) => {
              if (item === textContents.specialWord) {
                return <span className="text-warning-400">{item + " "}</span>;
              } else {
                return item + " ";
              }
            })}
          </h2>
        </div>
        <div
          className={`${
            showHeroImg ? "bg-warning-500 p-6" : ""
          } rounded-2xl text-white my-[18px]`}>
          <p className="md:w-[80%]">{textContents?.desc}</p>
        </div>

        {/* <div
          className={`${
            showHeroImg ? "bg-warning-500 p-6" : ""
          } rounded-2xl text-white my-[18px]`}>
          <p className="md:w-[80%]">{contents?.desc}</p>
        </div> */}
        {!showSearchField ? (
          <div className=" flex-col md:flex-row inline md:flex md:items-center gap-2">
            <Button
              twStyles="px-5 py-3 md:px-7 md:py-4 bg-white text-secondary"
              label="Learn more"
              showIcon={false}
              href="#"
            />
            <Button twStyles="px-5 py-3 md:px-7 md:py-4 mt-4 md:mt-0 text-white" />
          </div>
        ) : (
          <div className="md:w-[70%] flex-col md:flex-row inline md:flex md:items-center gap-2 ">
            <div className="bg-warning-500 h-[60px] p-[8px] rounded-[0.5rem] w-full">
              <div className="bg-white h-full px-[14px] py-[10px] flex items-center gap-2 mb-3 md:mb-0 rounded-[.4rem]">
                <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                <input
                  className="focus:outline-none block py-3 w-full h-full text-black"
                  type="text"
                  placeholder="Search for stories"
                />
              </div>
            </div>
            <Button
              isLink={false}
              label="Search"
              twStyles="px-7 py-4 text-white w-full md:w-auto mt-[12px] md:mt-0"
              showIcon={false}
              href="#"
            />
          </div>
        )}
      </section>

      {/* <div className=" hero-img-wrapper hidden md:block">
        {showHeroImg && (
          <Image className="hero-img " src={HeroImg} alt="hero img" />
        )}
      </div> */}
    </section>
  );
};

export default Hero;
