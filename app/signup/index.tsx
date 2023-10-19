import { View ,Text, NativeBaseProvider} from "native-base";
import React from "react";
import LangContext from "../../contexts/LangContext";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { theme } from "../../themes/mainTheme";
import FontProvider from "../../components/hoc/FontProvider";
import MainProvider from "../../contexts/MainProvider";
import SigninForm from "../signin/components/SigninForm";
import SignupForm from "./components/CompleteProfileForm";
import ProvidePhoneNumber from "./steps/ProvidePhoneNumber";

const Signup = () => {
  return (
        <ProvidePhoneNumber />
    
  );
};

export default Signup;
