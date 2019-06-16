import { Icon } from 'expo'
import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import MessagesScreen from '../screens/MessagesScreen'
import SettingsScreen from '../screens/SettingsScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    headerMode: 'none',
  },
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Find',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="fire"
    />
  ),
}

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    headerMode: 'none',
  },
)

MessagesStack.navigationOptions = {
  tabBarLabel: 'Matches',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="heart" />
  ),
}

const ProfileStack = createStackNavigator(
  {
    Profile: SettingsScreen,
  },
  {
    headerMode: 'none',
  },
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.Feather} focused={focused} name="user" />
  ),
}

export default createBottomTabNavigator({
  ProfileStack,
  HomeStack,
  MessagesStack,
})
