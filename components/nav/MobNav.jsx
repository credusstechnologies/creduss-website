import React, { useRef, useState } from "react";
import Link from "next/link";
import GetAppBtn from "../GetAppBtn";
import { mainNavList, subNavList } from "../Nav";
import {
  setActiveSubNav,
  setShowSubNav,
} from "@/redux/features/global/globalSlice";
import { useDispatch } from "react-redux";
import useClickOutside from "../UseClickOutside";

const MobNav = ({
  showMobNav,
  showSubNav,
  activeSubNav,
  setShowMobNav,
  setShowSubNav,
}) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useClickOutside(ref, showMobNav, setShowMobNav);
  return (
    <div
      ref={ref}
      className=" flex md:hidden flex-col absolute top-0 right-0 bg-white text-black w-[80%] h-screen">
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
          <li className="font-bold" onClick={() => setShowSubNav(!showSubNav)}>
            <i
              className={`fa-solid fa-chevron-${
                showSubNav ? "up" : "down"
              }`}></i>{" "}
            {activeSubNav?.text}
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
  );
};

export default MobNav;
