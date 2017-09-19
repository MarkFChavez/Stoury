import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  Image,
  Platform,
  StatusBar
} from 'react-native';
import Card from '../common/Card'
import _ from 'lodash';
import data from '../../../Data.json';

class CatalogScreen extends Component {
  static navigationOptions = {
    title: 'Explore',
    headerStyle: {
      backgroundColor: '#fff'
    }
  }

  setDataSource () {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const placesArray = _.map(data.places, (value, key) => {
      return value
    });

    this.dataSource = ds.cloneWithRows(placesArray);
  }

  constructor (props) {
    super(props);
    this.setDataSource();
  }

  onButtonPress (place) {
    const { navigation } = this.props;

    // go to ItineraryScreen
    navigation.navigate('itinerary', { itinerary: place });
  }

  renderRow (place) {
    const { name, image, author, pricePerPax } = place;
    const { container, imageStyle, textContainerStyle, titleStyle, subtitleStyle } = styles;

    return (
      <Card>
        <TouchableWithoutFeedback onPress={() => this.onButtonPress(place)}>
          <View>
            <Image
              style={imageStyle}
              source={{ uri: image }}
              defaultSource={require('./images/default-placeholder.png')}
            />

            <View style={textContainerStyle}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={titleStyle}>
                {name}
              </Text>

              <Text
                style={subtitleStyle}>
                P{pricePerPax} / PAX
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    )
  }

  render () {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <StatusBar hidden={false} />
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}

const styles = {
  imageStyle: {
    height: 280,
    flex: 1
  },

  textContainerStyle: {
    padding: 10
  },

  titleStyle: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  },

  subtitleStyle: {
    fontSize: 15,
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  }
}

export default CatalogScreen;
