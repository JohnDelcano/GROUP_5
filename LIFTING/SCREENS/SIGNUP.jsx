import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import signuplayout from '../LAYOUTS/SIGNUPLAYOUTS';
import fonts from '../FONTS/Typography';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SIGNUP({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={signuplayout.container}>
      <StatusBar backgroundColor='#021D00'/>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('SIGNIN')}>
          <Image source={require('../IMAGES/left.png')} style={fonts.Back} />
        </TouchableOpacity>
      </View>
      <View style={signuplayout.backgroundpicture}>
        <Image source={require('../IMAGES/logo.png')} style={signuplayout.picture} />
      </View>
      <View style={signuplayout.inputs}>
        <TextInput
          style={fonts.Input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={fonts.Input}
          placeholder='Enter your email'
          value={email}
          onChangeText={setEmail}
        />
        <View style={signuplayout.passwordContainer}>
          <TextInput
            style={signuplayout.passwordInput}
            placeholder='Enter your password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={signuplayout.passwordToggleButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <AntDesign
              name={passwordVisible ? 'eye' : 'eyeo'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={signuplayout.background}>
        <View style={signuplayout.position}>
          <TouchableOpacity style={signuplayout.button} onPress={() => navigation.navigate('SIGNIN')}>
            <Text style={fonts.button}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
        <View style={signuplayout.accountcontainer}>
          <Text style={fonts.Text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SIGNIN')}>
            <Text style={fonts.Account}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
