import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Swiper from 'react-native-deck-swiper'
import { HomeScreenPics } from '../constants/Pics'
import MapView from 'react-native-maps'

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Card title="Details">
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
        Services provided:
        </Text>
        <Text>
        {'\u2022'} Activities Program{'\n'}
        {'\u2022'} Computer Training & New Technology{'\n'}
        {'\u2022'} Creative{'\n'}
        {'\u2022'} Healthy Living{'\n'}
        {'\u2022'} Lunch Service{'\n'}
        {'\n'}
        {'\n'}
        </Text>
      </Card>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 51.380712,
          longitude: -0.099350,
          latitudeDelta: 0.0010,
          longitudeDelta: 0.0010,
        }}
      />
      <Card>
      <Icon
      name='email'
      />
      <Icon
      name='phone'
      />
      </Card>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default HomeScreen
