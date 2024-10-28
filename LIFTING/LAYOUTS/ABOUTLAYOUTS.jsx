import { StyleSheet } from "react-native";

const aboutlayouts = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1E0A',
  },
  title: {
    width: 140,
    height: 140,
  },
  backgroundpicture: {
    paddingLeft: 60,
    marginTop: -10,
  },
  background: {
    flexDirection: 'row',
    backgroundColor: '#226C01',
    width: '110%',
    height: '12%',
    alignItems: 'center',
    borderBottomRightRadius: 170,
  },
  positionabout: {
    paddingLeft: 118,
    paddingTop: 15,
  },
  backgroundquotes: {
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: -555,
  },
  developer: {
    backgroundColor: '#226C01',
    padding: 10,
    marginVertical: 10,
    width: '95%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  contents: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  picture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    color: 'white',
    fontFamily: 'ZillaSlab-Regular',
    fontSize: 22,
  },
  role: {
    color: 'white',
    fontFamily: 'ZillaSlab-Regular',
    fontSize: 15,
  },
  group: {
    flexDirection: 'column',
    flex: 1,
  },
  descriptionContainer: {
    marginTop: 5, // Add space above the description
  },
  description: {
    color: 'white',
    fontFamily: 'ZillaSlab-Regular',
    fontSize: 15,
    paddingTop: 10,
    marginLeft: 6,
    paddingBottom: 6,
    flexShrink: 1,
    paddingRight: 9,
  },
  grouppic: {
    width: '90%',
    height: '35%',
    marginLeft: 18,
    marginBottom: 40,
  },

});

export default aboutlayouts;
