import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'




export default function Menu() {
  const Numbers ={'/Home':'Home','/About':'About','/Product':'Product','./Contact':'Contact'}
  const data= Object.entries(Numbers).map((res,i,arr)=>{
    return  <li className="nav-item" key={i}>
    <Link id='link' className="nav-link" to={res[0]}>{res[1]}</Link>
  </li>
  })


  return (
    <>
      <Router>
      <nav className="navbar navbar-expand-lg  navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" id='brand'>ABC TELECOME</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        {data}
      </ul>        
    </div>
  </div>
</nav>

<Routes>
<Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path='/Contact' element={<Contact/>}/>
</Routes>
      </Router>


    </>
  )
}
