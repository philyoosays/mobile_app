import React from 'react';
import { Animated, View, Text } from 'react-native';

export default function MovingBubble(props) {

  if(props.position) {
    props.styleObj.big.top = props.position.yAxis;
    props.styleObj.big.left = props.position.xAxis;
  }

  // let smallBubbleMovement = 11;
  // let smallBubbleMiddle = Math.floor(smallBubbleMovement / 2);



  return(
    <Animated.View style={props.styleObj.big}>
      <Animated.View style={props.styleObj.small}>
        <Text
          style={props.styleObj.text}
          onPress={props.pressAction}
        >{props.text}</Text>
      </Animated.View>
    </Animated.View>
  );
}

