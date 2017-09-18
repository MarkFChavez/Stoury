import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  Image,
  Platform
} from 'react-native';
import _ from 'lodash';
import data from '../../../Data.json';

class CatalogScreen extends Component {
  static navigationOptions = {
    title: 'Explore',
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: 'midnightblue'
    },
    headerTitleStyle: {
      fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto',
      fontSize: 26,
      fontWeight: '500'
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
    const { container, imageStyle, textContainerStyle, titleStyle } = styles;

    return (
      <View style={container}>
        <TouchableWithoutFeedback onPress={() => this.onButtonPress(place)}>
          <View>
            <Image
              style={imageStyle}
              source={{ uri: image }}
            />

            <View style={textContainerStyle}>
              <Text numberOfLines={1} ellipsizeMode={'tail'} style={titleStyle}> {name} </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render () {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20
  },

  imageStyle: {
    height: 280,
    flex: 1
  },

  textContainerStyle: {
    paddingTop: 5,
    paddingBottom: 5
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  }
}

export default CatalogScreen;
