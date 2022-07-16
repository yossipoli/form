import React from 'react'
import Text from './inputComponents/Text'
import Select from './inputComponents/Select'
import CheckBox from './inputComponents/CheckBox'

function Input(props) {
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
        <div className="invalid">
            {props.errors.map((error, index) => (
            <h6 key={index}>{error}</h6>
            ))}
        </div>

    </div>
  )
}

export default Input