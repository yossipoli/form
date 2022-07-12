import Form from 'react-bootstrap/Form';
let key = 100
function Text(props) {
    // console.log(props)
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
            {props.errors.map((error) => (
            <h6 key={++key}>{error}</h6>
            ))}
        </Form.Text>
    </>
  );
}

export default Text;