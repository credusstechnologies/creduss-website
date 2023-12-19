import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

import FooterImg from "../public/icons/footer-img.png";
import Mail from "../public/icons/mail.svg";
import Logo from "../public/icons/logo.png";
import Twitter from "../public/icons/twitter.png";
import Linkedin from "../public/icons/linkedin.png";
import Facebook from "../public/icons/facebook.png";
import Github from "../public/icons/github.png";
const Footer = ({ showDownloadApp }) => {
  return (
    <footer>
      {showDownloadApp && (
        <section className="our-processes py-8 bg-green-200 md:flex md:items-center md:gap-10  md:px-20 px-10">
          <div>
            <Image src={FooterImg} alt="an image of user device" />
          </div>
          <div className="pt-7 md:pt-0">
            <h6 className="text-warning-400">Get started</h6>
            <div className=" ">
              <h1
                className="
          md:text-[3.75rem] font-bold text-secondary md:leading-[4rem]">
                Download our app for free
              </h1>
              <p className="md:w-[85%] mt-3 mb-3">
                Discover the convenience of Creduss wherever you go. Our Android
                app puts the power of efficient movement and delivery in your
                hands. Download it now to be part of the future.
              </p>
            </div>
            <Button />
          </div>
        </section>
      )}

      <section className="md:px-20 px-10 py-5 md:flex md:justify-between md:items-center bg-navBg text-white">
        <div>
          <h2 className="text-[1.25rem] ">Join our newsletter</h2>
          <p className="text-[#E9D7FE]">{`We'll send you a nice letter once per week. No spam`}</p>
        </div>
        <div className="md:flex md:items-center md:gap-5 mt-7 md:mt-0">
          <div
            className="bg-white p-2 flex items-center gap-2 mb-3 md:mb-0"
            style={{ borderRadius: ".4rem" }}>
            <Image className="inline" src={Mail} alt="mail icon" />
            <input
              className="focus:outline-none block w-full h-full text-black"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <button
              className="bg-warning-400 p-2 w-full"
              style={{ borderRadius: ".4rem" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-secondary text-white md:px-20 py-10 px-10">
        <nav className="md:flex md:gap-7 md:border-b md:border-[#1D2939] md:pb-10">
          <div className="md:w-[40%] mb-7 md:mb-0">
            <Image src={Logo} alt="logo" />
            <p>
              Creduss is a digital platform that aims to monetize mobility by
              providing a solution to package delivery challenges.
            </p>
          </div>

          <div className="mob-footer-nav grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="mb-3 text-warning-400">Contact & Support</h4>
              {FooterList.contactAndSupport.map((item) => (
                <FooterNav key={item.id} path={item.path} text={item.text} />
              ))}
            </div>

            <div>
              <h4 className="mb-3 text-warning-400"> Legal</h4>
              {FooterList.legal.map((item) => (
                <FooterNav key={item.id} path={item.path} text={item.text} />
              ))}
            </div>

            <div>
              <h4 className="mb-3 text-warning-400">Alert</h4>
              {FooterList.alert.map((item) => (
                <FooterNav key={item.id} path={item.path} text={item.text} />
              ))}

              <div className="hidden md:block ">
                <h4 className="mb-3 text-warning-400 md:mt-1">Coming soon</h4>
                {FooterList.comingSoon.map((item) => (
                  <FooterNav key={item.id} path={item.path} text={item.text} />
                ))}
              </div>
            </div>

            <div className="md:hidden ">
              <h4 className="mb-3 text-warning-400 md:mt-1">Coming soon</h4>
              {FooterList.comingSoon.map((item) => (
                <FooterNav key={item.id} path={item.path} text={item.text} />
              ))}
            </div>
          </div>
        </nav>

        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mt-7">
          <p className="mt-5 md:mt-0">
            &copy; 2023 Creduss. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image src={Twitter} alt="twitter logo" />
            </Link>
            <Link href="/">
              <Image src={Linkedin} alt="linkedin logo" />
            </Link>
            <Link href="/">
              <Image src={Facebook} alt="facebook logo" />
            </Link>
            <Link href="/">
              <Image src={Github} alt="github logo" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

export const FooterNav = ({ text, path }) => {
  return (
    <Link className="mb-2 block" href={path}>
      {text}
    </Link>
  );
};

export const FooterList = {
  contactAndSupport: [
    {
      id: "1",
      text: "Help and support",
      path: "/",
    },
    {
      id: "2",
      text: "FAQs",
      path: "/faqs",
    },
    {
      id: "3",
      text: "Contact",
      path: "/contact-us",
    },
    {
      id: "4",
      text: "Find a location",
      path: "/find-a-location",
    },
    {
      id: "5",
      text: "Report an associate",
      path: "/",
    },
    {
      id: "6",
      text: "Releases",
      path: "/",
    },
  ],
  legal: [
    {
      id: "1",
      text: "Terms & Conditions",
      path: "/",
    },
    {
      id: "2",
      text: "Privacy notice",
      path: "/",
    },
    {
      id: "3",
      text: "Member standards",
      path: "/",
    },
    {
      id: "4",
      text: "Payment term of service",
      path: "/",
    },
    {
      id: "5",
      text: "Fees",
      path: "/",
    },
    {
      id: "6",
      text: "Support",
      path: "/",
    },
  ],
  alert: [
    {
      id: "1",
      text: "Fraud awareness",
      path: "/",
    },
    {
      id: "2",
      text: "Safety information",
      path: "/",
    },
  ],
  comingSoon: [
    {
      id: "1",
      text: "Creduss for Business",
      path: "/",
    },
    {
      id: "2",
      text: "Contact",
      path: "/",
    },
  ],
};
