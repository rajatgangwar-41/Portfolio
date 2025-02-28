/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant, zoomIn } from "../utils/motion"
import {
  MugCanvas,
  PlayStationCanvas,
  RubikCubeCanvas,
  SpiderManCanvas,
} from "./canvas"
import Counter from "./Counter"

const ServiceCard = ({ index, title, icon, from, to }) => (
  <Tilt className="w-[270px] lg:max-2lg:w-[220px] 2lg:max-xl:w-[250px] cursor-pointer text-white">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-quadratic rounded-[20px] py-5 px-12 min-h-[300px] lg:max-2lg:min-h-[250px] 2lg:max-xl:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-20 h-20 lg:max-xl:w-16 lg:max-xl:h-16 object-contain"
        />
        <h3 className="text-rose-600 text-[30px] lg:max-xl:text-2xl font-bold text-center">
          {to && <Counter from={from} to={to} />}
          <span className="text-white my-3 text-2xl lg:max-xl:text-xl">
            {title}
          </span>
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  const [currentServiceId, setCurrentServiceId] = useState(0)

  return (
    <section id="about" className={`mt-10 ${styles.sectionMargin}`}>
      <div className="m-5 w-auto flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <motion.div variants={textVariant()}>
            <h4
              className={`${styles.sectionSubText} text-center lg:text-start`}
            >
              Introduction
            </h4>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={styles.sectionText}
          >
            I'm a passionate
            <span className="inline-block mx-2 text-xl font-semibold text-rose-600 ">
              Frontend Developer
            </span>
            who loves crafting beautiful, intuitive, and high-performing web
            experiences. With a strong focus on user experience and design, I
            bring ideas to life through clean and efficient code. I enjoy
            solving problems, optimizing interactions, and creating seamless
            digital experiences that leave a lasting impression.
            <br /> <br />
            Let's build something amazing together!
          </motion.p>
        </div>
        <motion.div
          variants={zoomIn(0, 0.8)}
          className="h-100 sm:h-150 lg:h-120 lg:w-120 xl:w-150"
        >
          {[
            <SpiderManCanvas key="spiderMan" />,
            <MugCanvas key="mug" />,
            <PlayStationCanvas key="playStation" />,
            <RubikCubeCanvas key="rubik" />,
          ].map((Component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                currentServiceId === index
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -20, scale: 0.9 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`h-full ${
                currentServiceId === index ? "visible" : "hidden"
              }`}
            >
              {Component}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="-mt-5 mx-5 flex flex-col md:flex-row md:flex-wrap justify-evenly lg:justify-between gap-10 lg:gap-5 xl:gap-0 items-center">
        {services.map((service, index) => {
          return (
            <div key={service.title} onClick={() => setCurrentServiceId(index)}>
              <ServiceCard index={index} {...service} />
            </div>
          )
        })}
      </div>
      <hr className="mt-10 mx-5 border-b-[2px] border-white" />
    </section>
  )
}

// export default SectionWrapper(About, "about")
export default About

/* <motion.span
              animate={{ y: [-5, 0, 5] }}
              transition={{
                duration: 1,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block text-[22px] font-medium text-cyan-400"
            >
              Frontend Developer &nbsp;
            </motion.span> */

{
  /* <div className="relative mr-[100px] h-[400px] w-[27rem]">
          <motion.div variants={zoomIn(0, 0.8)} className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentServiceId} // Ensures re-render on change
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {currentServiceId === 0 ? (
                  <ProfileCanvas />
                ) : currentServiceId === 1 ? (
                  <MugCanvas />
                ) : currentServiceId === 2 ? (
                  <PlayStationCanvas />
                ) : (
                  <RubikCubeCanvas />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div> */
}
{
  /* Canvas Container */
}
