import { StyleSheet } from "react-native";

const siginlayout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021D00',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    backgroundColor: '#719C5C',
    width: 365,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  accountcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 170,
  },
  background: {
    backgroundColor: '#055108',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 15,
  },
  inputs: {
    alignItems: 'center',
    marginTop: -245,
  },
  backgroundpicture: {
    marginTop: -70,
    marginLeft: 110,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 18,
    height: 55,
    width: 350,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
    fontFamily: 'Inter_28pt-Regular',
  },
  passwordToggleButton: {
    marginLeft: 10,
  },
  picture: {
    width: '65%',
    height: '65%',
  },
});

export default siginlayout;