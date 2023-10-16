import React, { useState } from 'react'
import Form from '../../../components/core/Form'
import useTranslator from '../../../hooks/useTranslator'
import { strings } from '../../../utils/strings'
import { FormItem } from '../../../types'
import FormInput from '../../../components/core/FormInput'
import { getOrientation, useHandleFormChange } from '../../../utils/utilityFunctions'
import { Divider, Icon, Text, View } from 'native-base'
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Translator from '../../../components/hoc/Translator'
import MainButton from '../../../components/core/MainButton'
import { EvilIcons } from '@expo/vector-icons'; 
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
      },
      icon:<View marginX={3}><Fontisto name="email" size={12} color="gray" /></View>
      
    },
    {
      label:strings.password,
      index:0,
      value:password,
      type:"password",
      setValue:val=>setPassword(val),
      icon:<View marginX={3}><AntDesign name="eyeo" size={12} color="gray" /></View>,
      helperElement:<Translator link='/' text={strings.forgotPassword}></Translator>
    },
  ]
  return (
    <>
    <View marginY={10} width={"90%"}  alignSelf={getOrientation()==="ARABIC"?"flex-start":"flex-end"}>
      <Translator fontWeight={"black"} fontSize={32} text={strings.welcome}></Translator>
    </View>
    <Form title={useTranslator(strings.signin)} items={signInItems} submitHandler={submitHandler}  />
    <View display={"flex"} flexDirection={getOrientation()==="ARABIC"?"row-reverse":"row"}>
      <Translator color={"muted.700"} text={{
        ar:"ليس لدي حساب",
        en:"Don't have and account?",
        fr:"Je n'avais pas un compte!"
      }}></Translator>
      <Text color={"muted.900"}>, </Text>
      <Translator fontWeight={"black"} link='/' text={strings.signupForOurServices}></Translator>
    </View>
    <View marginY={5} width={"80%"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
      <Divider h={"2px"} width={"30%"} color={"muted.700"} />
      <Translator marginX={2} color={"muted.700"} text={{
        ar:"أو التسجيل عبر",
        en:"Or Signup with",
        fr:"Ou connèctez-vous avec"
      }}></Translator>
      <Divider h={"2px"} width={"30%"} color={"muted.700"} />
    </View>
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
    </>
  )
}

export default SigninForm
