import React, { useCallback, useEffect, useState } from "react";
import MainProvider from "../../../../contexts/MainProvider";
import PopupComponent from "../../../../components/animations/PopupComponent";
import HeaderText from "./components/HeaderText";
import { strings } from "../../../../utils/strings";
import PhoneVerificationInput from "./components/PhoneVerificationInput";
import SubHeaderText from "./components/SubHeaderText";
import { Spinner } from "native-base";
import MainButton from "../../../../components/core/MainButton";
import Translator from "../../../../components/hoc/Translator";
import {
  getOrientation,
  checkInputArrayHasError,
} from "../../../../utils/utilityFunctions";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  selectCode,
  selectError,
  selectIsVerified,
  selectProvidedCode,
  sendCode,
  setError
} from "../../../../redux/slices/phoneVerificationSlice";
import useErrorToast from "../../../../components/core/toasts/ErrorToast";
import store from "../../../../redux/store";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";
import useSuccessToast from "../../../../components/core/toasts/useSuccessToast";

const PhoneVerificationScreen = () => {
  const currentRoute = useNavigation().getId();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const errorToast = useErrorToast();
  const successToast = useSuccessToast();
  const isVerified = useSelector(selectIsVerified);
  const code = useAppSelector(selectProvidedCode)
  const key = useAppSelector(selectCode);
  const dispatch = useAppDispatch();
  const errorPhoneVerification = useAppSelector(selectError);
  const submitHandler = () => {
    setLoading(true);
    //setTimeout(() => console.log("Submitted"), 3000);
    if (code==key) {
      successToast({
        title:strings.genericSuccess,
        message:{
          ar:"تم التأكيد بنجاح :D",
          en:"Verified successfully! :D",
          fr:"Verifié avec succée :D!"
        }
      })
      setTimeout(
        ()=>{
          if(currentRoute.includes("signup"))
          router.push("/signup/steps/CompleteProfileFirstScreen");
        else
          router.push("/forgotPassword/ChangePassword")
        },3000
      )
    } else {
      dispatch(
        setError({
          ar: "خطأ, رمز التحقق غير متطابق",
          en: "Error, verification code doesn't match!",
          fr: "Erreur, le code de verification est faux!"
        })
      );
      console.log({code,key})
      setLoading(false);
      errorToast({
        title: strings.genericError,
        message: strings.errorVerificationPhone,
      });
    }
  }
 useEffect(
  ()=>{
    console.log({currentRoute})
    dispatch(sendCode(localStorage.getItem("code")))
  }
 )
  return (
    <>
      <PopupComponent>
        <HeaderText text={strings.verifyPhoneNumber} />
      </PopupComponent>
      <PopupComponent>
        <SubHeaderText
          text={{
            ar: "لقد ارسلنا اليك شفرة تفعيل الحساب, الرجاء منك ادخالها هنا",
            en: " We've sent you a verification code, please type it here!",
            fr: "Nous avons vous-envoyé un code de verification, s'il vous plaiz tapez-le ici!",
          }}
        />
      </PopupComponent>
      <PopupComponent>
        <PhoneVerificationInput />
      </PopupComponent>
      <PopupComponent>
        <MainButton
          rightIcon={getOrientation() === "LATIN" ? null : null}
          leftIcon={getOrientation() === "ARABIC" ? null : null}
          isLoading={loading}
          isDisabled={loading == true}
          onPress={submitHandler}
          orientation={getOrientation()}
        >
          {loading === true ? (
            <Spinner color={"muted.50"} />
          ) : (
            <Translator text={strings.next} color={"muted.100"} />
          )}
        </MainButton>
      </PopupComponent>
    </>
  );
};

export default PhoneVerificationScreen;
