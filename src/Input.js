import React from 'react'
import Text from './Components/Text'
import Select from './Components/Select'

function Input(props) {
  // console.log(props)
  return (
    <div>
        {props.type === 'Select'
        ? <Select key={props.id} {...props}/>
        : <Text key={props.id} {...props}/>
         }
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