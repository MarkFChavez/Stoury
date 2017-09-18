import React, { Component } from 'react';
import { View, ScrollView, Text, Image, Platform } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import _ from 'lodash';
import data from '../../../Data.json';

class ItineraryScreen extends Component {
  static navigationOptions = {
    title: 'Show',
    headerStyle: { backgroundColor: '#fff' }
  }

  renderTimeline (itinerary) {
    const timelineArray = _.map(itinerary.timeline, (value, key) => {
        return value;
    });

    return (
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Timeline
          data={timelineArray}
          timeContainerStyle={{ minWidth: 72 }}
          innerCircle={'dot'}
        />
      </View>
    )
  }

  render () {
    const { itinerary } = this.props.navigation.state.params;
    const {
      containerStyle,
      imageStyle,
      headerContainerStyle,
      headerStyle,
      detailStyle,
      normalTextStyle,
      aboutHeaderStyle,
      aboutTextStyle
    } = styles;

    return (
      <ScrollView style={containerStyle}>
        <View>
          <Image
            source={{ uri: itinerary.image }}
            style={imageStyle}
          />
        </View>

        <View style={headerContainerStyle}>
          <Text style={headerStyle}> {itinerary.name} </Text>
        </View>

        <View style={detailStyle}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={normalTextStyle}> {itinerary.numberOfPax} PAX </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={normalTextStyle}> P{itinerary.pricePerPax} / PAX </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={normalTextStyle}> {itinerary.numberOfDays}D{itinerary.numberOfNights}N </Text>
          </View>
        </View>

        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={aboutHeaderStyle}> About this Trip </Text>

          <View style={{ marginTop: 10, paddingRight: 20 }}>
            <Text style={aboutTextStyle}> {itinerary.about} </Text>
          </View>
        </View>

        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={aboutHeaderStyle}> Itinerary </Text>
        </View>

        {this.renderTimeline(itinerary)}
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },

  imageStyle: {
    width: undefined,
    height: 400
  },

  detailStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'gainsboro'
  },

  headerContainerStyle: {
    padding: 10
  },

  headerStyle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  },

  normalTextStyle: {
    fontSize: 18,
    fontWeight: '300',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  },

  aboutHeaderStyle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  },

  aboutTextStyle: {
    textAlign: 'justify',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto',
    fontSize: 16
  }
}

export default ItineraryScreen;
