import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import FilmList from './src/components/FilmList';

const movieapp = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'IMDB TOP 50'} />
    <FilmList />
  </View>
);
AppRegistry.registerComponent('movieapp', () => movieapp);
