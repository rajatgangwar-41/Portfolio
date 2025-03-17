import { useState } from "react"
import { motion } from "motion/react"
import { fadeIn } from "../utils/motion"

/* eslint-disable react/prop-types */
const SocialMedia = ({ id, icon, title, url, index }) => {
  const [isSocialMediaHovered, setIsSocialMediaHovered] = useState(false)
  return (
    <li
      key={id}
      onMouseEnter={() => setIsSocialMediaHovered(true)}
      onMouseLeave={() => setIsSocialMediaHovered(false)}
    >
      <motion.div
        variants={fadeIn("right", "tween", index * 0.1, 0.1)}
        className="social-media-li"
      >
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${title} profile`}
          variants={fadeIn("right", "tween", index * 0.1, 0.1)}
          className="block social-media-li"
        >
          {icon}
        </motion.a>
      </motion.div>
      {isSocialMediaHovered && (
        <div className="absolute text-rose mt-2 text-center text-[12px] xs:text-[14px] md:text-[16px] font-semibold">
          {title}
        </div>
      )}
    </li>
  )
}

export default SocialMedia
