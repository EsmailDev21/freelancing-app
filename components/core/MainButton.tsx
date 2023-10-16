import { Button, IButtonProps, Text } from "native-base";
import { GestureResponderEvent } from "react-native";

export interface MainButtonProps {
  onPress: (event:GestureResponderEvent)=>void;
  orientation: "ARABIC" | "LATIN";
  icon?: JSX.Element;
  text?: string;
  children?: JSX.Element;
}

const MainButton: React.FC<MainButtonProps & IButtonProps> = (props: MainButtonProps & IButtonProps) => {
 
 const {orientation,onPress,icon,text,children,...rest} = props
  return (
    <Button
    {...rest}
      bgColor={rest.bgColor??"muted.900"}
      _pressed={rest._pressed?? {bgColor:"muted.800"}}
      rounded={"md"}
      px={20}
      onPress={onPress}
      rightIcon={orientation === "LATIN" ? undefined : icon}
      leftIcon={orientation === "ARABIC" ? undefined : icon}
    >
      {text && (
        <Text
          textAlign={orientation === "LATIN" ? "left" : "right"}
          fontWeight={"semibold"}
        >
          {text}
        </Text>
      )}
      {children}
    </Button>
  );
};

export default MainButton;
