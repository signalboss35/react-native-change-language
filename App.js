
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

import I18n from './i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email   : '',
      password: '',
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onClickChange = (value) => {
    I18n.locale = value;
    this.forceUpdate();
  }

  render() {
    const { isEnabled } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder={I18n.t('email')}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder={I18n.t('password')}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>{I18n.t('btn_login')}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>{I18n.t('btn_forgot_password')}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>{I18n.t('btn_register')}</Text>
        </TouchableHighlight>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: '100%', textAlign: 'center'}}>{I18n.t('language_setting')}</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickChange('th')}>
            <Text>ภาษาไทย</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickChange('en')}>
            <Text>ภาษาอังกฤษ</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default App;