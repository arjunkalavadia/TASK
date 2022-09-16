import React, { Component } from 'react'

export default class Reusableform extends Component {
  render() {
    return (
      <>
        <table border={2} cellPadding={3} cellSpacing={50} align={'center'}>
            <tr>
                <td className='title'>{this.props.title}</td>
                <td>
                <input  type={this.props.type} className="tabledata" id={this.props.id} placeholder={this.props.placeholder} />
                </td>
            </tr>
        </table>
      </>
    )
  }
}
