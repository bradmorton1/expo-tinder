import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { Tile } from 'react-native-elements'
import { HomeScreenPics } from '../constants/Pics'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 // found from https://stackoverflow.com/a/50318831/6141587


// this.props.navigation.navigate('Detail')

class HomeScreen extends React.Component {
  render() {
    console.log(this.props.navigation)
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={this.renderCard.bind(this)}
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={3}
        />
      </SafeAreaView>
    )
  }

  renderCard(card, index) {
    var {pic, title, caption} = card
    return (
      <Tile
        imageSrc={pic}
        imageContainerStyle={styles.imageContainer}
        activeOpacity={0.9}
        title={title}
        titleStyle={styles.title}
        caption={caption}
        captionStyle={styles.caption}
        containerStyle={styles.container}
        onPress={() => this.props.navigation.navigate('Detail')}
        featured
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  imageContainer: {
    width: Layout.window.width - 30,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
    borderRadius: 20,
    overflow: 'hidden', // this does magic
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 30,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
})

export default HomeScreen
