import React from 'react'
import Form from 'react-bootstrap/Form'

function CheckBox(props) {
  return (
    <div>
        <Form.Check 
        type="switch"
        id="custom-switch"
        label={props.label}
        onClick = {props.onBlur}
        value = {props.value}
      />
    </div>
  )
}

export default CheckBox