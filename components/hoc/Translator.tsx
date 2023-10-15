import { ITextProps, Text } from "native-base";
import useTranslator from "../../hooks/useTranslator";
import { TextObject } from "../../types";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/LanguageSlice";

export interface TranslatorProps {
  text: TextObject;
  link?:string
}

const Translator: React.FC<TranslatorProps & ITextProps> = (props: TranslatorProps & ITextProps) => {
    const {text,link,...rest} = props
  const translatedText = useTranslator(text);
  const lang = useSelector(selectLanguage)
    return (
       link==undefined ?<Text textAlign={lang==="ar"?"right":"left"} {...rest}>
            {translatedText}
        </Text>:<Text textAlign={lang==="ar"?"right":"left"} {...rest} fontWeight={"semibold"}><Link href={link}>{translatedText}</Link></Text>
    );
};

export default Translator;
