/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import { Button } from 'react-native-elements';
import { Directions } from 'react-native-gesture-handler';
import Main from './src/main'
import Main1 from './src/main1'
import Main2 from './src/main2'
import Home from './src/Home'
import Forum from './src/Forum'

const AppStack = createStackNavigator({
    MainScreen :{
        screen : Main,
    },
    Main1:{
        screen: Main1,
    },
    Main2:{
        screen: Main2,
    },
    Home:{
        screen : Home,
    },
    Forum: {
        screen : Forum,
    }
},
{
    initiaRouteName :'MainScreen',
  }
  );
  const AppContainer = createAppContainer(AppStack);

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
              <View style={styles.container}>
                  <AppContainer/>
              </View>
              
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
   
});