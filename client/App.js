import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {  createStackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import Interests from './Interests';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toShow: 'interests',
      clientWidth: 0,
      clientHeight: 0
    }

    this.changeView = this.changeView.bind(this);

    // console.log('width', this.state.width)
  }

  componentDidMount() {
    let {height, width} = Dimensions.get('window');
    this.setState({
      clientWidth: width,
      clientHeight: height,
    })
  }

  changeView(newState) {
    this.setState({
      toShow: newState
    })
  }

  loadRender() {
    switch(this.state.toShow) {
      case 'login':
        return <Login
                changeView={this.changeView}
              />
        break;
      case 'register':
        return <Register
                changeView={this.changeView}
                clientWidth={this.state.clientWidth}
              />
        break;
      case 'interests':
        return <Interests
                changeView={this.changeView}
                clientWidth={this.state.clientWidth}
                clientHeight={this.state.clientHeight}
              />
        break;
      default:
        return <Text>SHOW ME</Text>
    }
  }

  render() {
    const toRender = this.loadRender();

    return (
      <View style={styles.container}>
        {toRender}
      </View>
    );
  }
}

// const App = createStackNavigator({
//       Home: { screen: Login },
//       Register: { screen: Register },
//     });

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
