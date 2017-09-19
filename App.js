import React from 'react';
import { StackNavigator } from 'react-navigation';
import CatalogScreen from './src/components/screens/CatalogScreen';
import DetailScreen from './src/components/screens/DetailScreen';

export default StackNavigator({
  home: { screen: CatalogScreen },
  detail: { screen: DetailScreen }
})
