"use client";
import { Assosciations } from "@/components/ui/Association";
import { Button } from "@/components/ui/button";
import CampusInfo from "@/components/ui/campus-info";
import Whyus from "@/components/ui/why-us";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineReadMore } from "react-icons/md";
import { IoAirplane } from "react-icons/io5";
import { FaEye, FaFistRaised } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import aboutus from "../../../public/image/new/aboutusimg.jpg";
import Affiliates from "@/components/ui/affiliates";
import InfoSection from "@/components/ui/info-section";

const About = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRoute = () => {
    router.push("/aboutus");
  };

  const slides = [
    {
      icon: <IoAirplane fill="#091B5A" size={50} />,
      text: "GLOBAL PLACEMENTS",
    },
    {
      icon: <FaFistRaised fill="#091B5A" size={50} />,
      text: "OUR MISSION",
    },
    {
      icon: <FaEye fill="#091B5A" size={50} />,
      text: "OUR VISION",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <div className="bg-primary text-white h-32 px-4 md:px-16 lg:px-32 flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-bold">Home / About</h1>
      </div>

      <div className="px-4 md:px-16 lg:px-32 py-10">
        <div className="flex flex-col lg:flex-row py-10">
          <div className="w-full lg:w-1/2">
            <Image
              src={aboutus}
              alt="aboutus"
              layout="responsive"
              width={3000}
              height={2000}
              className="rounded-md"
            />
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
              ABOUT US
            </h1>
            <p className="text-sm md:text-base lg:text-md leading-relaxed">
              Global Spectra Institute Of Hospitality Management (GSIHM) is a
              premier educational institute located in the serene hamlet of
              Pradhan Nagar, Siliguri, nestled at the foothills of Darjeeling.
              Established in 2017, GSIHM brings together industry veterans from
              Hospitality and Aviation, combining a wealth of experience in
              operations, Human Resources, and Education. GSIHM is proud to be
              an ISO 9001:2015 Certified Institute, demonstrating our commitment
              to quality education. We are also affiliated with the Council for
              Vocational Education & Skill Development (CVESD) and hold
              registration under the Ministry of Micro, Small, and Medium
              Enterprises (MSME) and the Ministry of Corporate Affairs.
              <br></br>
              Our faculty members are distinguished by their strong academic
              backgrounds and substantial professional expertise across diverse
              fields, including Hotel management, Aviation, Cruise Operations,
              and Travel and Tourism. By joining GSIHM, students gain practical
              knowledge from mentors who have excelled in the industry,
              positioning them for success in their chosen careers.
            </p>
          </div>
        </div>

        <Affiliates />

        <div className="py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
            MORE INFO
          </h1>

          <InfoSection />
          {/* <p className="text-sm md:text-base lg:text-md leading-relaxed">
            At{" "}
            <strong>
              <em>
                <u>
                  Global Spectra Institute Of Hospitality Management (GSIHM)
                </u>
              </em>
            </strong>
            , we not only provide top-tier education but also offer a unique
            pathway to{" "}
            <strong>
              <em>global career opportunities</em>
            </strong>
            . Our dedicated <em>placement team</em> works tirelessly to ensure
            each student achieves their career goals with a{" "}
            <strong>100% placement guarantee</strong>.<br />
            <br />
            We specialize in <strong>global placements</strong> across prominent
            industries, connecting students with leading hotels, airlines,
            cruise lines, and tourism companies worldwide. Our alumni have
            successfully launched careers across the globe, benefiting from
            GSIHM’s extensive network and industry partnerships.
            <br />
            <br />
            <strong>Why Choose GSIHM?</strong>
            <br />- <strong>100% Placement Guarantee:</strong> We stand by our
            commitment to place every student in a role that matches their
            training and aspirations.
            <br />- <strong>Industry Mentorship:</strong> Our faculty comprises
            seasoned professionals from the fields of hospitality, aviation, and
            tourism, providing students with real-world insights and mentorship.
            <br />- <strong>Global Connections:</strong> Partnerships with
            leading organizations worldwide ensure our students gain
            international exposure and a competitive edge.
            <br />- <strong>Practical Training:</strong> Our curriculum is
            designed for hands-on learning, equipping students with practical
            skills in a real-world setting.
            <br />
            <br />
            <em>
              Join GSIHM and take the first step toward an exciting, successful
              career in hospitality, aviation, and beyond. Unlock your potential
              and achieve your dreams with a trusted partner in education and
              placement support.
            </em>
          </p>
        </div>

        <div className="px-6 md:px-12 lg:px-36 pb-10 md:pb-16 lg:pb-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
              WHY US
            </h1>
          </div>

          <div className="block md:hidden relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((item, index) => (
                <motion.div
                  key={index}
                  className="min-w-full flex flex-col items-center justify-center bg-white w-52 h-52 rounded-md shadow-md mx-auto p-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-center">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            >
              ❯
            </button>
          </div>

          <div className="hidden md:flex justify-between items-center mx-4 md:mx-20 lg:mx-40 my-10 gap-6 md:gap-10">
            {slides.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white w-52 h-52 flex flex-col items-center justify-center rounded-md shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center mb-5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-center">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
        {/* <CampusInfo /> */}
        
        <Assosciations />
      </div>
      </div>
    </>
  );
};

export default About;
