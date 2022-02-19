import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Favorites from './Components/Favorites'
import Nav from './Components/Nav'
// const [favourites, updateFavourites] = React.useState([hello])
// favourites={favourites, updateFavourites}
// favourites={favourites, updateFavourites}
function App(){

    return (
    <Router>
      <Routes>
          <Route path="/" element={<Nav  />} >
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites  />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App