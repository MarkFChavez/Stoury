import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ItineraryScreen extends Component {
  static navigationOptions = {
    title: 'Show',
    headerTitleStyle: { fontFamily: 'Avenir Next' }
  }

  render () {
    return (
      <View>
        <Text> {this.props.navigation.state.params.itinerary.name} </Text>
      </View>
    )
  }
}

export default ItineraryScreen;
