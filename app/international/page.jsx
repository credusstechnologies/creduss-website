"use client";
import Accordion from "@/components/Accordion";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";

import { credussForLocalList, sendReceiveLocally } from "../local/page";
import WhyCredussCards from "@/components/WhyCredussCards";

const International = () => {
  return (
    <Layout
      heroBg={"/icons/local-bg.png"}
      textContent={{
        mainCaption: "SENDING & RECEIVING",
        subCaption: "packages internationally",
        specialWord: "packages",
        desc: "Welcome to Creduss Local Operations, where we make sending and receiving packages in your community effortless and efficient. Discover how our platform works seamlessly to connect you with trusted couriers and ensure your packages reach their destination safely.",
      }}>
      <main>
        <section className="px-[15.5px] md:px-20 py-10">
          <h1 className="hidden md:block text-secondary text-[2.25rem] text-center md:leading-[4.5rem] font-bold">
            Why Choose Creduss for International Deliveries
          </h1>

          <WhyCredussCards />
        </section>

        <section className="px-[15.5px] md:px-20 py-10 intl-steps">
          <div className="w-[80%] mb-5">
            <h6 className="text-green-800">
              Simplify International Deliveries with Creduss
            </h6>
            <h1 className="text-[1.875rem] md:text-[3.75rem] md:leading-[4.5rem] font-bold mb-5">
              How to send and receive package internationally
            </h1>
            <p className="text-[#344054]">
              Our platform is designed to connect you with trusted local
              couriers who can efficiently handle your packages, ensuring they
              reach their destination securely and on time.
            </p>
          </div>

          <div className=" flex flex-col gap-5">
            {sendReceiveLocally.map((i) => (
              <div
                key={i.id}
                className="flex items-center justify-between gap-5">
                <h1 className="border-4 border-green-800 w-[1.875rem] h-[1.875rem] md:w-[3.125rem] md:h-[3.125rem] flex items-center justify-center rounded-full p-5">
                  {i.id}
                </h1>

                <div className="steps-desc md:w-[95%] rounded-[1.35394rem] p-5 shadow-lg">
                  <h2 className="font-bold mb-2">{i.title}</h2>
                  <p className="text-secondary">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className=" py-10">
          <Accordion />
        </section>
      </main>
    </Layout>
  );
};

export default International;
