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
import CompleteProfileForm from '../../components/CompleteProfileForm'
import ImagePicker from './components/ImagePicker'

const index = () => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [imageUri,setImageUri] = useState(null)
  const router = useRouter();
  const dispatch = useDispatch();
  const handleImageSelected = useCallback(
    (uri: string) => {
      setImageUri(uri)
      console.log('Selected Image URI:', imageUri);
      // You can do further processing here, like sending the image to a server, etc.
    },[imageUri]
  )
  const submitHandler = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("Submitted")
      router.push("/signup/steps/CompleteProfileThirdScreen")
    }, 3000);
 
      
   
  }, [loading]);
  useEffect(
    ()=>{
      if(imageUri==null){
        setError(strings.genericError)
      }
    },[]
  )
  return (
      <><PopupComponent>
          <HeaderText text={strings.setupProfileImage} />
      </PopupComponent><PopupComponent>
              <SubHeaderText
                  text={{
                      ar: "لنقم بوضع صورة للحساب الخاص بك!",
                      en: "Let's setup your profile picture!",
                      fr: "Configureons votre photo de profil!",
                  }} />
          </PopupComponent>
              <ImagePicker onImageSelected={handleImageSelected} />
          <PopupComponent >
                  <Stack direction="column">
                  <MainButton
                    margin={5}
                  rightIcon={getOrientation() === "LATIN" ? null : null}
                  leftIcon={getOrientation() === "ARABIC" ? null : null}
                  isLoading={loading}
                  isDisabled={loading == true && error !=null}
                  onPress={submitHandler}
                  orientation={getOrientation()}
              >
                  {loading === true ? (
                      <Spinner color={"muted.50"} />
                  ) : (
                      <Translator text={strings.next} color={"muted.100"} />
                  )}
              </MainButton>
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
