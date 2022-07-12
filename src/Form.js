
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '@fortawesome/free-solid-svg-icons'
import "./Form.css";
import { useState } from "react";
import Input from "./Input";


function StudentForm() {
  const [form, setForm] = useState({
    username: {
      id: 1,
      name: "username",
      label: "Username",
      placeholder: "Please enter your username" ,
      value: "",
      type: "text",
      validations: {
        required: true,
        minLength: 2,
      },
      errors: [],
    },
    email: {
      id: 2,
      name: "email",
      label: "Email",
      placeholder: "Please enter your email" ,
      value: "",
      type: "email",
      validations: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      errors: [],
    },
    address: {
      id: 3,
      name: "address",
      label: "Address",
      placeholder: "Please enter your address" ,
      value: "",
      type: "text",
      validations: {
        required: true,
        minLength: 10,
      },
      errors: [],
    },
    // course: {
    //   id: 4,
    //   name: "course",
    //   label: "Course",
    //   placeholder: "Please Choose course" ,
    //   value: "",
    //   type: "select",
    //   options: ["HTML", "CSS" , "Java Script"], 
    //   validations: {
    //     required: true,
    //   },
    //   errors: [],
    // },
    // gender: {
    //   id: 5,
    //   name: "gender",
    //   label: "Gender",
    //   placeholder: "Please enter your Username" ,
    //   value: "",
    //   type: "radio",
    //   options: [{title: "Female", value:"Female"}, {title: "Male", value:"Male"} , {title: "Other", value:"Other"}],
    //   validations: {
    //     required: true,
    //   },
    //   errors: [],
    // },
  });

  const validate = ({ target: { name, value } }) => {
    form[name].value = value;
    form[name].errors = [];
    for (const validation in form[name].validations) {
      switch (validation) {
        case "required": {
          if (!value) {
            form[name].errors.push(`${name} is require`);
          }
          break;
        }
        case "minLength": {
          if (!value || value.length < form[name].validations.minLength) {
            form[name].errors.push(
              `${name} must be at least ${form[name].validations.minLength} characters`
            );
          }
          break;
        }

        case "pattern": {
          if (!value || !value.match(form[name].validations.pattern)) {
            form[name].errors.push(`${name} is invalid`);
          }
          break;
        }
        default:
      }
    }
    console.log(form)
    setForm({ ...form });
  };

  const validateForm = () => {
    let isValid = true;
    for (const input in form) {
      validate({ target: { name: input, value: form[input].value } });
      if (form[input].errors.length > 0) isValid = false;
    }
    return isValid;
  };

  const submitted = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(
        `
        Username: ${form.username.value}
        Email: ${form.email.value}
        Address: ${form.address.value}
        Course: ${form.course.value}
        Gender: ${form.gender.value}
      `
      );
    }
  };

  //error messages keys
  // const [count, setCount] = useState(100);
  // const counter = () => {
  //   setCount(count+1);
  //   return count;
  // };

  return (
    <Alert variant="success">
      <Alert.Heading>Student Details</Alert.Heading>
      <p>Hello Students! Please fill in your details</p>
      <hr />
      <div className="mb-0">
        <Form>

          {Object.keys(form).map(input=> <Input
          //first, NOT the inside input props 
            key = {form[input].id} 
            onBlur = {validate}
            errors = {form[input].errors}
          // inside the input props:
            {...form[input]}
            // counter = {counter}
            />)}



          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="row">
              <div className="col">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  defaultValue={form.username.value}
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onBlur={validate}
                />
                <Form.Text className="invalid">
                  {form.username.errors.map((error) => (
                    <h6 key={counter()}>{error}</h6>
                  ))}
                </Form.Text>
              </div>

              <div className="col">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  defaultValue={form.email.value}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onBlur={validate}
                />
                <Form.Text className="invalid">
                  {form.email.errors.map((error) => (
                    <h6 key={counter()}>{error}</h6>
                  ))}
                </Form.Text>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="row">
              <div className="col">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  defaultValue={form.address.value}
                  type="text"
                  placeholder="Street, number, city, zip."
                  onBlur={validate}
                />
                <Form.Text className="invalid">
                  {form.address.errors.map((error) => (
                    <h6 key={counter()}>{error}</h6>
                  ))}
                </Form.Text>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="row">
                <div className="col">
                  <Form.Label>Course</Form.Label>
                  <Form.Select name="course" onClick={validate}>
                    <option value="">Select course</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="React">React</option>
                  </Form.Select>
                  <Form.Text className="invalid">
                    {form.course.errors.map((error) => (
                      <h6 key={counter()}>{error}</h6>
                    ))}
                  </Form.Text>
                </div>

                <div className="col">
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      name="gender"
                      value="female"
                      onClick={validate}
                      variant="secondary"
                    >
                      Female
                    </Button>
                    <Button
                      name="gender"
                      value="male"
                      onClick={validate}
                      variant="secondary"
                    >
                      Male
                    </Button>
                    <Button
                      name="gender"
                      value="other"
                      onClick={validate}
                      variant="secondary"
                    >
                      Other
                    </Button>
                  </ButtonGroup>
                  <Form.Text className="invalid">
                    <br />
                    {form.gender.errors.map((error) => (
                      <h6 key={counter()}>{error}</h6>
                    ))}
                  </Form.Text>
                </div>
              </div>
            </Form.Group>
          </Form.Group> */}
          <Button onClick={submitted} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </Alert>
  );
}

export default StudentForm;
