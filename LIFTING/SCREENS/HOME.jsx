import { Text, View, Image, ScrollView, Modal, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import homelayouts from '../LAYOUTS/HOMELAYOUTS';
import { SafeAreaView } from 'react-native-safe-area-context';
import fonts from '../FONTS/Typography';

const workoutData = [
  {
    title: 'BICEPS', 
    description: 'The biceps brachii, commonly known as the biceps, are a two-headed muscle located on the front of the upper arm. Their primary function is to allow the elbow to bend (flexion) and to rotate the forearm. The biceps are a key muscle for pulling motions and are crucial for many upper-body movements.', 
    exercises: [
      {
        name: 'Dumbbell Curls',
        steps: [
          'Description: Stand with feet shoulder-width apart, holding a dumbbell in each hand. Curl the weights towards your shoulders and slowly lower.',
          'Tip: Focus on controlled movement and avoid swinging.',
          'Rest: 45-60 seconds between sets',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/dumbbell.gif')
      },
      {
        name: 'Hammer Curls',
        steps: [
          'Description: Hold dumbbells with palms facing each other. Curl the weights towards your shoulders.',
          'Tip: Keep your wrists steady for better forearm engagement.',
          'Rest: 45-60 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/hammer.gif')
      },
      {
        name: 'Concentration Curls',
        steps: [
          'Description: Sit on a bench with your elbow against your thigh. Curl the dumbbell towards your shoulder.',
          'Tip: Focus on squeezing the biceps at the top of the movement.',
          'Rest: 45-60 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/concentration.gif')
      },
      {
        name: 'Barbell Curls',
        steps: [
          'Description: Stand with a shoulder-width grip on the barbell, curl it towards your chest, and slowly lower it.',
          'Tip: Keep elbows tucked in to prevent shoulder involvement.',
          'Rest: 45-60 seconds between sets.',
          '• 4 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/barbell.gif')
      },
      {
        name: 'Preacher Curls',
        steps: [
          'Description: Perform curls with your arms supported on a preacher bench.',
          'Tip: Control the lowering phase to maximize muscle tension.',
          'Rest: 45-60 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/preacher.gif')
      },
    ],
    image: require('../IMAGES/biceps.png')
  },
  {
    title: 'TRICEPS', 
    description: 'The triceps brachii, or triceps, are a three-headed muscle located on the back of the upper arm. Their main function is elbow extension, or straightening the arm. They play a major role in pushing movements and are essential for pressing exercises.', 
    exercises: [
      {
        name: 'Tricep Dips',
        steps: [
          'Description: Lower your body using parallel bars or a bench and push back up.',
          'Tip: Keep elbows close to your body to maximize tricep engagement.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/tricep.gif')
      },
      {
        name: 'Tricep Pushdowns',
        steps: [
          'Description: Push the cable bar down & extend your arms fully before returning to the start.',
          'Tip: Focus on keeping elbows locked in place.',
          'Rest: 60-90 seconds between sets.',
          '• 4 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/pushdown.gif')
      },
      {
        name: 'Overhead Tricep Extension',
        steps: [
          'Description: Hold a dumbbell overhead, lower it behind your head, and then extend your arms.',
          'Tip: Keep your elbows close to avoid shoulder strain.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/overhead.gif')
      },
      {
        name: 'Skull Crushers',
        steps: [
          'Description: Lower an EZ bar towards your forehead and press it back up.',
          'Tip: Maintain control throughout the movement.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/crusher.gif')
      },
      {
        name: 'Close-Grip Bench Press',
        steps: [
          'Description: Lower a barbell to your chest with a narrow grip and press back up.',
          'Tip: Keep elbows tucked to focus on triceps.',
          'Rest: 60-90 seconds between sets.',
          '• 4 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/closegrip.gif')
      },
    ],
    image: require('../IMAGES/triceps.png')
  },
  {
    title: 'SHOULDERS', 
    description: 'The deltoid muscles, located around the shoulder joint, consist of three parts: anterior (front), lateral (side), and posterior (rear). These muscles are responsible for a wide range of arm movements, including lifting, rotating, and stabilizing the shoulder.', 
    exercises: [
      {
        name: 'Shoulder Press',
        steps: [
          'Description: Press dumbbells or a barbell overhead, then lower them back down to shoulder height.',
          'Tip: Engage your core to avoid arching your back.',
          'Rest: 60-90 seconds between sets.',
          '• 4 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/shoulder.gif')
      },
      {
        name: 'Lateral Raises',
        steps: [
          'Description: Raise dumbbells out to the sides until shoulder height, then lower.',
          'Tip: Avoid using momentum; lift slowly.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 12-15 reps'
        ],
        guide: require('../IMAGES/lateral.gif')
      },
      {
        name: 'Front Raises',
        steps: [
          'Description: Lift dumbbells in front of your body to shoulder height, then lower back down.',
          'Tip: Focus on raising with your shoulders, not swinging.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 12-15 reps'
        ],
        guide: require('../IMAGES/front.gif')
      },
      {
        name: 'Arnold Press',
        steps: [
          'Description: Rotate your wrists during the press to target different heads of the shoulder muscles.',
          'Tip: Keep the motion controlled and engage the full range of motion.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/arnold.gif')
      },
      {
        name: 'Skull Crushers',
        steps: [
          'Description: Pull handles in a reverse fly motion to target rear deltoids.',
          'Tip: Focus on squeezing your shoulder blades together.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 12-15 reps'
        ],
        guide: require('../IMAGES/crusher.gif')
      },
    ],
    image: require('../IMAGES/shoulders.png')
  },
  {
    title: 'CHEST', 
    description: 'The pectoral muscles, or pecs, are located on the front of the chest. The two main muscles, pectoralis major and pectoralis minor, control arm movements like pushing, lifting, and rotating.', 
    exercises: [
      {
        name: 'Bench Press',
        steps: [
          'Description: Press a barbell or dumbbells from your chest and lower it back down.',
          'Tip: Ensure controlled movement and keep feet flat on the ground.',
          'Rest: 60-90 seconds between sets.',
          '• 4 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/bench.gif')
      },
      {
        name: 'Push-Ups',
        steps: [
          'Description: Lower your body until your chest is just above the floor, then press back up.',
          'Tip: Keep your core tight and body in a straight line.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 15-20 reps'
        ],
        guide: require('../IMAGES/pushup.gif')
      },
      {
        name: 'Incline Bench Press',
        steps: [
          'Description: Perform a bench press on an incline to focus on the upper chest.',
          'Tip: Avoid arching your lower back excessively.',
          'Rest: 60-90 seconds between sets.',
          '• 4 sets of 8-10 reps'
        ],
        guide: require('../IMAGES/incline.gif')
      },
      {
        name: 'Chest Flys',
        steps: [
          'Description: Perform a wide arc movement with dumbbells to target the chest.',
          'Tip: Control the motion and avoid overextending.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/chest.gif')
      },
      {
        name: 'Cable Chest Crossover',
        steps: [
          'Description: Pull cables together in front of you, focusing on squeezing your chest.',
          'Tip: Maintain a slight bend in your elbows.',
          'Rest: 60-90 seconds between sets.',
          '• 3 sets of 12-15 reps'
        ],
        guide: require('../IMAGES/fly.gif')
      },
    ],
    image: require('../IMAGES/chest.png')
  },
  {
    title: 'ABS', 
    description: 'The abdominal muscles, commonly referred to as the abs, consist of several muscle groups: rectus abdominis (six-pack), obliques (side abs), and transverse abdominis. They are responsible for core stability, protecting internal organs, and assisting with movements like bending, twisting, and stabilizing the torso.', 
    exercises: [
      {
        name: 'Plank',
        steps: [
          'Description: Hold a plank position, keeping your body straight.',
          'Tip: Engage your core and avoid sagging hips.',
          'Rest: 30-45 seconds between sets.',
          '• 3 sets of 30-60 seconds'
        ],
        guide: require('../IMAGES/plank.gif')
      },
      {
        name: 'Russian Twists',
        steps: [
          'Description: Twist your torso while holding a weight or ball.',
          'Tip: Keep your feet off the ground for added difficulty.',
          'Rest: 30-45 seconds between sets.',
          '• 3 sets of 20-30 reps (total)'
        ],
        guide: require('../IMAGES/twist.gif')
      },
      {
        name: 'Hanging Leg Raises',
        steps: [
          'Description: Raise your legs towards your chest while hanging from a bar.',
          'Tip: Avoid swinging to maintain tension in the abs.',
          'Rest: 30-45 seconds between sets.',
          '• 3 sets of 10-12 reps'
        ],
        guide: require('../IMAGES/hanging.gif')
      },
      {
        name: 'Bicycle Crunches',
        steps: [
          'Description: Alternate bringing your elbow to the opposite knee in a twisting motion.',
          'Tip: Focus on controlled, deliberate twists to engage your obliques.',
          'Rest: 30-45 seconds between sets.',
          '• 3 sets of 20-30 reps (total)'
        ],
        guide: require('../IMAGES/bicycle.gif')
      },
      {
        name: 'Sit-Ups',
        steps: [
          'Description: Perform traditional sit-ups, bringing your upper body towards your knees.',
          'Tip: Avoid using momentum; rely on core strength.',
          'Rest: 30-45 seconds between sets.',
          '• 3 sets of 15-20 reps'
        ],
        guide: require('../IMAGES/situp.gif')
      },
    ],
    image: require('../IMAGES/abs.png')
  }
];

export default function HOME({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);

  const openModal = (index) => {
    setCurrentWorkoutIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => { 
    setModalVisible(false);
  };

  const currentWorkout = workoutData[currentWorkoutIndex];

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

      <View style={homelayouts.positionhome}>
        <Text style={fonts.Home}>Home</Text>
      </View>

      <View style={homelayouts.backgroundquotes}>
        <Text style={fonts.Quotes}>
          "Lifting is a strength-training practice using resistance to build muscle and improve 
          overall fitness. Explore targeted workouts for each muscle group and learn how to lift 
          effectively."
        </Text>
      </View>

      <View style={homelayouts.exercise}>
        <Text style={fonts.Exercise}>Workout Plan</Text>
      </View>

      <View style={homelayouts.group}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={homelayouts.scrollContainer}>
          {workoutData.map((item, index) => (
            <View style={homelayouts.itemposition} key={index}>
              <TouchableOpacity onPress={() => openModal(index)}>
                <View style={homelayouts.item} key={index}>
                  <Image source={item.image} style={homelayouts.picture} />
                  <Text style={fonts.Title}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
      >
        <View style={homelayouts.modalContainer}>
          <View style={homelayouts.modalHeader}>
            <TouchableOpacity onPress={closeModal}>
              <Image source={require('../IMAGES/left.png')} style={homelayouts.modalBackIcon} />
            </TouchableOpacity>

            <View style={homelayouts.con}>
              <Text style={fonts.ModalTitle}>{currentWorkout.title}</Text>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text style={fonts.ExerciseDescription}>{currentWorkout.description}</Text>
            <Image source={currentWorkout.image} style={homelayouts.modalImage} />

            {currentWorkout.exercises.map((exercise, exerciseIndex) => (
              <View key={exerciseIndex} style={homelayouts.exerciseContainer}>
                <Text style={fonts.ExerciseName}>
                  {exercise.name}
                </Text>

                {exercise.steps.map((step, stepIndex) => (
                  <Text key={stepIndex} style={fonts.ExerciseStep}>
                    {`${step}`}
                  </Text>
                ))}

               <Image source={exercise.guide} style={fonts.guide} />
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>

    </SafeAreaView>

  );
  
}
