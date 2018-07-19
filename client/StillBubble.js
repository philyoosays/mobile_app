import React from 'react';
import { Animated, View, Text, Image } from 'react-native';

export default function StillBubble(props) {
  return(
    <View style={props.styleObj.big}>
      <Animated.View style={props.styleObj.small}>
        { props.text !== undefined ?
          <Text
            style={props.styleObj.text}
            onPress={props.pressAction}
          >{props.text}</Text> :

          props.imageURL === undefined ? '' :

          (props.imageURL === '') ? '' :
          <Image
            style={props.imageStyle}
            source={{uri: props.imageURL}}
          />
        }
      </Animated.View>
    </View>
  );
}
