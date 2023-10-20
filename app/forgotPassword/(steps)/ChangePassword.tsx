import React, { useCallback, useEffect, useState } from "react";
import Form from "../../../components/core/Form";
import { strings } from "../../../utils/strings";
import { FormItem } from "../../../types";
import {
  checkEmail,
  checkMatch,
  checkPassword,
  checkString,
  getOrientation,
} from "../../../utils/utilityFunctions";
import { Divider, View } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Translator from "../../../components/hoc/Translator";
import MainButton from "../../../components/core/MainButton";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import InputIcon from "../../../components/core/InputIcon";
import CheckBoxText from "../../../components/core/CheckBoxText";
const CompleteProfileForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorSurname, setErrorSurname] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleEmailChange = useCallback(
    (value: string) => {
      setEmail(value);
      setErrorEmail(checkEmail(value));
    },
    [errorEmail]
  );
  const handlePasswordChange = useCallback(
    (value: string) => {
      setPassword(value);
      setErrorPassword(checkPassword(value));
    },
    [errorEmail]
  );
  const handleNameChange = useCallback(
    (value: string) => {
      setName(value);
      setErrorName(
        checkString(value, {
          ar: "الأسم لا يمكن ان يكون فارغا",
          en: "Name can't be empty!",
          fr: "Le Prénom ne doit pas étre vide",
        })
      );
    },
    [errorName]
  );
  const handleSurnameChange = useCallback(
    (value: string) => {
      setSurname(value);
      setErrorSurname(
        checkString(value, {
          ar: "اللقب لا يمكن ان يكون فارغا",
          en: "Surname can't be empty!",
          fr: "Le nom ne doit pas étre vide",
        })
      );
    },
    [errorSurname]
  );
  const handleConfirmPasswordChange = useCallback(
    (value: string) => {
      setConfirmPassword(value);
      setErrorConfirmPassword(
        checkMatch(value, password, {
          ar: "كلمة السر غير متطابقة",
          en: "Password doesn't match!",
          fr: "Le mot de passes ne sont pas identiques",
        })
      );
    },
    [errorPassword]
  );
  const submitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log({ name, surname, email, password });
    }, 3000);
  };

  const items: FormItem[] = [
   
    
   

    {
      label: strings.newPassword,
      index: 3,
      value: password,
      type: "password",
      setValue: handlePasswordChange,
      icon: (
        <View marginX={3}>
          <AntDesign name="eyeo" size={12} color="gray" />
        </View>
      ),
      error: errorPassword,
    },
    {
      label: strings.confirmPassword,
      index: 4,
      value: confirmPassword,
      type: "password",
      setValue: handleConfirmPasswordChange,
      icon: <InputIcon variant={"AntDesign"} name="eyeo" />,
      error: errorConfirmPassword,
    },
  ];
  useEffect(() => {
    

    if (password.length != 0) setErrorPassword(checkPassword(password));
    if (confirmPassword.length != 0)
      setErrorConfirmPassword(
        checkMatch(confirmPassword, password, {
          ar: "كلمة السر غير متطابقة",
          en: "Password doesn't match!",
          fr: "Le mot de passes ne sont pas identiques",
        })
      );
   
   
  }, [errorPassword,errorConfirmPassword]);
  return (
    <>
      <Form
        isLoading={loading}
        title={strings.changePassword}
        items={items}
        submitText={strings.next}
        submitHandler={submitHandler}
      />
      
      
    </>
  );
};

export default CompleteProfileForm;
