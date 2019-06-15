import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Card>
          title='Contact Us'
          <Text style={{marginBottom: 10}}>
          </Text>
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
