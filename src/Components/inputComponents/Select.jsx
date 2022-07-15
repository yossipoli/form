import Form from "react-bootstrap/Form";

function Select(props) {
  return (
    <>
      <label>{props.label}</label>
      <Form.Select onChange={props.onBlur}>
        <option value="">Select {props.label}</option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
        <Form.Text className="invalid">
          {props.errors.map((error) => (
            <h6 key={props.counter}>{error}</h6>
          ))}
        </Form.Text>
      </Form.Select>
    </>
  );
}

export default Select;
