import React from "react";
import { FormItem, TextObject } from "../../types";
import {
  Badge,
  CheckIcon,
  FormControl,
  Spinner,
  View,
  WarningOutlineIcon,
} from "native-base";
import Translator from "../hoc/Translator";
import FormInput from "./FormInput";
import useTranslator from "../../hooks/useTranslator";
import MainButton from "./MainButton";
import {
  checkInputArrayHasError,
  getOrientation,
} from "../../utils/utilityFunctions";
import { strings } from "../../utils/strings";
import PopupComponent from "../animations/PopupComponent";

export interface FormProps {
  title: TextObject;
  items: FormItem[];
  submitText?: TextObject;
  submitIcon?: JSX.Element;
  isLoading?: boolean;
  submitHandler: () => void;
}
const Form: React.FC<FormProps> = (props: FormProps) => {
  const { title, items, submitHandler, isLoading, submitText, submitIcon } =
    props;
  return (
    <View
      display={"flex"}
      width={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={10}
    >
      <View marginTop={1} marginBottom={2}>
        <Translator
          fontSize={24}
          fontWeight={"black"}
          color={"muted.900"}
          text={title}
        />
      </View>
      <View
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"80%"}
      >
        {items &&
          items.map((item: FormItem, index: number) => (
            <FormControl
              isInvalid={item.error != null}
              isRequired
              width={"full"}
              key={index}
            >
              <FormControl.Label>
                <Translator textAlign={"right"} text={item.label} />
              </FormControl.Label>
              <FormInput
                helperLink={item.helperElement}
                icon={item.icon}
                value={item.value}
                setValue={item.setValue}
                rest={{
                  placeholder: useTranslator(item.label),
                  type: item.type,
                  width: "full",
                  rightElement: item.rightElement,
                  leftElement: item.leftElement,
                }}
              />
              {item.helperText && (
                <View color={"gray.500"}>
                  <Translator text={item.helperText} />
                </View>
              )}
              {item.error != null ? (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  <Translator color={"red.500"} text={item.error} />
                </FormControl.ErrorMessage>
              ) : null}
            </FormControl>
          ))}
        <View my={5}>
          <PopupComponent>
          <MainButton
            rightIcon={getOrientation() === "LATIN" ? null : submitIcon}
            leftIcon={getOrientation() === "ARABIC" ? null : submitIcon}
            isLoading={isLoading}
            isDisabled={checkInputArrayHasError(items) || isLoading == true}
            
            onPress={submitHandler}
            orientation={getOrientation()}
          >
            {isLoading === true ? (
              <Spinner color={"muted.50"} />
            ) : (
              <Translator text={submitText} color={"muted.100"} />
            )}
          </MainButton></PopupComponent>
        </View>
      </View>
    </View>
  );
};

export default Form;
