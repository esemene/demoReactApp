import Contact from "./Contact"
import Service from './Service'
import About from "./About"
import Home from './Home'


import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css'
import ErrorPage from "./ErrorPage"

function App(){
  return(
    <div>
      <Router>
      <nav className="Nnavbar">
        
        <h4><Link to='/' className="link">Home</Link></h4>
        <h4><Link to='/about' className="link">About</Link></h4>
        <h4><Link to='/service' className="link">Services</Link></h4>
        <h4><Link to='/contact' className="link">ContactUs</Link></h4>
        
      </nav>
      

      <Routes>


        <Route path='/'  element={<Home />}/>

        <Route path='/about' element={<About />}  />

        <Route path='/service' element={<Service/>}/>

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<ErrorPage />} />



        



      </Routes>
      
      
      
      
      
      </Router>
      </div>

   
  )

}




export default App