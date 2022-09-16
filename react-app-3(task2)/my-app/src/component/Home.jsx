import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <>
            {/* ............. slider start ...............  */}
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/renobg.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/applebg.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/realmebg.jpg" className="d-block w-100" alt="image not found"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="
    " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* ................ slider End .....................  */}
      </>
    )
  }
}
