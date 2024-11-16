import Image from "next/image";
import React from "react";
import avatar1 from "../../../public/image/new/avatar1.jpg";
import avatar2 from "../../../public/image/new/avatar2.jpg";
import avatar3 from "../../../public/image/new/avatar3.jpg";
import { Button } from "./button";
import { CiLocationArrow1 } from "react-icons/ci";
import image1 from "../../../public/image/new/IMG-20240508-WA0016.jpg";
import image2 from "../../../public/image/new/IMG-20240508-WA0017.jpg";
import image4 from "../../../public/image/new/IMG-20240508-WA0019.jpg";
import image5 from "../../../public/image/new/IMG-20240508-WA0020.jpg";
import image7 from "../../../public/image/new/IMG-20240508-WA0022.jpg";
import image9 from "../../../public/image/new/IMG-20240508-WA0024.jpg";
import image13 from "../../../public/image/new/IMG-20240508-WA0028.jpg";
import image15 from "../../../public/image/new/IMG-20240508-WA0030.jpg";

const TestimonialCard = () => {
  const testimonials = [
    {
      name: "Sahi Rai",
      avatar: avatar1,
      role: "Mobile Developer",
      content:
        "My experience at GSIHM has been amazing. The hands-on training and support from instructors really helped me gain confidence in mobile app development. The placement team was also very dedicated and helped me land a job right after graduation. I feel fully prepared for my career now!",
    },
    {
      name: "Vidhita Pradhan",
      avatar: avatar2,
      role: "Marketing Specialist",
      content:
        "I chose GSIHM for its strong industry connections, and I wasn’t disappointed. The practical knowledge and real-world experience provided in the marketing field were exactly what I needed to succeed. I’m grateful for the support and guidance I received every step of the way.",
    },
    {
      name: "Prem Roka",
      avatar: avatar3,
      role: "Web Developer",
      content:
        "GSIHM’s curriculum is exactly what aspiring developers need. From day one, I was immersed in projects that taught me practical skills. The instructors are very knowledgeable and supportive. Thanks to GSIHM, I secured a great position right after my training!",
    },
    {
      name: "Shreya Chettri",
      avatar: image13,
      role: "Full-Stack Developer",
      content:
        "Joining GSIHM was the best decision for my career. The faculty are highly experienced, and the placement team really worked hard to find opportunities that matched my skills and career goals. I now have a rewarding job, thanks to the guidance I received here.",
    },
    {
      name: "Reya Rasaily",
      avatar: image15,
      role: "Software Developer",
      content:
        "I came to GSIHM hoping to gain practical skills, and I left with so much more. The team was supportive, the environment was motivating, and the job placement assistance made the transition to my career seamless. I highly recommend GSIHM to anyone looking to build a future in tech.",
    },
    {
      name: "Aditya Gurung",
      avatar: image4,
      role: "Backend Developer",
      content:
        "GSIHM provided a solid foundation for my career in backend development. The real-world projects and supportive mentors prepared me well for my current job. I’m grateful for the skills and knowledge I gained here, as well as the help in finding the right job.",
    },
    {
      name: "Roshni Lama",
      avatar: image5,
      role: "Frontend Developer",
      content:
        "The training at GSIHM was exactly what I needed to enter the tech industry. I loved the balance of theory and hands-on practice. The team was dedicated, and the job placement support was excellent. I now feel confident in my skills and career path!",
    },
  ];

  return (
    <div
      className="text-gray-600 dark:text-gray-300 py-10 dark:bg-gray-900"
      id="reviews"
    >
      <div className="max-w-7xl  mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 py-10 rounded-md px-6 md:px-0">
          <h2 className="text-4xl px-5 text-center font-bold  text-primary">
            SEE WHAT OUR STUDENTS SAYS
          </h2>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={testimonial.avatar}
                  alt="user avatar"
                  loading="lazy"
                  width={300}
                  height={300}
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 mt-3 dark:text-white">
                    {testimonial.name}
                  </h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">
                    {testimonial.role}
                  </p> */}
                </div>
              </div>
              <p className="mt-8">{testimonial.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col my-10 justify-center items-center">
          <Button size="lg">
            Read more <CiLocationArrow1 size={20} width={10} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
