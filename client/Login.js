import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text, Image } from 'react-native';
import { HANDSHAKE } from 'react-native-dotenv';

import TokenService from './TokenService';

import chadLogo from './images/chad_smiley.png';
import fb from './images/icons/facebook_circle.png';
import twitter from './images/icons/twitter_circle.png';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.tokenCheck()
  }

  async tokenCheck() {
    let token = await TokenService.read() || 'none';
    console.log('token', token)
    if(token !== 'none') {
      fetch('http://localhost:3001/auth/token', {
        body: JSON.stringify({
          secret: HANDSHAKE,
          token: token
        }),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json())
        .then(data => {
          console.log('data: ', data)
          if(data.error) {
            console.log('wtf')
            // window.location.replace('/cpanel/login');
          }
          if(data.payload) {
            this.props.changeView('interests');
          }
        })
      .catch(err => {
        console.log('error')
      })
    }
  }

  async handleLogin() {
    let token = await TokenService.read();
    fetch('http://localhost:3001/auth/login', {
      body: JSON.stringify({
        secret: HANDSHAKE,
        token,
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
      .then(async (token) => {
        await TokenService.save(token);
        this.props.changeView('interests')
      })
      .catch(error => {
        alert('Login Unsuccessful');
      })
  }

  render() {
    // const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.topBanner}>
          {/* <Image
            style={styles.mainLogo}
            source={chadLogo}
          /> */}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            textContentType="username"
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
            placeholder="username"
            placeholderTextColor="#204477"
          />
          <TextInput
            style={styles.inputs}
            textContentType="password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholder="password"
            placeholderTextColor="#204477"
          />
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.loginButton}
            onPress={() => this.handleLogin()}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.socialMedia}>
            <Image
              style={styles.socialIcon}
              source={fb}
            />
            <Image
              style={styles.socialIcon}
              source={twitter}
            />
          </View>
          <Text
            style={styles.bottomText}
            onPress={() => {this.props.changeView('register')}}
          >
            Don't have an account?
          </Text>
          <Text
            style={styles.bottomText}
            onPress={() => {this.props.changeView('register')}}
          >
            SIGN UP
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    flexDirection: 'column',
    backgroundColor: '#00e6a1'
  },
  mainLogo: {
    width: '100%'
  },
  inputs: {
    backgroundColor: 'white',
    width: '90%',
    height: 70,
    marginBottom: 15,
    borderRadius: 7,
    paddingLeft: 15,
    fontSize: 20,
    color: '#204477'
  },
  inputContainer: {
    width: '100%',
    flex: 2,
    alignItems: 'center'
  },
  topBanner: {
    flex: 3,
    width: '110%',
    height: 500,
    backgroundColor: '#733a9b',
    borderRadius: 30000,
    position: 'relative',
    bottom: 50
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: '#733a9b',
    width: '60%',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 50,

  },
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  },
  footerContainer: {
    flex: 2,
    width: '100%',
  },
  forgotPass: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    color: 'white',
    fontSize: 20
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  socialIcon: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  bottomText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }

})
