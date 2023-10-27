import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Badge, Divider, HStack, IconButton, SimpleGrid, Text, View } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import { EvilIcons } from "@expo/vector-icons";
import {Feather} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  checkLanguageArray,
  checkSkillArray,
  checkString,
  getOrientation,
} from "../../../../../utils/utilityFunctions";
import {
  FormItem,
  UserEducation,
  UserLanguage,
  UserSkill,
} from "../../../../../types";
import { strings } from "../../../../../utils/strings";
import InputIcon from "../../../../../components/core/InputIcon";
import Form from "../../../../../components/core/Form";
import MainButton from "../../../../../components/core/MainButton";
import Translator from "../../../../../components/hoc/Translator";
import CheckBoxText from "../../../../../components/core/CheckBoxText";
import PopupComponent from "../../../../../components/animations/PopupComponent";
const ProfileAdditionalInfosForm = () => {
  const [skills, setSkills] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    bio: "",
    country: "",
    region: "",
    city: "",
    address: "",
    birthDate: "",
    currentSkill: "",
    currentEducation: "",
    currentLanguage: "",
  });
  const handleChange = (field, value) => {
    dispatch({ type: "CHANGE", field, value });
  };
  const handleChangeMultipleSkills = (value: string) => {
    setSkills((prev) => [...prev, value]);
  };
  const errorReducer = (state, action) => {
    switch (action.type) {
      case "SET":
        return {
          ...state,
          [action.field]: action.value,
        };

      default:
        return state;
    }
  };
  const [errorState, errorDispatcher] = useReducer(errorReducer, {
    errBio: null,
    errCountry: null,
    errRegion: null,
    errCity: null,
    errAddress: null,
    errBirthDate: null,
    errSkills: null,
    errLanguages: null,
    errEducation: null,
  });
  const handleErrorChange = (field, value) => {
    errorDispatcher({ type: "SET", field, value });
  };
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorSurname, setErrorSurname] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleBioChange = useCallback(
    (value: string) => {
      handleChange("bio", value);
      handleErrorChange(
        "errBio",
        checkString(value, {
          ar: "الوصف لا يمكن ان يكون فارغا",
          en: "Bio can't be empty!",
          fr: "La description ne doit pas étre vide!",
        })
      );
    },
    [errorState.errBio]
  );
  const skillRef = useRef()
  const handleCountryChange = useCallback(
    (value: string) => {
      handleChange("country", value);
      handleErrorChange(
        "errCountry",
        checkString(value, {
          ar: "يجب عليك اختيار دولة",
          en: "You must pick your country!",
          fr: "Tu doit choisir votre pays!",
        })
      );
    },
    [errorState.errCountry]
  );
  const handleRegionChange = useCallback(
    (value: string) => {
      handleChange("region", value);
      handleErrorChange(
        "errRegion",
        checkString(value, {
          ar: "يجب عليك اختيار منطقك",
          en: "You must pick your region!",
          fr: "Tu doit choisir votre région!",
        })
      );
    },
    [errorState.errRegion]
  );
  const handleCityChange = useCallback(
    (value: string) => {
      handleChange("city", value);
      handleErrorChange(
        "errCity",
        checkString(value, {
          ar: "يجب عليك اختيار مدينتك",
          en: "You must pick your city!",
          fr: "Tu doit choisir votre ville!",
        })
      );
    },
    [errorState.errCity]
  );
  const handleAddressChange = useCallback(
    (value: string) => {
      handleChange("address", value);
      handleErrorChange(
        "errCountry",
        checkString(value, {
          ar: "يجب عليك كتابة العنوان الخاص بك",
          en: "You must enter your address!",
          fr: "Tu doit entrer votre address!",
        })
      );
    },
    [errorState.errAddress]
  );
  const handleBirthdateChange = useCallback(
    (value: string) => {
      handleChange("birthDate", value);
      handleErrorChange(
        "errBirthDate",
        checkString(value, {
          ar: "يجب عليك ادخال تاريخ ميلادك",
          en: "You must enter your birth date!",
          fr: "Tu doit entrer votre date de naissance!",
        })
      );
    },
    [errorState.errBirthDate]
  );
  const handleSkillsChange = useCallback(
    (value: string) => {
      handleChange("currentSkill", value);
      console.log(value)
      handleErrorChange(
        "errSkill",
        checkSkillArray(skills, {
          ar: "يجب عليك ادخال خمس مهارات على الأقل",
          en: "You must enter at least 5 skills!",
          fr: "Tu doit entrer au moins 5 talents!",
        })
      );
    },
    [errorState.errSkill]
  );
  const handleLanguagesChange = useCallback(
    (value: UserLanguage[]) => {
      handleChange("skill", value);
      handleErrorChange(
        "errSkill",
        checkLanguageArray(value, {
          ar: "يجب عليك اختيار لغة واحدة على الأقل",
          en: "You must pick at least 1 language!",
          fr: "Tu doit choisir au moins 1 langue!",
        })
      );
    },
    [errorState.errLanguages]
  );
  const handleEducationChange = useCallback(
    (value: UserEducation[]) => {
      handleChange("skill", value);
    },
    [errorState.errEducation]
  );
  const submitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log({
        skills,
        ...state
      });
    }, 3000);
  };

  const items: FormItem[] = [
    {
      label: strings.bio,
      index: 0,
      numOfLines:3,
      value: state.bio,
      type: "text",
      setValue: handleBioChange,
      icon: <InputIcon variant={"AntDesign"} name="user" />,
      error: errorState.errBio,
    },
    {
      label: strings.country,
      index: 1,
      value: state.country,
      type: "text",
      setValue: handleCountryChange,
      icon: <InputIcon variant={"AntDesign"} name="user" />,
      error: errorState.errCountry,
    },
    {
      label: strings.region,
      index: 2,
      value: state.region,
      type: "text",
      setValue: handleRegionChange,
      icon: (
        <View marginX={3}>
          <Fontisto name="map-marker" size={12} color="gray" />
        </View>
      ),
      error: errorState.errRegion,
    },

    {
      label: strings.city,
      index: 3,
      value: state.ciy,
      type: "text",
      setValue: handleCityChange,
      icon: (
        <View marginX={3}>
          <AntDesign name="home" size={12} color="gray" />
        </View>
      ),
      error: errorState.errCity,
    },
    {
      label: strings.skills,
      index: 4,
      value: state.currentSkill,
      type: "text",
      setValue: handleSkillsChange,
      helperElement: (
        <SimpleGrid space={1} columns={3}>
          {skills.map((item, _index) => (
            <PopupComponent  key={_index}>
              <Badge  rounded={"full"}  bgColor={"muted.900"}>
             <HStack justifyContent={"center"} alignItems={"center"}>
             <Text ml={4} color={"white"} fontWeight={"semibold"}>
            {item}
              </Text>
              <IconButton rounded={"full"} colorScheme={"muted"} ml={2} onPress={()=>setSkills(prev=>prev.filter(i=>i!=item))} icon={<Feather color={"white"} name="x" />} />
             </HStack>
            </Badge>
            </PopupComponent>
          ))}
        </SimpleGrid>
      ),
      rightElement: (
        <IconButton
          m={2}
          
          onPress={() => handleChangeMultipleSkills(state.currentSkill)}
          rounded={"full"}
          icon={<Feather name="check" color={"#22c92b"} size={20} />}
        />
      ),
      
      error: errorState.errSkills,
    },
  ];
  useEffect(() => {
    console.log(skills)
    /*
    if (state.bio.length != 0) setErrorEmail(checkEmail(email));
    if (password.length != 0) setErrorPassword(checkPassword(password));
    if (confirmPassword.length != 0)
      setErrorConfirmPassword(
        checkMatch(confirmPassword, password, {
          ar: "كلمة السر غير متطابقة",
          en: "Password doesn't match!",
          fr: "Le mot de passes ne sont pas identiques",
        })
      );
    if (surname.length != 0)
      setErrorSurname(
        checkString(surname, {
          ar: "اللقب لا يمكن ان يكون فارغا",
          en: "Surname can't be empty!",
          fr: "Le nom ne doit pas étre vide",
        })
      );
    if (name.length != 0)
      setErrorName(
        checkString(name, {
          ar: "الأسم لا يمكن ان يكون فارغا",
          en: "Name can't be empty!",
          fr: "Le Prénom ne doit pas étre vide",
        })
      );*/
  }, []);
  return (
    <>
      <Form
        isLoading={loading}
        title={strings.setupProfileInfos}
        items={items}
        submitText={strings.setupProfile}
        submitHandler={submitHandler}
      />
      
    </>
  );
};

export default ProfileAdditionalInfosForm;
