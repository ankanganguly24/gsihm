import Image from "next/image";
import React from "react";
import image1 from "../../../public/image/new/IMG-20240508-WA0016.jpg";
import image2 from "../../../public/image/new/IMG-20240508-WA0017.jpg";
import image4 from "../../../public/image/new/IMG-20240508-WA0019.jpg";
import image5 from "../../../public/image/new/IMG-20240508-WA0020.jpg";
import image7 from "../../../public/image/new/IMG-20240508-WA0022.jpg";
import image9 from "../../../public/image/new/IMG-20240508-WA0024.jpg";
import image13 from "../../../public/image/new/IMG-20240508-WA0028.jpg";
import image15 from "../../../public/image/new/IMG-20240508-WA0030.jpg";
import avatar1 from "../../../public/image/new/avatar1.jpg";
import avatar2 from "../../../public/image/new/avatar2.jpg";
import avatar3 from "../../../public/image/new/avatar3.jpg";
import image16 from "../../../public/image/new/IMG-20240508-WA0031.jpg";
import image18 from "../../../public/image/new/IMG-20240508-WA0033.jpg";
import image19 from "../../../public/image/new/IMG-20240508-WA0034.jpg";
import image20 from "../../../public/image/new/IMG-20240508-WA0035.jpg";
import image21 from "../../../public/image/new/IMG-20240508-WA0036.jpg";
import image24 from "../../../public/image/new/IMG-20240508-WA0039.jpg";
import image25 from "../../../public/image/new/IMG-20240508-WA0040.jpg";
import image26 from "../../../public/image/new/IMG-20240508-WA0041.jpg";
import image27 from "../../../public/image/new/IMG-20240529-WA0012.jpg";
import image28 from "../../../public/image/new/IMG-20240614-WA0013.jpg";
import image29 from "../../../public/image/new/IMG-20240615-WA0018.jpg";
import image30 from "../../../public/image/new/IMG-20240615-WA0019.jpg";
import image31 from "../../../public/image/new/IMG-20240615-WA0020.jpg";
import image33 from "../../../public/image/new/IMG-20240615-WA0022.jpg";
import image34 from "../../../public/image/new/IMG-20240705-WA0023.jpg";
import image35 from "../../../public/image/new/IMG-20240705-WA0024.jpg";
import image36 from "../../../public/image/new/IMG-20240705-WA0025.jpg";
import image37 from "../../../public/image/new/IMG-20240705-WA0026.jpg";
import image38 from "../../../public/image/new/IMG-20240705-WA0027.jpg";
import image39 from "../../../public/image/new/IMG-20240705-WA0028.jpg";
import image40 from "../../../public/image/new/IMG-20240705-WA0029.jpg";

