import { useRef, useState } from "react"
import { motion } from "motion/react"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { slideIn } from "../utils/motion"
import { ContactSvg } from "./index"
import { SectionWrapper } from "../hoc"

const Contact = SectionWrapper(() => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rajat Gangwar",
          from_email: form.email,
          to_email: "rajat.gangwar41@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          alert("Thank you. I will get back to you as soon as possible.")

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Ahh, something went wrong. Please try again.")
        }
      )
  }

  return (
    <>
      <div
        className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mx-5`}
      >
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          className="flex-[0.8] bg-quadratic p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white flex gap-2 font-medium mb-4">
                Your Name
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill={form.name.length > 3 ? "green" : "none"}
                  stroke={form.name.length > 3 ? "green" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                </svg>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white flex gap-2 font-medium mb-4">
                Your email
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill={form.email.length > 10 ? "green" : "none"}
                  stroke={form.email.length > 10 ? "green" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 8l9-5 9 5" />
                  <path d="M3 8v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8" />
                  <path d="M3 8l9 7 9-7" />
                </svg>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white flex gap-2 font-medium mb-4">
                Your Message
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill={form.message.length > 5 ? "green" : "none"}
                  stroke={form.message.length > 5 ? "green" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 8c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v6c0 2.21-1.79 4-4 4H7l-4 3V8z" />
                </svg>
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full cursor-pointer text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1"
        >
          <ContactSvg />
        </motion.div>
      </div>
    </>
  )
}, "contact")

export default Contact
