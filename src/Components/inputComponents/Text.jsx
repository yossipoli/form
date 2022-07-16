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
        onBlur = {props.validateInput}
      />
    </>
  );
}

export default Text;