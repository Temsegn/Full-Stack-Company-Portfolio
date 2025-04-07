import { title } from "process";
import react from "react";

import {
  CodeBracketIcon,
   BuildingStorefrontIcon,
  ShareIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  MegaphoneIcon,
 } from "@heroicons/react/24/solid";
const services = [
  {
    icon: <CodeBracketIcon className="w-12 h-12 text-blue-500" />,
    title: "Software Development",
    detail:
      "We craft unique and impactful branding strategies that resonate with your audience. Our creative solutions elevate your brand’s identity and ensure it stands out in a crowded market. Let’s build a memorable brand that leaves a lasting impression.",
  },
  {
    icon: <MegaphoneIcon className="w-12 h-12 text-purple-500" />,
    title: "Digital Marketing",
    detail:
      "We craft compelling digital marketing strategies to elevate your brand and engage your audience. Our tailored solutions boost visibility, drive growth, and create lasting connections. Let’s build your brand’s future and leave a lasting impact in the digital world.",
  },
  {
    icon: <AcademicCapIcon className="w-12 h-12 text-purple-500" />,

    title: "Tech Education and Online Training",
    detail:
      "We provide cutting-edge tech education and online training to help you stay ahead in today’s digital world. Our expert-led courses empower learners with the skills needed for success in tech. Join us and unlock your potential with flexible, high-quality training.",
  },
  {
    icon: <BuildingStorefrontIcon className="w-12 h-12 text-green-500" />,

    title: "Home Tutor and Guidance",
    detail:
      "We offer personalized home tutoring and expert guidance to help students excel academically. Our dedicated tutors provide tailored lessons that cater to individual learning needs. Let us support your educational journey with flexible, one-on-one attention for lasting success.",
  },
  {
    icon: <BriefcaseIcon className="w-12 h-12 text-blue-500" />,

    title: "Business Consultation",
    detail:
      "We provide expert business consultation to help you navigate challenges and unlock growth opportunities. Our tailored strategies are designed to optimize your operations and drive success. Let’s work together to transform your vision into actionable results and sustainable growth.",
  },
  {
    icon: <ShareIcon className="w-12 h-12 text-green-500" />,

    title: "Branding and Social Media",
    detail:
      "We craft unique and impactful branding strategies that resonate with your audience. Our creative solutions elevate your brand’s identity and ensure it stands out in a crowded market. Let’s build a memorable brand that leaves a lasting impression.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="container mx-auto   px-2 space-y-6 bg-white py-6 md:py-8 lg:py-10"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] text-orange-600 sm:text-3xl md:text-6xl">
          Our Services
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-600 sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg  bg-white select-none    hover:shadow-2xl hover:border-green-500  border-2  p-2 shadow-xl transition-all duration-1000"
          >
            <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
              <div className="flex  mb-4">{service.icon}</div>

              <div className="space-y-2">
                <h3 className="font-bold text-gray-950">{service.title}</h3>
                <p className="text-sm  text-gray-600">{service.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
