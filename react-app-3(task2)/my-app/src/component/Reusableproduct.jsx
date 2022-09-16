import React, { Component } from 'react'

export default class Reusableproduct extends Component {
  render() {
    return (
      <>
          <div className="card">
            <img src={this.props.imgSrc} className='card-img-top' alt="" />
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className='card-title'>{this.props.title}</h5>
                    </div>
                    
                        <p className='oldprice'>Old Price:<del>{this.props.OldPrice}</del></p>
                        <h3 className='newprice'>New Price: {this.props.NewPrice}</h3>
                    
                </div>
                <center><button className='btn btn-primary'>AddtoCart</button></center>
            </div>
        </div>
      </>
    )
  }
}
