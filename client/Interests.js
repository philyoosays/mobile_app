import React from 'react';
import { StyleSheet, View, ScrollView, List, FlatList, Text } from 'react-native';
import { HANDSHAKE } from 'react-native-dotenv';

import NavBar from './NavBar';
import MovingBubble from './MovingBubble';
import StillBubble from './StillBubble';
import TokenService from './TokenService';

export default class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      suggested: [],
      coordinates: {}
    }

    this.removeSelected = this.removeSelected.bind(this);
    this.selectInterest = this.selectInterest.bind(this);
    this.getInterests = this.getInterests.bind(this);
    this.bubbleCoordinates = this.bubbleCoordinates.bind(this);
    this.assignCoordinates = this.assignCoordinates.bind(this);

  }

  componentDidMount() {
    this.getInterests();
  }

  bubbleCoordinates(object) {
    let prevCoor = this.state.coordinates.slice();
    prevCoor.push(object)
    this.setState({
      coordinates: prevCoor
    })
  }

  removeSelected(key) {
    let collection = this.state.selected;
    let suggested = this.state.suggested;
    let interest = collection.splice(key, 1)
    while(Array.isArray(interest)) {
      interest = interest[0]
    }
    console.log('interest', interest)
    suggested.unshift(interest);
    this.setState({
      selected: collection,
      suggested: suggested
    })
  }

  async getInterests() {
    let token = await TokenService.read();
    fetch('http://localhost:3001/api/interests', {
      body: JSON.stringify({
        secret: HANDSHAKE
      }),
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      method: 'POST'
    })
    .then(response => response.json())
      .then((data) => {
        data.interests.forEach((element, index) => {
          element.index = index;
        })
        this.setState({
          suggested: data.interests
        })
        setTimeout(() => {
          console.log('working')
          this.assignCoordinates()
        }, 100)
        console.log('good to go')
      })
      .catch(error => {
        console.log('thisis not happening')
      })
  }

  selectInterest(key) {
    let interests = this.state.suggested.splice(key, 1);
    let selected = this.state.selected.slice();
    selected.unshift(interests);
    this.setState({
      selected: selected
    })
  }

  assignCoordinates() {

    /* NOTE. The yCoor object infact does have the keys and values reversed
      compared to the xCoor object. This is intentional.
    */
    let xCoor = {};
    let yCoor = {};
    let suggested = this.state.suggested.slice();

    suggested.forEach((element, index) => {
      let done = false;
      let randX = Math.floor(Math.random() * this.props.clientWidth);
      let randY = Math.floor(Math.random() * this.props.clientHeight);
      let bubbleWidth = this.props.clientWidth * 0.3;
      if(Object.keys(xCoor).length === 0) {
        xCoor[randX] = index;
        yCoor[index] = randY;
      } else {
        while(done === false) {
          let redo = false;
          for(let keys in xCoor) {
            if(keys >= (randX - bubbleWidth) && keys <= (randX + bubbleWidth)) {
              let arrIndex = xCoor[keys];
              if(yCoor[arrIndex] >= (randY - bubbleWidth) && yCoor[arrIndex] <= (randY + bubbleWidth)) {
                redo = true;
              }
            }
          }
          if(redo === true) {
            randX = Math.floor(Math.random() * this.props.clientWidth);
            randY = Math.floor(Math.random() * this.props.clientHeight);
          } else {
            xCoor[randX] = index;
            yCoor[index] = randY;
          }
          done = !redo;
        }
      }

      element.xAxis = randX;
      element.yAxis = randY;
    })

    this.setState({
      suggested: suggested
    })
  }

  render() {
    const circles = {
      big: {
        width: (this.props.clientWidth/10)*3,
        height: (this.props.clientWidth/10)*3,
        borderRadius: 70,
        borderWidth: 1,
        position: 'absolute',
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

    const selected = {
      height: (this.props.clientHeight / 6),
      width: '100%',
      borderColor: 'red',
      borderWidth: 1
    }

    const suggested = {
      width: '100%',
      height: '100%',
      borderColor: 'blue',
      borderWidth: 1
    }

    const smallBubbleMovement = 11;

    const showSelected = this.state.selected.map((element, index) => {

      let color = element[0].count >= 500 ? '#00e4a9' : '#894db2';

      // const randX = Math.floor(Math.random() * (smallBubbleMovement + 1));
      // const randY = Math.floor(Math.random() * (smallBubbleMovement + 1));
      var selectedBubbles = {
        big: {
          ...circles.big,
          backgroundColor: color,
          borderColor: color,
          position: 'relative'
        },
        small: {
          ...circles.small,
          borderColor: color
        },
        text: {
          ...circles.text,
          color: color
        }
      }

      return <StillBubble
                key={index}
                text={element[0].label}
                styleObj={selectedBubbles}
                pressAction={() => {this.removeSelected(index)}}
              />
    })

    const suggestedBubbleSmall = {
      big: {
        ...circles.big,
        backgroundColor: '#894db2',
        borderColor: '#894db2',
      },
      small: {
        ...circles.small,
        borderColor: '#894db2'
      },
      text: {
        ...circles.text,
        color: '#894db2'
      }
    }

    const suggestedBubbleBig = {
      big: {
        ...circles.big,
        backgroundColor: '#00e4a9',
        borderColor: '#00e4a9',
      },
      small: {
        ...circles.small,
        borderColor: '#00e4a9'
      },
      text: {
        ...circles.text,
        color: '#00e4a9'
      }
    }

    console.log('suggested', this.state.suggested)

    const showSuggested = this.state.suggested.length > 0 && this.state.suggested[0].hasOwnProperty('xAxis') ?
      this.state.suggested.map((element, index) => {
        return <MovingBubble
                  key={index}
                  text={element.label}
                  index={element.index}
                  position={{ xAxis: element.xAxis, yAxis: element.yAxis }}
                  clientWidth={this.props.clientWidth}
                  clientHeight={this.props.clientHeight}
                  styleObj={parseInt(element.count) >= 500 ? suggestedBubbleBig : suggestedBubbleSmall}
                  pressAction={() => {this.selectInterest(element.id)}}
                />
      }) : '';

    return(
      <View style={ styles.container }>
        <NavBar title={ 'Select Interests' } />
        <View style={selected}>
          <ScrollView
            horizontal={ true } >
              { showSelected }
          </ScrollView>
        </View>
        <View style={ suggested }>
         {/* } <FlatList
            data={this.state.suggested}
            horizontal={ true }
            renderItem={({ item }) => (
              // randX = Math.floor(Math.random() * this.props.clientWidth);
              // suggestedBubbleBig.big.left = (randX * Math.ceil(item.index / 6)) - 1;
              // suggestedBubbleSmall.big.left = (randX * Math.ceil(item.index / 6) - 1);
              <MovingBubble
                text={item.label}
                index={item.index}
                position={{ xAxis: item.xAxis, yAxis: item.yAxis }}
                clientWidth={this.props.clientWidth}
                clientHeight={this.props.clientHeight}
                sendCoordinate={this.bubbleCoordinates}
                styleObj={parseInt(item.count) >= 500 ? suggestedBubbleBig : suggestedBubbleSmall}
                pressAction={() => {this.selectInterest(item.id)}}
              />
              // <Text>
            )}
            keyExtractor={item => item.id}
          /> */}
          <ScrollView
            horizontal={ true } >
              { showSuggested }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    borderColor: 'red',
    flexDirection: 'column',
    backgroundColor: 'white'
  },

})
