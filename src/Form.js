import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./Form.css";
import { useState } from "react";
import Input from "./Input";
import Students from "./DAL/api";

function StudentForm({
  renderList,
  edit,
  name = "",
  email = "",
  address = "",
  course = "",
  gender = "",
  married = "",
}) {

  const [form, setForm] = useState({
    name: {
      id: 1,
      name: "name",
      label: "Name",
      placeholder: "Please enter your name",
      value: name,
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
      placeholder: "Please enter your email",
      value: email,
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
      placeholder: "Please enter your address",
      value: address,
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
    //   value: course,
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
    //   value: gender,
    //   type: "select",
    //   options: [{title: "Female", value:"Female"}, {title: "Male", value:"Male"} , {title: "Other", value:"Other"}],
    //   validations: {
    //     required: true,
    //   },
    //   errors: [],
    // },
    // married: {
    //   id: 6,
    //   name: "married",
    //   label: "Married",
    //   value: married,
    //   type: "checkbox",
    //   validations: {
    //     required: false,
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

  const submitted = e => {
    e.preventDefault();
    if (validateForm()) {
      const values = {};
      for (const key in form){
        values[key] = form[key].value
      }
      if (edit) {
        Students.setItem(edit, values);
      } else {
        Students.addItem(values);
      }
      renderList();
    }
  };

  return (
    <Alert variant={edit ? "warning" : "success"}>
      <Alert.Heading>Student Details</Alert.Heading>
      <p>Hello Students! Please fill in your details</p>
      <hr />
      <div className="mb-0">
        <Form>
          {Object.keys(form).map((input) => (
            <Input key={form[input].id} onBlur={validate} {...form[input]} />
          ))}

          <Button onClick={submitted} variant={edit ? "warning" : "success"}>
            {edit ? "Edit" : "Add"}
          </Button>
        </Form>
      </div>
    </Alert>
  );
}

export default StudentForm;
