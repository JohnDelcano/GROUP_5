import { Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import aboutlayouts from '../LAYOUTS/ABOUTLAYOUTS';
import { SafeAreaView } from 'react-native-safe-area-context';
import fonts from '../FONTS/Typography';

export default function HOME({ navigation }) {

  const [expandedDeveloper, setExpandedDeveloper] = useState(null);

  const developers = [
    {
      name: "Delcano, John Audrei",
      role: "Development, Design",
      description: "Given his creation of the app alongside Angela, they’ve brainstormed on the creation of the project and his expertise on the development that leads to an incredible outcome.",
      image: require('../IMAGES/Delcano.jpg'),
    },
    {
      name: "Dipon, Deserie",
      role: "Color Palette",
      description: "Given her expertise, she chose a dark color palette to highlight the application's strong aura, reflecting its concept of strength.",
      image: require('../IMAGES/Dipon.jpg'),
    },
    {
      name: "Espanola, Kyle Vincent",
      role: "Typography",
      description: "Given his expertise on typography he use a font style in which it will depicts the strength of the application",
      image: require('../IMAGES/Espanola.jpg'),
    },
    {
      name: "Francisco, Angela",
      role: "Design",
      description: "Given her creation of the application design was based on existing fitness applications, featuring various images to emphasize its purpose.",
      image: require('../IMAGES/Francisco.jpg'),
    },
    {
      name: "Masuela, Jhaye",
      role: "Insight on the project",
      description: "Given her expertise on what the project must look like and her insights on the designers work, the project had an amazing outcome.",
      image: require('../IMAGES/Masuela.jpg'),
    },
    {
      name: "Sarmiento, James",
      role: "Development",
      description: "Given his expertise on this and alongside with Delcano they’ve integrated the layout that the designers build in figma and implemented it in the application.",
      image: require('../IMAGES/Sarmiento.jpg'),
    },
  ];

  const toggleDescription = (index) => {
    setExpandedDeveloper(expandedDeveloper === index ? null : index);
  };

  return (

    <SafeAreaView style={aboutlayouts.container}>

      <StatusBar backgroundColor='#226C01' />

      <View style={aboutlayouts.background}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../IMAGES/sort.png')} style={fonts.Sort} />
        </TouchableOpacity>

        <View style={aboutlayouts.backgroundpicture}>
          <Image source={require('../IMAGES/lift.png')} style={aboutlayouts.title} />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: '238%' }}
      >
        <View style={aboutlayouts.positionabout}>
          <Text style={fonts.Home}>About us</Text>
        </View>

        <View style={aboutlayouts.backgroundquotes}>
          <Text style={fonts.Description}>
            "Welcome to LIFT, your go-to resource for learning about weightlifting and strength training! Our app is designed to provide clear,
            comprehensive documentation on lifting techniques and how to effectively target different muscle groups.
            Whether you're just getting started or looking to deepen your knowledge, we aim to guide you through the fundamentals
            of lifting and the key muscle groups involved in a well-rounded strength-training program."
          </Text>
        </View>
     
        <Image  source={require('../IMAGES/group.jpg')} style={aboutlayouts.grouppic}/>

        <View style={aboutlayouts.positionabout}>
          <Text style={fonts.Home}>Developers</Text>
        </View>

        <View style={aboutlayouts.contents}>
          {developers.map((developer, index) => (
            <View key={index} style={aboutlayouts.developer}>
              <Image source={developer.image} style={aboutlayouts.picture} />

              <View style={aboutlayouts.group}>
                <Text style={aboutlayouts.name}>{developer.name}</Text>
                <Text style={aboutlayouts.role}> - {developer.role}</Text>
              </View>

              <TouchableOpacity onPress={() => toggleDescription(index)}>
                <Image 
                source={expandedDeveloper === index ? require('../IMAGES/up.png') : require('../IMAGES/down.png')} 
                style={fonts.Back} 
                />
              </TouchableOpacity>

              {expandedDeveloper === index && (
                <View style={aboutlayouts.descriptionContainer}>
                  <Text style={aboutlayouts.description}>{developer.description}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>

  );

}
