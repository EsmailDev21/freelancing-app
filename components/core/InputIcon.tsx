import { View } from 'native-base'
import React from 'react'
import * as Icon from "@expo/vector-icons"
const InputIcon = ({name,variant}:{name:any,variant:any}) => {
    let icon;
    switch(variant){
        case "AntDesign":icon = <Icon.AntDesign name={name} size={12} color="gray" />
        case "Feather":icon = <Icon.Feather name={name} size={12} color="gray" />
        case "FontAwesome" :icon = <Icon.FontAwesome name={name} size={12} color="gray" />
        case "FontAwesome5" :icon = <Icon.FontAwesome5 name={name} size={12} color="gray" />
    }
  return (
    <View marginX={3}>
        {icon}
    </View>
  )
}

export default InputIcon
