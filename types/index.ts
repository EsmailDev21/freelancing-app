import { IInputComponentType } from "native-base/lib/typescript/components/primitives/Input/types";
export * from "./auth"
export * from "./user"
export class FormItem {
    index?:number
    label:TextObject
    input?:JSX.Element
    error?:TextObject
    setError?:(val:string)=>void
    isLoading?:boolean
    helperText?:TextObject
    value:string
    numOfLines?:number
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

export type UserLanguage = {
    designation : string,
    level : "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "FLUENT" | "NATIVE/BILINGUAL"
}

export type UserSkill = {
    designation : string,
    domain?:string,
    level : "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT" 
}

export type UserEducation = {
    fieldOfStudy?:string,
    certificate?:string,
    university?:string,
    startedAt?:Date,
    finishedAt?:Date,
    level ?:"BACHELOR" | "ASSOCIATE" | "MASTERS" | "PHD" 
}