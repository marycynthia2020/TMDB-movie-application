"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import ToggleBtn from "./ToggleBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Popular", path: "/popular" },
    { name: "Top Rated", path: "/top" },
    { name: "Upcoming", path: "/upcoming" },
  ];
  return (
    <section className="w-full border-y-1 border-gray-300 fixed bg-white dark:bg-black dark:border-0 ">
      <div className="w-full max-w-[1280px] mx-auto p-4 flex flex-col gap-y-3 lg:flex-row items-center justify-between  ">
        <div className="w-full flex items-center justify-between lg:hidden">
          <Logo />
          <div className="flex items-center gap-4">
            <ToggleBtn />
            <IoIosSearch className="size-6 text-gray-400 dark:tex-gray-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            <div className="dark:text-gray-500" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoMdClose className="size-6 cursor-pointer" />
              ) : (
                <RxHamburgerMenu className="size-6 cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        {/* navigation */}
        <div
          className={`w-full flex flex-col-reverse gap-y-4 lg:flex-row lg:items-center lg:justify-between   ${
            isOpen ? "" : "hidden lg:flex "
          }`}
        >
          <div className="hidden lg:block">
            <Logo />
          </div>
          <ul className="bg-[#F9FAFB] dark:bg-[#1e2936] lg:dark:bg-transparent p-4 lg:p-0 lg:bg-transparent flex flex-col lg:flex-row  gap-y-4 gap-x-8 lg:items-center ">
            {navLinks.map(menu => (
              <li
                key={menu.path}
                className={`px-3  lg:px-0 ${
                  pathname === menu.path
                    ? "text-white  lg:text-blue-600 bg-blue-700 lg:bg-transparent py-2 lg:p-0 rounded-sm "
                    : "text-[#111827] dark:text-white"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link
                  href={menu.path}
                  className={`  font-semibold hover:text-blue-600 `}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ToggleBtn />
            </div>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
