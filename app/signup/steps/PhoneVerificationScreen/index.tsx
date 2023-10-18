import React, { useCallback, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PhoneVerificationScreen = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter();
  const submitHandler = useCallback(() => {
    setLoading(true);
    setTimeout(() => console.log("Submitted"), 3000);
    router.replace("/")
  }, [loading]);
  return (
    <MainProvider langBtn={true}>
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
    </MainProvider>
  );
};

export default PhoneVerificationScreen;
