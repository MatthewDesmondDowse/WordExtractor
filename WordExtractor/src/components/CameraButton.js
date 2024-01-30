import React, { useState, useEffect } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access camera denied');
      }
    })();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts.

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
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
