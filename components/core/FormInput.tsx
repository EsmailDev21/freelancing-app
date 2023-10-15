import { IInputProps, Input } from 'native-base'
import React from 'react'


export interface FormInputProps{
    rest:IInputProps,
    value:string,
    setValue:(val:string)=>void
}
const FormInput:React.FC<FormInputProps> = (props:FormInputProps) => {
  
  return (
    <Input value={props.value} onChangeText={props.setValue} {...props.rest} colorScheme={"black"} rounded={"md"} focusOutlineColor={"muted.900"}  />
  )
}

export default FormInput
