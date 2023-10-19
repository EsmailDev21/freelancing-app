import { useToast, Center, Box, Button } from "native-base";
import { TextObject } from "../../types";
import Translator from "../hoc/Translator";
import { useEffect } from "react";


const useCustomToast = () => {
    const toast = useToast();
    
       return ({type,title,message}:{type:"ERROR" | "SUCCESS" | "WARNING" | "INFO",title?:TextObject,message:TextObject})=> {
            toast.show({
                render: () => {
                  return <Box bg="muted.100" px="2" py="1" display={"flex"} flexDirection={"column"} rounded="md" mb={5}>
                          <Translator color={type==="ERROR"?"red.500":type==="SUCCESS"?"emerald.500":type==="INFO"?"cyan.500":"yellow.500"} marginY={2}  text={title} />
                          <Translator color={"muted.500"} marginY={2}  text={message} />
                        </Box>;
                }
              });
        }
       
  };
  export default useCustomToast;