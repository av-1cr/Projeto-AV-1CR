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
    botao:{
        backgroundColor: '#737380',
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    add: {
        
        alignItems: 'center',
        
        
    },
    textoAdd:{
        fontWeight: 'bold',
        fontSize: 25,
        
    },

    textoNome:{
        fontSize: 25
    },
    input:{
        backgroundColor: '#FFF',
        textAlign:'center',
        width: '90%',
        marginBottom: 15,
        color: '#000000',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,

    },
    btnAcessar: {
    backgroundColor:'#363a86',
    width: '30%',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
    },
    txtAcessar:{
        color: '#ffffff',
        fontSize: 14
      }
 
});