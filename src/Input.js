import React from 'react'
import Text from './Components/Text'
import Select from './Components/Select'
import CheckBox from './Components/CheckBox'

function Input(props) {
  // console.log(props)
  let InputType = Text
  switch(props.type){
    case "select" : {
      InputType = Select
      break
    }
    case "checkbox" : {
      InputType = CheckBox
      break
    }
    default : {
      InputType = Text
    }
  }
  return (
    <div>

        <InputType key={props.id} {...props}/>

    </div>
  )
}

export default Input

// //first, NOT the inside input props 
// key = {form[input].id} 
// onBlur = {validate}
// errors = {form[input].errors}
// // inside the input props:
// {...form[input]}