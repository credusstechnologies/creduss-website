"use client";
import "./globals.css";
import "../custom-styles/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Providers } from "@/redux/provider";

// import Nav, { SubNav } from "@/components/Nav";
// import Hero from "@/components/Hero";
// import Footer from "@/components/Footer";

// import Book from "../public/icons/book.svg";
// import Zap from "../public/icons/zap.svg";
// import PlayCircle from "../public/icons/play-circle.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
