import React, { Component } from 'react';

class ContentRow extends Component {  
  constructor(props){
    super();
    this.state = {
      targetRow: 5,
    }
  }
  
  render () {
    var row = this.props.row;
    var ind = this.props.ind;
    return (
      <tr onClick={TargetRow.bind(this)}>
        <td>{row.id}</td>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>{row.email}</td>
        <td>{row.phone}</td>
        <td>{row.address.streetAddress},  
            {row.address.city}, 
            {row.address.state}, 
            {row.address.zip}
        </td>
        <td>{row.description}</td>

      </tr>
    )
  }
  
}

function TargetRow(props) {
    console.log(this.props.ind);
  this.setState({targetRow: this.props.ind});
    console.log(this.state.targetRow);
  this.props.updateData(this.props.ind)
}

export default ContentRow;