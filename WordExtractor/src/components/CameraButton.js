import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permission to access camera roll denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setSelectedImage({ uri: result.uri });
    }
  };

  return (
    <View>
      {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
      <Button title="Open Camera" onPress={openCamera} />
    </View>
  );
};

export default CameraButton;
