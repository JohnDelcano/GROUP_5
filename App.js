import NAVIGATIONS from './LIFTING/ROUTES/NAVIGATIONS';
import React from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter_24pt-Black': require('../GROUP5_PE/LIFTING/FONTS/Inter_24pt-Black.ttf'),
    'Inter_18pt-SemiBold': require('../GROUP5_PE/LIFTING/FONTS/Inter_18pt-SemiBold.ttf'),
    'Inter_28pt-Regular': require('../GROUP5_PE/LIFTING/FONTS/Inter_28pt-Regular.ttf'),
    'Inter_24pt-Bold': require('../GROUP5_PE/LIFTING/FONTS/Inter_24pt-Bold.ttf'),
    'ZillaSlab-Bold': require('../GROUP5_PE/LIFTING/FONTS/ZillaSlab-Bold.ttf'),
    'ZillaSlab-Medium': require('../GROUP5_PE/LIFTING/FONTS/ZillaSlab-Medium.ttf'),
    'ZillaSlab-Regular': require('../GROUP5_PE/LIFTING/FONTS/ZillaSlab-Regular.ttf'),
    }); 

    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />  
        </View>
      );
    }

  return (
    <NAVIGATIONS/>
  );
};
