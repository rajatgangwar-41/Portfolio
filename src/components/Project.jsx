import { useState } from "react"
import { Tilt } from "react-tilt"
import { motion } from "motion/react"

import { styles } from "../styles"
import { github, live } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  likes,
}) => {
  const [likesCount, setLikesCount] = useState([false, likes])

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-quadratic p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] group overflow-clip">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 flex space-x-1 justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="live link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <h6 className="text-white flex space-x-2 font-bold text-[24px]">
              <svg
                onClick={() =>
                  setLikesCount(([isLiked, likes]) =>
                    isLiked ? [false, likes - 1] : [true, likes + 1]
                  )
                }
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill={likesCount[0] ? "crimson" : "transparent"}
                stroke={likesCount[0] ? "crimson" : "white"}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path d="M12 21s-6-4.35-9.16-7.62A5.45 5.45 0 0 1 3.5 5.5 5.45 5.45 0 0 1 9 5.5a5.45 5.45 0 0 1 3 2.16A5.45 5.45 0 0 1 15 5.5a5.45 5.45 0 0 1 5.66 8.38C18 16.65 12 21 12 21z" />
              </svg>

              <span className="font-semibold text-[16px]">{likesCount}</span>
            </h6>
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} border border-quadraticLight rounded-xl py-1 px-2`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Project = SectionWrapper(() => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", "tween", 0.1, 1)}
        className={`m-5 max-w-max flex flex-col mx-5 lg:mx-auto 2lg:mx-5 items-center lg:items-start bg-quadratic text-white rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center lg:text-left`}>
            My work
          </p>
          <h2 className={`${styles.sectionHeadText} text-center lg:text-left`}>
            Projects.
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={styles.sectionText}
        >
          Explore some of the projects I've worked on, each reflecting
          creativity, problem-solving, and attention to detail. From idea to
          execution, I focus on building meaningful and engaging experiences.
          Each project is briefly described with links to
          <span className="inline-block mx-2 text-xl font-semibold text-rose ">
            Code Repositories
          </span>
          and
          <span className="inline-block mx-2 text-xl font-semibold text-rose ">
            Live Demos
          </span>
          in it. These projects highlight my dedication to delivering
          high-quality work and continuously improving my skills to bring ideas
          to life.
        </motion.p>
      </motion.div>

      <div className="mt-10 mx-5 flex flex-wrap gap-y-10 justify-center md:justify-between 2md:justify-around 2lg:justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <hr className="mt-10 mx-5 border-b-[2px] border-white" />
    </>
  )
}, "project")

export default Project