const Testimonial = () => {
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
    // {
    //   name: "Daniel Lee",
    //   avatar: image7,
    //   role: "Restaurant Manager",
    //   content:
    //     "The training I received here was instrumental in my current role as a restaurant manager. The business acumen and operational skills taught were directly applicable.",
    // },
    // {
    //   name: "Ava Martinez",
    //   avatar: image9,
    //   role: "Pastry Chef",
    //   content:
    //     "The pastry and baking program exceeded my expectations. The instructors were master chefs who shared their wealth of knowledge and techniques with us.",
    // },
    // {
    //   name: "Noah Brown",
    //   avatar: image13,
    //   role: "Sommelier",
    //   content:
    //     "I gained an in-depth understanding of wine and spirits through the sommelier certification program. The tasting sessions and field trips were highlights of my education here.",
    // },
    {
      name: "Pukar Basnet",
      avatar: image16,
      role: "Concierge",
      content:
        "I am grateful for the training I received at GSIHM. Senior faculty members with years of industry experience provided valuable insights and mentorship. The practical training was particularly beneficial.",
    },
    {
      name: "Aman Gurung",
      avatar: image18,
      role: "Catering Manager",
      content:
        "The institute's focus on practical experience meant that I was ready to hit the ground running in my first job. The faculty's industry connections helped me land my dream job.",
    },
    {
      name: "Sukriti Pradhan",
      avatar: image19,
      role: "Travel Consultant",
      content:
        "GSIHM provided me with the skills and knowledge needed me to land my first job.",
    },
    {
      name: "Nikita Ekta",
      avatar: image20,
      role: "Bartender",
      content:
        "The training and real-world scenarios were particularly effective. GSIHM helped me secure a great job after completion.",
    },
    {
      name: "Akriti Lama",
      avatar: image21,
      role: "Housekeeping Manager",
      content: "I am forever grateful for what GSIHM has done for me. ",
    },
    {
      name: "Diya Rana",
      avatar: image24,
      role: "Front Desk Supervisor",
      content:
        "Never in my wildest dreams did I think I would be where I am today. The training and support I received at GSIHM were instrumental in my career growth.",
    },
    {
      name: "Rolan Lepcha",
      avatar: image25,
      role: "Tour Guide",
      content:
        "It wasnt easy but the training and support I received at GSIHM were instrumental in my career growth.",
    },
    // {
    //   name: "James Young",
    //   avatar: image26,
    //   role: "Food and Beverage Manager",
    //   content:
    //     "The food and beverage management course was comprehensive and insightful. The focus on current trends and operational skills was particularly beneficial.",
    // },
    // {
    //   name: "Harper King",
    //   avatar: image27,
    //   role: "Event Coordinator",
    //   content:
    //     "The event management program offered at this institute was outstanding. The hands-on projects and real-world case studies were incredibly beneficial.",
    // },
    {
      name: "Reshma Rai",
      avatar: image28,
      role: "Chef de Cuisine",
      content:
        "Real world experience and practical training were invaluable. GSIHM is the best of them all.",
    },
    {
      name: "Sunil Rai",
      avatar: image29,
      role: "Hotel Front Office Manager",
      content:
        "Lets just say that GSIHM is the best institute for hospitality management.",
    },
    {
      name: "Nikhil Thapa",
      avatar: image30,
      role: "Travel Agent",
      content:
        "Could have never imagined that I would be where I am today. Thank you team.",
    },
    // {
    //   name: "Grace Carter",
    //   avatar: image31,
    //   role: "Executive Chef",
    //   content:
    //     "The culinary program offered at this institute was exceptional. The hands-on training and real-world experience were invaluable.",
    // },

    // {
    //   name: "Abigail Thompson",
    //   avatar: image33,
    //   role: "Bartender",
    //   content:
    //     "The bartending course was thorough and engaging. The practical training and real-world scenarios were particularly effective.",
    // },
    // {
    //   name: "William Adams",
    //   avatar: image34,
    //   role: "Hotel General Manager",
    //   content:
    //     "The hotel management program prepared me well for the challenges of working in a luxury hotel. The customer service training was particularly valuable.",
    // },
    // {
    //   name: "Emily Martin",
    //   avatar: image35,
    //   role: "Event Planner",
    //   content:
    //     "The event management program was comprehensive and well-structured. The faculty's industry connections helped me secure a great job after graduation.",
    // },
    // {
    //   name: "Alexander Anderson",
    //   avatar: image36,
    //   role: "Travel Consultant",
    //   content:
    //     "The travel and tourism program was exceptional. The field trips and practical experiences helped me develop the skills needed to become a successful travel consultant.",
    // },
    // {
    //   name: "Charlotte Martinez",
    //   avatar: image37,
    //   role: "Pastry Chef",
    //   content:
    //     "The pastry and baking program exceeded my expectations. The instructors were master chefs who shared their wealth of knowledge and techniques with us.",
    // },
    // {
    //   name: "James Taylor",
    //   avatar: image38,
    //   role: "Concierge",
    //   content:
    //     "The hospitality program prepared me well for the challenges of working in a luxury hotel. The customer service training was particularly valuable.",
    // },
    // {
    //   name: "Sophia Wilson",
    //   avatar: image39,
    //   role: "Catering Manager",
    //   content:
    //     "The institute's focus on practical experience meant that I was ready to hit the ground running in my first job. The faculty's industry connections helped me land my dream job.",
    // },
    // {
    //   name: "Benjamin Brown",
    //   avatar: image40,
    //   role: "Restaurant Manager",
    //   content:
    //     "The training I received here was instrumental in my current role as a restaurant manager. The business acumen and operational skills taught were directly applicable.",
    // },
  ];

  return (
    <div
      className="text-gray-600 dark:text-gray-300 py-10 dark:bg-gray-900"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 bg-primary space-y-4 py-10 rounded-md px-6 md:px-0">
          <h2 className="text-4xl px-5 font-bold  text-white">Wall of love</h2>
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
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white mt-3 ">
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
      </div>
    </div>
  );
};

export default Testimonial;
