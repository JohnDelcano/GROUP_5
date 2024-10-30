import { StyleSheet } from 'react-native';

const startedlayout = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#055108',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    backgroundColor: '#719C5C',
    width: 223,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  position: {
    flex: 1,
    paddingTop: '179%',
    paddingLeft: 30,
  },
  backgroundpicture: {
    width: '100%',
    height: '85%',
    position: 'absolute',
    resizeMode: 'cover',
    borderBottomRightRadius: 130,
    elevation: 10,
    shadowColor: '#000',
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default startedlayout;
