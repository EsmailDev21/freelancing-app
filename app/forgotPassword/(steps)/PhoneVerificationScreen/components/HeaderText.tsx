import React from 'react'
import { View } from 'native-base'
import { getOrientation } from '../../../../../utils/utilityFunctions'
import Translator from '../../../../../components/hoc/Translator'
import { TextObject } from '../../../../../types'
import { strings } from '../../../../../utils/strings'

const HeaderText = ({text=strings.welcomeBack}:{text?:TextObject}) => {
  return (
    <View width={"sm"}>
        <View marginY={10} width={"90%"}  alignSelf={getOrientation()==="ARABIC"?"flex-start":"flex-end"}>
      <Translator fontWeight={"black"} fontSize={32} text={text}></Translator>
    </View>
    </View>
  )
}

export default HeaderText
