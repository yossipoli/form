import Form from "react-bootstrap/Form";

function Select(props) {
  return (
    <>
      <label>{props.label}</label>
      <Form.Select name={props.name} onChange={props.onBlur} defaultValue={props.value}>
        <option  value="">Select {props.label}</option>
        {props.options.map((option, index) => (
          <option key={index.toString()}>
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
