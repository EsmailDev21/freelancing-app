import { useState } from "react";

export const getOrientation = () => {
    const lang = window.localStorage.getItem("language");
    if(lang=="ar")
        return "ARABIC"
    else 
        return "LATIN"
}

export const useHandleFormChange = () => {
    const [val,setVal] = useState({});
    const handler =  (val:string) => {
        setVal(val)
    }
    return {val,handler}
}