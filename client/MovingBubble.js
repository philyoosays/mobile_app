import React from 'react';
import { Animated, View, Text } from 'react-native';

export default function MovingBubble(props) {
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
