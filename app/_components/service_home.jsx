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
    url: "dr1.png",
    title: "Software Development",
    detail:
      "We craft unique and impactful software solution for your business  ",
  },
  {
    url: "d8.jpg" ,
    title: "Digital Marketing",
    detail:
      "We craft compelling digital marketing strategies to elevate your brand and engage your audience.  ",
  },
  {
    url: "d1.jpg",

    title: "Tech Education and Online Training",
    detail:
      "We provide cutting-edge tech education and online training to help you stay ahead in today’s digital world. ",
  },
  {
    url: "home.jpg",

    title: "Home Tutor and Guidance",
    detail:
      "We offer personalized home tutoring and expert guidance to help students excel academically. ",
  },
  {
    url:"d8.jpg",

    title: "Business Consultation",
    detail:
      "We provide expert business consultation to help you navigate challenges and unlock growth opportunities.  ",
  },
  {
    url:"d7.jpg",

    title: "Branding and Social Media",
    detail:
      "We craft unique and impactful branding strategies that resonate with your audience.  ",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="container mx-auto   px-2 space-y-6 bg-white py-6 md:py-8 lg:py-10"
    >
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg  bg-white select-none    hover:shadow-2xl hover:border-orange-400  border-2  p-2 shadow-xl transition-all duration-1000"
          >
            <div className="flex  flex-col justify-between rounded-md ">
              <div className="flex h-48  w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={`/${service.url}`}
                  alt="Background Image"
                  className="object-cover object-center w-full  "
                />{" "}
              </div>

              <div className="space-y-2 m-5">
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
