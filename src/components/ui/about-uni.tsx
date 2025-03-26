"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { MdOutlineReadMore } from "react-icons/md";
import { useRouter } from "next/navigation";
import aboutusimg from "../../../public/image/new/aboutusimg.jpg";

const AboutUniversity = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/about");
  };

  return (
    <div className="px-6 md:px-12 lg:px-36 py-10 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center shadow-2xl p-6 md:p-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={aboutusimg}
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
            operations, Human Resources, and Education. GSIHM is proud to be an
            ISO 9001:2015 Certified Institute, demonstrating our commitment to
            quality education. We are also affiliated with the Council for
            Vocational Education & Skill Development (CVESD) and hold
            registration under the Ministry of Micro, Small, and Medium
            Enterprises (MSME) and the Ministry of Corporate Affairs.
            <br></br>
            {}
            <br></br>
            Our faculty members are distinguished by their strong academic
            backgrounds and substantial professional expertise across diverse
            fields, including Hotel management, Aviation, Cruise Operations, and
            Travel and Tourism. By joining GSIHM, students gain practical
            knowledge from mentors who have excelled in the industry,
            positioning them for success in their chosen careers.
          </p>

          <Button className="mt-5" onClick={handleRoute} size={"lg"}>
            Read more
            <div className="flex flex-col items-center justify-center h-8 w-8">
              <MdOutlineReadMore size={20} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUniversity;
