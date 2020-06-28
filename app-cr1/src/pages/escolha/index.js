import React, {useState, useEffect} from 'react';
import { 
    View, 
    Image, 
    Text,  
    Animated,
    Keyboard,
    TouchableOpacity
    } from 'react-native';

import logoImg from '../../assets/logo.png';
import serviço from '../../assets/serviço.png';
import folga from '../../assets/folga.png';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


   


export default function inicio () {
  
        const [task, updateTask] = useState('');
        const [tasks, updateTasks] = useState([]);

        
    
      
        //const de efeito
        const [logo] = useState(new Animated.ValueXY({x:95, y:45}));
        const navigation = useNavigation();

        useEffect(()=>{
            keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
            keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        });
        function navigationToInicio () {
            navigation.navigate('inicio');
        }
        function navigationToBusca () {
            navigation.navigate('busca');
        }
        
        function keyboardDidShow(){
          Animated.parallel([
            Animated.timing (logo.x,{
                toValue:0,
                duration:100,
            }),
            Animated.timing (logo.y,{
                toValue:0,
                duration:100,
            })
          ]).start();
        }
        function keyboardDidHide(){
            Animated.parallel([
                Animated.timing (logo.x,{
                    toValue:95,
                    duration:100,
                }),
                Animated.timing (logo.y,{
                    toValue:45,
                    duration:100,
                })
              ]).start();
        }
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Animated.Image style={{
                   width: logo.x,
                    height: logo.y,
                }} 
                source={logoImg} />
                <Text style={styles.headerText}>
                   Você está <Text style={styles.headerTextBold}> de Serviço? </Text>                                                 
                </Text>
                <TouchableOpacity  onPress={navigationToInicio}>
                <Image 
                source={serviço}
                
                />
                <Text style={styles.TxtSERVIÇO}>De Serviço</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={navigationToBusca}>
                <Image 
                source={folga}
               
                />
               </TouchableOpacity>
               <Text style={styles.TxtBUSCA}>Apenas Busca</Text>
            </View>

           

        </View>
    
      
            );
};
