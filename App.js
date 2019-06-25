import React from 'react';
// import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AboutScreen from './components/About';
import SearchScreen from './components/Search';
import List from "./components/List";
// import navigationOptions from "./Search";

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


//creation du tab home
const HomeStack=createStackNavigator ({
  Home: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: 'Rechercher une ville',
      headerStyle: {
        backgroundColor: "#a2273c",
      },
      headerTitleStyle: {
        color: "#ffffff"
      }
    }),
  },
  Result: {
    screen: List,
    navigationOptions: ({navigation}) => ({
      title: `Météo /${navigation.state.params.city}`, // ${navigation.state.params.city} {navigation}
      headerStyle: {
        backgroundColor: "#a2273c",
      },
      headerTitleStyle: {
        color: "#ffffff"
      }
    }),
  },
});

//creation du tab a propos de moi
const SettingsStack=createStackNavigator({
  Search: {
    screen: AboutScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#a2273c",
      },
      headerTitleStyle: {
        color: "#ffffff"
      }
    }),
  },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    About: { screen: SettingsStack },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home${focused ? '' : ''}`;
        } else if (routeName === 'About') {
          iconName = `ios-contact${focused ? '' : ''}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: false,

      indicatorStyle: {
        height: 2,
        backgroundColor: "#fff",
      },

      style: {
        backgroundColor: "#a2273c",
        borderTopWidth: 1,
        borderColor: "#3f101c",
      },

      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
  }
))