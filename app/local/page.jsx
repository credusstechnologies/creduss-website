"use client";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import WhyCredussCards from "@/components/WhyCredussCards";

const Local = () => {
  return (
    <Layout
      heroBg={"/icons/local-bg.png"}
      textContent={{
        mainCaption: "SENDING & RECEIVING",
        subCaption: "packages locally",
        specialWord: "packages",
        desc: "Welcome to Creduss Local Operations, where we make sending and receiving packages in your community effortless and efficient. Discover how our platform works seamlessly to connect you with trusted couriers and ensure your packages reach their destination safely.",
      }}>
      <main>
        <section className="px-[15.5px] md:px-20 py-10">
          <h1 className="hidden md:block text-secondary text-[2.25rem] text-center md:leading-[4.5rem] font-bold">
            Why Choose Creduss for Local Deliveries
          </h1>

          <WhyCredussCards />
        </section>

        <section className="px-[15.5px] md:px-20 py-10 text-white local-steps">
          <div className="w-[80%] mb-5">
            <h6 className="text-warning-400 text-base font-semibold leading-normal">
              Simplify Local Deliveries with Creduss
            </h6>
            <h1 className="text-[1.875rem] md:text-[3.75rem] md:leading-[4.5rem] font-bold mb-5">
              How to send and receive package locally
            </h1>
            <p className="text-[#F2F4F7]">
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
                <h1 className="border-4 border-warning-500 w-[1.875rem] h-[1.875rem] md:w-[3.125rem] md:h-[3.125rem] flex items-center justify-center rounded-full p-5">
                  {i.id}
                </h1>

                <div className="steps-desc md:w-[95%] rounded-[1.35394rem] p-5 text-black">
                  <h2 className="font-bold mb-2">{i.title}</h2>
                  <p className="text-secondary">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="">
          <Accordion />
        </section>
      </main>
    </Layout>
  );
};

export default Local;

export const sendReceiveLocally = [
  {
    id: "1",
    title: "Download the mobile app",
    desc: "Getting started with Creduss Local is quick and easy. Download the mobile app and sign up for free to create your account. Provide some basic information, and you're ready to access our platform.",
  },
  {
    id: "2",
    title: "Book Your Local Delivery",
    desc: "Once you're logged in, it's time to book your local delivery. Tell us where you want your package picked up and where it needs to be delivered. You can even choose a specific delivery window for your convenience.",
  },
  {
    id: "3",
    title: "Prepare Your Parcel",
    desc: "Before your courier arrives, ensure your package is securely packed and labeled with the necessary details. Proper packaging ensures your items arrive in perfect condition.",
  },
  {
    id: "4",
    title: "Send & Receive Your Parcel",
    desc: "Our network of dedicated local couriers is ready to pick up your package. They'll arrive at the designated pick-up location, carefully collect your parcel, and ensure it's handled with care throughout the journey. On the recipient's end, our couriers will deliver the package to the specified destination. Your recipient will also have access to real-time updates, ensuring they're ready to receive the parcel. ",
  },
];
