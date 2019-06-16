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
      <Text>Hello Moto</Text>
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
      <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 51.380712,
            longitude: -0.099350,
            latitudeDelta: 0.0010,
            longitudeDelta: 0.0010,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 51.380712,
            longitude: -0.099350}}
            title={"title"}
            description={"description"}
         />
         </MapView>
        </View>
      <Card containerStyle={{marginBottom: 8}} title="Contact">
        <View style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // padding: 16,
        }}>
          <Icon
          name='email'
          />
          <Icon
          name='phone'
          />
        </View>
      </Card>

      <View style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
      }}>
        <Text style={{color: "#555555"}}>Flag this content</Text>
        <Icon name='flag' style={{color: "#555555"}}/>
        </View>

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
