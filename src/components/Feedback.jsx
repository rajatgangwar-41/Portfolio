import { motion } from "motion/react"

import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { SectionWrapper } from "../hoc"

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
)

const Feedback = SectionWrapper(() => {
  return (
    <>
      <div className={`bg-quadratic mx-5 rounded-[20px]`}>
        <div className={`text-white rounded-2xl ${styles.padding}`}>
          <motion.div variants={textVariant()}>
            <h4 className={`${styles.sectionSubText} text-center lg:text-left`}>
              What others say
            </h4>
            <h2
              className={`${styles.sectionHeadText} text-center lg:text-left`}
            >
              Testimonials.
            </h2>
          </motion.div>
        </div>
        <div
          className={`pb-14 ${styles.paddingX} flex flex-wrap justify-center lg:justify-around gap-7`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
      <hr className="mt-10 mx-5 border-b-[2px] border-white" />
    </>
  )
}, "testimonial")

export default Feedback
