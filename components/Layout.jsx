"use client";
import { Providers } from "@/redux/provider";

import Nav, { SubNav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <body>
      <header className="relative min-h-screen bg-secondary text-white">
        <div className="fixed w-full left-0 top-0 z-20">
          <Nav />
          <SubNav />
        </div>

        <Hero />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Layout;
