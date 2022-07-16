import React from "react";
import FormComponent from "./Components/Form";
import Students from "./DAL/api";

function RegisterNEdit({
  renderList,
  edit,
  name = "",
  email = "",
  address = "",
  course = "",
  gender = "",
}) {
  const formInputs = {
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

    course: {
      id: 4,
      name: "course",
      label: "Course",
      placeholder: "Please Choose course",
      value: course,
      type: "select",
      options: [
        { title: "HTML", value: "HTML" },
        { title: "CSS", value: "CSS" },
        { title: "Java Script", value: "Java Script" },
      ],
      validations: {
        required: true,
      },
      errors: [],
    },
    gender: {
      id: 5,
      name: "gender",
      label: "Gender",
      placeholder: "Please enter your Username",
      value: gender,
      type: "select",
      options: [
        { title: "Female", value: "Female" },
        { title: "Male", value: "Male" },
        { title: "Other", value: "Other" },
      ],
      validations: {
        required: true,
      },
      errors: [],
    },
    agree: {
      id: 6,
      name: "agree",
      label: "Agree",
      value: false,
      type: "checkbox",
      validations: {
        required: true,
      },
      errors: [],
    },
  };

  const onSubmitFunc = (values) => {
    if (edit) {
      Students.setItem(edit, values);
    } else {
      Students.addItem(values);
    }
    renderList();
  };

  return(
    <div>
        <FormComponent
            title= {edit? "Edit Details" : "Register"}
            stubTitle = "Please enter your personal details"
            formInputs = {formInputs}
            onSubmitFunc = {onSubmitFunc}
            />
    </div>
  )
}

export default RegisterNEdit;
