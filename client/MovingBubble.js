import React from 'react';
import { Animated, View, Text } from 'react-native';

export default function MovingBubble(props) {

  let theXAxis = props.position.xAxis;
  // if(props.index > 0) {
  //   theXAxis *= Math.ceil(props.index / 6)
  // }
  props.styleObj.big.top = props.position.yAxis;
  props.styleObj.big.left = theXAxis;
  // console.log('style', props.position)
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

