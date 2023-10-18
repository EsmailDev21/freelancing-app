import React from 'react'
import { TextObject } from '../../../types'
import { View,Text } from 'native-base'
import Translator from '../../../components/hoc/Translator'
import { strings } from '../../../utils/strings'
import { getOrientation } from '../../../utils/utilityFunctions'

const HelperText = ({text1,text2,link}:{text1?:TextObject,text2?:TextObject,link?:string}) => {
  return (
    <View display={"flex"} flexDirection={getOrientation()==="ARABIC"?"row-reverse":"row"}>
      <Translator color={"muted.700"} text={text1}></Translator>
      <Text color={"muted.900"}>, </Text>
      <Translator fontWeight={"black"} link={link} text={text2}></Translator>
    </View>
  )
}

export default HelperText
