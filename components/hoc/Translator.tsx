import { ITextProps, Text } from "native-base";
import useTranslator from "../../hooks/useTranslator";
import { TextObject } from "../../types";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/LanguageSlice";
import { getOrientation } from "../../utils/utilityFunctions";

export interface TranslatorProps {
  text: TextObject;
  link?:string
}

const Translator: React.FC<TranslatorProps & ITextProps> = (props: TranslatorProps & ITextProps) => {
    const {text,link,...rest} = props
  const translatedText = useTranslator(text);
  const lang = useSelector(selectLanguage)
    return (
       link==undefined ?<Text fontFamily={getOrientation()==="ARABIC"?"Cairo":"Inter"} textAlign={lang==="ar"?"right":"left"} {...rest}>
            {translatedText}
        </Text>:<Text fontFamily={getOrientation()==="ARABIC"?"Cairo":"Inter"} textAlign={lang==="ar"?"right":"left"} {...rest} fontWeight={"bold"}><Link href={link}>{translatedText}</Link></Text>
    );
};

export default Translator;
