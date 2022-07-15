import React from 'react'
import Text from './inputComponents/Text'
import Select from './inputComponents/Select'
import CheckBox from './inputComponents/CheckBox'

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