import { useState } from "react";
import { FormItem, TextObject } from "../types";

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


export const checkEmail=(email:string)=> {
    if(email.length===0){
      return {
        ar:"البريد الالكتروني لا يمكن ان يكون فارغا!",
        en:"E-mail can't be empty!",
        fr:"L'e-mail ne doit pas ètre vide!"
      }
    }
    if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null){
      return{
        ar:"البريد الالكتروني غير صحيح!",
        en:"Not a valid e-mail!",
        fr:"E-mail non valide!"
      }
    }
    return null;
  }
  export const checkString=(value:string,message:TextObject)=> {
    if(value.length===0){
      return message
    }
    
    return null;
  }
  export const checkPhoneNumber=(value:string,cantBeEmpty:TextObject,mustBeNumberic:TextObject,cantBeLessThanEight:TextObject)=> {
    if(value.length===0){
      return cantBeEmpty
    }
    if(value.length<8){
      return cantBeLessThanEight
    }
    
    if(value.search(/[a-z]/)>1 || value.search(/[A-Z]/)>1)
      return mustBeNumberic
    
    return null;
  }
  export const checkMatch=(value:string,value1:string,message)=> {
    if(value!==value1){
      return message
    }
    
    return null;
  }
  
  export const checkPassword = (password:string) => {
    if(password.length<8){
      return{
        ar:"كلمة السر يجب ان تتكون من 8 أحرف على الأقل",
        en:"Password must contain 8 characters at minimum!",
        fr:"Le mot de passe doit contenir 8 charactères au minimum"
      }
    }
    if(password.search(/[a-z]/) < 0){
        return {
            ar:"كلمة السر يجب ان تتضمن حرف صغير على الأقل",
            en:"Password must contain at least 1 lower case character!",
            fr:"Le mot de passe doit contenir au moins un charactère minuscule"
        }
    }
    if(password.search(/[A-Z]/) < 0){
        return {
            ar:"كلمة السر يجب ان تتضمن حرف كبير على الأقل",
            en:"Password must contain at least 1 upper case character!",
            fr:"Le mot de passe doit contenir au moins un charactère majuscule"
        }
    }
    if(password.search(/[0-9]/) < 0){
        return {
            ar:"كلمة السر يجب ان تتضمن رقم على الأقل",
            en:"Password must contain at least 1 number!",
            fr:"Le mot de passe doit contenir au moins un nombre"
        }
    }
    return null;
  }

  export const checkInputArrayHasError = (inputArray:FormItem[]) => {
    console.log(inputArray.map(item=>item.error===null))
     if(inputArray.map(item=>item.error===null).includes(false)){

        return true
     }
     return false
  }