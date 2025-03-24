"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { CgArrowTopRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(true);

  const handleNavigate = () => {
    router.push("/courses");
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="content_bg min-h-screen flex items-center">
          <div className="md:w-42 w-full md:px-32 flex flex-col md:items-left md:py-32">
            <div className="flex md:items-center gap-x-10">
              {/* Text Content */}
              <div className="md:w-[65%] md:text-left text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:text-2xl text-xl font-bold text-primary"
                >
                  Welcome to GSIHM
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:text-6xl text-2xl font-bold text-primary my-8"
                >
                  Global Spectra Institute of Hospitality Management
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  At GSIHM, we don’t just teach hospitality—we shape future
                  industry leaders. Gain hands-on experience, world-class
                  training, and the skills top employers demand. Whether you
                  dream of managing luxury hotels, running your own restaurant,
                  or excelling in tourism, we’ll equip you for success. Join us
                  today and turn your passion into a thriving career!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button size="lg" onClick={handleNavigate} className="mt-10">
                    Explore Courses <CgArrowTopRight className="ml-3" />
                  </Button>
                </motion.div>
              </div>

              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative md:w-[500px] md:h-[350px] rounded-xl overflow-hidden shadow-lg"
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src="/image/new/introvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden inline-block">
        <div className="content_bg w-full px-3 pb-32 pt-24 relative min-h-[620px] flex flex-col justify-between">
          <div className="text-center">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-primary"
            >
              Welcome to GSIHM
            </motion.h1>

            <motion.p className="text-2xl font-bold py-3 text-primary">
              Global Spectra Institute of Hospitality Management
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto text-lg font-semibold py-5 text-primary"
            >
              At GSIHM, we don’t just teach hospitality—we shape future industry
              leaders. Gain hands-on experience, world-class training, and the
              skills top employers demand. Whether you dream of managing luxury
              hotels, running your own restaurant, or excelling in tourism,
              we’ll equip you for success. Join us today and turn your passion
              into a thriving career!
            </motion.p>
          </div>

          {/* Floating Video */}
          {showVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-5 right-5 w-[250px] h-[150px] md:w-[400px] md:h-[250px] bg-black rounded-xl overflow-hidden shadow-xl"
              style={{ zIndex: 50 }}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white"
              >
                <IoMdClose size={20} />
              </button>
              <video
                autoPlay
                loop
                muted
                controls
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/image/new/introvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          )}

          {/* Button */}
          <div className="flex justify-center mt-10">
            <Button size="lg" onClick={handleNavigate}>
              Explore Courses <CgArrowTopRight className="ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
