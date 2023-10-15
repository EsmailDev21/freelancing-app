import React, { useState } from 'react'
import Form from '../../../components/core/Form'
import useTranslator from '../../../hooks/useTranslator'
import { strings } from '../../../utils/strings'
import { FormItem } from '../../../types'
import FormInput from '../../../components/core/FormInput'
import { useHandleFormChange } from '../../../utils/utilityFunctions'


const SigninForm = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const submitHandler = () => {
    console.log({email,password})
  }
  const signInItems : FormItem[] = [
    {
      label:strings.email,
      index:0,
      value:email,
      type:"text",
      setValue:(val)=>{
        console.log(val)
        setEmail(val)
      }
      
    },
    {
      label:strings.password,
      index:0,
      value:password,
      type:"password",
      setValue:val=>setPassword(val)
    },
  ]
  return (
    <>
    <Form title={useTranslator(strings.signin)} items={signInItems} submitHandler={submitHandler}  />
    </>
  )
}

export default SigninForm
