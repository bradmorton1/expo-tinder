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
      <Card title="Blind in Business">

        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
        Services provided:
        </Text>
        <Text>
          Blind in Business help people who are blind or have partial sight back into work.{'\n'}
          {'\n'}
          {'\u2713'} Activities Program{'\n'}
          {'\u2713'} Computer Training & New Technology{'\n'}
          {'\u2713'} Creative{'\n'}
          {'\u2713'} Healthy Living{'\n'}
          {'\u2713'} Lunch Service{'\n'}
        </Text>
      </Card>
      <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 51.512960,
            longitude: -0.098840,
            latitudeDelta: 0.0010,
            longitudeDelta: 0.0010,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 51.512960,
            longitude: -0.098840}}
            title={"Blind in Business"}
            description={"Blind in Business"}
         />
         </MapView>
        </View>
        <View style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            // padding: 16,
        }}>
          <View style={{
            paddingVertical: 3,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }}>
          <Icon
          name='email'
          />
          <Text> Email: info@blindinbusiness.org.uk</Text>
          </View>
          <View style={{
            paddingVertical: 3,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }}>
          <Icon
          name='phone'
          />
          <Text> Phone: 020 7588 1885</Text>
          </View>
          <View style={{
            paddingVertical: 3,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }}>
          <Icon
          name='language'
          />
          <Text> Website: https://www.blindinbusiness.org.uk/</Text>
          </View>
        </View>

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
