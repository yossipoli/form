import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from 'react'

function CheckBox(props) {
  const [value, setValue] = useState(props.value)

  function handleChanges(){
    setValue(!value)
    props.onBlur()
  }
  return (
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={props.label}
        name={props.name}
        onChange={handleChanges}
        defaultValue={value}
      />
      <Form.Text className="invalid">
        {props.errors.map((error) => (
          <h6 key={props.counter}>{error}</h6>
        ))}
      </Form.Text>
    </div>
  );
}

export default CheckBox;
