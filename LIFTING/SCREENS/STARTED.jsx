import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import fonts from '../FONTS/Typography';
import startedlayout from '../LAYOUTS/STARTEDLAYOUTS';


export default function STARTED({ navigation }) {

  return (

    <SafeAreaView style={startedlayout.background}>
      
      <Image
        source={require('../IMAGES/background.jpg')}
        style={startedlayout.backgroundpicture}
      />

      <View style={startedlayout.position}>
        <TouchableOpacity style={startedlayout.button} onPress={() => navigation.navigate('SIGNIN')}>
          <Text style={fonts.button}>GET STARTED</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );

}
