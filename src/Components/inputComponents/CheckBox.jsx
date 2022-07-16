import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from 'react'

function CheckBox(props) {
  const [value, setValue] = useState(true)

  function handleChanges(){
    setValue(!value)
    props.validateInput({target:{name: props.name, value: value}})
  }
  return (
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={props.label}
        name={props.name}
        onChange={handleChanges}
        defaultValue= {false}
      />
    </div>
  );
}

export default CheckBox;
