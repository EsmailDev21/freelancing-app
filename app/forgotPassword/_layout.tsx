import React from 'react'
import MainProvider from '../../contexts/MainProvider'
import { Slot } from 'expo-router'

const _layout = () => {
  return (
    <MainProvider>
        <Slot />
    </MainProvider>
  )
}

export default _layout
