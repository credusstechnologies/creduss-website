"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeroImg from "../public/icons/hero-img.png";
import GetAppBtn from "./GetAppBtn";

// class Arr {
//   #element;
//   constructor(ele) {
//     this.#element = ele;
//   }

//   join(joiner) {
//     let a = "";
//     for (const i of this.#element) {
//       a += `${i}${joiner}`;
//     }
//     return a;
//   }

//   map(fun) {
//     const a = [];
//     for (const i of this.#element) {
//       a.push(fun(i));
//     }
//     return a;
//   }
// }

function Arr(element) {
  this.map = (fun) => {
    const a = [];
    for (const i of element) {
      a.push(fun(i));
    }
    return a;
  };

  this.join = (joiner) => {
    console.log("From function");
    let a = "";
    for (const i of element) {
      a += `${i}${joiner}`;
    }
    return a;
  };
}

const Hero = ({ heroProps }) => {
  const { heroContent, specifiedWord } = heroProps;

  const text = "TRANSFORMING MOVEMENT & PACKAGE DELIVERY";

  // console.log(
  //   text.split(" ").map((item, i) =>
  //     item == "PACKAGE" ? (
  //       <span key={i} className="text-warning">
  //         {item}
  //       </span>
  //     ) : (
  //       item
  //     )
  //   )
  // );

  const array = new Arr([1, {}, 2]);

  console.log(array.join(" "));
  // console.log([1, {}, 2].map((el) => String(el)));

  return (
    <>
      <div
        className={`hero relative overflow-hidden md:px-20 px-10 bg-secondary md:flex md:items-center`}>
        <section className="">
          <div className="md:block font-bold md:leading-[5rem]">
            {/* <h1 className=" md:text-[5.625rem] ">TRANSFORMING</h1>
            <h1 className="md:text-[2.6875rem] mt-0">
              MOVEMENT & <span className="text-warning">PACKAGE</span> DELIVERY
            </h1> */}
            {/* TODO: figure out how to fox the [object Object] that gets rendered when an actual string is returned */}
            <h1 className=" md:text-[5.625rem]">
              <span className="">
                {text.split(" ").map((word, i) =>
                  word.toLowerCase() == specifiedWord.toLowerCase() ? (
                    <span key={i} className="text-warning">
                      {word + " "}
                    </span>
                  ) : (
                    <span key={word} className="text-success">
                      {word}{" "}
                    </span>
                  )
                )}
              </span>
            </h1>
          </div>
          {/* <div className="md:hidden font-bold">
            <h1 className=" text-[4.5rem] ">TRANS-FORMING</h1>
            <h1 className="text-[1.875rem] md:text-[2.6875rem] mt-0">
              MOVEMENT &<span className="text-warning">PACKAGE</span> DELIVERY
            </h1>
          </div> */}
          <div className="bg-warning p-6 rounded-2xl mt-3 mb-3">
            <p className="md:w-[80%]">
              {`Welcome to Creduss, where we're redefining the way you move and
            deliver. Say goodbye to the old norms and embrace a new era of
            seamless mobility and efficient package delivery.`}
            </p>
          </div>
          <div className="flex-col md:flex-row inline md:flex md:items-center gap-2">
            <button className="rounded-[0.5rem] my-3 py-3 px-2 bg-white text-secondary">
              learn more
            </button>
            <GetAppBtn />
          </div>
        </section>

        <div className="hero-img-wrapper hidden md:block">
          <Image className="hero-img " src={HeroImg} alt="hero img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
