import React, {useState, useEffect} from 'react';
import { View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import buscaVeicular from '../../assets/veiculo.png';
import buscaPessoa from '../../assets/pessoa.png';
import comunitaria from '../../assets/comunitaria.png';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


export default function home () {
  
  

    return (
       <View style={styles.container}>
               <View style={styles.header}> 
                  <Image 
                  source={logoImg} />
               </View>
               <View style={styles.icones}>
                     <TouchableOpacity style={styles.iconeComunitaria}>
                        <Image style={styles.iconeveic} 
                        source={buscaVeicular} />
                        <Text style={styles.txtVEICULO}>Busca Veicular</Text>
                     </TouchableOpacity>
                     
                     <TouchableOpacity style={styles.iconeComunitaria}>
                        <Image style={styles.iconeveic} 
                        source={buscaPessoa} />
                        <Text style={styles.txtABORDADO}>Busca de Abordado</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.iconeComunitaria}>
                        <Image 
                        source={comunitaria} />
                        <Text style={styles.txtCOMUNITARIA}>Açoes de Policia comunitaria</Text>
                     </TouchableOpacity>
               </View>
       </View>
    );
    
}