"use client";
import React from "react";
import logo from "../../../public/image/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const handleFacebook = () => {
    window.open("https://www.facebook.com/globalspectraUK/", "_blank");
  };

  const handleinstagram = () => {
    window.open(
      "https://www.instagram.com/global_spectra_institute/",
      "_blank"
    );
  };

  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/global-spectra-institute-of-hospitality-management/",
      "_blank"
    );
  };

  const handleWhatsapp = () => {
    window.open("https://wa.me/8972021070", "_blank");
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4 md:px-36">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-12 md:gap-y-0">
          <div className="flex flex-col gap-y-6 md:w-1/2 mr-6">
            <Image src={logo} alt="logo" width={100} height={100} />
            <p className="text-sm">
              Welcome to the world of education, Where knowledge unlocks endless
              possibilities! Our aim is to create a path of employment by giving
              the right Academic and Industry Exposure and also ensure the
              students have a bright career by setting Career Goals.
            </p>
          </div>

          <div className="md:w-1/4">
            <h2 className="text-lg font-bold text-primary mb-4">Quick Links</h2>
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link href="/aboutus" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="hover:underline">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4 mr-10">
            <h2 className="text-lg font-bold text-primary mb-4">Contact Us</h2>
            <ul className="flex flex-col gap-y-4 text-sm">
              <li>
                <b>Address:</b> Behind Heritage Hotel, Lama Building, Patel
                Road, Pradhan Nagar, Siliguri-734003
              </li>
              <li>
                <b>Phone:</b> +91 7551027004 <br></br>
                <b>Phone 2:</b> +91 8370813633 <br></br>
              </li>
              <li>
                <b>Email:</b> gsihm111@gmail.com <br></br>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h2 className="text-lg font-bold text-primary mb-4">Socials</h2>
            <div className=" flex gap-6 cursor-pointer">
              <FaFacebookF size={30} color="#091B5A" onClick={handleFacebook} />
              <FaInstagram
                size={30}
                color="#091B5A"
                onClick={handleinstagram}
              />
            </div>

            <div className="flex gap-6 mt-4 cursor-pointer">
              <FaLinkedin size={30} color="#091B5A" onClick={handleLinkedin} />

              <FaWhatsapp size={30} color="#091B5A" onClick={handleWhatsapp} />
            </div>
          </div>
        </div>

        <hr className="my-8 border-accent" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="py-4 md:py-0">&copy; 2024 All rights reserved</div>
          <div>
            Made with ❤️ by{" "}
            <a href="https://kiwemedia.vercel.app" className="text-primary">
              KiweMedia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
