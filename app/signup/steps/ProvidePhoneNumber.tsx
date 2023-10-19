import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "native-base";
import Form from "../../../components/core/Form";
import MainButton from "../../../components/core/MainButton";
import Translator from "../../../components/hoc/Translator";
import { strings } from "../../../utils/strings";
import {
  checkPhoneNumber,
  getOrientation,
} from "../../../utils/utilityFunctions";
import HelperText from "../../signin/components/HelperText";
import TextInsideDivider from "../../signin/components/TextInsideDivider";
import Welcome from "../../signin/components/Welcome";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  setError,
  setIsLoading,
} from "../../../redux/slices/FormSlice";
import InputIcon from "../../../components/core/InputIcon";

import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FormItem } from "../../../types";
import PopupComponent from "../../../components/animations/PopupComponent";
import { useNavigation, useRouter } from "expo-router";
import { sendCode } from "../../../redux/slices/phoneVerificationSlice";
import MainProvider from "../../../contexts/MainProvider";
import store from "../../../redux/store";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
const ProvidePhoneNumber = () => {
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigation();
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("");
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const handlePhoneNumberChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
      dispatch(
        setError(
          checkPhoneNumber(
            value,
            {
              ar: "رقم الهاتف لا يمكن ان يكون فارغا",
              en: "Phone number can't be empty!",
              fr: "Le numéro de téléphone ne doit pas étre vide",
            },
            {
              ar: "رقم الهاتف لا يمكن ان يتكون من أحرف",
              en: "Phone number can't contain characters!",
              fr: "Le numéro de téléphone ne doit pas contenir des caractères",
            }
          )
        )
      );
    },
    [error]
  );
  const formItems: FormItem[] = [
    {
      label: strings.newPhoneNumber,
      index: 0,
      value: phoneNumber,
      type: "text",
      setValue: handlePhoneNumberChange,
      icon: <InputIcon variant={"AntDesign"} name="user" />,
      error: error,
      rightElement:
        getOrientation() === "LATIN" ? null : (
          <Text fontWeight={"medium"} alignSelf={"center"} p={2} color={"muted.500"}>+216</Text>
        ),

      leftElement:
        getOrientation() === "ARABIC" ? null : (
          <Text fontWeight={"medium"} alignSelf={"center"} p={2} color={"muted.500"}>+216</Text>
        ),
    },
  ];
  const submitHandler = () => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
      console.log({ phoneNumber, isLoading, error });
    }, 3000);
    router.push("/signup/steps/PhoneVerificationScreen")
  };
  useEffect(() => {
    if (phoneNumber.length != 0)
      dispatch(
        setError(
          checkPhoneNumber(
            phoneNumber,
            {
              ar: "رقم الهاتف لا يمكن ان يكون فارغا",
              en: "Phone number can't be empty!",
              fr: "Le numéro de téléphone ne doit pas étre vide",
            },
            {
              ar: "رقم الهاتف لا يمكن ان يتكون من أحرف",
              en: "Phone number can't contain characters!",
              fr: "Le numéro de téléphone ne doit pas contenir des caractères",
            }
          )
        )
      );
  }, []);
  useEffect(
    ()=> {
      dispatch(sendCode("A1Z2E3"))
    },[]
  )
  return (
    <MainProvider>
    <PopupComponent>
      <View w={"md"}><Welcome text={strings.welcome} /></View></PopupComponent>
      <Form
        isLoading={isLoading}
        title={strings.signupForOurServices}
        submitIcon={
          <AntDesign
            color={"white"}
            name={getOrientation() === "ARABIC" ? "arrowleft" : "arrowright"}
          />
        }
        submitText={strings.next}
        items={formItems}
        submitHandler={submitHandler}
      />
      <View display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        >
          <PopupComponent>
      <HelperText
        link="/signin"
        text1={{
          ar: " لدي حساب مسبقا",
          en: "I already have an account!",
          fr: "Javais déja un compte!",
        }}
        text2={strings.signin}
      /></PopupComponent>
      <PopupComponent>
      <TextInsideDivider
        text={{
          ar: "أو التسجيل عبر",
          en: "Or Signup with",
          fr: "Ou connèctez-vous avec",
        }}
      /></PopupComponent>
      </View>
      <View display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        >
      <View
        marginY={5}
        width={"80%"}
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <MainButton
          icon={<EvilIcons name="sc-facebook" size={24} color="white" />}
          w={"40%"}
          marginX={2}
          _pressed={{ bgColor: "indigo.900" }}
          bgColor={"indigo.800"}
          onPress={() => console.log("pressed")}
          orientation={getOrientation()}
        >
          <Translator
            color={"white"}
            fontWeight={"bold"}
            text={{
              ar: "فيسبوك",
              en: "facebook",
              fr: "facebook",
            }}
          ></Translator>
        </MainButton>
        <MainButton
          icon={<AntDesign name="google" size={12} color="muted.900" />}
          marginX={2}
          w={"40%"}
          _pressed={{ bgColor: "muted.50" }}
          bgColor={"muted.100"}
          onPress={() => console.log("pressed")}
          orientation={getOrientation()}
        >
          <Translator
            fontWeight={"bold"}
            text={{
              ar: "جوجل",
              en: "Google",
              fr: "Google",
            }}
          ></Translator>
        </MainButton>
      </View></View>
    </MainProvider>
  );
};

export default ProvidePhoneNumber;
