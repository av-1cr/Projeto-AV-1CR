import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        paddingVertical: 200,
        backgroundColor: '#d0cecf'
    },

    header: {
       flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    },

    icones:{
      alignItems: 'center'
    },
    txtVEICULO:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20
    },
    txtABORDADO:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20
    },
    txtCOMUNITARIA:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20
    },
    iconeComunitaria:{
    alignItems: 'center'
    }
});