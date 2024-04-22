import { Route, Routes } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
// import Contact from './Pages/Contact'

function App() {
  

  return (

  <Routes>
    <Route path='/' element={<Navbar />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projects' element={<Projects />} />
    </Route>
  </Routes>
  )
   
      
}

export default App
