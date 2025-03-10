"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-card";
import { Button } from "./button";
import { FaPhone } from "react-icons/fa";
import airline1 from "../../../public/image/brands/IndiGo_Airlines_logo.svg";
import airline2 from "../../../public/image/brands/SpiceJet.svg";
// import airline3 from "../../../public/image/brands/vistara-logo.svg";
import airline3 from "../../../public/image/brands/airindia.webp";
import airline4 from "../../../public/image/brands/qatar-airways-logo.svg";

import cruise1 from "../../../public/image/brands/princess-cruises.svg";
import cruise2 from "../../../public/image/brands/norwegian-cruise.svg";
import cruise3 from "../../../public/image/brands/carnival-cruise.svg";
import cruise4 from "../../../public/image/brands/msc-cruises.svg";
import cruise5 from "../../../public/image/brands/royal-c.svg";

import hotel1 from "../../../public/image/brands/HHI-bhuwneshwar.svg";
import hotel2 from "../../../public/image/brands/hilton-buenos-aires.svg";
import hotel3 from "../../../public/image/brands/itc.svg";
import hotel4 from "../../../public/image/brands/jaypee.svg";
import hotel5 from "../../../public/image/brands/lemon-tree-hotels.svg";
import hotel6 from "../../../public/image/brands/marriott.svg";
import hotel7 from "../../../public/image/brands/mayfair.svg";
import hotel8 from "../../../public/image/brands/montana-vista.svg";
import hotel9 from "../../../public/image/brands/oberoi.svg";
import hotel10 from "../../../public/image/brands/saffron-crest.svg";
import hotel11 from "../../../public/image/brands/sheraton-hotel.svg";

export function Assosciations() {
  return (
    <>
      <div className="rounded-md flex flex-col text-black  items-center justify-center relative overflow-hidden">
        <h1 className="text-2xl text-primary font-bold my-3 text-center">
          Aviation brands we work with
        </h1>
        <InfiniteMovingCards
          items={items}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="custom-class"
        />
      </div>

      <div className="rounded-md flex flex-col text-black antialiased items-center justify-center relative overflow-hidden">
        <h1 className="text-2xl text-primary font-bold my-3 text-center">
          Hotel brands we work with
        </h1>
        <InfiniteMovingCards
          items={hotels}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="custom-class"
        />
      </div>

      <div className="rounded-md flex flex-col text-black antialiased items-center justify-center relative overflow-hidden">
        <h1 className="text-2xl text-primary font-bold my-3 text-center">
          Cruise brands we work with
        </h1>
        <InfiniteMovingCards
          items={cruise}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="custom-class"
        />
      </div>
      <div className="flex flex-col items-center justify-center md:my-4 my-6 ">
        <Button size={"lg"} className="space-x-3">
          <span>Contact us</span>
          <FaPhone size={20} />
        </Button>
      </div>
    </>
  );
}

const items = [
  {
    src: airline1,
  },
  {
    src: airline2,
  },
  {
    src: airline3,
  },
  {
    src: airline4,
  },
];

const cruise = [
  {
    src: cruise1,
  },
  {
    src: cruise2,
  },
  {
    src: cruise3,
  },
  {
    src: cruise4,
  },
  {
    src: cruise5,
  },
];

const hotels = [
  {
    src: hotel1,
  },
  {
    src: hotel2,
  },
  {
    src: hotel3,
  },
  {
    src: hotel4,
  },
  {
    src: hotel5,
  },
  {
    src: hotel6,
  },
  {
    src: hotel7,
  },
  {
    src: hotel8,
  },
  {
    src: hotel9,
  },
  {
    src: hotel10,
  },
  {
    src: hotel11,
  },
];
