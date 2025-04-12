"use client";

import { useEffect, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";

import Card from "./Card";
import Welcome from "./welcome";

import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CloudIcon,
  PaintBrushIcon,
  PrinterIcon,
  GlobeAltIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BriefcaseIcon,
  CogIcon,
  LightBulbIcon,
  BanknotesIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ServerIcon,
  ShieldCheckIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    id: "software-development",
    Name: "Software Development",
    description:
      "Cutting-edge software solutions tailored to your business needs with the latest technologies and best practices.",
    Software: [
      {
        title: "Web Development",
        detail:
          "We create responsive websites and web applications that work on any device.",
        icon: <CodeBracketIcon className="w-12 h-12 text-blue-500" />,
      },
      {
        title: "Mobile Development",
        detail: "We build mobile apps for both Android and iOS devices.",
        icon: <DevicePhoneMobileIcon className="w-12 h-12 text-green-500" />,
      },
      {
        title: "Desktop Development",
        detail:
          "We create desktop applications that run on Windows, Mac, and Linux.",
        icon: <ComputerDesktopIcon className="w-12 h-12 text-purple-500" />,
      },
      {
        title: "API Development",
        detail: "We design and develop robust APIs for seamless integration.",
        icon: <ComputerDesktopIcon className="w-12 h-12 text-red-500" />,
      },
      {
        title: "Cloud Solutions",
        detail:
          "We provide cloud-based solutions for scalability and reliability.",
        icon: <CloudIcon className="w-12 h-12 text-yellow-500" />,
      },
      {
        title: "DevOps Services",
        detail: "We streamline development and operations for faster delivery.",
        icon: <CloudIcon className="w-12 h-12 text-indigo-500" />,
      },
    ],
  },
  {
    id: "graphics-design",
    Name: "Graphics Design",
    description:
      "Creative visual solutions that communicate your brand message effectively and leave a lasting impression.",
    Graphics: [
      {
        title: "Logo Design",
        detail:
          "We design logos that represent your brand and make a lasting impression.",
        icon: <PaintBrushIcon className="w-12 h-12 text-pink-500" />,
      },
      {
        title: "Print Design",
        detail:
          "We create business cards, brochures, and other print materials.",
        icon: <PrinterIcon className="w-12 h-12 text-teal-500" />,
      },
      {
        title: "Web Design",
        detail:
          "We design websites that are visually appealing and easy to use.",
        icon: <GlobeAltIcon className="w-12 h-12 text-blue-500" />,
      },
      {
        title: "UI/UX Design",
        detail: "We create user-friendly interfaces and experiences.",
        icon: <UserCircleIcon className="w-12 h-12 text-purple-500" />,
      },
      {
        title: "Branding",
        detail: "We develop branding strategies to elevate your business.",
        icon: <BuildingStorefrontIcon className="w-12 h-12 text-green-500" />,
      },
      {
        title: "Illustration",
        detail: "We create custom illustrations for your projects.",
        icon: <PencilSquareIcon className="w-12 h-12 text-orange-500" />,
      },
    ],
  },
  {
    id: "digital-marketing",
    Name: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that drive traffic, generate leads, and increase your online presence.",
    Digital: [
      {
        title: "SEO",
        detail:
          "We optimize your website to rank higher in search engine results.",
        icon: <MagnifyingGlassIcon className="w-12 h-12 text-blue-500" />,
      },
      {
        title: "Social Media Marketing",
        detail:
          "We create and manage social media campaigns to increase brand awareness.",
        icon: <ShareIcon className="w-12 h-12 text-green-500" />,
      },
      {
        title: "Email Marketing",
        detail:
          "We create email campaigns that drive traffic and generate leads.",
        icon: <EnvelopeIcon className="w-12 h-12 text-purple-500" />,
      },
      {
        title: "Content Marketing",
        detail: "We create engaging content to attract and retain customers.",
        icon: <DocumentTextIcon className="w-12 h-12 text-red-500" />,
      },
      {
        title: "PPC Advertising",
        detail: "We manage pay-per-click campaigns for maximum ROI.",
        icon: <ChartBarIcon className="w-12 h-12 text-yellow-500" />,
      },
      {
        title: "Analytics & Reporting",
        detail:
          "We provide insights and reports to track campaign performance.",
        icon: <ChartBarIcon className="w-12 h-12 text-indigo-500" />,
      },
    ],
  },
  {
    id: "consulting",
    Name: "Consulting",
    description:
      "Expert consulting services to help your business overcome challenges and achieve sustainable growth.",
    consulting: [
      {
        title: "Business Consulting",
        detail:
          "We help businesses improve their processes and increase their profits.",
        icon: <BriefcaseIcon className="w-12 h-12 text-blue-500" />,
      },
      {
        title: "Technology Consulting",
        detail:
          "We advise companies on how to use technology to achieve their goals.",
        icon: <CogIcon className="w-12 h-12 text-green-500" />,
      },
      {
        title: "Marketing Consulting",
        detail:
          "We provide marketing strategies that help businesses grow and succeed.",
        icon: <LightBulbIcon className="w-12 h-12 text-purple-500" />,
      },
      {
        title: "Financial Consulting",
        detail: "We offer financial planning and analysis services.",
        icon: <BanknotesIcon className="w-12 h-12 text-red-500" />,
      },
      {
        title: "HR Consulting",
        detail: "We assist with human resources strategies and solutions.",
        icon: <UserGroupIcon className="w-12 h-12 text-yellow-500" />,
      },
      {
        title: "Operations Consulting",
        detail: "We optimize business operations for efficiency and growth.",
        icon: <CloudIcon className="w-12 h-12 text-indigo-500" />,
      },
    ],
  },
  {
    id: "tech-training",
    Name: "Tech Training",
    description:
      "Comprehensive training programs to equip your team with the skills needed in today's digital landscape.",
    Training: [
      {
        title: "Web Development",
        detail: "We offer courses in HTML, CSS, JavaScript, and more.",
        icon: <CodeBracketIcon className="w-12 h-12 text-blue-500" />,
      },
      {
        title: "Graphic Design",
        detail:
          "We teach courses in Adobe Photoshop, Illustrator, and InDesign.",
        icon: <PaintBrushIcon className="w-12 h-12 text-green-500" />,
      },
      {
        title: "Digital Marketing",
        detail:
          "We provide training in SEO, social media marketing, and email marketing.",
        icon: <MegaphoneIcon className="w-12 h-12 text-purple-500" />,
      },
      {
        title: "Data Science",
        detail: "We offer courses in Python, R, and machine learning.",
        icon: <ServerIcon className="w-12 h-12 text-red-500" />,
      },
      {
        title: "Cloud Computing",
        detail: "We teach AWS, Azure, and Google Cloud platforms.",
        icon: <CloudIcon className="w-12 h-12 text-yellow-500" />,
      },
      {
        title: "Cybersecurity",
        detail: "We provide training in ethical hacking and network security.",
        icon: <ShieldCheckIcon className="w-12 h-12 text-indigo-500" />,
      },
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    borderColor: "rgba(249, 115, 22, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Animated section component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({ id, icon, title, detail }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      key={id}
      className="p-8 rounded-xl border border-gray-100 text-center bg-white transition-all duration-300"
      style={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-gray-50 shadow-inner">{icon}</div>
      </div>
      <h3 className="text-xl text-gray-800 font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{detail}</p>
    </motion.div>
  );
};

const ServiceNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For sticky nav
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // For active section
      const sections = services
        .map((service) => document.getElementById(service.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(services[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        position: isSticky ? "sticky" : "relative",
        top: isSticky ? "0" : "auto",
      }}
      transition={{ duration: 0.5 }}
      className={`z-40 bg-white shadow-lg rounded-none py-4 mb-0 w-full ${
        isSticky ? "sticky top-0 shadow-xl" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-2 md:space-x-6 overflow-x-auto pb-2 scrollbar-hide">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className={`px-3 md:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                activeSection === service.id
                  ? "bg-orange-500 text-white font-medium shadow-md"
                  : "text-gray-600 hover:bg-orange-100"
              }`}
            >
              {service.Name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  // For parallax effect
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Welcome
        title="Our Services"
        url="d1.jpg"
        button="Get Services"
        link="/course"
      />

      <ServiceNavigation />

      <div className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 bg-orange-100 rounded-full opacity-20"
            style={{
              transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/3 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"
            style={{
              transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.03}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-100 rounded-full opacity-20"
            style={{
              transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.02}px)`,
            }}
          ></div>
        </div>

        <div className="relative z-10 py-16 px-4 md:px-8 lg:px-16 container mx-auto">
          {/* Heading Section */}
          <AnimatedSection>
            <div className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4"
              >
                PROFESSIONAL SERVICES
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight"
              >
                Services We Offer
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 bg-orange-500 mx-auto mb-8"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                We provide a wide range of professional services to help your
                business grow and succeed. From software development and graphic
                design to digital marketing and consulting, our team is
                dedicated to delivering high-quality solutions tailored to your
                needs.
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Services Grid */}
          {services.map((service, index) => (
            <div key={index} className="mb-32" id={service.id}>
              <AnimatedSection delay={0.1}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
                  <div className="flex-shrink-0">
                    <h2 className="text-3xl font-bold text-gray-800 relative">
                      {service.Name}
                      <div className="absolute -bottom-3 left-0 w-16 h-1 bg-orange-500"></div>
                    </h2>
                  </div>
                  <div className="h-px bg-gray-200 flex-grow hidden md:block"></div>
                  <p className="text-gray-600 md:max-w-xl">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {service.Software &&
                  service.Software.map((item, idx) => (
                    <ServiceCard
                      key={idx}
                      id={idx}
                      icon={item.icon}
                      title={item.title}
                      detail={item.detail}
                    />
                  ))}
                {service.Graphics &&
                  service.Graphics.map((item, idx) => (
                    <ServiceCard
                      key={idx}
                      id={idx}
                      icon={item.icon}
                      title={item.title}
                      detail={item.detail}
                    />
                  ))}
                {service.Digital &&
                  service.Digital.map((item, idx) => (
                    <ServiceCard
                      key={idx}
                      id={idx}
                      icon={item.icon}
                      title={item.title}
                      detail={item.detail}
                    />
                  ))}
                {service.consulting &&
                  service.consulting.map((item, idx) => (
                    <ServiceCard
                      key={idx}
                      id={idx}
                      icon={item.icon}
                      title={item.title}
                      detail={item.detail}
                    />
                  ))}
                {service.Training &&
                  service.Training.map((item, idx) => (
                    <ServiceCard
                      key={idx}
                      id={idx}
                      icon={item.icon}
                      title={item.title}
                      detail={item.detail}
                    />
                  ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12 flex justify-end"
              >
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <span className="mr-2">Back to top</span>
                  <ArrowUpIcon className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          ))}

          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 px-8 rounded-2xl flex flex-col justify-center items-center shadow-2xl mb-24 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full -ml-40 -mb-40"></div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-8 text-center relative z-10"
              >
                Work and Learn With Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-white opacity-90 max-w-2xl text-center mb-10 relative z-10"
              >
                Join our team of experts and be part of creating innovative
                solutions for businesses worldwide. We offer continuous learning
                and growth opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 relative z-10"
              >
                <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-md">
                  Join Our Team
                </button>
                <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <Card />
          </AnimatedSection>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
};

export default ServicesPage;
