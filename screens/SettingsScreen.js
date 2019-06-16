import React, { Component } from 'react';
import { Divider, Icon, Text, Button} from 'react-native-elements'
import Layout from '../constants/Layout'
import { Alert, TextInput, View, StyleSheet } from 'react-native';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: '',
      postcode: '',
      cateracts: true,
      glaucoma: true,
      low_vision: true,
      amd: true,
      fatigue: true
    };
  }

  onSave() {
    const { age, postcode } = this.state;

    this.props.navigation.navigate('Home')
  }

  doSomething(button_name) {
    var current_state = this.state
    current_state[button_name] = !this.state[button_name]
    this.setState(current_state)
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 24, padding: 8}}>What are you looking for?</Text>
        <TextInput
          value={this.state.age}
          onChangeText={(age) => this.setState({ age })}
          placeholder={'Age'}
          style={styles.input}
          keyboardType={'numeric'}
        />
        <TextInput
          value={this.state.postcode}
          onChangeText={(postcode) => this.setState({ postcode })}
          placeholder={'Postcode'}
          style={styles.input}
        />
        <Divider style={styles.divider} />
          <Button

          large
          title={'Cateracts'}
          onPress={this.doSomething.bind(this, 'cateracts')}
          buttonStyle={{ marginBottom: 10, height: 50, width: 260, borderRadius: 5, backgroundColor: this.state.cateracts ? "#e1622b" : '#ab4c22'}}          />
          <Button
          large
          title={'Glaucoma'}
          onPress={this.doSomething.bind(this, 'glaucoma')}
          buttonStyle={{ marginBottom: 10, height: 50, width: 260, borderRadius: 5, backgroundColor: "#e1622b", backgroundColor: this.state.glaucoma ? "#e1622b" : '#ab4c22' }}          />
        <Button
        large
          title={'Low vision'}
          onPress={this.doSomething.bind(this, 'low_vision')}
          buttonStyle={{ marginBottom: 10, height: 50, width: 260, borderRadius: 5, backgroundColor: "#e1622b", backgroundColor: this.state.low_vision ? "#e1622b" : '#ab4c22' }}
        />
        <Button
        large
          title={'AMD'}
          onPress={this.doSomething.bind(this, 'amd')}
          buttonStyle={{ marginBottom: 10, height: 50, width: 260, borderRadius: 5, backgroundColor: "#e1622b", backgroundColor: this.state.amd ? "#e1622b" : '#ab4c22' }}        />
        <Button
        large
          title={'Fatigue'}
          onPress={this.doSomething.bind(this, 'fatigue')}
          buttonStyle={{ marginBottom: 10, height: 50, width: 260, borderRadius: 5, backgroundColor: "#e1622b", backgroundColor: this.state.fatigue ? "#e1622b" : '#ab4c22' }}
        />
        <Divider style={styles.divider} />
        <Button
          buttonStyle={{ marginBottom: 10, height: 50, width: 260, borderRadius: 5, borderColor: "#e1622b" }}
          titleStyle={{color: "#e1622b"}}
          large
          type="outline"
          title={'Get Started!'}
          onPress={this.onSave.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
    input: {
      width: 260,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      borderColor: "#e1622b"
    },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
})

export default SettingsScreen
