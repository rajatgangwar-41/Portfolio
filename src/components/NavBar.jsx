import { useEffect, useState } from "react"
import { Link } from "react-router"
import { motion } from "motion/react"

import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { navFadeIn } from "../utils/motion"
import { styles } from "../styles"

const NavBar = () => {
  const [active, setActive] = useState("Home")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    <motion.section
      variants={navFadeIn("down", "tween", 0, 0.5)}
      initial="hidden"
      animate={!scrolled ? "show1" : "show2"}
      className={`w-full z-1 fixed bg-transparent`}
    >
      <nav
        className={`w-full px-10 py-2 rounded-xl ${styles.sectionMargin}  ${
          !scrolled ? "mt-10 bg-quadraticLight" : "py-3 bg-quadratic"
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
              className="w-full h-[80px] object-contain"
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="list-none sm:flex p-2 gap-6">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <div
                    className={`text-white text-[18px] hover:text-rose font-medium cursor-pointer px-3 py-1`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </div>
                </li>
              ))}
            </ul>
            <hr
              className={`h-1 w-21 rounded-4xl bg-rose transition-all duration-500
          ${styles.getNavUnderline(active)}`}
            />
          </div>

          <div className="cursor-pointer lg:hidden flex flex-1 justify-end items-center">
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
    </motion.section>
  )
}

export default NavBar
