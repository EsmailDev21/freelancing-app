import React from "react";
import { FormItem, TextObject } from "../../types";
import { Badge, CheckIcon, FormControl, View } from "native-base";
import Translator from "../hoc/Translator";
import FormInput from "./FormInput";
import useTranslator from "../../hooks/useTranslator";
import MainButton from "./MainButton";
import { getOrientation } from "../../utils/utilityFunctions";
import { strings } from "../../utils/strings";

export interface FormProps {
  title: TextObject;
  items: FormItem[];
  submitHandler: () => void;
}
const Form: React.FC<FormProps> = (props: FormProps) => {
  const { title, items, submitHandler } = props;
  return (
    <View display={"flex"} width={"full"} alignItems={"center"} justifyContent={"center"}>
      <View marginY={5}>
        <Translator color={"muted.900"} text={title} />
      </View>
      <View
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        {items &&
          items.map((item: FormItem, index: number) => (
            <FormControl key={index}>
              <FormControl.Label>
                <Translator text={item.label} />
              </FormControl.Label>
              <FormInput  value={item.value} setValue={item.setValue} rest={{ placeholder: useTranslator(item.label),type:item.type}} />
              {item.helperText && (
                <View color={"gray.500"}>
                  <Translator text={item.helperText} />
                </View>
              )}
              {item.error && (
                <Badge>
                  <Translator text={item.error} />
                </Badge>
              )}
            </FormControl>
          ))}
          <View my={5}>
          <MainButton icon={<CheckIcon />} onPress={submitHandler} orientation={getOrientation()} >

<Translator text={strings.signin} color={"muted.100"} />
</MainButton>
          </View>
      </View>
    </View>
  );
};

export default Form;
