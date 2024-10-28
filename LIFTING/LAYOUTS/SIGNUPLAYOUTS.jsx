import { StyleSheet } from "react-native";

const signuplayout = StyleSheet.create({
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
    marginTop: -240,
    marginBottom: 10,
  },
  backgroundpicture: {
    marginTop: -60,
    marginLeft: 110,
  },
  picture: {
    width: '60%',
    height: '60%',
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
    fontFamily: 'Inter_28pt-Regular',
    flex: 1,
  },
  passwordToggleButton: {
    marginLeft: 10,
  },
});

export default signuplayout;