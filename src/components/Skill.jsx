import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const Skill = SectionWrapper(() => {
  const [hovered, setHovered] = useState("")

  return (
    <>
      <motion.div variants={textVariant()} className="m-5">
        <h4 className={`${styles.sectionSubText} text-center`}>Skills</h4>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools & Tech.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(({ name, icon }) => {
          return (
            <div
              className="w-28 h-28"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered("")}
              key={name}
            >
              {/* <BallCanvas icon={icon} /> */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 shadow-lg">
                <img
                  src={icon}
                  alt={name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <AnimatePresence>
                {hovered === name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-[18px] text-white font-semibold"
                  >
                    {name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
      <hr className="mt-10 mx-5 border-b-[2px] border-white" />
    </>
  )
}, "tech")

export default Skill
