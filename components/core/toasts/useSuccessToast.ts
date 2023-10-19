import React from 'react'
import useCustomToast from '../CustomToast'
import { TextObject } from '../../../types'

const useSuccessToast = () => {
   const toast =  useCustomToast();
   return ({title,message}:{title?:TextObject,message:TextObject}) => {
    toast({
        type:"SUCCESS",
        title,
        message
    })
   }
}

export default useSuccessToast
