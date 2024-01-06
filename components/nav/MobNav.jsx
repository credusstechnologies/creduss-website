import React, { useRef, useState } from "react";
import Link from "next/link";
import Button from "../Button";
import { mainNavList, subNavList } from "../Nav";
import {
  setActiveSubNav,
  setShowSubNav,
} from "@/redux/features/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../UseClickOutside";

const MobNav = ({
  showMobNav,
  showSubNav,
  activeSubNav,
  setShowMobNav,
  setShowSubNav,
  pathname,
}) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useClickOutside(ref, showMobNav, setShowMobNav);
  return (
    <div
      ref={ref}
      className="flex md:hidden flex-col absolute top-0 right-0 z-20 bg-white text-black w-[80%] h-screen">
      <div className="bg-secondary text-white text-right h-[10vh] p-4 ">
        <button
          onClick={() => setShowMobNav(false)}
          className="bg-gray-600 inline-block p-1 rounded-full w-[30px] h-[30px] text-center">
          <i className="fa-solid fa-close"></i>
        </button>
      </div>

      <div className="h-screen p-3 flex flex-col justify-between text-right  ">
        <ul className=" ">
          {/* active sub mob nav */}
          <li
            className={`font-bold flex items-center gap-2 justify-end `}
            onClick={() => setShowSubNav(!showSubNav)}>
            {/* add a tag that renders activeSubNav */}
            <p className="text-gray-900 text-2xl font-semibold leading-loose">
              {activeSubNav || "About"}
            </p>
            <i
              className={`fa-solid fa-chevron-${
                showSubNav ? "up" : "down"
              }`}></i>
          </li>
          {/* sub nav specific */}
          {showSubNav && (
            <nav className="block md:hidden mb-2 text-slate-600 text-lg font-normal leading-7">
              <div className="">
                {subNavList.resources.map((res) => (
                  <li
                    className={`mt-[1.5rem]`}
                    key={res.id}
                    onClick={() => {
                      dispatch(setActiveSubNav(res.text));
                      setShowMobNav(false);
                    }}>
                    <Link
                      className={`${
                        res.path === pathname ? "text-gray-900 font-bold" : ""
                      }`}
                      href={res.path}>
                      {res.text}
                    </Link>
                  </li>
                ))}
              </div>

              <div>
                {subNavList.company.map((com) => (
                  <li
                    className="mt-[1.5rem]"
                    key={com.id}
                    onClick={() => {
                      dispatch(setActiveSubNav(com.text));
                      setShowMobNav(false);
                    }}>
                    <Link href={com.path}>{com.text}</Link>
                  </li>
                ))}
              </div>
            </nav>
          )}

          <div className="flex flex-col gap-[24px] mt-3">
            {mainNavList.map((nav) => (
              <li key={nav.id} className="font-bold ">
                <Link
                  className={`${
                    nav.path === pathname ? "active-link" : ""
                  }  text-2xl font-semibold leading-loose text-gray-900 mob-link`}
                  onClick={() => setShowMobNav(false)}
                  href={nav.path}>
                  {nav.text}
                </Link>
              </li>
            ))}
          </div>
        </ul>

        <div className="flex justify-end">
          <Button
            twStyles="px-[18px] py-2.5 text-white"
            onClick={() => setShowMobNav(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobNav;
