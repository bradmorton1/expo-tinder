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
    };
  }
  
  onSave() {
    const { age, postcode } = this.state;

    Alert.alert('Credentials', `${age} + ${postcode}`);
  }

  doSomething() {

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.age}
          onChangeText={(age) => this.setState({ age })}
          placeholder={'Age'}
          style={styles.input}
        />
        <Divider style={styles.divider} />
        <TextInput
          value={this.state.postcode}
          onChangeText={(postcode) => this.setState({ postcode })}
          placeholder={'Postcode'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Divider style={styles.divider} />
          <Button
          large
          title={'Cateracts'}
          onPress={this.doSomething.bind(this)}
          buttonStyle={{ marginBottom: 10,  height: 50, width: 230, borderRadius: 5 }}
          />
          <Button
          large
          title={'Glaucoma'}
          onPress={this.doSomething.bind(this)}
          buttonStyle={{ marginBottom: 10,  height: 50, width: 230, borderRadius: 5 }}
          />
        <Button
        large
          title={'Low vision'}
          onPress={this.doSomething.bind(this)}
          buttonStyle={{ marginBottom: 10, height: 50, width: 230, borderRadius: 5 }}
        />
        <Button
        large
          title={'AMD'}
          onPress={this.doSomething.bind(this)}
          buttonStyle={{ marginBottom: 10, height: 50, width: 230, borderRadius: 5 }}
        />
        <Button
        large
          title={'Fatigue'}
          onPress={this.doSomething.bind(this)}
          buttonStyle={{ marginBottom: 10, height: 50, width: 230, borderRadius: 5 }}
        />
        <Divider style={styles.divider} />
        <Button
        large
          title={'Save'}
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
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
})

export default SettingsScreen
