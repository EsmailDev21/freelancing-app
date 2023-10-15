import { Button, Text } from "native-base";
import { GestureResponderEvent } from "react-native";

export interface MainButtonProps {
  onPress: (event:GestureResponderEvent)=>void;
  orientation: "ARABIC" | "LATIN";
  icon?: JSX.Element;
  text?: string;
  children?: JSX.Element;
}

const MainButton: React.FC<MainButtonProps> = (props: MainButtonProps) => {
  return (
    <Button
      bgColor={"muted.900"}
      _pressed={{bgColor:"muted.800"}}
      rounded={"md"}
      onPress={props.onPress}
      rightIcon={props.orientation === "LATIN" ? undefined : props.icon}
      leftIcon={props.orientation === "ARABIC" ? undefined : props.icon}
    >
      {props.text && (
        <Text
          textAlign={props.orientation === "LATIN" ? "left" : "right"}
          fontWeight={"semibold"}
        >
          {props.text}
        </Text>
      )}
      {props.children}
    </Button>
  );
};

export default MainButton;
