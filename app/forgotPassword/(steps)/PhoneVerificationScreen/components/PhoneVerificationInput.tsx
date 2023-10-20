import { HStack, View } from "native-base";
import React, { useState,useRef, useCallback, useEffect } from "react";
import SingleCharacterInput from "../../../../../components/core/SingleCharacterInput";
import { useDispatch, useSelector } from "react-redux";
import { selectProvidedCode, setProvidedCode } from "../../../../../redux/slices/phoneVerificationSlice";

const PhoneVerificationInput = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const dispatch = useDispatch();
  const providedCode = useSelector(selectProvidedCode)
    const ref1= useRef(null)
    const ref2= useRef(null)
    const ref3= useRef(null)
    const ref4= useRef(null)
    const ref5= useRef(null)
    const ref6= useRef(null)

    const handleChangeValue1 = useCallback(
        (value:string)=>{
            setValue1(value)
            if(value.length>0 && value.length<2)
              ref2.current.focus()

        },[]
    )
    const handleChangeValue2 = useCallback(
        (value:string)=>{
            setValue2(value)
            if(value.length>0 && value.length<2)
              ref3.current.focus()
        },[]
    )
    const handleChangeValue3 = useCallback(
        (value:string)=>{
            setValue3(value)
            if(value.length>0 && value.length<2)
              ref4.current.focus()
        },[]
    )
    const handleChangeValue4 = useCallback(
        (value:string)=>{
            setValue4(value)
            if(value.length>0 && value.length<2)
            ref5.current.focus()
        },[]
    )
    const handleChangeValue5 = useCallback(
        (value:string)=>{
            setValue5(value)
            if(value.length>0 && value.length<2)
              ref6.current.focus()
        },[]
    )
    const handleChangeValue6 = 
        (value:string)=>{
             setValue6(value);

    if (value.length > 0 && value.length < 2) {
        dispatch(setProvidedCode(value1 + value2 + value3 + value4 + value5 + value));
        ref6.current.focus();
    }

     if (value.length === 1) {
        ref6.current.blur();
    }

    console.log({providedCode});
             
        }
  const items = [
    {
      value: value1,
      setValue: handleChangeValue1,
      ref:ref1,
    },
    {
      value: value2,
      setValue: handleChangeValue2,
      ref:ref2,
    },
    {
      value: value3,
      setValue: handleChangeValue3,
      ref:ref3
    },
    {
      value: value4,
      setValue: handleChangeValue4,
      ref:ref4
    },
    {
      value: value5,
      setValue: handleChangeValue5,
      ref:ref5
    },
    {
      value: value6,
      setValue: handleChangeValue6,
      ref:ref6
    },
  ];
  useEffect(
    ()=>{
        ref1.current.focus();
    },[]
  )
  return (
    <HStack justifyContent={"center"} height={"md"} alignItems={"flex-start"} space={2}>
      {items.map((item, _index) => (
        <SingleCharacterInput
        key={_index}
        rest={{w:"12%",h:"15%",fontSize:24,fontWeight:"bold",textAlign:"center",ref:item.ref}}
          value={item.value}
          setValue={item.setValue}
        />
      ))}
    </HStack>
  );
};

export default PhoneVerificationInput;
