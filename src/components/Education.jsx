import React, { memo } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";

const EducationCard = memo(
  ({ degree, institution, icon, iconBg, date, points, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-black-200 p-8 rounded-2xl w-full sm:w-[48%] hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-6 mb-6">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={icon}
          alt={institution}
          className="w-24 h-24 rounded-full object-contain bg-white/10 p-2"
          style={{ backgroundColor: iconBg }}
        />
        <div>
          <h3 className="text-white font-bold text-[20px]">{degree}</h3>
          <p className="text-secondary text-[14px]">{institution}</p>
        </div>
      </div>

      <p className="text-white-100 text-[14px] italic mb-4">{date}</p>

      <ul className="list-disc list-inside space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="text-white-100 text-[14px] pl-1">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
);

const Education = () => (
  <section className="mt-12 bg-black-100 rounded-[20px] overflow-hidden p-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${styles.padding} pb-14`}
    >
      <h2 className={styles.sectionHeadText}>Education.</h2>
      <p className={styles.sectionSubText}>My academic journey</p>
    </motion.div>

    <div className="flex flex-wrap gap-6 justify-center px-4">
      {education.map((edu, index) => (
        <EducationCard key={index} {...edu} index={index} />
      ))}
    </div>
  </section>
);

export default SectionWrapper(Education, "education");
