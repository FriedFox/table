import React from 'react';

function TextArea(props) {
  var array = props.array;
  if (array != undefined) {
  var row = array;
  return(
    <div>
      <ul>
        <li><b>id:</b> {row.id}</li>
        <li><b>firstName:</b> {row.firstName}</li>
        <li><b>lastName:</b> {row.lastName}</li>
        <li><b>email:</b> {row.email}</li>
        <li><b>phone:</b> {row.phone}</li>
        <li><b>address:</b> {row.address.streetAddress}</li>
        <li><b>description:</b> {row.description}</li>
      </ul>
    </div>
  )
    } else {
      return(
      <div />
      )
    }
}

export default TextArea;