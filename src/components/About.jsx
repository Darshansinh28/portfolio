import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, socialMedia } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Lottie from "lottie-react";

const ServiceCard = ({ index, title, icon }) => (
  <ReactParallaxTilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-20 h-20 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </ReactParallaxTilt>
);

const SocialmediaCard = ({ index, icon, link }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="inline-block mx-3"
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-16 h-16"
    >
      {/* Glowing background border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#915EFF] to-[#FF5E84] p-[2px] transition-all duration-300 group-hover:blur-sm group-hover:brightness-110">
        <div className="w-full h-full rounded-full bg-white" />
      </div>

      {/* Foreground icon container with glass effect */}
      <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-transform duration-300 group-hover:scale-110">
        <Lottie
          animationData={icon}
          className="w-18 h-18"
          loop
          autoplay
          renderer="svg"
        />
      </div>
    </a>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with expertise in Java, C#, Python, and
        TypeScript, and hands-on experience in building scalable,
        high-performance applications using .NET Core, Spring Boot, Angular, and
        React. I specialize in cloud-native solutions with Azure, Docker, and
        Terraform, and have a strong background in microservices, RESTful APIs,
        and CI/CD pipelines. I'm a quick learner and thrive in collaborative,
        Agile environments, delivering efficient and user-centric solutions.
        Let’s connect and build impactful software together!
      </motion.p>

      <div className="mt-8 flex justify-left items-center gap-2">
        {socialMedia.map((socialLinks, index) => (
          <SocialmediaCard
            key={socialLinks.id}
            index={index}
            {...socialLinks}
          />
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
