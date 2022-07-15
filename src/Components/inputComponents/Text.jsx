import Form from 'react-bootstrap/Form';

function Text(props) {

  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        name = {props.name}
        placeholder = {props.placeholder}
        defaultValue={props.value}
        onBlur = {props.onBlur}
      />
        <Form.Text className="invalid">
            {props.errors.map((error, index) => (
            <h6 key={index}>{error}</h6>
            ))}
        </Form.Text>
    </>
  );
}

export default Text;