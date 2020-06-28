import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Animated, 
  Keyboard, 
  } from 'react-native';
  //importação da navegação que puxa a rota
  import {useNavigation} from '@react-navigation/native';

//import Routes from './src/routes';
//import styles from './src/pages/inicio/styles';

export default function Login() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState (new Animated.Value(0));
  const [logo] = useState (new Animated.ValueXY({x:192, y:192}));
  const navigation = useNavigation();

  function navigationToHome () {
    navigation.navigate('escolha');
  }

  useEffect (()=> {
    keyboardDidShowListener = Keyboard.addListener ('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener ('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue:0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity,{
        toValue:1,
        duration: 500,
      })
    ]).start();

  }, []);

  function keyboardDidShow (){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 100,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
      }),
    ]).start();

  }
  function keyboardDidHide (){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 192,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 192,
        duration: 100,
      }),
    ]).start();
    
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
      <Animated.Image 
        style={{
          width:logo.x,
          height: logo.y,
        }}
        source={require('../../../assets/icon.png')} />
      </View>

      <Animated.View 
      style={[
        styles.viewInput, 
             {
         opacity: opacity,
         transform:[
           {translateY: offset.y }
         ]
        }
        ]}
        >

        <TextInput 
        style={styles.textOInput} 
        placeholder = "C.P.F." 
        autoCorrect={false} 
        onChangeText ={() => {}} 
        keyboardType="numeric"
        />
          <TextInput 
          style={styles.textOInput} 
          placeholder = "Senha" 
          autoCorrect={false} 
          onChangeText ={() => {}} 
          secureTextEntry={true}
          
          />

        <TouchableOpacity
        style={styles.btnAcessar} 
        onPress={navigationToHome}
        >
          <Text style={styles.txtAcessar}>Acessar</Text>
        </TouchableOpacity>
        
      </Animated.View>
    </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0cecf'
  },
  viewLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  viewInput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    
  },
  textOInput:{
    backgroundColor: '#FFF',
    width: '50%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  btnAcessar: {
    backgroundColor:'#363a86',
    width: '30%',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAcessar:{
    color: '#ffffff',
    fontSize: 14
  }
 });