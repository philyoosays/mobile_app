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

  getInterests() {
    let token = TokenService.read();
    fetch('http://localhost:3001/api/interests', {
      body: JSON.stringify({
        secret: HANDSHAKE
      }),
      headers: {
        'content-type': 'application/json',
        'Authentication': `Bearer ${token}`
      },
      method: 'POST'
    })
    .then(response => response.json())
      .then((data) => {
        consolelog('data', data)
        data.interests.forEach((element, index) => {
          element.index = index;
        })
        this.setState({
          suggested: data.interests
        })
        setTimeout(() => {
          console.log('working')
          // this.assignCoordinates()
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
    let hash = {};
    let done = false;
    this.state.suggested.forEach((element, index) => {
      let randX = Math.floor(Math.random() * this.props.clientWidth);
      let randY = Math.floor(Math.random() * this.props.clientHeight);
      while(done === false) {
        for(let keys in hash) {
          if(hash[keys][0] < (randX + (this.props.clientWidth * 0.3))
            || hash[keys][0] > (randX - (this.props.clientWidth * 0.3))) {
            if(hash[keys][1] < (randY + (this.props.clientWidth * 0.3))
              || hash[keys][1] > (randY - (this.props.clientWidth * 0.3))) {
              // X & Y match
              randX = Math.floor(Math.random() * this.props.clientWidth);
              randY = Math.floor(Math.random() * this.props.clientHeight);
            }
          // X matches
          } else {
            // nothing matches
            done = true;
            hash[index] = [randX, randY]
          }
        }
      }
    })

    console.log('hashmap', hash)
  }

  render() {
    const circles = {
      big: {
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
        elevation: 14,
        flex: 1
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

    // const showSuggested = this.state.suggested.map((element, index) => {

    //   let color = element.count >= 500 ? '#00e4a9' : '#894db2';

    //   const randX = Math.floor(Math.random() * this.props.clientWidth);
    //   const randY = Math.floor(Math.random() * this.props.clientHeight);

    //   var suggestedBubbles = {
    //     big: {
    //       ...circles.big,
    //       backgroundColor: color,
    //       borderColor: color,
    //       top: randY,
    //       left: (randX * Math.ceil(index / 6)) - 1
    //     },
    //     small: {
    //       ...circles.small,
    //       borderColor: color
    //     },
    //     text: {
    //       ...circles.text,
    //       color: color
    //     }
    //   }

    //   console.log(index)

    //   return <MovingBubble
    //             key={index}
    //             text={element.label}
    //             styleObj={suggestedBubbles}
    //             pressAction={() => {this.selectInterest(index)}}
    //           />
    // })

    // let color = element.count >= 500 ? '#00e4a9' : '#894db2';

    const randX = Math.floor(Math.random() * this.props.clientWidth);
    const randY = Math.floor(Math.random() * this.props.clientHeight);

    const suggestedBubbleSmall = {
      big: {
        ...circles.big,
        backgroundColor: '#894db2',
        borderColor: '#894db2',
        top: randY,
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
        top: randY,
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

    return(
      <View style={styles.container}>
        <NavBar title={'Select Interests'} />
        <View style={selected}>
          <ScrollView
            horizontal={ true } >
              {showSelected}
          </ScrollView>
        </View>
        <View style={suggested}>
        {/*}  <FlatList
            data={this.state.suggested}
            horizontal={ true }
            renderItem={({ item }) => (
              // randX = Math.floor(Math.random() * this.props.clientWidth);
              // suggestedBubbleBig.big.left = (randX * Math.ceil(item.index / 6)) - 1;
              // suggestedBubbleSmall.big.left = (randX * Math.ceil(item.index / 6) - 1);
              <MovingBubble
                text={item.label}
                index={item.index}
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
