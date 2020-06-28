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
    icones:{
       
        alignItems: 'flex-end',
        position: 'absolute',
        top: 100,
        left: 10
        
    },
    iconesCadastro:{
       
        alignItems: 'flex-end',
        position: 'absolute',
        top: 100,
       right: 10
    }
});