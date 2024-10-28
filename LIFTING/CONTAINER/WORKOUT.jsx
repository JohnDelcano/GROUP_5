const workoutData = [
  {
    title: 'BICEPS', 
    description: 'The biceps brachii, commonly known as the biceps, are a two-headed muscle located on the front of the upper arm. Their primary function is to allow the elbow to bend (flexion) and to rotate the forearm. The biceps are a key muscle for pulling motions and are crucial for many upper-body movements.', 
    exercises: [
      {
        name: 'Bicep Curls (with dumbbells or resistance bands)',
        steps: [
          'Stand tall with a dumbbell in each hand, arms at your sides, palms facing forward.',
          'Curl the weights toward your shoulders, keeping your elbows close to your torso.',
          'Slowly lower back down and repeat.'
        ]
      },
      {
        name: 'Hammer Curls (targets brachialis and biceps)',
        steps: [
          'Similar to bicep curls, but keep your palms facing each other throughout the movement.',
          'Lift the dumbbells up while maintaining this neutral grip.'
        ]
      },
      {
        name: 'Chin-ups (bodyweight exercise)',
        steps: [
          'Grab a bar with palms facing you, hands shoulder-width apart.',
          'Pull yourself up until your chin is over the bar, then slowly lower yourself back down.'
        ]
      }
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
          'Place your hands shoulder-width apart on a bench or chair.',
          'Lower your body until your arms are at a 90-degree angle.',
          'Press back up to the starting position and repeat.'
        ]
      },
      {
        name: 'Overhead Tricep Extension',
        steps: [
          'Hold a dumbbell with both hands and lift it above your head.',
          'Lower the dumbbell behind your head, keeping your elbows close to your ears.',
          'Extend your arms back to the starting position.'
        ]
      },
      {
        name: 'Close-Grip Push-ups',
        steps: [
          'Get into a push-up position but keep your hands close together under your chest.',
          'Lower your body while keeping your elbows tucked close to your sides.',
          'Push back up to the starting position and repeat.'
        ]
      }
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
          'Hold a dumbbell in each hand at shoulder height with palms facing forward.',
          'Press the weights overhead until your arms are fully extended.',
          'Lower back down to shoulder height and repeat.'
        ]
      },
      {
        name: 'Lateral Raise',
        steps: [
          'Stand tall with a dumbbell in each hand at your sides.',
          'Lift your arms out to the side until they are parallel to the floor.',
          'Lower back down and repeat.'
        ]
      },
      {
        name: 'Front Raise',
        steps: [
          'Hold a dumbbell in each hand with your arms in front of you.',
          'Lift the weights straight ahead until your arms are parallel to the floor.',
          'Lower back down and repeat.'
        ]
      }
    ],
    image: require('../IMAGES/shoulders.png')
  },
  {
    title: 'CHEST', 
    description: 'The pectoral muscles, or pecs, are located on the front of the chest. The two main muscles, pectoralis major and pectoralis minor, control arm movements like pushing, lifting, and rotating.', 
    exercises: [
      {
        name: 'Push-ups',
        steps: [
          'Start in a plank position with your hands shoulder-width apart.',
          'Lower your body until your chest nearly touches the floor.',
          'Push yourself back up to the starting position.'
        ]
      },
      {
        name: 'Chest Press (with dumbbells)',
        steps: [
          'Lie on a bench with a dumbbell in each hand at chest level.',
          'Press the weights up until your arms are fully extended.',
          'Lower back down and repeat.'
        ]
      },
      {
        name: 'Chest Fly',
        steps: [
          'Lie on a bench with a dumbbell in each hand.',
          'Open your arms out to the sides, keeping a slight bend in your elbows.',
          'Bring the weights back together above your chest.'
        ]
      }
    ],
    image: require('../IMAGES/chest.png')
  },
  {
    title: 'ABS', 
    description: 'The abdominal muscles, commonly referred to as the abs, consist of several muscle groups: rectus abdominis (six-pack), obliques (side abs), and transverse abdominis. They are responsible for core stability, protecting internal organs, and assisting with movements like bending, twisting, and stabilizing the torso.', 
    exercises: [
      {
        name: 'Crunches',
        steps: [
          'Lie on your back with your knees bent and feet flat on the floor.',
          'Place your hands behind your head and lift your shoulders off the floor.',
          'Lower back down and repeat.'
        ]
      },
      {
        name: 'Plank',
        steps: [
          'Start in a forearm plank position with your body in a straight line.',
          'Hold this position, keeping your core engaged.',
          'Maintain the position for the desired amount of time.'
        ]
      },
      {
        name: 'Bicycle Crunches',
        steps: [
          'Lie on your back with your hands behind your head and legs lifted.',
          'Bring one knee toward your chest while rotating your opposite elbow toward it.',
          'Switch sides and continue alternating.'
        ]
      }
    ],
    image: require('../IMAGES/abs.png')
  }
];
 

export default WORKOUT;