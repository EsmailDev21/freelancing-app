import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LangContext from "../contexts/LangContext";
import MainButton from "../components/core/MainButton";
import Translator from "../components/hoc/Translator";
import { strings } from "../utils/strings";
import { getOrientation } from "../utils/utilityFunctions";
import { NativeBaseProvider } from "native-base";
import useTranslator from "../hooks/useTranslator";
import { Provider } from "react-redux";
import store from "../redux/store";
import { theme } from "../themes/mainTheme";
import MainProvider from "../contexts/MainProvider";

export default function Index() {
  return (<>
            {<Translator color={"muted.900"} fontWeight={"semibold"} text={strings.welcome} />}
            
              {<Translator link="/signin" color={"muted.900"} text={strings.signin} />}
            
            <StatusBar style="auto" />
           </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
