"use client";

import Image from "next/image";
import Link from "next/link";
import { mainNav, subNav } from "@/app/layout";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../public/icons/logo.png";
import Android from "../public/icons/android.png";
import Lady from "../public/icons/lady.png";

import useClickOutside from "./UseClickOutside";
import {
  setActiveSubNav,
  setShowSubNav,
} from "@/redux/features/global/globalSlice";
import GetAppBtn from "./GetAppBtn";

const Nav = () => {
  const { showSubNav } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const [showMobNav, setShowMobNav] = useState(false);
  const mobNavRef = useRef();
  // const deskNavRef = useRef();
  const { activeSubNav } = useSelector((state) => state.global);

  useClickOutside(mobNavRef, showMobNav, setShowMobNav);
  // useClickOutside(deskNavRef, showMobNav, setShowMobNav);
  console.log(showMobNav);

  useEffect(() => {});
  return (
    <nav className="px-10 py-5 md:px-20 relative bg-navBg md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>

        <button
          onClick={() => setShowMobNav(!showMobNav)}
          className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className="hidden md:flex md:gap-4 md:items-center md:justify-between">
        {/*START active sub nav */}
        <li
          className="cursor-pointer"
          onClick={() => dispatch(setShowSubNav())}>
          <i
            className={`fa-solid fa-chevron-${
              showSubNav ? "up" : "down"
            }`}></i>{" "}
          {activeSubNav?.text}
        </li>
        {/*END active sub nav */}
        {mainNavList.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path}>{nav.text}</Link>
          </li>
        ))}
      </ul>

      <div className="md:block hidden">
        <GetAppBtn setShowMobNav={setShowMobNav} />
      </div>
      {/* <SubNav /> */}

      {/* mobile nav specific */}
      {showMobNav && (
        <div className=" flex md:hidden flex-col absolute top-0 right-0 bg-white text-black w-[80%] h-screen">
          <button
            onClick={() => setShowMobNav(false)}
            className="bg-secondary text-white text-right p-4">
            <div className="bg-gray-600 inline-block p-1 rounded-full w-[30px] h-[30px] text-center">
              <i className="fa-solid fa-close"></i>
            </div>
          </button>

          <div className="h-screen p-3 flex flex-col justify-between text-right">
            <ul className="flex flex-col gap-[1.5rem]  ">
              {/* active sub mob nav */}
              <li
                className="font-bold"
                onClick={() => dispatch(setShowSubNav())}>
                <Link href={activeSubNav?.path}>
                  <i
                    className={`fa-solid fa-chevron-${
                      showSubNav ? "up" : "down"
                    }`}></i>{" "}
                  {activeSubNav?.text}
                </Link>
              </li>
              {/* mobile specific */}
              {showSubNav && (
                <nav className="block md:hidden text-gray-600">
                  <div className="-mt-8">
                    {subNavList.resources.map((res) => (
                      <li
                        className={`mt-[1.5rem]`}
                        key={res.id}
                        onClick={() => {
                          dispatch(setActiveSubNav(res));
                          dispatch(setShowSubNav());
                        }}>
                        <Link href={res.path}>{res.text}</Link>
                      </li>
                    ))}
                  </div>

                  <div>
                    {subNavList.company.map((com) => (
                      <li
                        className="mt-[1.5rem]"
                        key={com.id}
                        onClick={() => {
                          dispatch(setActiveSubNav(com));
                          dispatch(setShowSubNav());
                        }}>
                        <Link href={com.path}>{com.text}</Link>
                      </li>
                    ))}
                  </div>
                </nav>
              )}
              {mainNavList.map((nav) => (
                <li key={nav.id} className=" font-bold">
                  <Link onClick={() => setShowMobNav(false)} href={nav.path}>
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-end text-right">
              <GetAppBtn setShowMobNav={setShowMobNav} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

export const SubNav = () => {
  const dispatch = useDispatch();
  const { showSubNav } = useSelector((state) => state.global);
  // console.log(showSubNav);
  //   const [showNav, setShowNav] = useState(showSubNav);

  //   const ref = useRef();
  //   useClickOutside(ref, showSubNav, dispatch(setShowSubNav()));

  return (
    <>
      {showSubNav && (
        <nav className="absolute w-full left-0 hidden md:flex px-10 py-5 bg-white text-black  justify-between gap-5 z-20">
          <div>
            <h6 className="text-warning">Resources</h6>
            {subNavList.resources.map((res) => (
              <Link
                onClick={() => {
                  dispatch(setActiveSubNav(res));
                  dispatch(setShowSubNav());
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
            <h6 className="text-warning">Company</h6>
            {subNavList.company.map((com) => (
              <Link
                onClick={() => {
                  dispatch(setActiveSubNav(com));
                  dispatch(setShowSubNav());
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
            <h6 className="text-warning">Featured</h6>
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
    </>
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
