"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { CgArrowTopRight } from "react-icons/cg";
import student from "../../../public/image/student.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/courses");
  };

  return (
    <div>
      <div className="hidden md:inline-block">
        <div className="content_bg">
          <div className="md:w-42 w-full md:px-32 flex flex-col md:items-left md:py-32">
            <div className="flex gap-x-30 md:py-0 py-10 ">
              <div className="md:w-[70%] md:text-left text-center">
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
                  Global standards of high quality learning
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className=""
                >
                  Enhancing skills for a brighter career. GSIHM’s vision is to
                  emerge as the strongest organisation for an ethical business
                  approach & to achieve the corporate supremacy by providing
                  incomparable services to our clients
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

              <div className="md:block">
                <Image
                  src={student}
                  quality={100}
                  alt="logo"
                  className="absolute h-[700px] w-[700px] -mt-36  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden inline-block">
        <div className="content_bg w-[100%] min-h-screen px-3">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center pt-32 pb-12 text-primary"
            >
              Welcome to GSIHM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto text-center text-lg font-semibold text-primary"
            >
              Enhancing skills for a brighter career. GSIHM’s vision is to
              emerge as the strongest organisation for an ethical business
              approach & to achieve the corporate supremacy by providing
              incomparable services to our clients
            </motion.p>

            <Image
              src={student}
              quality={100}
              alt="logo"
              width={400}
              height={100}
              className="h-[450px] w-[450px] -mt-36 mx-auto"
            />

            <div className="flex flex-col items-center justify-center ">
              <Button size="lg" onClick={handleNavigate} className="mt-10">
                Explore Courses <CgArrowTopRight className="ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
