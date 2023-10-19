import React, { useCallback, useEffect, useState } from 'react'
import Form from '../../../components/core/Form'
import useTranslator from '../../../hooks/useTranslator'
import { strings } from '../../../utils/strings'
import { FormItem } from '../../../types'
import FormInput from '../../../components/core/FormInput'
import { checkEmail, checkPassword, getOrientation, useHandleFormChange } from '../../../utils/utilityFunctions'
import { Divider, Icon, Text, View } from 'native-base'
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Translator from '../../../components/hoc/Translator'
import MainButton from '../../../components/core/MainButton'
import { EvilIcons } from '@expo/vector-icons'; 
import Welcome from './Welcome'
import TextInsideDivider from './TextInsideDivider'
import HelperText from './HelperText'
import PopupComponent from '../../../components/animations/PopupComponent'
const SigninForm = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errorEmail,setErrorEmail] = useState(null);
  const [errorPassword,setErrorPassword] = useState(null);
  const [loading,setLoading] = useState(false)
  const handleEmailChange = useCallback(
    (value:string)=>{
      setEmail(value)
      setErrorEmail(checkEmail(value))
    },[errorEmail]
  )
  const handlePasswordChange = useCallback(
    (value:string)=>{
      setPassword(value)
      setErrorPassword(checkPassword(value))
    },[errorEmail]
  )
  const submitHandler = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      console.log({email,password})
      
    },3000)
  }
  
  const signInItems : FormItem[] = [
    {
      label:strings.email,
      index:0,
      value:email,
      type:"text",
      setValue:handleEmailChange,
      icon:<View marginX={3}><Fontisto name="email" size={12} color="gray" /></View>,
      error:errorEmail
      
    },
    {
      label:strings.password,
      index:0,
      value:password,
      type:"password",
      setValue:handlePasswordChange,
      icon:<View marginX={3}><AntDesign name="eyeo" size={12} color="gray" /></View>,
      helperElement:<Translator link='/' text={strings.forgotPassword}></Translator>,
      error:errorPassword
    },
  ]
  useEffect(
    ()=>{
     if(email.length!=0) setErrorEmail(checkEmail(email))
     if(password.length!=0) setErrorPassword(checkPassword(password))
    },[]
  )
  return (
    <>
    <PopupComponent>
      <View width={"sm"}><Welcome /></View>
    </PopupComponent>
    <Form isLoading={loading} title={strings.signin} items={signInItems} submitText={strings.loginScreen} submitHandler={submitHandler}  />
    <View display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        >
    <PopupComponent>
    <HelperText link='/signup' text1={{
        ar:"ليس لدي حساب",
        en:"Don't have and account?",
        fr:"Je n'avais pas un compte!"
      }} text2={strings.signupForOurServices} />
    </PopupComponent>
    <TextInsideDivider text={{
        ar:"أو التسجيل عبر",
        en:"Or Signup with",
        fr:"Ou connèctez-vous avec"
      }} /></View>
      <View display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        >
    <View  marginY={5} width={"80%"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
      <MainButton icon={<EvilIcons name="sc-facebook" size={24} color="white" />} w={"40%"} marginX={2} _pressed={{bgColor:'indigo.900'}} bgColor={"indigo.800"} onPress={()=>console.log("pressed")} orientation={getOrientation()} >
        <Translator color={"white"} fontWeight={"bold"} text={{
          ar:"فيسبوك",
          en:"facebook",
          fr:"facebook"
        }}></Translator>
      </MainButton>
      <MainButton icon={<AntDesign name="google" size={12} color="muted.900" />} marginX={2} w={"40%"}  _pressed={{bgColor:'muted.50'}} bgColor={"muted.100"} onPress={()=>console.log("pressed")} orientation={getOrientation()} >
        <Translator fontWeight={"bold"} text={{
          ar:"جوجل",
          en:"Google",
          fr:"Google"
        }}></Translator>
      </MainButton>
    </View></View>
    </>
  )
}

export default SigninForm
