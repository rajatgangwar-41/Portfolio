/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles"
import { experiences } from "../constants"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "#1d18368a",
        background: "#0c102b8a",
        color: "#fff",
        // width: 650,
        // height: 400,
        // marginInline: -100,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="">
        <h3 className="text-white text-[30px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[18px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Work = () => {
  return (
    <section id="work" className={`mt-10 ${styles.sectionMargin}`}>
      <motion.div variants={textVariant()} className="m-5 mx-5]">
        <h4 className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </h4>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-15 mx-5 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <hr className="mt-10 mx-5 border-b-[2px] border-white" />
    </section>
  )
}

// export default SectionWrapper(Work, "work")
export default Work
