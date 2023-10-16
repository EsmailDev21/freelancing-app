import { View ,Text, NativeBaseProvider} from "native-base";
import React from "react";
import SigninForm from "./components/SigninForm";
import LangContext from "../../contexts/LangContext";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { theme } from "../../themes/mainTheme";
import FontProvider from "../../components/hoc/FontProvider";

const Signin = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <FontProvider>
      <LangContext>
      
      <SigninForm />
    </LangContext>
    </FontProvider>
      </NativeBaseProvider>
    </Provider>
    
  );
};

export default Signin;
