import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DASHBOARD = (props) => {

  const { navigation } = props;

  return (

    <DrawerContentScrollView {...props}>

      <View style={styles.profileSection}>
        <Image 
          source={require('../IMAGES/group.png')}  
          style={styles.profileImage} 
        />
        <Text style={styles.profileText}>GROUP5_CUTIE</Text>  
        <Text style={styles.line}>____________________________</Text>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity onPress={() => navigation.navigate('STARTED')} style={styles.align}>
        <Text style={styles.lines}>____________________________</Text>
        <Text style={styles.logoutText}>Log-out</Text>
      </TouchableOpacity>

    </DrawerContentScrollView>

  );

};

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  profileText: {
    fontFamily:'ZillaSlab-Bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 35,
  },
  logoutText: {
    padding: 10,
    color: 'white',
    fontSize: 18,
    fontFamily: 'ZillaSlab-Bold',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  line: {
    fontFamily: 'ZillaSlab-Regular',
    color: 'white',
    textDecorationLine: 'underline',
  },
  lines: {
    fontFamily: 'ZillaSlab-Regular',
    color: 'white',
    paddingTop: 355,
    textDecorationLine: 'underline',
  },
  align: {
    alignItems: 'center',
  }
});

export default DASHBOARD;
