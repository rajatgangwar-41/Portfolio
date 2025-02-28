import { BrowserRouter } from "react-router"
import { About, Hero, NavBar, Work } from "./components/index"
import { StarsCanvas } from "./components/canvas"

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full relative">
        <StarsCanvas />
        <NavBar />
        <Hero />
        <About />
        <Work />
      </div>
    </BrowserRouter>
  )
}

export default App
