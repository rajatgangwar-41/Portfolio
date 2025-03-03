import { BrowserRouter } from "react-router"
import { StarsCanvas } from "./components/canvas"
import useIsDesktop from "./hooks/useIsDesktop"
import {
  NavBar,
  Hero,
  About,
  Work,
  Skill,
  Project,
  Feedback,
  Contact,
  Footer,
} from "./components/index"

const App = () => {
  const isDesktop = useIsDesktop()
  return (
    <BrowserRouter>
      <div className="w-full relative">
        {isDesktop && <StarsCanvas />}
        <NavBar />
        <Hero />
        <About />
        <Work />
        <Skill />
        <Project />
        <Feedback />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
