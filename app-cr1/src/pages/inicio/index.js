import React, {useState, useEffect} from 'react';
import { 
    View, 
    Image, 
    Text,  
    TextInput, 
    TouchableWithoutFeedback, 
    FlatList,
    Animated,
    Keyboard,
    TouchableOpacity
    } from 'react-native';

import logoImg from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


   


export default function inicio () {
  
        const [task, updateTask] = useState('');
        const [tasks, updateTasks] = useState([]);

        const handleAdd = () => {
            updateTasks([... tasks, task]);
            updateTask('');
        };
    
        const handleRenderTask = ({item}) => <Text>{item}</Text>;
        //const de efeito
        const [logo] = useState(new Animated.ValueXY({x:95, y:45}));
        const navigation = useNavigation();

        useEffect(()=>{
            keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
            keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        });
        function navigationToInicio () {
            navigation.navigate('home');
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
                    Escolha a <Text style={styles.headerTextBold}> Sua Guarnição: </Text>                                                 
                </Text>
            </View>

            <View style={styles.add}>
              
                <TextInput style={styles.input} 
                onChangeText={text => updateTask(text)} value={task} 
                keyboardType="numeric"
                placeholder = "Digíte o RGPM do Militar" 
                />

                <View style={styles.botao}>
                     <TouchableWithoutFeedback onPress={handleAdd}>
                      <Text style={styles.textoAdd} > + </Text>
                     </TouchableWithoutFeedback>
                </View>
                <FlatList 
                data={tasks}
                keyExtractor={item => item} 
                renderItem={handleRenderTask}
                />
                   <TouchableOpacity
        style={styles.btnAcessar} 
        onPress={navigationToInicio}
        >
          <Text style={styles.txtAcessar}>Acessar</Text>
        </TouchableOpacity>
            </View> 

        </View>
    
      
            );
};
