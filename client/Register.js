import React from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';

import NavBar from './NavBar';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circleOneX: new Animated.Value(0),
      circleOneY: new Animated.Value(0),
    }
  }

  componentDidMount() {
    setInterval(() => {
      randOne = Math.floor(Math.Random() * 17) + 2;
      randTwo = Math.floor(Math.Random() * 17) + 2;
      Animated.timing(this.state.circleOneX, {
        toValue: randOne,
        duration: 2000
      })
      Animated.timing(this.state.circleOneY, {
        toValue: randTwo,
        duration: 2000
      })
    }, 2000)
  }

  render() {
    return(
      <View style={styles.container}>
        <NavBar title={'Create Profile'}/>
        <View style={styles.bigCircle}>
          <View style={styles.circle} />
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
    backgroundColor: 'white'
  },
  bigCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#894db2',
    borderColor: '#894db2',
    borderWidth: 1,
    position: 'absolute',
    top: 125,
    left: 80
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    borderColor: '#894db2',
    borderWidth: 1,
    position: 'relative',
    top: 2,
    left: 18
  },

})
