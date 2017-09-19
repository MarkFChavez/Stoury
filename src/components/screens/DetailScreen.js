import React, { Component } from 'react';
import { View, Image } from 'react-native';
import _ from 'lodash';

class DetailScreen extends Component {
  static navigationOptions = {
    header: () => null
  }

  render () {
    const { goBack, state } = this.props.navigation
    const { mountain } = state.params;
    const {
      containerStyle,
      imageStyle,
      backButtonStyle
    } = styles;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={containerStyle}>
          <View>
            <Image
              source={{ uri: mountain.image }}
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
    fontFamily: 'Avenir Next'
  },

  normalTextStyle: {
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Avenir Next'
  },

  aboutHeaderStyle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Avenir Next'
  },

  aboutTextStyle: {
    textAlign: 'justify',
    fontFamily: 'Avenir Next',
    fontSize: 16
  },

  backButtonStyle: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 1
  }
}

export default DetailScreen;
