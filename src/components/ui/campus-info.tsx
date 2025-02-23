"use client";

import React, { useEffect } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import { IoBusinessSharp } from "react-icons/io5";
import { Button } from "./button";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion, useAnimation } from "framer-motion";
import useCountUp from "./countup";
import CountSlider from "./countslider";
import { useRouter } from "next/navigation";

const CampusInfo = () => {
  const controls = useAnimation();
  const [startCounting, setStartCounting] = React.useState(false);

  const studentCount = useCountUp(0, 200, 3000);
  const campusCount = useCountUp(0, 2, 3000);
  const successCount = useCountUp(0, 100, 3000);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/courses");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const element = document.getElementById("campus-info");
      if (element && top > element.offsetTop - window.innerHeight / 2) {
        setStartCounting(true);
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="content_bg2 md:mb-96 mb-[900px] " id="campus-info">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-3xl font-bold text-white">Campus Information</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mx-4 md:mx-20 lg:mx-32 my-10">
        {[
          {
            icon: <GiCommercialAirplane size={50} />,
            title: "Aviation Courses",
            description:
              "Flight Steward/Stewardess (Air hostess), Air Ticketing Staff, Ground Staff, Quality Control Personnel, Airport Operations Manager",
          },
          {
            icon: <IoBusinessSharp size={50} />,
            title: "Management Courses",
            description:
              "Chef , F&B Service Associate, Bartender,Barista, Front Office Associate, Housekeeping Associate, etc",
          },
          {
            icon: <GrLanguage size={50} />,
            title: "CRUISE MANAGEMENT",
            description:
              "Gain the essential skills for a successful career in cruise management, including training in onboard operations, guest services, hospitality management, crew coordination, and leadership in the cruise industry.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 md:p-10 w-full md:w-[350px] lg:w-[400px] min-h-[280px] md:h-[300px] bg-white rounded-md shadow-lg mb-4 md:mb-0 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <div className="mb-3 md:mb-4">{item.icon}</div>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              {item.title}
            </h2>
            <p className="flex-1 text-sm md:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <CountSlider startCounting={290} />

      <div className="flex flex-col items-center justify-center mt-6 md:mt-10">
        <Button size="lg" onClick={handleNavigate}>
          Read more <CiLocationArrow1 size={20} width={10} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CampusInfo;
