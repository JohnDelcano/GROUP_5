import { Text, View, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../FONTS/Typography';
import siginlayout from '../LAYOUTS/SIGNINLAYOUTS';

export default function SIGNIN({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (

    <SafeAreaView style={siginlayout.container}>

      <StatusBar backgroundColor='#021D00'/>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('STARTED')}>
          <Image source={require('../IMAGES/left.png')} style={fonts.Back} />
        </TouchableOpacity>
      </View>

      <View style={siginlayout.backgroundpicture}>
        <Image source={require('../IMAGES/jaj.png')} style={siginlayout.picture} />
      </View>

      <View style={siginlayout.inputs}>
        <TextInput
          style={fonts.Input}
          placeholder='Enter your email'
          value={email}
          onChangeText={setEmail}
        />

        <View style={siginlayout.passwordContainer}>
          <TextInput
            style={siginlayout.passwordInput}
            placeholder='Enter your password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
          style={siginlayout.passwordToggleButton}
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

      <TouchableOpacity style={siginlayout.forgot}>
        <Text style={fonts.Forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={siginlayout.background}>
        <View style={siginlayout.position}>
          <TouchableOpacity style={siginlayout.button} onPress={() => navigation.navigate('Drawer')}>
            <Text style={fonts.button}>Sign-In</Text>
          </TouchableOpacity>
        </View>

        <View style={siginlayout.accountcontainer}>
          <Text style={fonts.Text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
            <Text style={fonts.Account}>Sign-In</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>

  );
  
}
