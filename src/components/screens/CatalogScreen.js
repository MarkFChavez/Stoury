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
    headerStyle: { backgroundColor: '#fff' }
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

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.onButtonPress(place)}>
          <View style={{ padding: 10 }}>
            <Image
              style={styles.image}
              source={{ uri: image }}
            />

            <View style={styles.textContainerStyle}>
              <Text style={styles.titleStyle}> {name} </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#fff'
  },

  image: {
    height: 300,
    flex: 1
  },

  textContainerStyle: {
    paddingTop: 5,
    paddingBottom: 5
  },

  titleStyle: {
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto'
  }
}

export default CatalogScreen;
