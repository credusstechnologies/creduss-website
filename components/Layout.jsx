"use client";
import { Providers } from "@/redux/provider";

import Nav, { SubNav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useState } from "react";

const Layout = ({
  children,
  showDownloadApp = true,
  showHero = true,
  heroProps = {
    heroContent: defaultHeroContent,
    specifiedWord: "PACKAGE",
  },
}) => {
  const [showSubNav, setShowSubNav] = useState(false);

  return (
    <body>
      <header
        className={`relative ${
          !showHero ? "h-auto" : "min-h-screen"
        } bg-secondary text-white`}>
        <div className="fixed w-full left-0 top-0 z-20">
          <Nav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
          <SubNav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
        </div>

        {showHero && <Hero heroProps={heroProps} />}
      </header>

      <main>{children}</main>

      <Footer showDownloadApp={showDownloadApp} />
    </body>
  );
};

export default Layout;

export const defaultHeroContent = {
  img: "../public/icons/hero-img.png",
  textContent: {
    mainTitle: "TRANS-FORMING",
    subTitle: "MOVEMENT & PACKAGE DELIVERY",
    desc: "Welcome to Creduss, where we're redefining the way you move and deliver. Say goodbye to the old norms and embrace a new era of seamless mobility and efficient package delivery.",
  },
};
