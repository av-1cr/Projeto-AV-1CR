import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import login from './pages/login';
import escolha from './pages/escolha';
import busca from './pages/busca';
import inicio from './pages/inicio';
import home from './pages/home';
import buscaCidadao from './pages/buscaCidadao';
import buscaVeicular from './pages/buscaVeicular';
import comunitaria from './pages/comunitaria';
import pb from './pages/pb';
//headerShown: false para olcutar o cabeçalho da paginaa

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="login" component={login} /> 
        <AppStack.Screen name="escolha" component={escolha} />      
        <AppStack.Screen name="busca" component={busca} />  
        <AppStack.Screen name="inicio" component={inicio} />
        <AppStack.Screen name="home" component={home} />
        <AppStack.Screen name="buscaCidadao" component={buscaCidadao} />
        <AppStack.Screen name="buscaVeicular" component={buscaVeicular} />
        <AppStack.Screen name="comunitaria" component={comunitaria} />
        <AppStack.Screen name="pb" component={pb} />
      </AppStack.Navigator>
      
    </NavigationContainer>
  );
}

