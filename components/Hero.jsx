"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeroImg from "../public/icons/hero-img.png";
import Button from "./Button";

const Hero = ({
  heroBg,
  bgPosition,
  bgSize,
  linearGradient,
  showHeroImg,
  showSearchField,
  textContents,
}) => {
  return (
    <div
      style={{
        background: `${linearGradient}, url(${heroBg}) no-repeat ${bgPosition}/${bgSize}`,
      }}
      className={`hero relative overflow-hidden md:px-20 px-10 bg-secondary md:flex md:items-center`}>
      <section className="lg:max-w-[798px] ">
        {/* <div className="md:block font-bold md:leading-[5rem] ">
          <h1 className=" md:text-[5.625rem] ">TRANSFORMING</h1>
          <h1 className="md:text-[2.6875rem] mt-0">
            MOVEMENT & <span className="text-warning-500">PACKAGE</span> DELIVERY
          </h1>
        </div> */}

        <div className="font-bold md:leading-[5rem]">
          <h1
            className={`text-[4.5rem] break-words ${
              textContents.mainHeaderFs
                ? `text-[${textContents.mainHeaderFs}]`
                : "md:text-[5.625rem] "
            }`}>
            {textContents.mainHeader}
          </h1>
          <h1
            className={`${
              textContents.subHeaderFs
                ? `text-[${textContents.subHeaderFs}]`
                : "md:text-[2.6875rem]"
            } text-[1.875rem] mt-0`}>
            {textContents.subHeader.split(" ").map((item, i) =>
              item === textContents.specialWord ? (
                <span className="text-warning-400" key={i}>
                  {item + " "}
                </span>
              ) : (
                <span key={i}>{item + " "}</span>
              )
            )}
          </h1>
        </div>
        <div
          className={`${
            showHeroImg ? "bg-warning-500 p-6" : ""
          } rounded-2xl my-3 mb-3`}>
          <p className="md:w-[80%]">{textContents.desc}</p>
        </div>
        {!showSearchField ? (
          <div className=" flex-col md:flex-row inline md:flex md:items-center gap-2">
            <Button
              twStyles=" px-7 py-4 bg-white text-secondary"
              label="Learn more"
              showIcon={false}
              href="#"
            />
            <Button twStyles="px-7 py-4" />
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
              twStyles="px-7 py-4"
              showIcon={false}
              href="#"
            />
          </div>
        )}
      </section>

      <div className=" hero-img-wrapper hidden md:block">
        {showHeroImg && (
          <Image className="hero-img " src={HeroImg} alt="hero img" />
        )}
      </div>
    </div>
  );
};

export default Hero;
