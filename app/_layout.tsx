import { Slot } from 'expo-router'
import React from 'react'
import MainProvider from '../contexts/MainProvider'
import Footer from '../components/layout/Footer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'native-base'

const _layout = () => {
  return (
    <MainProvider langBtn={false}>
      <Slot />
<View marginTop={"80"} padding={10}>

    <Footer></Footer>
</View>
    </MainProvider>
  )
}

export default _layout
