import { Divider, View } from 'native-base'
import React from 'react'
import Translator from '../../../components/hoc/Translator'
import { TextObject } from '../../../types'

const TextInsideDivider = ({text}:{text:TextObject}) => {
  return (
    <View marginY={5} width={"80%"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
      <Divider h={"2px"} width={"30%"} color={"muted.700"} />
      <Translator marginX={2} color={"muted.700"} text={text}></Translator>
      <Divider h={"2px"} width={"30%"} color={"muted.700"} />
    </View>
  )
}

export default TextInsideDivider
