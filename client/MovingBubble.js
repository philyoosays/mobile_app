import React from 'react';
import { Animated, View, Text } from 'react-native';

export default function MovingBubble(props) {
  const randX = Math.floor(Math.random() * props.clientWidth);
  const randY = Math.floor(Math.random() * (props.clientHeight - 85 - (props.clientHeight / 10)) + 85 + (props.clientHeight / 10));
  props.styleObj.big.top = randY;
  if(props.index) {
    props.styleObj.big.left = (randX * Math.ceil(props.index / 6)) - 1;
  }

  props.sendCoordinate({
    xAxis: props.styleObj.big.left,
    yAxis: props.styleObj.big.top
  })
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
