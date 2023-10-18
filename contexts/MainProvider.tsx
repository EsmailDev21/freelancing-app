import { NativeBaseProvider, theme } from 'native-base'
import React from 'react'
import { Provider } from 'react-redux'
import SigninForm from '../app/signin/components/SigninForm'
import FontProvider from '../components/hoc/FontProvider'
import store from '../redux/store'
import LangContext from './LangContext'

const MainProvider = ({children,langBtn=true}) => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <FontProvider>
      <LangContext withButton={langBtn}>
      {children}
    </LangContext>
    </FontProvider>
      </NativeBaseProvider>
    </Provider>
  )
}

export default MainProvider
