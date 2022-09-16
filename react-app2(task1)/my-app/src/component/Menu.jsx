import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Menu from './Menu'

export default function header() {
  const Numbers ={'/breakfast':'Breakfast','/Lunch':'Lunch','/Dinner':'Dinner'   }
  const data =Object.entries(Numbers).map((res,i,arr)=>{
    return <li className="nav-item" key={i}>
    <Link className="nav-link" to={res[0]}>{res[1]}</Link>
  </li>
    
  })
  return (
    <>
      <Router>
        <div className="main">
    <div className="data">
        
    {data}
    
    </div>

    </div>
<Routes >
<Route path="/Breakfast" element={<Breakfast/>}/>
    <Route path="/Lunch" element={<Lunch/>}/>
    <Route path="/Dinner" element={<Dinner/>}/>
</Routes>
</Router>
</>
  )
}




