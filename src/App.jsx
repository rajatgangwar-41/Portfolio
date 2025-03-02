import { BrowserRouter } from "react-router"
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
import { StarsCanvas } from "./components/canvas"

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full relative">
        {/* <StarsCanvas /> */}
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
