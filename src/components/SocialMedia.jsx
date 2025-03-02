import { useState } from "react"
import { motion } from "motion/react"
import { fadeIn } from "../utils/motion"

/* eslint-disable react/prop-types */
const SocialMedia = ({ id, icon, title, url, index }) => {
  const [isSocialMediaHovered, setIsSocialMediaHovered] = useState(false)
  return (
    <div
      key={id}
      onMouseEnter={() => setIsSocialMediaHovered(true)}
      onMouseLeave={() => setIsSocialMediaHovered(false)}
    >
      <motion.li
        variants={fadeIn("right", "tween", index * 0.1, 0.1)}
        className="social-media-li"
      >
        <a href={url} target="_blank" className="block">
          {icon}
        </a>
      </motion.li>
      {isSocialMediaHovered && (
        <div className="absolute text-rose mt-2 text-center text-[12px] xs:text-[14px] md:text-[16px] font-semibold">
          {title}
        </div>
      )}
    </div>
  )
}

export default SocialMedia
