
import React , {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import {createAppContainer, createStackNavigator,createSwitchNavigator} from 'react-navigation';
import { Button } from 'react-native-elements';
import { Directions } from 'react-native-gesture-handler';
import Main from './src/main';
import Main1 from './src/main1';
import Main2 from './src/main2';
import Home from './src/Home';
import Forum from './src/Forum';
import Home1 from './src/Home1';
import Home2 from './src/Home2';
import Content from './src/Content';
import Content1 from './src/Content1';
import Profile from './src/Profile';
import Setting from './src/Setting';
import Logout from './src/Logout';
import ProfileContent from './src/ProfileContent';
import ProfileUser from './src/ProfileUser';
import History from './src/History';
import Info from './src/Info'
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
const HomeStack = createStackNavigator({
    Home : {
        screen : Home,
    },
    Home1 : {
        screen : Home1,
    },
    Home2 : {
        screen : Home2,
    },
},
{
    initiaRouteName : 'Home',
}
);
const AppContentStack = createStackNavigator({
    Home1:{
        screen : Home1,
    },
    Content:{
        screen : Content,
    },
    Content1 :{
        screen: Content1,
    },
},
{
    initiaRouteName : 'Home1'
});
const AppProfileStack = createStackNavigator({
    Content :{
        screen : Content1,
    },
    Profile :{
        screen : Profile,
    },
    Setting :{
        screen : Setting,
    },
    Logout :{
        screen : Logout,
    },
},
{
    initiaRouteName : 'Content'
});
const ProfileStack = createStackNavigator({
    home :{
        screen : Profile,
    },
    ProfileContent :{
        screen : ProfileContent,
    },
    ProfileUser:{
        screen : ProfileUser,
    },
},
{
    initiaRouteName : 'Profile',
});
const infoStack = createStackNavigator({
    Home2 : {
        screen : Home2,
    },
    History : {
        screen : History,
    },
    Info : {
        screen : Info,
    },
},
{
    initiaRouteName : 'Home2',
});
const StackNavigation = createSwitchNavigator(
    {
        App :AppStack,
        HomeApp: HomeStack,
        ContentApp : AppContentStack,
        Profile : AppProfileStack,
        Continue : ProfileStack,
        Info : infoStack,
    },
    {
        initiaRouteName :'App',
    }
);
const AppContainer = createAppContainer(StackNavigation);

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