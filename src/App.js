import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Races from "./Components/Races"
import Classes from "./Components/Classes"
import Nav from "./Components/Nav"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="/races" element={<Races />} />
          <Route path="/classes" element={<Classes />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App