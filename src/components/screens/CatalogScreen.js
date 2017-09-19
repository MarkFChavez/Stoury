import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import Card from '../common/Card'
import _ from 'lodash';
import data from '../../../Mountains.json';

class CatalogScreen extends Component {
  static navigationOptions = {
    title: '△ BUNDOK.PH',
    headerStyle: { backgroundColor: '#fff' },
    headerTitleStyle: {
      fontWeight: '400',
      fontFamily: 'Avenir Next',
      letterSpacing: 1
    }
  }

  setDataSource () {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const mountainsArray = _.map(data.mountains, (value, key) => {
      return { ...value, name: key }
    });

    this.dataSource = ds.cloneWithRows(mountainsArray);
  }

  constructor (props) {
    super(props);
    this.setDataSource();
  }

  onButtonPress (mountain) {
    const { navigation } = this.props;

    // go to ItineraryScreen
    // navigation.navigate('itinerary', { itinerary: mountain });
  }

  renderRow (mountain) {
    const { name, location, image, masl  } = mountain;
    const { container, imageStyle, textContainerStyle, titleStyle, subtitleStyle } = styles;

    return (
      <Card>
        <TouchableWithoutFeedback onPress={() => this.onButtonPress(mountain)}>
          <View>
            <Image
              style={imageStyle}
              source={{ uri: image }}
              defaultSource={require('./images/default-placeholder.png')}
            />

            <View style={textContainerStyle}>
              <Text style={titleStyle}> {name} </Text>
              <Text style={subtitleStyle}> {location} • {masl} MASL </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Card>
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
  imageStyle: {
    height: 280,
    flex: 1
  },

  textContainerStyle: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  },

  titleStyle: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Avenir Next'
  },

  subtitleStyle: {
    alignSelf: 'flex-start',
    fontSize: 15,
    fontFamily: 'Avenir Next'
  }
}

export default CatalogScreen;
