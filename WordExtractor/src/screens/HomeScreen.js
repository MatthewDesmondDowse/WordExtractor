import React from 'react';
import { View, Text } from 'react-native';
import CameraButton from '../components/CameraButton';

const HomeScreen =  () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Home Screen</Text>
            <CameraButton />
      </View>
    );
};

export default HomeScreen; 