import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class NavBar extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    elevation: 15
    // position: 'absolute',
    // top: 0
  },
  title: {
    position: 'absolute',
    bottom: 5,
    fontSize: 16
  }
})
