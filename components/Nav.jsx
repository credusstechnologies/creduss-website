"use client";

import Image from "next/image";
import Link from "next/link";
import { mainNav, subNav } from "@/app/layout";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../public/icons/logo.png";
import Android from "../public/icons/android.png";
import Lady from "../public/icons/lady.png";

import useClickOutside from "./UseClickOutside";
import {
  setActiveSubNav,
  setShowSubNav,
} from "@/redux/features/global/globalSlice";
import Button from "./Button";
import MobNav from "./nav/MobNav";

const Nav = ({ showSubNav, setShowSubNav }) => {
  const dispatch = useDispatch();
  // const { showSubNav } = useSelector((state) => state.global);
  const { activeSubNav } = useSelector((state) => state.global);
  const [showMobNav, setShowMobNav] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="px-10 py-5 md:px-20 relative bg-navBg md:flex md:items-center md:justify-between header-nav">
      <div className="flex items-center justify-between ">
        {/* logo and mobNav hamburger */}
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>

        <button
          onClick={() => setShowMobNav(!showMobNav)}
          className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className="hidden md:flex md:gap-[32px] md:items-center md:justify-between">
        {/* desktop only nav items */}
        <li
          className={`${
            pathname === activeSubNav?.path ? "active-link" : ""
          } cursor-pointer`}
          onClick={() => setShowSubNav(!showSubNav)}>
          <i
            className={`fa-solid fa-chevron-${
              showSubNav ? "up" : "down"
            }`}></i>{" "}
          {activeSubNav?.text || "Contact us"}
        </li>

        {mainNavList.map((nav) => (
          <li
            className={pathname === nav.path ? "active-link" : ""}
            key={nav.id}>
            <Link href={nav.path}>{nav.text}</Link>
          </li>
        ))}
      </ul>

      <div className="md:block hidden">
        <Button twStyles="px-[18px] py-2.5" />
      </div>

      {/* mobile nav specific */}
      {showMobNav && (
        <MobNav
          showMobNav={showMobNav}
          showSubNav={showSubNav}
          activeSubNav={activeSubNav}
          setShowMobNav={setShowMobNav}
          setShowSubNav={setShowSubNav}
          pathname={pathname}
        />
      )}
    </nav>
  );
};

export default Nav;

export const SubNav = ({ showSubNav, setShowSubNav }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  useClickOutside(ref, showSubNav, setShowSubNav);

  return (
    <div>
      {showSubNav && (
        <nav
          ref={ref}
          className="absolute w-full left-0 hidden md:flex px-10 py-5 bg-white text-black  justify-between gap-5 ">
          <div>
            <h6 className="text-warning-500">Resources</h6>
            {subNavList.resources.map((res) => (
              <Link
                onClick={() => {
                  dispatch(setActiveSubNav(res.path));
                  setShowSubNav(false);
                }}
                className="mt-[1.5rem] flex gap-3 items-center"
                key={res.id}
                href={res.path}>
                <i className={`${res.icon} text-primary`}></i>
                <div>
                  <h3 className="font-medium">{res.text}</h3>
                  <p>{res.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h6 className="text-warning-500">Company</h6>
            {subNavList.company.map((com) => (
              <Link
                onClick={() => {
                  dispatch(setActiveSubNav(com.path));
                  setShowSubNav(false);
                }}
                className="mt-[1.5rem] flex gap-3 items-center"
                key={com.id}
                href={com.path}>
                <i className={`${com.icon} text-primary`}></i>
                <div>
                  <h3 className="font-medium">{com.text}</h3>
                  <p>{com.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h6 className="text-warning-500">Featured</h6>
            <Image className="mt-[1.5rem] mb-[1.5rem]" src={Lady} alt="lady" />
            <h3 className="font-medium">Success story</h3>
            <p>
              {"Learn about Lizzy Dahunsi's success story after using our app"}
            </p>
            <button className="mt-3 flex items-center gap-4 text-primary">
              <i className="fa-solid fa-circle-play"></i>
              <span>Watch video</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

// nav lists
export const mainNavList = [
  {
    id: "1",
    text: "Local",
    path: "/local",
  },
  {
    id: "2",
    text: "International",
    path: "/international",
  },
  {
    id: "3",
    text: "Find a location",
    path: "/find-a-location",
  },
  {
    id: "4",
    text: "Get the app",
    path: "/get-the-app",
  },
];

export const subNavList = {
  resources: [
    {
      id: "1",
      icon: "fa-solid fa-book",
      text: "Blog",
      desc: "The latest industry news, updates, and info.",
      path: "/blog",
    },
    {
      id: "2",
      icon: "fa-solid fa-bolt",
      text: "Customer stories",
      desc: "Learn how our customers are making big changes.",
      path: "/customer-stories",
    },
    {
      id: "3",
      icon: "fa-solid fa-circle-play",
      text: "Video tutorials",
      desc: "Get up and running on new features and techniques",
      path: "/video-tutorials",
    },
  ],
  company: [
    {
      id: "1",
      icon: "fa-solid fa-user-group",
      text: "About us",
      desc: "Learn about our story and our mission statement.",
      path: "/about-us",
    },
    {
      id: "2",
      icon: "fa-solid fa-phone",
      text: "Contact us",
      desc: "News and writings, press releases, and press resources.",
      path: "/contact-us",
    },
    {
      id: "3",
      icon: "fa-solid fa-comment-medical",
      text: "FAQ",
      desc: "All the boring stuff that we Dan from legal made us add.",
      path: "/faq",
    },
  ],
  // featured: {
  //   img: "",
  //   title: "Success story",
  //   desc: "Learn about Lizzy Dahunsi's success story after using our app",
  // },
};
