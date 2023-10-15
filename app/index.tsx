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

export default function Index() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
          <LangContext>
            {<Translator color={"muted.900"} fontWeight={"semibold"} text={strings.welcome} />}
            <MainButton
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
              orientation={getOrientation()}
            >
              {<Translator link="/signin" color={"muted.900"} text={strings.signin} />}
            </MainButton>
            <StatusBar style="auto" />
          </LangContext>
       
      </NativeBaseProvider>
    </Provider>
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
