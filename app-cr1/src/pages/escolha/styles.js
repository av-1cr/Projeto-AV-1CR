import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        paddingVertical: 300,
        backgroundColor: '#d0cecf'
    },

    header: {
       flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    },

    headerText: {
        flex:1,
        fontSize: 15,
        color:'#737380',
        textAlign: 'center'
    },

    headerTextBold: {
        fontWeight: 'bold'

    },
    TxtSERVIÇO:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20
    },
    TxtBUSCA:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20
    }
});