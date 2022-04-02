import React, { useState } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './src/store/reducer'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexPage, {IndexPage2} from './src';



const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
const store = createStore(reducers,compose(applyMiddleware(promise), composeEnhancers),)

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen  options={{headerShown: false}}  name="Home" component={IndexPage} />
          <Stack.Screen options={{headerShown: false}}  name="Details" component={IndexPage2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )

}

export default App;