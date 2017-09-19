import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = {
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: 'gainsboro',
    shadowOpacity: 0.2,
    shadowOffset: { width: 20, height: 20 }
  }
}

export default Card;
