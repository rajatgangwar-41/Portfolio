import { motion } from "motion/react"

import { staggerContainer } from "../utils/motion"
import { styles } from "../styles"

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.sectionMargin} relative ${
          idName !== "home" ? "mt-10" : ""
        }`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
