import React, { useCallback, useEffect, useState } from 'react'
import Form from '../../../components/core/Form'
import useTranslator from '../../../hooks/useTranslator'
import { strings } from '../../../utils/strings'
import { FormItem } from '../../../types'
import FormInput from '../../../components/core/FormInput'
import { checkEmail, checkMatch, checkPassword, checkString, getOrientation, useHandleFormChange } from '../../../utils/utilityFunctions'
import { Divider, Icon, Text, View } from 'native-base'
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Translator from '../../../components/hoc/Translator'
import MainButton from '../../../components/core/MainButton'
import { EvilIcons } from '@expo/vector-icons'; 
import HelperText from '../../signin/components/HelperText'
import TextInsideDivider from '../../signin/components/TextInsideDivider'
import Welcome from '../../signin/components/Welcome'
import InputIcon from '../../../components/core/InputIcon'
import CheckBoxText from '../../../components/core/CheckBoxText'
const SignupForm = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [surname,setSurname] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [errorEmail,setErrorEmail] = useState(null);
  const [errorPassword,setErrorPassword] = useState(null);
  const [errorName,setErrorName] = useState(null);
  const [errorSurname,setErrorSurname] = useState(null);
  const [errorConfirmPassword,setErrorConfirmPassword] = useState(null);
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
  const handleNameChange = useCallback(
    (value:string)=>{
      setName(value)
      setErrorName(checkString(value,{
        ar:"الأسم لا يمكن ان يكون فارغا",
        en:"Name can't be empty!",
        fr:"Le Prénom ne doit pas étre vide"
      }))
    },[errorName]
  )
  const handleSurnameChange = useCallback(
    (value:string)=>{
      setSurname(value)
      setErrorSurname(checkString(value,{
        ar:"اللقب لا يمكن ان يكون فارغا",
        en:"Surname can't be empty!",
        fr:"Le nom ne doit pas étre vide"
      }))
    },[errorSurname]
  )
  const handleConfirmPasswordChange = useCallback(
    (value:string)=>{
        setConfirmPassword(value)
      setErrorConfirmPassword(checkMatch(value,password,{
        ar:"كلمة السر غير متطابقة",
        en:"Password doesn't match!",
        fr:"Le mot de passes ne sont pas identiques"
      }))
    },[errorPassword]
  )
  const submitHandler = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      console.log({name,surname,email,password})
      
    },3000)
  }
  
  const signUpItems : FormItem[] = [
    {
        label:strings.name,
        index:0,
        value:name,
        type:"text",
        setValue:handleNameChange,
        icon:<InputIcon variant={"AntDesign"} name="user" />,
        error:errorName
        
      },
      {
        label:strings.surname,
        index:1,
        value:surname,
        type:"text",
        setValue:handleSurnameChange,
        icon:<InputIcon variant={"AntDesign"} name="user" />,
        error:errorSurname
        
      },
    {
        label:strings.email,
        index:2,
        value:email,
        type:"text",
        setValue:handleEmailChange,
        icon:<View marginX={3}><Fontisto name="email" size={12} color="gray" /></View>,
        error:errorEmail
        
      },
    
    {
      label:strings.password,
      index:3,
      value:password,
      type:"password",
      setValue:handlePasswordChange,
      icon:<View marginX={3}><AntDesign name="eyeo" size={12} color="gray" /></View>,
      error:errorPassword
    },
    {
        label:strings.confirmPassword,
        index:4,
        value:confirmPassword,
        type:"password",
        setValue:handleConfirmPasswordChange,
        icon:<InputIcon variant={"AntDesign"} name="eyeo" />,
        error:errorConfirmPassword
        
      },
  ]
  useEffect(
    ()=>{
      if(email.length!=0) setErrorEmail(checkEmail(email))
      if(password.length!=0)setErrorPassword(checkPassword(password))
     if(confirmPassword.length!=0) setErrorConfirmPassword(checkMatch(confirmPassword,password,{
        ar:"كلمة السر غير متطابقة",
        en:"Password doesn't match!",
        fr:"Le mot de passes ne sont pas identiques"
      }))
     if(surname.length!=0) setErrorSurname(checkString(surname,{
        ar:"اللقب لا يمكن ان يكون فارغا",
        en:"Surname can't be empty!",
        fr:"Le nom ne doit pas étre vide"
      }))
     if(name.length!=0) setErrorName(checkString(name,{
        ar:"الأسم لا يمكن ان يكون فارغا",
        en:"Name can't be empty!",
        fr:"Le Prénom ne doit pas étre vide"
      }))
    },[]
  )
  return (
    <>
    <Welcome text={strings.welcome} />
    <Form isLoading={loading} title={strings.signupForOurServices} items={signUpItems} submitHandler={submitHandler}  />
    <HelperText link='/signin' text1={{
        ar:" لدي حساب مسبقا",
        en:"I already have an account!",
        fr:"Javais déja un compte!"
      }} text2={strings.signin} />
    <TextInsideDivider text={{
        ar:"أو التسجيل عبر",
        en:"Or Signup with",
        fr:"Ou connèctez-vous avec"
      }} />
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
    </View>
    <CheckBoxText value='0' text={{
        ar:"من خلال تحديد المربع فإنك توافق على",
        en:"By checking the box you agree to our",
        fr:"En cochant la case, vous acceptez nos"
    }} textLink={{
        ar:"شروط الاستخدام الخاصة بنا ",
        en:" terms of use",
        fr:" conditions d'utilisation"
    }} link='/' />
    </>
  )
}

export default SignupForm
