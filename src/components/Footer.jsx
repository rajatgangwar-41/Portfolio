import { navLinks, socialMedia } from "../constants"
import { SocialMedia } from "./index"
import { styles } from "../styles"
import { motion } from "motion/react"
import { fadeIn, slideIn } from "../utils/motion"

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.2, 1.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-quadratic mt-10 rounded-t-[80px] flex text-white flex-col flex-wrap gap-0"
    >
      <section className="flex rounded-t-[80px] flex-wrap gap-5 items-center justify-around">
        <div className="mt-10 flex flex-col gap-3 p-5 items-center md:items-start">
          <div className="text-white text-4xl font-bold">About Me</div>
          <div className="text-secondary text-[18px] font-medium">
            Open For Work
          </div>
          <div className="text-secondary my-2 max-w-120 text-justify text-[16px] md:text-[18px] font-medium">
            I am available for work as a developer, specializing in React,
            JavaScript, and frontend development. Let's build something amazing
            together! 🚀
          </div>
          <div className="text-secondary text-[16px] md:text-[18px] flex gap-2 font-medium">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="crimson"
              stroke=""
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
            </svg>
            <span className="text-white">+91-8057163682</span> <br />
          </div>
          <div className="text-secondary text-[16px] md:text-[18px] flex gap-2 font-medium">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="crimson"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="M22 6l-10 7L2 6"></path>
            </svg>
            <span className="text-white">rajat.gangwar41@gmail.com</span> <br />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <ul className="flex flex-row flex-wrap justify-center max-w-120 gap-2">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <motion.div
                  className={`text-white text-[16px] md:text-xl hover:text-rose-600 font-medium cursor-pointer px-3 py-1`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.div>
              </li>
            ))}
          </ul>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="h-20 w-20 bg-rose-600 rounded-full cursor-pointer flex items-center justify-center"
          >
            <a href="#home">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0c102b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
        <div>
          <div className={`${styles.sectionSubText} px-5 py-3`}>
            Connect With Me
          </div>
          <ul className="list-none px-5 py-1 mb-8 text-white gap-5 flex flex-wrap">
            {socialMedia.map((ele, index) => {
              return <SocialMedia key={ele.id} index={index} {...ele} />
            })}
          </ul>
        </div>
      </section>
      <div className="text-center flex flex-col text-[14px] md:text-[16px]">
        <div>
          This Portfolio is made with
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="crimson"
            stroke="crimson"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="inline mx-1"
          >
            <path d="M12 21s-6-4.35-9.16-7.62A5.45 5.45 0 0 1 3.5 5.5 5.45 5.45 0 0 1 9 5.5a5.45 5.45 0 0 1 3 2.16A5.45 5.45 0 0 1 15 5.5a5.45 5.45 0 0 1 5.66 8.38C18 16.65 12 21 12 21z" />
          </svg>{" "}
          by Rajat Gangwar
        </div>
        <div> Copyright &copy; 2025. All Rights Reserved</div>
      </div>
    </motion.footer>
  )
}

export default Footer
