import { View } from 'native-base'
import React from 'react'
import Translator from '../../../../../components/hoc/Translator'
import { getOrientation } from '../../../../../utils/utilityFunctions'

const SubHeaderText = ({text}) => {
  return (
    <View width={"sm"}>
        <View marginY={10} width={"90%"}  alignSelf={getOrientation()==="ARABIC"?"flex-start":"flex-end"}>
      <Translator color={"muted.600"} fontWeight={"normal"} fontSize={18} text={text}></Translator>
    </View>
    </View>
  )
}

export default SubHeaderText
