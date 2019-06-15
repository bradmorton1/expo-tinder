import React from 'react'
import { SafeAreaView, StyleSheet, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

class HomeScreen extends React.Component {
  render() {
    console.log(this.props.navigation)
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={3}
          onSwipedRight={() => this.props.navigation.navigate('Detail')}
        />
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
