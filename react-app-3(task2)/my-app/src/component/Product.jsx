import React, { Component } from 'react'
import Reusableproduct from './Reusableproduct'

export default class Product extends Component {
  render() {
    return (
      <>
      <h1 className='ourprd'>Our Best Selling Products....</h1>
         <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/realme-9.jpg" title=" realme 9 5G (Stargaze White, 4GB, 64GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/motorola.png" title=" Motorola G51 5G (Indigo Blue, 4GB, 64GB)" OldPrice="17,999" NewPrice="14,999"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/poco.png" title=" POCO M4 Pro 5G (Cool Blue, 4GB, 64GB)" OldPrice="16,999" NewPrice="13,999"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/samsung-m-32.jpg" title=" Samsung Galaxy M32 5G (Sky Blue, 6 GB, 128 GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/vivo-t1.jpg" title=" Vivo T1 5G (Rainbow Fantasy, 6GB, 128GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/samsung-m-32.jpg" title=" Samsung Galaxy M32 5G (Sky Blue, 6 GB, 128 GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/realme-9.jpg" title=" realme 9 5G (Meteor Black, 4GB, 64GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/vivo-t1.jpg" title=" Vivo T1 5G (Rainbow Fantasy, 6GB, 128GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/motorola.png" title=" Motorola G51 5G (Indigo Blue, 4GB, 64GB)" OldPrice="17,999" NewPrice="14,999"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/realme-9.jpg" title=" realme 9 5G (Meteor Black, 4GB, 64GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/poco.png" title=" POCO M4 Pro 5G (Cool Blue, 4GB, 64GB)" OldPrice="16,999" NewPrice="13,999"/>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                        <Reusableproduct imgSrc="images/realme-9.jpg" title=" realme 9 5G (Meteor Black, 4GB, 64GB)" OldPrice="20,000" NewPrice="15,000"/>
                    </div>
                </div>
        </div>            
      </>
    )
  }
}
