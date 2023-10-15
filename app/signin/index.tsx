import { View ,Text, NativeBaseProvider} from "native-base";
import React from "react";
import SigninForm from "./components/SigninForm";
import LangContext from "../../contexts/LangContext";
import store from "../../redux/store";
import { Provider } from "react-redux";

const Signin = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
      <LangContext>
      
      <SigninForm />
    </LangContext>
      </NativeBaseProvider>
    </Provider>
    
  );
};

export default Signin;
