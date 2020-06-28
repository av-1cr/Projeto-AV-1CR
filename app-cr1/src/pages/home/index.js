import React, {useState} from 'react';
import { View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import buscaVeicular from '../../assets/veiculo.png';
import buscaPessoa from '../../assets/pessoa.png';
import pb from '../../assets/pb.png';
import comunitaria from '../../assets/comunitaria.png';

import cadastroVeicular from '../../assets/veiculoCadastro.png';
import cadastroPessoa from '../../assets/pessoaCadastro.png';
import cadastroComunitaria from '../../assets/comunitariaCadastro.png';

//import {useNavigation} from '@react-navigation/native';
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
                        <Text style={styles.txtCOMUNITARIA}>Policia comunitaria</Text>
                     </TouchableOpacity>
                   
                     <TouchableOpacity style={styles.iconeComunitaria}>
                        <Image 
                        source={pb} />
                        <Text style={styles.txtPB}>Ponto Demonstrativo</Text>
                     </TouchableOpacity>
               </View>
               <View style={styles.iconesCadastro}>
                     <TouchableOpacity style={styles.iconeComunitariaCadastro}>
                        <Image style={styles.iconeveic} 
                        source={cadastroVeicular} />
                        <Text style={styles.txtVEICULO}>Cadastro Veicular</Text>
                     </TouchableOpacity>
                     
                     <TouchableOpacity style={styles.iconeComunitariaCadastro}>
                        <Image style={styles.iconeveic} 
                        source={cadastroPessoa} />
                        <Text style={styles.txtABORDADO}>Cadastro de Abordado</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.iconeComunitariaCadastro}>
                        <Image 
                        source={cadastroComunitaria} />
                        <Text style={styles.txtCOMUNITARIA}>Cadastro Comerciante</Text>
                     </TouchableOpacity>
                   
                   
               </View>
       </View>

       
       
    );
}