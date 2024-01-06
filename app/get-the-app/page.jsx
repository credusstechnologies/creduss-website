"use client";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";

import Accordion from "@/components/Accordion";

import MobileApp from "../../public/icons/download-app.png";
import Barcode from "../../public/icons/creduss-barcode.png";
import HandArrow from "../../public/icons/hand-arrow.png";

const GetTheApp = () => {
  return (
    <Layout showDownloadApp={false} showHero={false}>
      <main className="">
        <section className="pt-[12vh] bg-green-200 flex  items-center justify-center gap-10 py-10">
          <div className="flex items-center justify-between flex-col-reverse md:flex-row w-[90%] b">
            <div className="md:w-1/2 md:-translate-x-20">
              <Image src={MobileApp} alt="mobile app view" />
            </div>

            <div className="px-10 md:px-0 md:scale-y-[0.9]">
              <div>
                <h6 className="text-warning-500">GET STARTED</h6>
                <h1 className="text-secondary md:text-[3.75rem] md:leading-[4.5rem] font-bold">
                  Download our app
                </h1>
                <p className="text-secondary">
                  Kindly fill in your email address, open the email on your
                  phone and click on the link we sent, to download the ap from
                  playstore
                </p>
              </div>

              <form className="mt-3">
                <div className="">
                  <label htmlFor="email">Email</label>
                  <div className="mt-1 mb-5 bg-white border shadow-lg flex gap-5 items-center h-[50px] px-5 rounded-[0.5rem]">
                    <i className="fa-solid fa-envelope text-gray-600"></i>
                    <input
                      className="block w-full h-full p-2 focus:outline-none  "
                      type="email"
                      name=""
                      id=""
                      required
                      placeholder="olivia@untitleduser.com"
                    />
                  </div>
                </div>

                <input
                  className="bg-green-600 text-white rounded-[.5rem] px-7 py-4 text-lg font-semibold cursor-pointer"
                  type="submit"
                  value="Submit"
                />
              </form>

              <div className="flex items-center gap-2 my-5">
                <div className="border-2 border-green-600 h-1 w-full"></div>
                <h1>OR</h1>
                <div className="border-2 border-green-600 h-1 w-full"></div>
              </div>

              <div className="flex items-center gap-5">
                <div>
                  <Image src={Barcode} alt="creduss barcode" />
                </div>
                <div>
                  <Image src={HandArrow} alt="hand drawn arrow" />
                  <p className="text-[0.875rem]">
                    Scan the QR code here to download
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Accordion />
        </section>
      </main>
    </Layout>
  );
};

export default GetTheApp;
