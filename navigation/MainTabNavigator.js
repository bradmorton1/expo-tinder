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
import ProfileScreen from '../screens/ProfileScreen'

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
  tabBarLabel: 'Home',
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
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
  ),
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
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
  HomeStack,
  MessagesStack,
  ProfileStack,
})
