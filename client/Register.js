import React from 'react';
import { StyleSheet, Animated, View, Text, TextInput } from 'react-native';

import NavBar from './NavBar';

import purple_circle from './images/icons/purple_circle.png';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigOneX: new Animated.Value(100),
      bigOneY: new Animated.Value(30),
      bigTwoX: new Animated.Value(10),
      bigTwoY: new Animated.Value(40),
      bigThreeX: new Animated.Value(245),
      bigThreeY: new Animated.Value(-60),
      bigFourX: new Animated.Value(100),
      bigFourY: new Animated.Value(-60),
      bigFiveX: new Animated.Value(230),
      bigFiveY: new Animated.Value(-60),
      bigSixX: new Animated.Value(40),
      bigSixY: new Animated.Value(-120),
      circleOneX: new Animated.Value(1),
      circleOneY: new Animated.Value(1),
      circleTwoX: new Animated.Value(9),
      circleTwoY: new Animated.Value(9),
      circleThreeX: new Animated.Value(1),
      circleThreeY: new Animated.Value(1),
      circleFourX: new Animated.Value(1),
      circleFourY: new Animated.Value(9),
      circleFiveX: new Animated.Value(1),
      circleFiveY: new Animated.Value(1),
      circleSixX: new Animated.Value(0),
      circleSixY: new Animated.Value(5),
      circleOne: '#00e4a9',
      circleTwo: '#00e4a9',
      circleThree: '#00e4a9',
      circleFour: '#00e4a9',
      circleFive: '#00e4a9',
      circleSix: '#00e4a9',
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
      showSix: false,
      fullName: '',
      birthday: '',
      username: '',
      profilePic: '',
      password: ''
    }

  }

  componentDidMount() {

    let smallBubbleMovement = 11;
    let smallBubbleMiddle = Math.floor(smallBubbleMovement / 2);

    setInterval(() => {
      let randOneX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randOneY = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randTwoX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randTwoY = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randThreeX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randThreeY = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randFourX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randFourY = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randFiveX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randFiveY = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randSixX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      let randSixY = Math.floor(Math.random() * (smallBubbleMovement + 1));

      Animated.timing(this.state.circleOneX, {
        toValue: randOneX,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleOneY, {
        toValue: randOneY,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleTwoX, {
        toValue: randTwoX,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleTwoY, {
        toValue: randTwoY,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleThreeX, {
        toValue: randThreeX,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleThreeY, {
        toValue: randThreeY,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleFourX, {
        toValue: randFourX,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleFourY, {
        toValue: randFourY,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleFiveX, {
        toValue: randFiveX,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleFiveY, {
        toValue: randFiveY,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleSixX, {
        toValue: randSixX,
        duration: 2000
      }).start()
      Animated.timing(this.state.circleSixY, {
        toValue: randSixY,
        duration: 2000
      }).start()

      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////

      Animated.timing(this.state.bigOneX, {
        toValue: this.bigBubbleMove(this.state.bigOneX._value, randOneX, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigOneY, {
        toValue: this.bigBubbleMove(this.state.bigOneY._value, randOneY, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigTwoX, {
        toValue: this.bigBubbleMove(this.state.bigTwoX._value, randTwoX, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigTwoY, {
        toValue: this.bigBubbleMove(this.state.bigTwoY._value, randTwoY, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigThreeX, {
        toValue: this.bigBubbleMove(this.state.bigThreeX._value, randThreeX, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigThreeY, {
        toValue: this.bigBubbleMove(this.state.bigThreeY._value, randThreeY, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigFourX, {
        toValue: this.bigBubbleMove(this.state.bigFourX._value, randFourX, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigFourY, {
        toValue: this.bigBubbleMove(this.state.bigFourY._value, randFourY, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigFiveX, {
        toValue: this.bigBubbleMove(this.state.bigFiveX._value, randFiveX, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigFiveY, {
        toValue: this.bigBubbleMove(this.state.bigFiveY._value, randFiveY, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigSixX, {
        toValue: this.bigBubbleMove(this.state.bigSixX._value, randSixX, smallBubbleMiddle),
        duration: 2000
      }).start()
      Animated.timing(this.state.bigSixY, {
        toValue: this.bigBubbleMove(this.state.bigSixY._value, randSixY, smallBubbleMiddle),
        duration: 2000
      }).start()
    }, 2000)
  }

  bigBubbleMove(prevState, random, middle) {
    console.log('random',  random)
    console.log('middle',  middle)
    console.log('prevState', prevState)
    let movement = random - middle;
    movement *= 2;
    let result;
    if(movement >= 0) {
      result = parseInt(prevState) + movement - 1;
      console.log('result', result)
    } else {
      result = parseInt(prevState) + movement;
      console.log('result', result)
    }
    return result;
  }

  render() {

    const circles = {
      big: {
        // width: 120,
        // height: 120,
        width: (this.props.clientWidth/10)*3,
        height: (this.props.clientWidth/10)*3,
        borderRadius: 70,
        borderWidth: 1,
        position: 'relative',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 14
      },
      text: {
        // position: 'absolute',
        // top: 45,
        // left: 12,
        fontSize: 18,
      },
      small: {
        // width: 110,
        // height: 110,
        width: '90%',
        height: '90%',
        borderRadius: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }
    }

    const inputs = {
      borderBottomColor: '#894db2',
      borderBottomWidth: 1,
      width: '90%',
      height: 30,
      fontSize: 16,
      color: '#894db2',
      paddingLeft: 30,
      paddingBottom: 8,
      marginTop: 18,
      marginBottom: 18,
      flex: -1,
    }

    let input = {
      one: {
        ...inputs,
        // bottom: 250,
        display: this.state.showOne ? 'flex' : 'none'
      },
      two: {
        ...inputs,
        // bottom: 185,
        display: this.state.showTwo ? 'flex' : 'none'
      },
      three: {
        ...inputs,
        // bottom: 120,
        display: this.state.showThree ? 'flex' : 'none'
      },
      four: {
        ...inputs,
        // bottom: 55,
        display: this.state.showFour ? 'flex' : 'none'
      },
      five: {
        ...inputs,
        display: this.state.showFive ? 'flex' : 'none'
      },
      six: {
        ...inputs,
        display: this.state.showSix ? 'flex' : 'none'
      }
    }


    let circleOne = {
      big: {
        ...circles.big,
        backgroundColor: this.state.circleOne,
        borderColor: this.state.circleOne,
        top: this.state.bigOneY,
        left: this.state.bigOneX,
        display: this.state.showOne ? 'none' : 'flex'
      },
      small: {
        ...circles.small,
        borderColor: this.state.circleOne,
        top: this.state.circleOneY,
        left: this.state.circleOneX,
        // top: 9,
        // left: 9
      },
      text: {
        ...circles.text,
        color: this.state.circleOne,
        // top: 38,
        // left: 10,

      }
    }

    let circleTwo = {
      big: {
        ...circles.big,
        backgroundColor: this.state.circleTwo,
        borderColor: this.state.circleTwo,
        top: this.state.bigTwoY,
        left: this.state.bigTwoX,
        display: this.state.showTwo ? 'none' : 'flex'
      },
      small: {
        ...circles.small,
        borderColor: this.state.circleTwo,
        top: this.state.circleTwoY,
        left: this.state.circleTwoX,
        // top: 12,
        // left: 12
      },
      text: {
        ...circles.text,
        color: this.state.circleTwo,
        // left: 20
      }
    }

    let circleThree = {
      big: {
        ...circles.big,
        backgroundColor: this.state.circleThree,
        borderColor: this.state.circleThree,
        top: this.state.bigThreeY,
        left: this.state.bigThreeX,
        display: this.state.showThree ? 'none' : 'flex'
      },
      small: {
        ...circles.small,
        borderColor: this.state.circleThree,
        top: this.state.circleThreeY,
        left: this.state.circleThreeX
      },
      text: {
        ...circles.text,
        color: this.state.circleThree,
        // left: 33
      }
    }

    let circleFour = {
      big: {
        ...circles.big,
        backgroundColor: this.state.circleFour,
        borderColor: this.state.circleFour,
        top: this.state.bigFourY,
        left: this.state.bigFourX,
        display: this.state.showFour ? 'none' : 'flex'
      },
      small: {
        ...circles.small,
        borderColor: this.state.circleFour,
        top: this.state.circleFourY,
        left: this.state.circleFourX
      },
      text: {
        ...circles.text,
        color: this.state.circleFour,
        // left: 13
      }
    }

    let circleFive = {
      big: {
        ...circles.big,
        backgroundColor: this.state.circleFive,
        borderColor: this.state.circleFive,
        top: this.state.bigFiveY,
        left: this.state.bigFiveX,
        display: this.state.showFive ? 'none' : 'flex'
      },
      small: {
        ...circles.small,
        borderColor: this.state.circleFive,
        top: this.state.circleFiveY,
        left: this.state.circleFiveX
      },
      text: {
        ...circles.text,
        color: this.state.circleFive,
        // top: 35,
        // top: 30,
        // left: 0,
        textAlign: 'center'
      }
    }

    let circleSix = {
      big: {
        ...circles.big,
        backgroundColor: this.state.circleSix,
        borderColor: this.state.circleSix,
        top: this.state.bigSixY,
        left: this.state.bigSixX,
        display: this.state.showSix ? 'none' : 'flex'
      },
      small: {
        ...circles.small,
        borderColor: this.state.circleSix,
        top: this.state.circleSixY,
        left: this.state.circleSixX
      },
      text: {
        ...circles.text,
        color: this.state.circleSix,
        // left: 14
      }
    }

    return(
      <View style={styles.container}>
        <NavBar title={'Create Profile'}/>
        <View style={styles.inputContainer}>
          <TextInput
            style={input.one}
            textContentType="name"
            onChangeText={text => this.setState({ fullName: text })}
            value={this.state.fullName}
            placeholder="full name"
            placeholderTextColor="#894db2"
          />
          <TextInput
            style={input.two}
            textContentType="none"
            onChangeText={text => this.setState({ birthday: text })}
            value={this.state.birthday}
            placeholder="birthday"
            placeholderTextColor="#894db2"
          />
          <TextInput
            style={input.three}
            textContentType="emailAddress"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            placeholder="email"
            placeholderTextColor="#894db2"
          />
          <TextInput
            style={input.four}
            textContentType="username"
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
            placeholder="username"
            placeholderTextColor="#894db2"
          />
          <TextInput
            style={input.five}
            textContentType="URL"
            onChangeText={text => this.setState({ profilePic: text })}
            value={this.state.profilePic}
            placeholder="profilepic"
            placeholderTextColor="#894db2"
          />
          <TextInput
            style={input.six}
            textContentType="password"
            secureTextEntry= { true }
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholder="password"
            placeholderTextColor="#894db2"
          />
        </View>
        <View style={styles.bubbleContainer}>
          <Animated.View style={circleOne.big}>
            <Animated.View style={circleOne.small}>
              <Text
                style={circleOne.text}
                onPress={() => this.setState({ showOne: true })}
              >Full Name</Text>
            </Animated.View>
          </Animated.View>
          <Animated.View style={circleTwo.big}>
            <Animated.View style={circleTwo.small}>
              <Text
                style={circleTwo.text}
                onPress={() => this.setState({ showTwo: true })}
              >Birthday</Text>
            </Animated.View>
          </Animated.View>
          <Animated.View style={circleThree.big}>
            <Animated.View style={circleThree.small}>
              <Text
                style={circleThree.text}
                onPress={() => this.setState({ showThree: true })}
              >Email</Text>
            </Animated.View>
          </Animated.View>
          <Animated.View style={circleFour.big}>
            <Animated.View style={circleFour.small}>
              <Text
                style={circleFour.text}
                onPress={() => this.setState({ showFour: true })}
              >Username</Text>
            </Animated.View>
          </Animated.View>
          <Animated.View style={circleFive.big}>
            <Animated.View style={circleFive.small}>
              <Text
                style={circleFive.text}
                onPress={() => this.setState({ showFive: true })}
              >Add Profile Picture</Text>
            </Animated.View>
          </Animated.View>
          <Animated.View style={circleSix.big}>
            <Animated.View style={circleSix.small}>
              <Text
                style={circleSix.text}
                onPress={() => this.setState({ showSix: true })}
              >Password</Text>
            </Animated.View>
          </Animated.View>
        </View>
        <View style={styles.lowerContainer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'red',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderColor: 'red',
    // borderWidth: 2,
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    flex: -1,
    // top: 100
  },
  bubbleContainer: {
    // borderColor: 'blue',
    // borderWidth: 2,
    flex: -1,
    width: '100%'
  },
  lowerContainer: {
    flex: -1,
    width: '100%'
  }
})
