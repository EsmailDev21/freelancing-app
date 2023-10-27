import { IInputProps, Input, Spacer, View } from "native-base";
import React from "react";
import { getOrientation } from "../../utils/utilityFunctions";
import PopupComponent from "../animations/PopupComponent";

export interface FormInputProps {
  rest: IInputProps;
  value: string;
  setValue: (val: string) => void;
  icon?: JSX.Element;
  helperLink?: JSX.Element;
}
const FormInput: React.FC<FormInputProps> = (props: FormInputProps) => {
  return (
    <PopupComponent>
      <View
        flexDir={"column"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-end"}
      >
        <Input
          textAlign={getOrientation() === "ARABIC" ? "right" : "left"}
          rightElement={getOrientation() === "LATIN" ? props.icon : null}
          leftElement={getOrientation() === "ARABIC" ? props.icon : null}
          value={props.value}
          borderColor={"muted.100"}
          bgColor={"muted.100"}
          _focus={{ bgColor: "white" }}
          onChangeText={props.setValue}
          {...props.rest}
          colorScheme={"black"}
          rounded={"md"}
          focusOutlineColor={"muted.900"}
        />

        <View marginTop={3}>{props.helperLink}</View>
      </View>
    </PopupComponent>
  );
};

export default FormInput;
