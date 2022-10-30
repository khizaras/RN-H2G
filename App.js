

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainPage}   />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;











/* import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';

import firestore from '@react-native-firebase/firestore';


import Icon from 'react-native-vector-icons/MaterialIcons';
import { homePageStyle, primaryColor } from './src/styles';


firestore().useEmulator('localhost', 8080);

const App = () => {

  const [state, setState] = useState({
    isLoaded: false,
    foods: []
  })

  useEffect(() => {

    getFoods().then((foods) => {
      setState({ isLoaded: true, foods })
    })
  }, [])


  getFoods().then((res) => {
    console.log({ res });
  })

  return (
    <View style={homePageStyle.body} >

      <View style={homePageStyle.header}>
        <Icon.Button name="sort" size={30} color={primaryColor} backgroundColor="#fff" />
        <Icon.Button name="person" size={30} color={primaryColor} backgroundColor="#fff" />
      </View>

      <View style={homePageStyle.Row}>
        <Text>Food Loaded {state.isLoaded}</Text>  
        <Text>Food Length {state.foods.length}</Text>  
      </View>


    </View>
  );
};


const getFoods = async () => {
  let result = []
  const food = await firestore().collection('food').get();

  food.docs.forEach((food) => {
    result.push(food.data())
  })

  return result

}

export default App;
 */