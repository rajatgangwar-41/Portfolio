import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { motion } from "motion/react"

import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { buttonVariant, fadeIn, slideIn } from "../utils/motion"

const NavBare = () => {
  const [active, setActive] = useState("Home")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const getNavUnderline = () => {
    switch (active) {
      case "Home":
        return "ml-2"
      case "About":
        return "ml-28"
      case "Work":
        return "ml-52"
      case "Tech":
        return "ml-76"
      case "Project":
        return "ml-101"
      case "Feedback":
        return "ml-127"
      case "Contact":
        return "ml-130"
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      variants={fadeIn("down", "tween", 0, 0.5)}
      initial="hidden"
      animate={!scrolled ? "show1" : "show2"}
      className={`w-full z-1 fixed bg-transparent`}
    >
      <nav
        className={`w-full max-w-xl sm:max-w-2xl md:max-w-3xl 2md:max-w-4xl lg:max-w-5xl 2lg:max-w-6xl xl:max-w-7xl mx-auto px-10 py-2 rounded-xl bg-[#0c102b8a] ${
          !scrolled ? "mt-10 bg-[#0c102b8a]" : "py-3 bg-[#0c102b]"
        }`}
      >
        <div className={`flex justify-between items-center`}>
          <Link
            to="/"
            onClick={() => {
              setActive("home")
              window.scrollTo(0, 0)
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-full z-20 h-[80px] object-contain"
            />
          </Link>

          <div className="hidden 2md:block">
            <ul className="list-none sm:flex p-2 gap-6">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <motion.div
                    // variants={buttonVariant()}
                    // initial="hidden"
                    // whileHover="show"
                    className={`text-white z-10 text-[18px] hover:text-rose-600 font-medium cursor-pointer px-3 py-1`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </motion.div>
                </li>
              ))}
            </ul>
            <hr
              className={`h-1 w-21 rounded-4xl bg-rose-600 transition-all duration-500
          ${getNavUnderline()}`}
            />
          </div>

          <div className="cursor-pointer 2md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(nav.title)
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}

// const NavBar = SectionWrapper(NavBare, "navBar")

export default NavBare
