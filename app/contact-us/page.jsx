"use client";
import Accordion from "@/components/Accordion";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";

import ContactImg from "../../public/icons/contact.png";

const Contact = () => {
  return (
    <Layout heroBg={"/icons/contact-bg.png"}>
      <section className="md:flex md:items-center md:justify-between gap-20 px-10 md:px-0">
        <div
          className="md:w-1/2 "
          style={{
            background:
              "var(--gradient-primary-angular, conic-gradient(from 259deg at 50% 50%, #2FB070 0deg, rgba(47, 176, 112, 0.00) 360deg))",
          }}>
          <div>
            <Image src={ContactImg} alt="tab device and touch pen" />
          </div>
        </div>

        <div className="md:w-1/2 md:pr-20  ">
          <form>
            <div>
              <h6 className="text-warning-400">Talk to us</h6>
              <h1 className="text-secondary text-[3.75rem] md:leading-[4.5rem] font-bold">
                Get in Touch
              </h1>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <div className="">
                <label htmlFor="name">
                  Name
                  <sup>
                    <i className="fa-solid fa-asterisk text-red-500"></i>
                  </sup>
                </label>
                <div className="border shadow-lg flex gap-5 items-center h-[50px] px-5 rounded-[0.5rem]">
                  <i className="fa-solid fa-envelope text-gray-600"></i>
                  <input
                    className="block w-full h-full p-2 focus:outline-none"
                    type="text"
                    name=""
                    id=""
                    required
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="email">
                  Email
                  <sup>
                    <i className="fa-solid fa-asterisk text-red-500"></i>
                  </sup>
                </label>
                <div className="border shadow-lg flex gap-5 items-center h-[50px] px-5 rounded-[0.5rem]">
                  <i className="fa-solid fa-envelope text-gray-600"></i>
                  <input
                    className="block w-full h-full p-2 focus:outline-none"
                    type="email"
                    name=""
                    id=""
                    required
                    placeholder="olivia@untitleduser.com"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="phone">
                  Phone number
                  <sup>
                    <i className="fa-solid fa-asterisk text-red-500"></i>
                  </sup>
                </label>
                <div className="border shadow-lg flex gap-5 items-center h-[50px] px-5 rounded-[0.5rem]">
                  <CountryCodeDropdown />
                  <input
                    className="block w-full h-full p-2 focus:outline-none"
                    type="email"
                    name=""
                    id=""
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="hear-about-us">
                  How did you hear about us?
                </label>
                <select
                  className="focus:outline-none border rounded-[0.5rem] shadow-lg block w-full h-[50px] bg-white p-2"
                  name=""
                  id="">
                  <option value="">--Select an option--</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
                {/* <div className="border shadow-lg h-[50px] rounded-[0.5rem]">

                </div> */}
              </div>

              <div className="">
                <label htmlFor="message">Drop a message</label>
                <div className="border shadow-lg px-5 rounded-[0.5rem]">
                  <textarea
                    className="block w-full h-full p-2 focus:outline-none"
                    rows={5}
                    name=""
                    id=""
                    placeholder="Enter a description..."
                  />
                </div>
              </div>

              <input
                className="bg-green-600 rounded-lg text-base font-semibold text-white px-[18px] py-2.5 cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>

          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-phone text-[1.3rem]"></i>
              <div>
                <h4 className="font-semibold">PHONE</h4>
                <p className="text-warning-500">03 5432 1234</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <i className="fa-solid fa-fax text-[1.3rem]"></i>
              <div>
                <h4 className="font-semibold">FAX</h4>
                <p className="text-warning-500">03 5432 1234</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-[1.3rem]"></i>
              <div>
                <h4 className="font-semibold">EMAIL</h4>
                <p className="text-warning-500">info@creduss.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[96px] md:px-0 px-10">
        <Accordion />
      </section>
    </Layout>
  );
};

export default Contact;

export const CountryCodeDropdown = () => {
  return (
    <p className="flex items-center gap-3">
      <span>US</span> <i className="fa-solid fa-chevron-down"></i>
    </p>
  );
};
