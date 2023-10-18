import { IInputComponentType } from "native-base/lib/typescript/components/primitives/Input/types";

export class FormItem {
    index?:number
    label:TextObject
    input?:JSX.Element
    error?:TextObject
    setError?:(val:string)=>void
    isLoading?:boolean
    helperText?:TextObject
    value:string
    type?:"text" | "password"
    setValue:(val:string)=>void
    icon?:JSX.Element
    itemIsInput?:boolean = true;
    helperElement?:JSX.Element
    itemIsNotInput?:JSX.Element
    rightElement?:JSX.Element
    leftElement?:JSX.Element
}
export type StrictTextObject = {
    ar:string,
    en:string,
    fr:string
}

export type TextObject = Partial<StrictTextObject>