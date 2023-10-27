import { HStack, Spinner, View , Stack} from 'native-base'
import React, { useCallback, useEffect, useState } from 'react'
import PopupComponent from '../../../../components/animations/PopupComponent'
import MainButton from '../../../../components/core/MainButton'
import Translator from '../../../../components/hoc/Translator'
import { strings } from '../../../../utils/strings'
import { getOrientation } from '../../../../utils/utilityFunctions'
import HeaderText from '../PhoneVerificationScreen/components/HeaderText'
import SubHeaderText from '../PhoneVerificationScreen/components/SubHeaderText'
import { useDispatch } from 'react-redux'
import {  useRouter } from 'expo-router'
import ProfileAdditionalInfosForm from './components/ProfileAdditionalInfosForm'

const index = () => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [imageUri,setImageUri] = useState(null)
  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("Submitted")
      router.replace("/")
    }, 3000);
 
      
   
  }, [loading]);

  return (
      <><PopupComponent>
          <HeaderText text={strings.setupProfileInfos} />
      </PopupComponent><PopupComponent>
              <SubHeaderText
                  text={strings.setupProfile} />
          </PopupComponent>
          <ProfileAdditionalInfosForm />
          <PopupComponent >
                  <Stack direction="column">
                  
              <MainButton
              bgColor={"white"}
              _pressed={{bgColor:"muted.100"}}
              borderColor={"muted.900"}
              borderWidth={"1"}
                    margin={5}
                  rightIcon={getOrientation() === "LATIN" ? null : null}
                  leftIcon={getOrientation() === "ARABIC" ? null : null}
                  onPress={submitHandler}
                  orientation={getOrientation()}
              >
                  {loading === true ? (
                      <Spinner color={"muted.50"} />
                  ) : (
                      <Translator text={strings.skip} fontWeight={"semibold"} color={"muted.900"} />
                  )}
              </MainButton>
                  </Stack>
              
          </PopupComponent></>
  )
}

export default index
