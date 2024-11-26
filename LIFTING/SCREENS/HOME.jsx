import { Text, View, Image, ScrollView, Modal, TouchableOpacity, StatusBar, StyleSheet,FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import homelayouts from '../LAYOUTS/HOMELAYOUTS';
import { SafeAreaView } from 'react-native-safe-area-context';
import fonts from '../FONTS/Typography';
import { database } from "../../FIREBASECONFIG";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { ref, onValue, set } from 'firebase/database';



export default function HOME({ navigation }) {

  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueRef = ref(database, "value");
    return onValue(valueRef, (snapshot) => {
      setValue(snapshot.val());
    });
  }, []);

  const handlePlus = () => {
    const valueRef = ref(database, "value");
    set(valueRef, value + 1);
  };

  const handleMinus = () => {
    const valueRef = ref(database, "value");
    set(valueRef, value - 1);
  };



 

  return (

    <SafeAreaView style={homelayouts.container}>

      <StatusBar backgroundColor='#226C01'/>

      <View style={homelayouts.background}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../IMAGES/sort.png')} style={fonts.Sort} />
        </TouchableOpacity>

        <View style={homelayouts.backgroundpicture}>
          <Image source={require('../IMAGES/lift.png')} style={homelayouts.title} />
        </View>
      </View>

    

      <View style={styles.countContainer}>
        <Text style={styles.countText}>Counter </Text>
        <Text style={styles.value}>{value}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleMinus}>
            <Text style={styles.countText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePlus}>
            <Text style={styles.countText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

  

  

    </SafeAreaView>

  );
  
}

const styles = StyleSheet.create({
  countContainer: {
    justifyContent: "center",
    backgroundColor: "green",
    alignItems: "center",
    padding: 20,
    marginTop: 80,
    borderRadius: 10,
  },
  countText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#49bc43",
  },
  button: {
    backgroundColor: "#40cc33",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  value: {
    fontSize: 100,
    color: "white",
    textAlign: "center",
  },

});
