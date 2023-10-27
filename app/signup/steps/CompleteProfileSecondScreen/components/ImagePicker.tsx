import React, { useCallback, useState,useRef } from 'react';
import { Button, IconButton, Image, Pressable, View } from 'native-base';
import { launchImageLibrary } from 'react-native-image-picker';
import {AntDesign} from "@expo/vector-icons"
interface ProfilePictureUploaderProps {
  onImageSelected: (imageUri: string) => void;
}

const ImagePicker: React.FC<ProfilePictureUploaderProps> = ({ onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePicker = useCallback(
    () => {
        const options = {
          mediaType: 'photo',
          maxWidth: 300,
          maxHeight: 300,
        };
    
        launchImageLibrary({
            mediaType:"photo"
        }, (response) => {
          if (response.assets && response.assets[0]) {
            const uri = response.assets[0].uri;
            setSelectedImage(uri);
            onImageSelected(uri);
          }
        });
      },[selectedImage]
  )

      
  return (
    <View  rounded={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      {selectedImage ? (
       <Pressable _pressed={{opacity:0.8}} onPress={handleImagePicker} >
         <Image borderColor={"muted.900"} borderWidth={1} rounded={'full'} source={{ uri: selectedImage }} alt="Profile Picture" size="xl" />
        </Pressable>
      ) : (
        <IconButton onPress={handleImagePicker} icon={<AntDesign name='user' size={150} />} />
      )}
    </View>
  );
};

export default ImagePicker;

