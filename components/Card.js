import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 // found from https://stackoverflow.com/a/50318831/6141587


export default class Card extends React.Component {

  renderCard(card, index) {
    var {pic, title, caption} = this.props

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
        onPress={nav}
        featured
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    bottom: 100,

  },
  caption: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
})
