import React, { Component } from 'react';
import { View, ScrollView, Text, Image, Platform, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import _ from 'lodash';
import data from '../../../Data.json';

class ItineraryScreen extends Component {
  static navigationOptions = {
    header: () => null
  }

  renderTimeline (itinerary) {
    const timelineArray = _.map(itinerary.timeline, (value, key) => {
        return value;
    });

    return (
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={styles.aboutHeaderStyle}> Itinerary </Text>

        <Timeline
          data={timelineArray}
          timeContainerStyle={{ minWidth: 72 }}
          innerCircle={'dot'}
        />
      </View>
    )
  }

  render () {
    const { goBack, state } = this.props.navigation
    const { itinerary } = state.params;
    const {
      containerStyle,
      imageStyle,
      headerContainerStyle,
      headerStyle,
      detailStyle,
      normalTextStyle,
      aboutHeaderStyle,
      aboutTextStyle,
      backButtonStyle
    } = styles;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={containerStyle}>
          <StatusBar hidden />
          <View>
            <Image
              source={{ uri: itinerary.image }}
              style={imageStyle}
            />

            <TouchableWithoutFeedback onPress={() => goBack()}>
              <View style={{ position: 'absolute', top: 20, left: 20, backgroundColor: 'transparent' }}>
                <Text style={backButtonStyle}>
                  &lt;
                </Text>
              </View>
            </TouchableWithoutFeedback>
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

          {/* {this.renderTimeline(itinerary)} */}

          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={aboutHeaderStyle}> Contact Person/s: </Text>

            <View style={{ marginTop: 10, paddingRight: 20 }}>
              <Text style={aboutTextStyle}> Kuya Carding (0917-857-4111) </Text>
              <Text style={aboutTextStyle}> Ate Cherry   (0919-396-3389) </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    paddingBottom: 10
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
  },

  backButtonStyle: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 1
  }
}

export default ItineraryScreen;
