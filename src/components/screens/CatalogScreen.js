import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import data from '../../../Data.json';

class CatalogScreen extends Component {
  static navigationOptions = {
    title: 'Explore',
    headerTitleStyle: { fontFamily: 'Avenir Next' }
  }

  setDataSource () {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(data.places);
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
    const { name, image, author } = place;

    return (
      <TouchableWithoutFeedback onPress={() => this.onButtonPress(place)}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />

          <View style={styles.textContainerStyle}>
            <Text style={styles.placeTitle}> {name} </Text>
            <Text style={{ fontFamily: 'Avenir Next', color: 'darkgray' }}> by {author} </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render () {
    return (
      <View>
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
    flex: 1,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
  },

  image: {
    width: undefined,
    height: 300,
    flex: 1
  },

  textContainerStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'flex-start'
  },

  placeTitle: {
    fontSize: 18,
    fontFamily: 'Avenir Next'
  }
}

export default CatalogScreen;
