import Form from "react-bootstrap/Form";

function Select(props) {
  return (
    <Form.Select aria-label="Default select example">
      <option>{props.label}</option>
      {props.options.map((option) => (
        <option value={option.value}>{option.title}</option>
      ))}
      <Form.Text className="invalid">
        {props.errors.map((error) => (
          <h6 key={props.counter}>{error}</h6>
        ))}
      </Form.Text>
    </Form.Select>
  );
}

export default Select;
