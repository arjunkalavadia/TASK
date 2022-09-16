import React, { Component } from 'react'
import Reusableform from './Reusableform'
export default class Contact extends Component {
  render() {
    return (
      <>
      <div className="container  ">
        <h1>Contact Us for More detail...</h1>
         <Reusableform title="Name:*" type="text" id="name" placeholder="Enter Your Name"/>
         <Reusableform title="Mobile:*" type="number" id="mobile" placeholder="Enter Your mobile"/>
         <Reusableform title="Email:*" type="email" id="email" placeholder="Enter Your email"/>
         <Reusableform title="State:*" type="text" id="state" placeholder="Enter Your state"/>
         
         </div>
      </>
    )
  }
}
