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
import SubHeaderText from "../../signup/steps/PhoneVerificationScreen/components/SubHeaderText";
import useErrorToast from "../../../components/core/toasts/ErrorToast";
const ProvidePhoneNumber = () => {
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigation();
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("");
  const error = useAppSelector(selectError);
  const errorToast = useErrorToast();
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
            },
            {
              ar: "رقم الهاتف لا يمكن ان يتكون من أقل من ثمانية ارقام",
              en: "Phone number can't contain less than eight number!",
              fr: "Le numéro de téléphone ne doit pas contenir moins des huit nombres",
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
    
    if(phoneNumber.length!=0){
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch(setIsLoading(false));
            console.log({ phoneNumber, isLoading, error });
          }, 3000);
          router.push("/forgotPassword/PhoneVerificationScreen")
    }else {
        errorToast({
            title:strings.genericError,
            message:checkPhoneNumber(
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
                },
                {
                  ar: "رقم الهاتف لا يمكن ان يتكون من أقل من ثمانية ارقام",
                  en: "Phone number can't contain less than eight number!",
                  fr: "Le numéro de téléphone ne doit pas contenir moins des huit nombres",
                }
              )
        })
    }
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
            },
            {
              ar: "رقم الهاتف لا يمكن ان يتكون من أقل من ثمانية ارقام",
              en: "Phone number can't contain less than eight number!",
              fr: "Le numéro de téléphone ne doit pas contenir moins des huit nombres",
            }
          )
        )
      );
  }, [phoneNumber,isLoading]);
  useEffect(
    ()=> {
      dispatch(sendCode("AZ01TY"))
    },[]
  )
  return (
    <><PopupComponent>
          <View><Welcome text={strings.forgotPasswordScreen} /></View></PopupComponent>
          <PopupComponent>
              <SubHeaderText
                  text={{
                      ar: "قم بكتابقة رقم هاتفك هنا",
                      en: "Please provide your phone number below!",
                      fr: "Ecrire votre numéro de téléphone ici s'il vous plait!",
                  }} />
          </PopupComponent>
          <Form
              isLoading={isLoading}
              title={{ar:"",fr:"",en:""}}
              submitIcon={<AntDesign
                  color={"white"}
                  name={getOrientation() === "ARABIC" ? "arrowleft" : "arrowright"} />}
              submitText={strings.next}
              items={formItems}

              submitHandler={submitHandler} /></>
      
  );
};

export default ProvidePhoneNumber;
