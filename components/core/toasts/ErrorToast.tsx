import React from 'react'
import useCustomToast from '../CustomToast'
import { TextObject } from '../../../types'

const useErrorToast = () => {
   const toast =  useCustomToast();
   return ({title,message}:{title?:TextObject,message:TextObject}) => {
    toast({
        type:"ERROR",
        title,
        message
    })
   }
}

export default useErrorToast
