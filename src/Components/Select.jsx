import Form from "react-bootstrap/Form";

function Select(props) {
  return (
    <Form.Select onChange={props.onBlur} aria-label="Default select example">
      <option value="">{props.label}</option>
      {props.options.map((option, index) => 
        <option key={index} value={option.value}>{option.title}</option>
      )}
      <Form.Text className="invalid">
        {props.errors.map((error) => (
          <h6 key={props.counter}>{error}</h6>
        ))}
      </Form.Text>
    </Form.Select>
  );
}

export default Select;
