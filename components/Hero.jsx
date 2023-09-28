import React from "react";
import Image from "next/image";

import HeroImg from "../public/icons/hero-img.png";
import GetApp from "./GetApp";

const Hero = () => {
  return (
    <div className="hero relative overflow-hidden md:px-20 px-10 bg-secondary md:flex md:items-center">
      <section className="">
        <div className="hidden md:block font-bold md:leading-[5rem]">
          <h1 className=" md:text-[5.625rem] ">TRANSFORMING</h1>
          <h1 className="md:text-[2.6875rem] mt-0">
            MOVEMENT & <span className="text-warning">PACKAGE</span> DELIVERY
          </h1>
        </div>
        <div className="md:hidden font-bold">
          <h1 className=" text-[4.5rem] ">TRANS-FORMING</h1>
          <h1 className="text-[1.875rem] md:text-[2.6875rem] mt-0">
            MOVEMENT & <br className="md:hidden" />{" "}
            <span className="text-warning">PACKAGE</span> DELIVERY
          </h1>
        </div>
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
          <GetApp />
        </div>
      </section>

      <div className="hero-img-wrapper hidden md:block">
        <Image className="hero-img " src={HeroImg} alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
