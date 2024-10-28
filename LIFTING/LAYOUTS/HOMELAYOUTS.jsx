import { StyleSheet } from "react-native";

const  homelayouts = StyleSheet.create({
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
    positionhome: {
        paddingTop: 20,
        paddingLeft: 149,
    },
    backgroundquotes: {
        marginLeft: 15,
        marginTop: 25,
    
    },
    exercise: {
        marginTop: -150,
        paddingLeft: 137,
    },
    group: {
        height: '40%',
        paddingTop: 20,
        marginLeft: 15,
        flexDirection: 'row',
    },
    scrollContainer: {
        flexGrow: 1, 
        justifyContent: 'flex-start',
    },
    item: {
        backgroundColor: '#226C01',
        height: 200, 
        width: 110,   
        borderRadius: 20,
        marginRight: 15, 
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    picture: {
       width: 150,
       height: 150,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#1B1B1B',
      },
      modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#226C01',
        borderBottomRightRadius: 140,
        width: '110%',
        height: 95,
      },
      modalBackIcon: {
        width: 40,
        height: 40,
        marginLeft: 15,
        marginTop: -10,
      },
      modalTitleImage: {
        width: 140,
        height: 140,
        marginLeft: 75,
      },
      modalImage: {
        width: 350,
        height: 350,
        borderRadius: 10,
        marginVertical: 10,
        marginBottom: -20,
      },
      modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#226C01', 
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      },

      con: {
        marginBottom: 10,
        marginLeft: -20,
      },
      Sort: {
        width: 55,
        height: 55,
      },
})

export default homelayouts;
