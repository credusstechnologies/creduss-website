"use client";
import { Providers } from "@/redux/provider";

import Nav, { SubNav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useState } from "react";

const defaultTextContents = {
  mainHeader: "TRANSFORMING",
  subHeader: "MOVEMENT & PACKAGE DELIVERY",
  specialWord: "PACKAGE",
  desc: "Welcome to Creduss, where we're redefining the way you move and deliver. Say goodbye to the old norms and embrace a new era of seamless mobility and efficient package delivery.",
};

const Layout = ({
  children,
  showDownloadApp = true,
  showHero = true,
  showHeroImg = false,
  showSearchField = false,
  heroBg,
  bgPosition = "center",
  bgSize = "cover",
  linearGradient = `linear-gradient(
          87deg,
          #101828 22%,
          rgba(16, 24, 40, 0) 98.93%
        ),
        linear-gradient(
          318deg,
          rgba(16, 24, 40, 0.85) 23.12%,
          rgba(16, 24, 40, 0) 43.29%
        )`,
  textContent = defaultTextContents,
}) => {
  const [showSubNav, setShowSubNav] = useState(false);

  return (
    <body className="layout ">
      <header
        className={`relative ${
          showHero ? "min-h-[100vh] pt-[9rem]" : ""
        } bg-secondary text-white header `}>
        <div className="fixed w-full left-0 top-0 z-40">
          <Nav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
          <SubNav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
        </div>

        {showHero && (
          <Hero
            heroBg={heroBg}
            showHeroImg={showHeroImg}
            showSearchField={showSearchField}
            linearGradient={linearGradient}
            bgPosition={bgPosition}
            bgSize={bgSize}
            textContents={textContent}
          />
        )}
      </header>

      <main>{children}</main>

      <Footer showDownloadApp={showDownloadApp} />
    </body>
  );
};

export default Layout;
