import { Menu, Button, HamburgerIcon, Text, View } from "native-base";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../redux/LanguageSlice";
import { getOrientation } from "../utils/utilityFunctions";

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const setLang = (lang) => {
    dispatch(setLanguage(lang));
  };

  return { language, setLang };
};

const LanguageProvider = ({ children,withButton=true }: {children:any,withButton?:boolean}) => {
  const lang = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const switchLanguage = (language: "ar" | "fr" | "en") => {
    dispatch(setLanguage(language));
  };

  return (
    <LanguageContext.Provider value={useLanguage()}>
{withButton &&      <View position={"relative"} width={"100"} zIndex={999} top={1} left={1}>
        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Button
                _pressed={{ bgColor: "muted.800" }}
                bgColor={"muted.900"}
                rightIcon={lang !== "ar" ? undefined : <HamburgerIcon />}
                leftIcon={lang === "ar" ? undefined : <HamburgerIcon />}
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <Text fontFamily={getOrientation()==="ARABIC"?"Cairo":"Inter"} color={"muted.100"}>
                  {lang === "ar"
                    ? "اللغة"
                    : lang === "fr"
                    ? "Langue"
                    : "Language"}
                </Text>
              </Button>
            );
          }}
        >
          <Menu.Item
            color={"muted.900"}
            disabled={lang == "ar"}
            onPress={() => switchLanguage("ar")}
          >
            <Text fontFamily={"Cairo"}>العربية</Text>
          </Menu.Item>
          <Menu.Item
            color={"muted.900"}
            disabled={lang == "en"}
            onPress={() => switchLanguage("en")}
          >
            <Text fontFamily={"Inter"}>English</Text>
          </Menu.Item>
          <Menu.Item
            color={"muted.900"}
            disabled={lang == "fr"}
            onPress={() => switchLanguage("fr")}
          >
            <Text fontFamily={"Inter"}>Français</Text>
          </Menu.Item>
        </Menu>
      </View>}
      <View
        textAlign={lang === "ar" ? "right" : "left"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"full"}
      >
        {children}
      </View>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useLangContext = () => {
  return useContext(LanguageContext);
};
