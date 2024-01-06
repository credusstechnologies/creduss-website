"use client";
import { Providers } from "@/redux/provider";

import Nav, { SubNav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useState } from "react";

const defaultTextContents = {
  mainCaption: "transforming",
  subCaption: "movement & package delivery",
  specialWord: "package",
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
  textContents = defaultTextContents,
}) => {
  const [showSubNav, setShowSubNav] = useState(false);

  return (
    <body>
      <header
        className={`relative text-white header border-2 border-green-400 `}>
        <div className="fixed w-full top-0 left-0 z-40">
          <Nav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
          <SubNav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
        </div>
      </header>

      <main className="">
        {showHero && (
          <Hero
            heroBg={heroBg}
            showHeroImg={showHeroImg}
            showSearchField={showSearchField}
            linearGradient={linearGradient}
            bgPosition={bgPosition}
            bgSize={bgSize}
            textContents={textContents}
          />
        )}
        {children}
      </main>

      {/* <Footer showDownloadApp={showDownloadApp} /> */}
    </body>
  );
};

export default Layout;
