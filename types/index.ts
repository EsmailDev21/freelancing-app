import { IInputComponentType } from "native-base/lib/typescript/components/primitives/Input/types";

export type FormItem = {
    index?:number
    label:TextObject,
    input?:JSX.Element,
    error?:TextObject,
    isLoading?:boolean
    helperText?:TextObject;
    value:string,
    type?:"text" | "password",
    setValue:(val:string)=>void,
    icon?:JSX.Element,
    helperElement?:JSX.Element
}
export type StrictTextObject = {
    ar:string,
    en:string,
    fr:string
}

export type TextObject = Partial<StrictTextObject>