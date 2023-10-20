import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LangContext from "../contexts/LangContext";
import MainButton from "../components/core/MainButton";
import Translator from "../components/hoc/Translator";
import { strings } from "../utils/strings";
import { getOrientation } from "../utils/utilityFunctions";
import { Center, Flex, NativeBaseProvider } from "native-base";
import useTranslator from "../hooks/useTranslator";
import { Provider } from "react-redux";
import store from "../redux/store";
import { theme } from "../themes/mainTheme";
import MainProvider from "../contexts/MainProvider";
import PopupComponent from "../components/animations/PopupComponent";

export default function Index() {
  return (<Flex paddingX={"12"} paddingTop={"56"} alignItems={"center"} height={"container"} justifyContent={"center"}>
             <PopupComponent>
             {<Translator my={5} color={"muted.900"} fontWeight={"semibold"} text={strings.welcome} />}
          
             </PopupComponent>
             <PopupComponent>
             <MainButton onPress={undefined}  orientation={getOrientation()}>
            <Translator link="/signin" color={"muted.50"} text={strings.signin} />
            
            </MainButton>
             </PopupComponent>
              
            <StatusBar style="auto" />
           </Flex>

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
