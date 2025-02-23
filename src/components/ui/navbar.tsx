"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import logo from "../../../public/image/logo.png";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="fixed z-[100] w-full bg-white shadow-md pointer-events-auto"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center font-medium text-primary px-4 md:px-36 py-6">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-2xl">
            <FaBars />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-x-4 md:gap-x-8">
          {[
            { href: "/about", label: "About" },
            { href: "/courses", label: "Courses" },
            { href: "/testimonial", label: "Testimonial" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <motion.div
              key={item.href}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href={item.href}
                className={`link cursor-pointer ${
                  pathname === item.href ? "underline" : ""
                } hover:underline`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </motion.header>
  );
};

export default Navbar;
