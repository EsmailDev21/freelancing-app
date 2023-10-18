import React from 'react'
import { TextObject } from '../../types'
import { Checkbox, View } from 'native-base';
import Translator from '../hoc/Translator';
import { getOrientation } from '../../utils/utilityFunctions';

const CheckBoxText = ({text,textLink,link,value="0"}:{text?:TextObject,textLink?:TextObject,link?:string,value:string}) => {
  return (
    <View marginY={3} flexDir={getOrientation()==="LATIN"?"row":"row-reverse"} display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>
        <Checkbox marginX={2} value={value} rounded={"md"} colorScheme={"muted"} />
        <Translator fontSize={12} color={"muted.700"} text={text} marginX={1} />
        <Translator fontSize={12} color={"muted.900"} text={textLink} link={link} />
    </View>
  );
}

export default CheckBoxText
