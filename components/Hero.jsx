"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeroImg from "../public/icons/hero-img.png";
import Button from "./Button";

const Hero = ({
  contents,
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
      className={`hero flex items-center h-screen relative md:px-20 px-10 pt-32`}>
      <section className=" md:max-w-[740px] w-full ">
        <div className="text-white ">
          <h2 className={`text-[43px] uppercase `}>
            {contents?.caption?.split(" ").map((item, i) => {
              if (item.match(contents.h1)) {
                return (
                  <span
                    key={i}
                    className="block text-[40px] md:text-[90px] font-bold leading-[90px] ">
                    {item + " "}
                  </span>
                );
              } else if (item === contents.uniqueWord) {
                return (
                  <span key={i} className="text-warning-400">
                    {item + " "}
                    {console.log(item)}
                  </span>
                );
              } else {
                return item + " ";
              }
            })}
          </h2>
        </div>

        <div
          className={`${
            showHeroImg ? "bg-warning-500 p-6" : ""
          } rounded-2xl text-white my-3`}>
          <p className="md:w-[80%]">{contents?.desc}</p>
        </div>
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
            <div className="bg-warning-500 p-2 px-3.5 py-2.5 rounded-[0.5rem] w-full">
              <div className="bg-white p-2 flex items-center gap-2 mb-3 md:mb-0 rounded-[.4rem]">
                <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                <input
                  className="focus:outline-none block w-full h-full text-black"
                  type="text"
                  placeholder="Search for stories"
                />
              </div>
            </div>
            <Button
              isLink={false}
              label="Search"
              twStyles="px-7 py-4 text-white"
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
