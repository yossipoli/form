import React from "react";
import Form from "react-bootstrap/Form";

function CheckBox(props) {
  return (
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={props.label}
        onChange={props.onBlur}
        checked={props.value}
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
